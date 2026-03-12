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
            <LetterReveal text="Fauziman" :delay="START" :stagger="50" />
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

          <!-- Description Paragraphs (all start simultaneously) -->
          <div class="font-mono text-sm text-term-text leading-relaxed space-y-4 mb-10">
            <p v-for="(line, i) in descriptionLines" :key="i">
              <LetterReveal
                :text="line"
                :delay="START"
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
                <!-- Month Labels -->
                <div class="flex gap-[3px] mb-2 pl-1">
                  <div v-for="month in monthLabels" :key="month.key" :style="{ width: month.width + 'px' }" class="font-mono text-[10px] text-term-muted">
                    {{ month.name }}
                  </div>
                </div>
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
                      :class="getContributionClass(day.level)"
                      :title="`${day.count} contributions on ${day.date}`"
                    />
                  </div>
                </div>
                <div class="flex justify-between items-center mt-3">
                  <span class="font-mono text-xs text-term-muted">{{ totalGithubContribs }} contributions in the last year</span>
                  <div class="flex items-center gap-1">
                    <span class="font-mono text-xs text-term-muted">Less</span>
                    <div class="contribution-cell level-NONE" />
                    <div class="contribution-cell level-FIRST_QUARTILE" />
                    <div class="contribution-cell level-SECOND_QUARTILE" />
                    <div class="contribution-cell level-THIRD_QUARTILE" />
                    <div class="contribution-cell level-FOURTH_QUARTILE" />
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
                <LetterReveal text="IT Development - Enterprise Technology Planning & IT Operations" :delay="START" :stagger="10" />
              </p>
            </div>

            <!-- Employed at -->
            <div>
              <p class="text-term-label font-mono text-xs mb-0.5">
                <LetterReveal text="Employed at" :delay="START" :stagger="18" />
              </p>
              <p class="font-mono text-sm font-bold text-term-text">
                <LetterReveal text="AirNav Indonesia" :delay="START" :stagger="15" />
              </p>
            </div>

            <!-- Based in -->
            <div>
              <p class="text-term-label font-mono text-xs mb-0.5">
                <LetterReveal text="Based in" :delay="START" :stagger="18" />
              </p>
              <p class="font-mono text-sm font-bold text-term-text">
                <LetterReveal text="Jakarta, Indonesia" :delay="START" :stagger="15" />
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
  'I build structured, performant mobile and web applications using Flutter and modern web technologies, focusing on clean architecture, maintainable code, and scalable systems.',
  'Started with simple projects during my learning journey, I gradually expanded into full-stack development — designing APIs, integrating backend services, and building modular applications that are reliable and easy to maintain.',
  'Beyond mobile development, I also build web applications and work with system integrations, strengthening my understanding of application architecture, performance optimization, and real-world product development.',
  'I value clarity, structured code, and long-term maintainability in every system I build.',
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
const generatePlaceholder = (weeks: number) => {
  const data: any[][] = []
  for (let w = 0; w < weeks; w++) {
    const week: any[] = []
    for (let d = 0; d < 7; d++) {
      week.push({ count: 0, level: 'NONE', date: '' })
    }
    data.push(week)
  }
  return data
}

const githubContributions = ref<any[][]>(generatePlaceholder(52))
const gitlabContributions = ref<any[][]>(generatePlaceholder(52))
const monthLabels = ref<{ name: string; key: string; width: number }[]>([])

onMounted(async () => {
  // Fetch GitHub Contributions
  try {
    const res = await fetch('https://github-contributions-api.deno.dev/Fzzmn.json?flat=true')
    const data = await res.json()
    if (data && data.contributions) {
      const weeks: any[][] = []
      const months: { name: string; key: string; index: number }[] = []
      
      const raw = data.contributions
      for (let i = 0; i < raw.length; i += 7) {
        const chunk = raw.slice(i, i + 7)
        const weekData = chunk.map((c: any) => ({
          count: c.contributionCount,
          level: c.contributionLevel,
          date: c.date
        }))
        weeks.push(weekData)
        
        // Month Label Logic
        const firstDay = weekData[0]
        if (firstDay && firstDay.date) {
          const date = new Date(firstDay.date)
          const monthName = date.toLocaleString('default', { month: 'short' })
          const lastMonth = months[months.length - 1]
          if (months.length === 0 || (lastMonth && lastMonth.name !== monthName)) {
            months.push({ name: monthName, key: firstDay.date, index: weeks.length - 1 })
          }
        }
      }
      
      githubContributions.value = weeks.slice(-52)
      
      // Calculate widths for month labels (9px cell + 2px gap = 11px total per week)
      monthLabels.value = months.slice(-12).map((m, i, arr) => {
        const currentMonth = arr[i]
        const nextMonth = arr[i + 1]
        const nextIndex = nextMonth ? nextMonth.index : weeks.length
        return {
          name: currentMonth ? currentMonth.name : '',
          key: currentMonth ? currentMonth.key : String(i),
          width: (nextIndex - (currentMonth ? currentMonth.index : 0)) * 11
        }
      })
    }
  } catch (e) {
    console.error('Failed to fetch github contributions', e)
  }
})

const totalGithubContribs = computed(() =>
  githubContributions.value.reduce((sum, week) => sum + week.reduce((s, d) => s + (d.count || 0), 0), 0)
)

const totalGitlabContribs = computed(() =>
  gitlabContributions.value.reduce((sum, week) => sum + week.reduce((s, d) => s + (d.count || 0), 0), 0)
)

const getContributionClass = (level: string): string => {
  return `level-${level || 'NONE'}`
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
  gap: 2px;
}

.contribution-column {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contribution-cell {
  width: 9px;
  height: 9px;
  border-radius: 2px;
}

.level-NONE {
  background-color: #161b22;
}

.level-FIRST_QUARTILE {
  background-color: #0e4429;
}

.level-SECOND_QUARTILE {
  background-color: #006d32;
}

.level-THIRD_QUARTILE {
  background-color: #26a641;
}

.level-FOURTH_QUARTILE {
  background-color: #ebedf0;
}
</style>
