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
        <LetterReveal text="Hello Every" :delay="START" :stagger="45" />
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

      <!-- Blogs / Articles -->
      <div class="flex gap-8">
        <span class="text-term-label font-mono text-sm shrink-0 pt-0.5">
          <LetterReveal text="Blogs." :delay="START" :stagger="30" />
        </span>
        <div class="font-mono text-sm space-y-2">
          <div v-for="(blog, index) in blogs" :key="blog.title" class="flex gap-3">
            <span class="text-term-muted">
              <LetterReveal
                :text="String(index + 1).padStart(2, '0') + '.'"
                :delay="blogItemDelay(index)"
                :stagger="25"
              />
            </span>
            <a
              :href="blog.url"
              target="_blank"
              rel="noopener noreferrer"
              class="term-link text-term-text hover:text-term-label"
            >
              <LetterReveal
                :text="blog.title"
                :delay="blogItemDelay(index)"
                :stagger="8"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const START = 200   // everything starts at the same time
const STAGGER = 10  // ms between chars for paragraph text

const greetingLines = [
  'I engineer structured web systems with React and Next.js, and build',
  'real-time server infrastructure using Lua and FiveM.',
  'From clean interfaces to scalable game server architecture.',
]

const statusLines = [
  'Open for remote work worldwide — full-time, contract, or freelance.',
]

const blogs = [
  { title: 'How I Use AI as My Technical Team', url: '#' },
  { title: 'Thinking in Constraints: The Skill That Changed My Engineering Car...', url: '#' },
  { title: 'Why I Separate Development and Production — Even for a Game Server', url: '#' },
  { title: 'Stop Learning Frameworks, Start Learning Systems.', url: '#' },
  { title: 'Growing New Branches from the Same Root', url: '#' },
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

// Each blog item flows after the previous
function blogItemDelay(index: number): number {
  let delay = START
  for (let i = 0; i < index; i++) {
    delay += 3 * 25 + blogs[i]!.title.length * 8
  }
  return delay
}
</script>

