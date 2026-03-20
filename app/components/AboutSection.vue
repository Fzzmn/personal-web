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
            <LetterReveal text="Mobile-Focused Full-Stack Engineer" :delay="START" :stagger="15" />
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
                src="/assets/images/profil.png"
                alt="Profile photo"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Info Cards -->
          <div class="space-y-8 mb-8">
            <!-- Currently undertaking an internship as -->
            <div>
              <p class="text-term-label font-mono text-xs mb-3">
                <LetterReveal text="Currently undertaking an internship as" :delay="START" :stagger="18" />
              </p>
              <p class="font-mono text-sm font-bold text-term-text">
                <LetterReveal text="IT Development Intern – Enterprise Technology Planning & IT Operations" :delay="START" :stagger="10" />
              </p>
            </div>

            <!-- Employed at -->
            <div>
              <p class="text-term-label font-mono text-xs mb-3">
                <LetterReveal text="At" :delay="START" :stagger="18" />
              </p>
              <p class="font-mono text-sm font-bold text-term-text">
                <LetterReveal text="AirNav Indonesia" :delay="START" :stagger="15" />
              </p>
            </div>

            <!-- Based in -->
            <div>
              <p class="text-term-label font-mono text-xs mb-3">
                <LetterReveal text="Based in" :delay="START" :stagger="18" />
              </p>
              <p class="font-mono text-sm font-bold text-term-text">
                <LetterReveal text="Tangerang, Indonesia" :delay="START" :stagger="15" />
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
                class="relative flex items-center justify-center p-2 group"
              >
                <!-- SVG Icon -->
                <div v-html="tech.svg" class="flex items-center justify-center w-full h-full transition-transform duration-300 group-hover:scale-110"></div>
                
                <!-- Glossy Tooltip Below Icon -->
                <div 
                  class="absolute top-[115%] left-1/2 -translate-x-1/2 pointer-events-none opacity-0 transition-all duration-300 scale-90 origin-top group-hover:opacity-100 group-hover:scale-100 z-40"
                >
                  <div class="tech-overlay-pill">
                    {{ tech.name }}
                  </div>
                </div>
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
  'I primarily focus on building modern mobile applications using Flutter, creating performant, well-structured, and maintainable apps designed for real-world use.',
  'Alongside mobile development, I also work on web frontend development and backend integration, allowing me to build complete application flows from user interfaces to API communication.',
  'Throughout my development journey, I have worked on multiple application projects — designing mobile interfaces, integrating REST APIs, and contributing to both frontend and backend systems. These experiences helped me develop a strong understanding of application architecture, performance optimization, and scalable system design.',
  'While my main expertise lies in mobile development with Flutter, I also actively build web interfaces and collaborate with backend services to deliver complete and reliable digital products.',
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
  { name: 'React', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 1024 1024" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 32px; height: 32px;"><path d="M1024 498.731c0-67.84-84.949-132.139-215.211-171.989 30.080-132.736 16.725-238.379-42.155-272.213-14.268-7.991-30.413-12.013-46.763-11.648v46.507c9.6 0 17.323 1.92 23.808 5.461 28.373 16.299 40.704 78.251 31.104 157.995-2.304 19.627-6.059 40.277-10.667 61.355-43.622-10.511-87.893-18.109-132.523-22.741-26.586-36.681-55.595-71.546-86.827-104.363 68.053-63.232 131.925-97.877 175.36-97.877v-46.549c-57.429 0-132.565 40.917-208.555 111.872-75.947-70.485-151.125-111.019-208.512-111.019v46.507c43.221 0 107.307 34.475 175.36 97.28-29.227 30.72-58.453 65.536-86.229 104.149-44.722 4.581-89.073 12.251-132.736 22.955-4.614-19.977-8.245-40.169-10.88-60.501-9.813-79.787 2.304-141.739 30.507-158.208 6.229-3.755 14.379-5.461 23.979-5.461v-46.507c-17.493 0-33.408 3.755-47.147 11.648-58.667 33.835-71.808 139.221-41.557 271.573-129.835 40.107-214.357 104.149-214.357 171.776 0 67.84 84.949 132.139 215.211 171.947-30.080 132.779-16.725 238.421 42.155 272.213 13.568 7.936 29.44 11.691 46.933 11.691 57.429 0 132.565-40.917 208.555-111.872 75.947 70.528 151.083 111.019 208.512 111.019 16.474 0.35 32.742-3.686 47.147-11.691 58.667-33.792 71.808-139.179 41.557-271.531 129.408-39.851 213.931-104.149 213.931-171.776zM752.213 359.509c-8.107 27.898-17.506 55.405-28.16 82.432-17.442-33.93-36.595-66.954-57.387-98.944 29.653 4.395 58.24 9.813 85.589 16.512zM656.683 581.803c-15.629 27.285-32.41 53.888-50.304 79.744-62.622 5.521-125.611 5.589-188.245 0.213-35.927-51.319-67.348-105.651-93.909-162.389 26.521-56.87 57.808-111.394 93.525-162.987 62.609-5.531 125.581-5.617 188.203-0.256 17.323 24.832 34.261 51.371 50.517 79.36 15.872 27.307 30.293 55.040 43.435 83.029-13.286 28.331-27.708 56.111-43.221 83.285zM724.053 554.667c11.264 27.989 20.907 55.936 28.8 83.072-27.307 6.699-56.149 12.331-85.973 16.683 20.702-32.282 39.787-65.574 57.173-99.755zM512.427 777.387c-19.413-20.053-38.827-42.368-58.027-66.816 18.773 0.853 37.973 1.493 57.387 1.493 19.627 0 39.040-0.427 58.027-1.493-18.773 24.448-38.187 46.763-57.387 66.816zM357.12 654.421c-28.768-4.169-57.329-9.664-85.589-16.469 7.723-26.923 17.323-54.699 28.16-82.432 8.576 16.64 17.579 33.365 27.392 50.091 9.813 16.683 19.797 32.981 30.037 48.811zM511.36 220.075c19.413 20.053 38.827 42.368 58.027 66.816-18.773-0.853-37.973-1.493-57.387-1.493-19.627 0-39.040 0.427-58.027 1.493 18.773-24.448 38.187-46.763 57.387-66.816zM356.907 343.040c-20.699 32.21-39.78 65.432-57.173 99.541-10.956-27.202-20.568-54.926-28.8-83.072 27.307-6.485 56.149-12.117 85.973-16.469zM168.021 604.331c-73.899-31.488-121.685-72.832-121.685-105.6s47.787-74.325 121.685-105.6c17.92-7.723 37.547-14.635 57.813-21.077 11.904 40.875 27.563 83.456 46.933 127.104-18.288 41.054-33.755 83.307-46.293 126.464-19.821-6.135-39.328-13.244-58.453-21.291zM280.32 902.571c-28.373-16.213-40.704-78.251-31.104-157.952 2.304-19.627 6.059-40.32 10.667-61.397 40.875 10.027 85.547 17.749 132.523 22.784 26.589 36.681 55.595 71.543 86.827 104.363-68.053 63.232-131.925 97.877-175.36 97.877-8.195 0.090-16.285-1.843-23.552-5.632zM775.424 743.595c9.813 79.744-2.304 141.739-30.507 158.208-6.229 3.755-14.379 5.419-23.979 5.419-43.221 0-107.307-34.432-175.36-97.28 31.1-32.678 59.913-67.465 86.229-104.107 44.723-4.582 89.071-12.25 132.736-22.955 4.821 21.077 8.533 41.301 10.88 60.715zM855.765 604.373c-17.92 7.723-37.547 14.635-57.813 21.077-12.757-43.379-28.437-85.845-46.933-127.104 19.2-43.392 34.603-85.76 46.293-126.464 19.883 6.158 39.462 13.263 58.667 21.291 73.899 31.488 121.685 72.832 121.685 105.6-0.213 32.768-48 74.325-121.899 105.6z"></path><path d="M511.787 594.133c25.301 0 49.566-10.052 67.46-27.942 17.89-17.89 27.942-42.159 27.942-67.46s-10.052-49.57-27.942-67.46c-17.894-17.891-42.159-27.942-67.46-27.942-25.306 0-49.57 10.051-67.46 27.942-17.892 17.89-27.944 42.159-27.944 67.46s10.051 49.57 27.944 67.46c17.89 17.89 42.155 27.942 67.46 27.942z"></path></svg>` },
  { name: 'Vue', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 32px; height: 32px;"><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/></svg>` },
  { name: 'Nuxt', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 32px; height: 32px;"><path d="M13.4642 19.8295h8.9218c.2834 0 .5618-.0723.8072-.2098a1.5899 1.5899 0 0 0 .5908-.5732 1.5293 1.5293 0 0 0 .216-.783 1.529 1.529 0 0 0-.2167-.7828L17.7916 7.4142a1.5904 1.5904 0 0 0-.5907-.573 1.6524 1.6524 0 0 0-.807-.2099c-.2833 0-.5616.0724-.807.2098a1.5904 1.5904 0 0 0-.5907.5731L13.4642 9.99l-2.9954-5.0366a1.5913 1.5913 0 0 0-.591-.573 1.6533 1.6533 0 0 0-.8071-.2098c-.2834 0-.5617.0723-.8072.2097a1.5913 1.5913 0 0 0-.591.573L.2168 17.4808A1.5292 1.5292 0 0 0 0 18.2635c-.0001.2749.0744.545.216.783a1.59 1.59 0 0 0 .5908.5732c.2454.1375.5238.2098.8072.2098h5.6003c2.219 0 3.8554-.9454 4.9813-2.7899l2.7337-4.5922L16.3935 9.99l4.3944 7.382h-5.8586ZM7.123 17.3694l-3.9083-.0009 5.8586-9.8421 2.9232 4.921-1.9572 3.2892c-.7478 1.1967-1.5972 1.6328-2.9163 1.6328z"/></svg>` },
  { name: 'Node.js', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 32px; height: 32px;"><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/></svg>` },
  { name: 'Django', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 32px; height: 32px;"><path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"/></svg>` },
  { name: 'Laravel', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 32px; height: 32px;"><path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"/></svg>` },
  { name: 'Tailwind', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 32px; height: 32px;"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>` },
  { name: 'Bootstrap', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 32px; height: 32px;"><path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"/></svg>` },
  { name: 'TypeScript', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 32px; height: 32px;"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>` },
  { name: 'Svelte', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 32px; height: 32px;"><path d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168Z"/></svg>` },
  { name: 'Redux', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 32px; height: 32px;"><path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"/></svg>` },
  { name: 'Flutter', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 32px; height: 32px;"><path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/></svg>` },
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

/* ── Glossy Tech Stack Tooltip ── */
.tech-overlay-pill {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 9999px;
  /* Frosted glass — matches nav-tooltip aesthetics */
  background: linear-gradient(
    135deg,
    rgba(47, 77, 102, 0.85) 0%,
    rgba(36, 58, 79, 0.9) 100%
  );
  backdrop-filter: blur(12px) saturate(1.4);
  -webkit-backdrop-filter: blur(12px) saturate(1.4);
  border: 1px solid rgba(200, 214, 229, 0.08);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  
  /* Text styling */
  color: #c8d6e5;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.03em;
  white-space: nowrap;
}
</style>
