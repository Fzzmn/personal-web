<template>
  <!--
    HeroSection — Terminal-style greeting with typewriter effect
    All sections start typing simultaneously on page load
    Within each section, lines flow continuously
  -->
  <section id="home" class="relative min-h-screen flex flex-col justify-center px-6 lg:px-0">
    <!-- Terminal Dots (left side) -->
    <div class="fixed left-6 lg:left-10 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-40">
      <div class="w-2.5 h-2.5 rounded-full bg-term-dot-green opacity-80" />
      <div class="w-2.5 h-2.5 rounded-full bg-term-dot-green opacity-80" />
      <div class="w-2.5 h-2.5 rounded-full bg-term-dot-blue opacity-80" />
      <div class="w-2.5 h-2.5 rounded-full bg-term-dot-blue opacity-80" />
    </div>

    <!-- Main Content -->
    <div class="max-w-2xl mx-auto w-full pt-28">
      <!-- Greeting Title -->
      <h1 class="text-2xl lg:text-3xl font-mono font-bold text-term-text mb-12">
        <span class="typewriter-text">{{ displayedText }}</span>
        <span class="cursor-blink text-term-muted">_</span>
      </h1>

      <!-- Greetings -->
      <div class="flex gap-8 mb-8">
        <span class="text-term-label font-mono text-sm shrink-0 pt-0.5">
          <LetterReveal text="Greetings." :delay="START" :stagger="30" />
        </span>
        <div class="font-mono text-sm text-term-text leading-relaxed">
          <p v-for="(line, i) in greetingLines" :key="i">
            <LetterReveal
              :text="line"
              :delay="cumDelay(greetingLines, i, START, STAGGER)"
              :stagger="STAGGER"
            />
          </p>
        </div>
      </div>

      <!-- Status -->
      <div class="flex gap-8 mb-10">
        <span class="text-term-label font-mono text-sm shrink-0 pt-0.5">
          <LetterReveal text="Status." :delay="START" :stagger="30" />
        </span>
        <div class="font-mono text-sm text-term-text leading-relaxed">
          <p v-for="(line, i) in statusLines" :key="i">
            <LetterReveal
              :text="line"
              :delay="cumDelay(statusLines, i, START, STAGGER)"
              :stagger="STAGGER"
            />
          </p>
          <NuxtLink
            to="/contact"
            class="term-link text-term-text hover:text-term-label font-semibold inline-block"
          >
            <LetterReveal text="Contact Me Now!" :delay="contactStart" :stagger="25" />
          </NuxtLink>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const START = 200   // everything starts at the same time
const STAGGER = 10  // ms between chars for paragraph text

// ── Typewriter cycle for greeting ──
const greetingPhrases = ['Hello world!', 'Hello everyone!', 'Hello guys!']
const displayedText = ref('')
let typewriterTimer: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
  let phraseIndex = 0
  let charIndex = 0
  let isDeleting = false
  const TYPING_SPEED = 50    // ms per character when typing
  const DELETING_SPEED = 30   // ms per character when deleting
  const PAUSE_AFTER_TYPE = 1200  // ms to wait after typing a full phrase
  const PAUSE_AFTER_DELETE = 300 // ms to wait after deleting before next phrase

  function tick() {
    const currentPhrase = greetingPhrases[phraseIndex]!
    const prefix = 'Hello '

    if (!isDeleting) {
      // Typing
      charIndex++
      displayedText.value = currentPhrase.slice(0, charIndex)

      if (charIndex === currentPhrase.length) {
        // Full phrase typed — pause, then start deleting
        isDeleting = true
        typewriterTimer = setTimeout(tick, PAUSE_AFTER_TYPE)
      } else {
        typewriterTimer = setTimeout(tick, TYPING_SPEED)
      }
    } else {
      // Deleting
      charIndex--
      displayedText.value = currentPhrase.slice(0, charIndex)

      if (charIndex === prefix.length) {
        // Deleted back to prefix — move to next phrase
        isDeleting = false
        phraseIndex = (phraseIndex + 1) % greetingPhrases.length
        typewriterTimer = setTimeout(tick, PAUSE_AFTER_DELETE)
      } else {
        typewriterTimer = setTimeout(tick, DELETING_SPEED)
      }
    }
  }

  // Start after the initial delay so it feels like the rest of the page
  typewriterTimer = setTimeout(tick, START)
})

onUnmounted(() => {
  if (typewriterTimer) clearTimeout(typewriterTimer)
})

const greetingLines = [
  'I build structured, performant mobile & web applications with Flutter.',
  'Currently focused on enterprise-grade systems and scalable application architecture.',
  'From clean interfaces to production-ready mobile solutions.',
]

const statusLines = [
  'Open for remote work worldwide — full-time, contract, or freelance.',
]

// Line N starts after all chars of lines 0..N-1 have appeared
function cumDelay(lines: string[], lineIndex: number, baseDelay: number, stagger: number): number {
  let totalChars = 0
  for (let i = 0; i < lineIndex; i++) {
    totalChars += lines[i]!.length
  }
  return baseDelay + totalChars * stagger
}

// "Contact Me Now!" starts after status text finishes
const contactStart = (() => {
  const totalChars = statusLines.reduce((sum, line) => sum + line.length, 0)
  return START + totalChars * STAGGER
})()
</script>

