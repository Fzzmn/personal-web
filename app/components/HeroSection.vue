<template>
  <!--
    HeroSection — Terminal-style greeting with typewriter effect on main greeting
    All other texts appear simultaneously with Text Scramble (ASCII decode)
  -->
  <section id="home" class="relative flex-1 min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 lg:px-0">
    <!-- Terminal Dots Grid: 6 dots in 2x3 arrangement at top-left, aligned with navbar -->
    <div class="fixed left-6 lg:left-10 top-7 lg:top-8 z-40 pointer-events-none">
      <div class="grid grid-cols-3 gap-2 w-fit">
        <div class="w-2.5 h-2.5 rounded-full bg-term-dot-green opacity-80" />
        <div class="w-2.5 h-2.5 rounded-full bg-term-dot-green opacity-80" />
        <div class="w-2.5 h-2.5 rounded-full bg-term-dot-green opacity-80" />
        <div class="w-2.5 h-2.5 rounded-full bg-term-dot-blue opacity-80" />
        <div class="w-2.5 h-2.5 rounded-full bg-term-dot-blue opacity-80" />
        <div class="w-2.5 h-2.5 rounded-full bg-term-dot-blue opacity-80" />
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-2xl mx-auto w-full pt-28">
      <!-- Greeting Title: Looping typewriter with vertical blinking cursor '|' -->
      <h1 class="text-2xl lg:text-3xl font-mono font-bold text-term-text mb-12">
        <span class="typewriter-text">{{ displayedText }}</span>
        <span class="cursor-blink text-term-muted">|</span>
      </h1>

      <!-- Greetings -->
      <div class="flex gap-8 mb-8">
        <span class="text-term-label font-mono text-sm shrink-0 pt-0.5">
          <TextScramble text="Greetings." :duration="650" />
        </span>
        <div class="font-mono text-sm text-term-text leading-relaxed space-y-2">
          <p v-for="(line, i) in greetingLines" :key="i">
            <TextScramble :text="line" :duration="750" />
          </p>
        </div>
      </div>

      <!-- Status -->
      <div class="flex gap-8 mb-10">
        <span class="text-term-label font-mono text-sm shrink-0 pt-0.5">
          <TextScramble text="Status." :duration="650" />
        </span>
        <div class="font-mono text-sm text-term-text leading-relaxed space-y-2">
          <p v-for="(line, i) in statusLines" :key="i">
            <TextScramble :text="line" :duration="750" />
          </p>
          <NuxtLink
            to="/contact"
            class="term-link text-term-text hover:text-term-label font-semibold inline-block pt-1"
          >
            <TextScramble text="Contact Me Now!" :duration="700" />
          </NuxtLink>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import TextScramble from './TextScramble.vue'

// ── Typewriter cycle for greeting ──
const greetingPhrases = ['Hello everyone!', 'Hello guys!', 'Hello world!']
const displayedText = ref('')
let typewriterTimer: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
  let phraseIndex = 0
  let charIndex = 0
  let isDeleting = false
  const TYPING_SPEED = 50       // ms per character when typing
  const DELETING_SPEED = 30     // ms per character when deleting
  const PAUSE_AFTER_TYPE = 1300 // ms to wait after typing full phrase
  const PAUSE_AFTER_DELETE = 350// ms to wait before typing next phrase

  function tick() {
    const currentPhrase = greetingPhrases[phraseIndex]!
    const prefix = 'Hello '

    if (!isDeleting) {
      charIndex++
      displayedText.value = currentPhrase.slice(0, charIndex)

      if (charIndex === currentPhrase.length) {
        isDeleting = true
        typewriterTimer = setTimeout(tick, PAUSE_AFTER_TYPE)
      } else {
        typewriterTimer = setTimeout(tick, TYPING_SPEED)
      }
    } else {
      charIndex--
      displayedText.value = currentPhrase.slice(0, charIndex)

      if (charIndex === prefix.length) {
        isDeleting = false
        phraseIndex = (phraseIndex + 1) % greetingPhrases.length
        typewriterTimer = setTimeout(tick, PAUSE_AFTER_DELETE)
      } else {
        typewriterTimer = setTimeout(tick, DELETING_SPEED)
      }
    }
  }

  typewriterTimer = setTimeout(tick, 200)
})

onUnmounted(() => {
  if (typewriterTimer) clearTimeout(typewriterTimer)
})

const greetingLines = [
  'Informatics Engineering graduate with hands-on experience in mobile and web application development through enterprise and government-related projects.',
  'Experienced in developing cross-platform mobile applications using Flutter, integrating RESTful APIs, and building scalable and maintainable applications.',
  'Also experienced in web development, database management, and technical support through internship projects.',
]

const statusLines = [
  'Open to opportunities — Full-time, contract, or freelance.',
  'Available for new opportunities.',
]
</script>
