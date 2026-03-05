<template>
  <!--
    AboutSection — Two-column about layout with typewriter animation
    Left: bio, description, contribution graphs
    Right: photo, info cards, tech stacks, resume
    All text sections type simultaneously on page load
  -->
  <section id="about" class="py-24 px-6 lg:px-0">
    <div class="max-w-5xl mx-auto w-full">
      <!-- Two Column Layout -->
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">

        <!-- Left Column -->
        <div class="flex-1 min-w-0">
          <!-- Section Label -->
          <p class="text-term-label font-mono text-sm mb-2">
            <LetterReveal text="About" :delay="START" :stagger="35" />
          </p>

          <!-- Name -->
          <h2 class="text-2xl lg:text-3xl font-mono font-bold text-term-text mb-8">
            <LetterReveal text="Fauzi M" :delay="START" :stagger="50" />
            <span class="cursor-blink text-term-muted">|</span>
          </h2>

          <!-- Experienced As -->
          <p class="text-term-label font-mono text-sm mb-1">
            <LetterReveal text="Experienced as" :delay="START" :stagger="25" />
          </p>
          <p class="font-mono text-base lg:text-lg font-bold text-term-text mb-6">
            <LetterReveal text="Frontend-focused Full-stack Engineer" :delay="START" :stagger="15" />
            <span class="cursor-blink-2 text-term-muted">|</span>
          </p>

          <!-- Description Paragraphs -->
          <div class="font-mono text-sm text-term-text leading-relaxed space-y-4 mb-10">
            <p v-for="(line, i) in descriptionLines" :key="i">
              <LetterReveal
                :text="line"
                :delay="cumDelay(descriptionLines, i, START, STAGGER)"
                :stagger="STAGGER"
              />
            </p>
          </div>

          <!-- My Contributions -->
          <div
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { duration: 600, delay: 1200 } }"
          >
            <p class="text-term-label font-mono text-sm mb-4">
              <LetterReveal text="My contributions" :delay="START" :stagger="20" />
            </p>

            <!-- GitHub Contribution Graph -->
            <div class="mb-6">
              <p class="font-mono text-sm font-bold text-term-text mb-3">
                <LetterReveal text="GitHub" :delay="START" :stagger="30" />
              </p>
              <div class="bg-base-card rounded-lg p-4 border border-base-border overflow-x-auto">
                <!-- GitHub Contribution Grid -->
                <div class="contribution-grid">
                  <div
                    v-for="(week, wIndex) in githubContributions"
                    :key="'gh-w-' + wIndex"
                    class="contribution-column"
                  >
                    <div
                      v-for="(day, dIndex) in week"
                      :key="'gh-d-' + dIndex"
                      class="contribution-cell"
                      :class="getContributionClass(day)"
                      :title="`${day} contributions`"
                    />
                  </div>
                </div>
                <div class="flex justify-between items-center mt-3">
                  <span class="font-mono text-xs text-term-muted">{{ totalGithubContribs }} contributions in the last year</span>
                  <div class="flex items-center gap-1">
                    <span class="font-mono text-xs text-term-muted">Less</span>
                    <div class="contribution-cell level-0" />
                    <div class="contribution-cell level-1" />
                    <div class="contribution-cell level-2" />
                    <div class="contribution-cell level-3" />
                    <div class="contribution-cell level-4" />
                    <span class="font-mono text-xs text-term-muted">More</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- GitLab Contribution Graph -->
            <div>
              <p class="font-mono text-sm font-bold text-term-text mb-3">
                <LetterReveal text="GitLab" :delay="START" :stagger="30" />
              </p>
              <div class="bg-base-card rounded-lg p-4 border border-base-border overflow-x-auto">
                <div class="contribution-grid">
                  <div
                    v-for="(week, wIndex) in gitlabContributions"
                    :key="'gl-w-' + wIndex"
                    class="contribution-column"
                  >
                    <div
                      v-for="(day, dIndex) in week"
                      :key="'gl-d-' + dIndex"
                      class="contribution-cell"
                      :class="getContributionClass(day)"
                      :title="`${day} contributions`"
                    />
                  </div>
                </div>
                <div class="flex justify-between items-center mt-3">
                  <span class="font-mono text-xs text-term-muted">{{ totalGitlabContribs }} contributions in the last year</span>
                  <div class="flex items-center gap-1">
                    <span class="font-mono text-xs text-term-muted">Less</span>
                    <div class="contribution-cell level-0" />
                    <div class="contribution-cell level-1" />
                    <div class="contribution-cell level-2" />
                    <div class="contribution-cell level-3" />
                    <div class="contribution-cell level-4" />
                    <span class="font-mono text-xs text-term-muted">More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 500, delay: 300 } }"
          class="lg:w-72 xl:w-80 shrink-0"
        >
          <!-- Profile Photo -->
          <div class="mb-8">
            <div class="w-full aspect-[4/5] rounded-lg overflow-hidden border-2 border-base-border bg-base-card">
              <img
                src="/assets/images/profile.jpeg"
                alt="Profile photo"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Info Cards -->
          <div class="space-y-5 mb-8">
            <!-- Currently working as -->
            <div>
              <p class="text-term-label font-mono text-xs mb-0.5">
                <LetterReveal text="Currently working as" :delay="START" :stagger="18" />
              </p>
              <p class="font-mono text-sm font-bold text-term-text">
                <LetterReveal text="Software Engineer" :delay="START" :stagger="20" />
              </p>
            </div>

            <!-- Employed at -->
            <div>
              <p class="text-term-label font-mono text-xs mb-0.5">
                <LetterReveal text="Employed at" :delay="START" :stagger="18" />
              </p>
              <p class="font-mono text-sm font-bold text-term-text">
                <LetterReveal text="Agensi Pekerjaan Ajobthing Sdn Bhd" :delay="START" :stagger="12" />
              </p>
            </div>

            <!-- Based in -->
            <div>
              <p class="text-term-label font-mono text-xs mb-0.5">
                <LetterReveal text="Based in" :delay="START" :stagger="18" />
              </p>
              <p class="font-mono text-sm font-bold text-term-text">
                <LetterReveal text="Tangerang, Banten, Indonesia" :delay="START" :stagger="15" />
              </p>
            </div>
          </div>

          <!-- Tech Stacks -->
          <div class="mb-8">
            <p class="text-term-label font-mono text-xs mb-3">
              <LetterReveal text="Tech Stacks" :delay="START" :stagger="25" />
            </p>
            <div class="flex flex-wrap gap-2">
              <div
                v-for="tech in techStacks"
                :key="tech.name"
                class="w-9 h-9 rounded-lg bg-base-card border border-base-border flex items-center justify-center"
                :title="tech.name"
              >
                <span class="text-lg">{{ tech.icon }}</span>
              </div>
            </div>
          </div>

          <!-- Resume -->
          <div>
            <p class="text-term-label font-mono text-xs mb-0.5">
              <LetterReveal text="Read my resume" :delay="START" :stagger="20" />
            </p>
            <a
              href="#"
              class="font-mono text-sm font-bold text-term-text term-link hover:text-term-label"
            >
              <LetterReveal text="Download Here" :delay="START" :stagger="25" />
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const START = 200
const STAGGER = 8 // fast stagger for long paragraphs

