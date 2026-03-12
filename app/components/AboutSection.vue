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

          <!-- Tech Stacks (Icon Grid Style) -->
          <div class="mb-12">
            <p class="text-term-label font-mono text-xs mb-6">
              <LetterReveal text="Tech Stacks" :delay="START" :stagger="25" />
            </p>
            
            <div class="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-6 gap-y-8 gap-x-4">
              <div 
                v-for="tech in techStacks" 
                :key="tech.name"
                class="flex items-center justify-center p-2 group transition-all duration-300"
                :title="tech.name"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  class="w-8 h-8 lg:w-9 lg:h-9 fill-term-dot-green/80 group-hover:fill-term-dot-green transition-colors duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path :d="tech.path" />
                </svg>
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
  // Row 1
  { name: 'React', path: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zM12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z' },
  { name: 'Vue', path: 'M2 3l10 18L22 3h-4l-6 10.5L6 3H2z' },
  { name: 'Nuxt', path: 'M12 2L2 20h20L12 2zm0 5.4L18.4 18H5.6L12 7.4z' },
  { name: 'Node.js', path: 'M12 2L3 7v10l9 5 9-5V7l-9-5zm7 14.2L12 19.6l-7-3.4V7.8L12 4.4l7 3.4v8.4z' },
  { name: 'Django', path: 'M22 2H2v20h20V2zM4 20h3.5v-3.5H4V20zm0-5.5h3.5v-3.5H4v3.5zm0-5.5h3.5V5.5H4v3.5zm5.5 11H13v-3.5H9.5V20zm0-5.5H13v-3.5H9.5v3.5zm0-5.5H13V5.5H9.5v3.5zM15 20h3.5v-3.5H15V20zm0-5.5h3.5v-3.5H15v3.5zm0-5.5h3.5V5.5H15v3.5z' },
  { name: 'Laravel', path: 'M12 21.35l-8-4.5V8.15l8-4.5 8 4.5v8.7l-8 4.5zM5.33 8.9v7.2L12 19.86l6.67-3.76V8.9L12 5.14 5.33 8.9z' },
  // Row 2
  { name: 'Tailwind', path: 'M12 6.5c-2.5 0-4 1.25-4.5 3.75 1.125-1.5 2.5-2.125 4.125-1.875 1 0.15 1.625 0.775 2.125 1.275C14.5 10.4 15.25 11 16.5 11c2.5 0 4-1.25 4.5-3.75-1.125 1.5-2.5 2.125-4.125 1.875-1-0.15-1.625-0.775-2.125-1.275C14.125 7.1 13.375 6.5 12 6.5zM8.25 11c-2.5 0-4 1.25-4.5 3.75 1.125-1.5 2.5-2.125 4.125-1.875 1 0.15 1.625 0.775 2.125 1.275C10.75 14.9 11.5 15.5 12.75 15.5c2.5 0 4-1.25 4.5-3.75-1.125 1.5-2.5 2.125-4.125 1.875-1-0.15-1.625-0.775-2.125-1.275C12.375 11.6 11.625 11 10.25 11z' },
  { name: 'Bootstrap', path: 'M4 4h12l4 4v12H4V4zm4 4v8h4.5c1.4 0 2.5-1.1 2.5-2.5S13.9 11 12.5 11H12V8H8zm2 2h2.5c.3 0 .5.2.5.5s-.2.5-.5.5H10v-1zm0 3h2.5c.3 0 .5.2.5.5s-.2.5-.5.5H10v-1z' },
  { name: 'TypeScript', path: 'M2 2h20v20H2V2zm16.5 16l-3-4h3l-3 4zm-11-8v2h3v2h-3v2h5v-6h-5z' },
  { name: 'Svelte', path: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4 11h-3v3l-2-2-2 2v-3h-3l2-2-2-2h3V8l2 2 2-2v3h3l-2 2 2 2z' },
  { name: 'Redux', path: 'M12 2L2 22h20L12 2zm0 4.2l7.2 12.8H4.8L12 6.2z' },
  { name: 'Flutter', path: 'M14.33 6L7 13.33 14.33 20.67 21.67 13.33 14.33 6zM7 13.33l7.33 7.34L2.33 20.67 7 13.33z' }
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
