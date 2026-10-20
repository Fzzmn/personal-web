<template>
  <!--
    AboutSection — Two-column about layout with Text Scramble (ASCII decode)
    Left: bio, description, contribution graphs
    Right: photo (compact 1:1 / 4:5), info items (tight spacing), tech stacks, resume
  -->
  <section id="about" class="pt-24 pb-16 px-6 lg:px-0">
    <div class="max-w-5xl mx-auto w-full">
      <!-- Two Column Layout -->
      <div class="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

        <!-- Left Column -->
        <div class="flex-1 min-w-0">
          <!-- Section Label -->
          <p class="text-term-label font-mono text-sm mb-1.5">
            <TextScramble text="About" :duration="500" />
          </p>

          <!-- Name: Clean without cursor -->
          <h2 class="text-2xl lg:text-3xl font-mono font-bold text-term-text mb-6">
            <TextScramble text="Fauziman" :duration="600" />
          </h2>

          <!-- Experienced As -->
          <p class="text-term-label font-mono text-xs mb-1">
            <TextScramble text="Experienced as" :duration="550" />
          </p>
          <p class="font-mono text-base lg:text-lg font-bold text-term-text mb-6 flex items-center">
            <TextScramble text="Mobile & Web Developer" :duration="700" />
            <span class="cursor-blink text-term-muted ml-0.5">|</span>
          </p>

          <!-- Description Paragraphs -->
          <div class="font-mono text-sm text-term-text leading-relaxed space-y-3.5 mb-8">
            <p v-for="(line, i) in descriptionLines" :key="i">
              <TextScramble
                :text="line"
                :duration="750"
              />
            </p>
          </div>

          <!-- My Contributions -->
          <div
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { duration: 600, delay: 300 } }"
          >
            <p class="text-term-label font-mono text-sm mb-3">
              <TextScramble text="My contributions" :duration="600" />
            </p>

            <!-- GitHub Contribution Graph -->
            <div class="mb-4">
              <p class="font-mono text-sm font-bold text-term-text mb-2.5">
                <TextScramble text="GitHub" :duration="550" />
              </p>
              <div class="bg-base-card rounded-xl p-4 border border-base-border overflow-x-auto shadow-md">
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
          </div>
        </div>

        <!-- Right Column -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 500, delay: 200 } }"
          class="w-full lg:w-64 xl:w-72 shrink-0 flex flex-col"
        >
          <!-- Profile Photo: Compact, rounded-2xl, object-cover -->
          <div class="mb-5 flex justify-center lg:justify-start">
            <div class="w-44 h-48 sm:w-48 sm:h-52 rounded-2xl overflow-hidden border border-base-border bg-base-card shadow-lg">
              <img
                :src="profileImg"
                alt="Profile photo"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Info Items: Rapat & Padat -->
          <div class="space-y-3.5 mb-5">
            <!-- Professional Experience -->
            <div>
              <p class="text-term-label font-mono text-xs mb-0.5">
                <TextScramble text="Professional Experience" :duration="500" />
              </p>
              <p class="font-mono text-sm font-bold text-term-text">
                <TextScramble text="IT Developer Intern" :duration="550" />
              </p>
              <p class="font-mono text-[11px] text-term-muted mt-0.5 leading-snug">
                <TextScramble text="Enterprise Technology Planning & IT Operations" :duration="600" />
              </p>
            </div>

            <!-- Employed at -->
            <div>
              <p class="text-term-label font-mono text-xs mb-0.5">
                <TextScramble text="At" :duration="450" />
              </p>
              <p class="font-mono text-sm font-bold text-term-text">
                <TextScramble text="AirNav Indonesia" :duration="550" />
              </p>
            </div>

            <!-- Period -->
            <div>
              <p class="text-term-label font-mono text-xs mb-0.5">
                <TextScramble text="Period" :duration="450" />
              </p>
              <p class="font-mono text-sm font-bold text-term-text">
                <TextScramble text="October 2025 – April 2026" :duration="550" />
              </p>
            </div>

            <!-- Based in -->
            <div>
              <p class="text-term-label font-mono text-xs mb-0.5">
                <TextScramble text="Based in" :duration="450" />
              </p>
              <p class="font-mono text-sm font-bold text-term-text">
                <TextScramble text="Tangerang, Indonesia" :duration="550" />
              </p>
            </div>
          </div>

          <!-- Tech Stacks (Compact Icon Grid) -->
          <div class="mb-5">
            <p class="text-term-label font-mono text-xs mb-2.5">
              <TextScramble text="Tech Stacks" :duration="500" />
            </p>
            
            <div class="grid grid-cols-6 gap-2">
              <div 
                v-for="tech in techStacks"  
                :key="tech.name"
                class="relative flex items-center justify-center p-1.5 rounded-lg border border-base-border/40 bg-base-card/50 hover:border-term-label/40 group transition-colors duration-200"
              >
                <!-- SVG Icon (crisp 24px) -->
                <div v-html="tech.svg" class="flex items-center justify-center w-6 h-6 transition-transform duration-300 group-hover:scale-115"></div>
                
                <!-- Glossy Tooltip Below Icon -->
                <div 
                  class="absolute top-[115%] left-1/2 -translate-x-1/2 pointer-events-none opacity-0 transition-all duration-200 scale-90 origin-top group-hover:opacity-100 group-hover:scale-100 z-50"
                >
                  <div class="tech-overlay-pill">
                    {{ tech.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Resume -->
          <div class="pt-1 border-t border-base-border/30">
            <p class="text-term-label font-mono text-xs mb-0.5">
              <TextScramble text="Read my resume" :duration="500" />
            </p>
            <a
              href="#"
              class="font-mono text-sm font-bold text-term-text term-link hover:text-term-label inline-block"
            >
              <TextScramble text="Download Here" :duration="550" />
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import TextScramble from './TextScramble.vue'
import profileImg from '~/assets/images/profil.png'

const descriptionLines = [
  'Informatics Engineering graduate with hands-on experience in mobile and web application development through enterprise and government-related projects.',
  'Experienced in developing cross-platform mobile applications using Flutter, including RESTful API integration, authentication systems, data management, and application optimization.',
  'During my internship at AirNav Indonesia, I contributed to the development and maintenance of multiple internal enterprise applications, including NavEvent, Helpdesk Mobile, and New Arsipku Mobile.',
  'I also have experience in web-based system development, backend development, database management, and API integration through internship projects.',
  'A detail-oriented and adaptable individual with strong problem-solving skills, able to work effectively in collaborative environments and continuously eager to grow in software development.',
]

// Generate placeholder contribution data
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

const getContributionClass = (level: string): string => {
  return `level-${level || 'NONE'}`
}

const techStacks = [
  { name: 'Flutter', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/></svg>` },
  { name: 'Dart', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M4.105 4.105S.28 9.07 0 12.632c0 3.237 1.956 5.86 4.105 7.263l4.632-4.632 7.263 7.263H24V14.526l-7.263-7.263L21.368 2.632H11.368L4.105 4.105z"/></svg>` },
  { name: 'JavaScript', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 3h18v18H3V3zm11.23 13.91c.56.32 1.25.56 2.01.56 1.05 0 1.62-.48 1.62-1.18 0-.74-.53-1.07-1.47-1.47l-.46-.2c-1.42-.59-2.34-1.39-2.34-2.91 0-2.18 1.76-3.47 4.29-3.47 1.08 0 1.95.23 2.57.54l-.62 1.54c-.45-.23-1.13-.44-1.95-.44-1.08 0-1.54.49-1.54 1.08 0 .66.45.97 1.39 1.36l.46.19c1.6.66 2.45 1.45 2.45 3.01 0 2.21-1.74 3.59-4.48 3.59-1.25 0-2.28-.29-2.96-.65l.63-1.5zm-5.78-.14c.48.27 1.04.47 1.64.47.74 0 1.13-.33 1.13-1.07V8.5h2.15v7.75c0 1.96-1.17 2.87-3.12 2.87-1.24 0-2.19-.34-2.73-.66l.93-1.69z"/></svg>` },
  { name: 'TypeScript', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>` },
  { name: 'Python', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M11.91 0C6.01 0 6.37 2.56 6.37 2.56V5.2h5.65v.8H3.98S0 5.56 0 11.51c0 5.95 3.47 5.75 3.47 5.75h2.07v-2.92s-.11-3.48 3.47-3.48h5.6c0 0 3.36.05 3.36-3.32V3.48S18.42 0 11.91 0zm-3.07 1.79c.56 0 1.01.45 1.01 1.01s-.45 1.01-1.01 1.01-1.01-.45-1.01-1.01.45-1.01 1.01-1.01zm3.25 20.42c5.9 0 5.54-2.56 5.54-2.56v-2.64h-5.65v-.8h8.04s3.98.44 3.98-5.51c0-5.95-3.47-5.75-3.47-5.75h-2.07v2.92s.11 3.48-3.47 3.48h-5.6c0 0-3.36-.05-3.36 3.32v4.28s-.45 3.48 6.06 3.48zm3.07-1.79c-.56 0-1.01-.45-1.01-1.01s.45-1.01 1.01-1.01 1.01.45 1.01 1.01-.45 1.01-1.01 1.01z"/></svg>` },
  { name: 'HTML5', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.926-.804-.188-2.115H6.26l.366 4.383 5.374 1.487 5.378-1.487.733-8.158H8.531z"/></svg>` },
  { name: 'Android', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997 0-.5511.4482-.9993.9993-.9993.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997 0-.5511.4482-.9993.9993-.9993.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997zm11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.59 8.2435 13.8533 7.8508 12 7.8508c-1.8533 0-3.59.3927-5.1368 1.0989L4.8409 5.4467a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6886 11.2384.3406 14.737 0 18.8055h24c-.3406-4.0685-2.6886-7.5671-6.1185-9.4841z"/></svg>` },
  { name: 'iOS', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.68-.83 1.15-1.99.99-3.17-1.02.05-2.22.68-2.93 1.52-.64.74-1.2 1.92-1.05 3.07 1.14.09 2.31-.58 2.99-1.42z"/></svg>` },
  { name: 'Nuxt 3', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M13.4642 19.8295h8.9218c.2834 0 .5618-.0723.8072-.2098a1.5899 1.5899 0 0 0 .5908-.5732 1.5293 1.5293 0 0 0 .216-.783 1.529 1.529 0 0 0-.2167-.7828L17.7916 7.4142a1.5904 1.5904 0 0 0-.5907-.573 1.6524 1.6524 0 0 0-.807-.2099c-.2833 0-.5616.0724-.807.2098a1.5904 1.5904 0 0 0-.5907.5731L13.4642 9.99l-2.9954-5.0366a1.5913 1.5913 0 0 0-.591-.573 1.6533 1.6533 0 0 0-.8071-.2098c-.2834 0-.5617.0723-.8072.2097a1.5913 1.5913 0 0 0-.591.573L.2168 17.4808A1.5292 1.5292 0 0 0 0 18.2635c-.0001.2749.0744.545.216.783a1.59 1.59 0 0 0 .5908.5732c.2454.1375.5238.2098.8072.2098h5.6003c2.219 0 3.8554-.9454 4.9813-2.7899l2.7337-4.5922L16.3935 9.99l4.3944 7.382h-5.8586ZM7.123 17.3694l-3.9083-.0009 5.8586-9.8421 2.9232 4.921-1.9572 3.2892c-.7478 1.1967-1.5972 1.6328-2.9163 1.6328z"/></svg>` },
  { name: 'Vue.js', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/></svg>` },
  { name: 'Next.js', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12c0 3.584-1.574 6.801-4.067 9.001l-10.7-13.882h-2.12v9.762h1.854v-7.306l9.698 12.603zM16.924 9.12h1.854v7.306h-1.854V9.12z"/></svg>` },
  { name: 'Tailwind CSS', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>` },
  { name: 'NestJS', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M12 0L1.75 6v12L12 24l10.25-6V6L12 0zm7.75 16.5L12 21l-7.75-4.5V7.5L12 3l7.75 4.5v9z"/></svg>` },
  { name: 'PostgreSQL', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm4.8 17.4c-.4.4-.9.6-1.5.6-1 0-1.8-.7-2.1-1.7-.2.1-.4.1-.7.1-1.3 0-2.4-.8-2.8-2-.3.1-.6.1-.9.1-1.4 0-2.5-1.1-2.5-2.5 0-.4.1-.8.3-1.1C6.2 10.2 6 9.4 6 8.5C6 6 8 4 10.5 4c1.2 0 2.3.5 3.1 1.3C14.4 4.5 15.5 4 16.8 4c2.2 0 4 1.8 4 4 0 .7-.2 1.4-.5 2 .7.8 1.1 1.8 1.1 2.9 0 2.1-1.5 3.9-3.5 4.3-.3.2-.7.2-1.1.2z"/></svg>` },
  { name: 'Prisma', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M22.25 18.25L13.75 1.5C13.25.5 12.25 0 11.5 0c-.5 0-1.25.25-1.5.75L.75 17.5c-.5 1 0 2.25 1 2.75l8.5 3.25c.5.25 1 .5 1.5.5.75 0 1.5-.25 2-.75l8.5-4c.75-.5 1-1.25 1-2 0-.25-.25-.75-.5-1zm-9.75 3.5l-6.5-2.5 7.5-14.75 6.5 13.25-7.5 4z"/></svg>` },
  { name: 'Git', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.226-.605-.405-.532-.532-.673-1.319-.414-1.979L7.544 3.678.455 10.767c-.604.604-.604 1.582 0 2.188l10.48 10.478c.604.604 1.582.604 2.186 0l10.425-10.424c.606-.603.606-1.58 0-2.185z"/></svg>` },
  { name: 'GitHub', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>` },
  { name: 'Postman', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.83 4.8a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8zM7.2 13.8a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm4.8 5.4a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm4.8-5.4a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6z"/></svg>` },
  { name: 'Vercel', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M24 22.5D12 1.5 0 22.5h24z"/></svg>` },
  { name: 'Figma', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4zM4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4zm0-8c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4zm8-4h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0zm0 8h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V8z"/></svg>` },
  { name: 'VS Code', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63L3.07 6.16a.825.825 0 0 0-1.12.16L.26 8.04a.824.824 0 0 0 .14 1.13l4.38 3.51-4.38 3.51a.824.824 0 0 0-.14 1.13l1.69 1.72a.825.825 0 0 0 1.12.16l3.97-2.97 9.46 8.63a1.494 1.494 0 0 0 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 21.49V3.91a1.5 1.5 0 0 0-.85-1.323zM18 17.52l-5.6-4.48L18 8.56v8.96z"/></svg>` },
  { name: 'Discord', svg: `<svg class="text-term-dot-green/80 group-hover:text-term-dot-green transition duration-300" viewBox="0 0 24 24" style="display: inline-block; stroke: currentcolor; fill: currentcolor; width: 24px; height: 24px;"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>` },
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
  padding: 6px 12px;
  border-radius: 9999px;
  background: linear-gradient(
    135deg,
    rgba(47, 77, 102, 0.9) 0%,
    rgba(36, 58, 79, 0.95) 100%
  );
  backdrop-filter: blur(12px) saturate(1.4);
  -webkit-backdrop-filter: blur(12px) saturate(1.4);
  border: 1px solid rgba(200, 214, 229, 0.12);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  color: #c8d6e5;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.03em;
  white-space: nowrap;
}
</style>