const descriptionLines = [
  'I build structured, performant web applications with React and Next.js, focusing on clean architecture and scalable systems.',
  'Started with simple university projects in 2020, I gradually expanded into full-stack development — designing APIs, managing databases, and thinking in modular systems.',
  'Beyond web applications, I also design and maintain custom real-time server systems using FiveM and Lua, strengthening my understanding of concurrency, state management, and performance-aware engineering.',
  'I value clarity, structure, and long-term maintainability in everything I build.',
]

// Cumulative delay helper
function cumDelay(lines: string[], lineIndex: number, baseDelay: number, stagger: number): number {
  let totalChars = 0
  for (let i = 0; i < lineIndex; i++) {
    totalChars += lines[i]!.length
  }
  return baseDelay + totalChars * stagger
}

// Generate random contribution data
const generateContributions = (weeks: number, intensity: number = 1) => {
  const data: number[][] = []
  for (let w = 0; w < weeks; w++) {
    const week: number[] = []
    for (let d = 0; d < 7; d++) {
      const rand = Math.random()
      if (rand < 0.3) week.push(0)
      else if (rand < 0.5) week.push(Math.ceil(Math.random() * 3 * intensity))
      else if (rand < 0.75) week.push(Math.ceil(Math.random() * 6 * intensity))
      else if (rand < 0.9) week.push(Math.ceil(Math.random() * 10 * intensity))
      else week.push(Math.ceil(Math.random() * 20 * intensity))
    }
    data.push(week)
  }
  return data
}

const githubContributions = generateContributions(52)
const gitlabContributions = generateContributions(52, 1.5)

const totalGithubContribs = computed(() =>
  githubContributions.reduce((sum, week) => sum + week.reduce((s, d) => s + d, 0), 0)
)

const totalGitlabContribs = computed(() =>
  gitlabContributions.reduce((sum, week) => sum + week.reduce((s, d) => s + d, 0), 0)
)

const getContributionClass = (count: number): string => {
  if (count === 0) return 'level-0'
  if (count <= 3) return 'level-1'
  if (count <= 6) return 'level-2'
  if (count <= 10) return 'level-3'
  return 'level-4'
}

const techStacks = [
  { name: 'Vue.js', icon: '🟢' },
  { name: 'Nuxt', icon: '💚' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Django', icon: '🐍' },
  { name: 'Laravel', icon: '🔴' },
  { name: 'Tailwind CSS', icon: '🌊' },
  { name: 'Bootstrap', icon: '🅱️' },
  { name: 'Node.js', icon: '💻' },
  { name: 'Svelte', icon: '🔥' },
  { name: 'Git', icon: '🔀' },
  { name: 'Flutter', icon: '🦋' },
]
</script>

<style scoped>
/* Contribution Grid Styles */
.contribution-grid {
  display: flex;
  gap: 3px;
}

.contribution-column {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.contribution-cell {
  width: 11px;
  height: 11px;
  border-radius: 2px;
}

.level-0 {
  background-color: #1e2a3a;
}

.level-1 {
  background-color: #2a4a5a;
}

.level-2 {
  background-color: #3a6a7a;
}

.level-3 {
  background-color: #4a8a9a;
}

.level-4 {
  background-color: #4dc9b0;
}
</style>
