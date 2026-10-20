<template>
  <!--
    ExperienceSection — Clean, compact timeline layout
    Left: Date & Location (right-aligned, small)
    Center: Dot & vertical line
    Right: Exactly 3 lines (Role [bold], Company [medium], Tech stack [muted])
    Header without cursor trailing.
  -->
  <section id="experience" class="py-24 px-6 lg:px-0">
    <div class="max-w-3xl mx-auto w-full">
      <!-- Section Header: No cursor trailing -->
      <h2
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 400 } }"
        class="text-xl lg:text-2xl font-mono font-bold text-term-text mb-12 text-center"
      >
        <TextScramble text="Experiences" :duration="600" />
      </h2>

      <!-- Timeline -->
      <div class="relative flex flex-col items-center">
        <!-- Timeline Items -->
        <div
          v-for="(exp, index) in visibleExperiences"
          :key="exp.role + exp.company"
          class="timeline-item group"
          :data-index="index"
          :ref="(el) => { if (el) itemRefs[index] = el as HTMLElement }"
        >
          <!-- Left: Date & Location -->
          <div 
            class="timeline-left"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 500, ease: 'easeOut', delay: 80 } }"
          >
            <p
              class="font-mono text-xs sm:text-sm text-term-text transition-colors duration-300 font-medium"
              :class="{'text-term-label': activeItems.has(index)}"
            >
              <TextScramble :text="exp.date" :duration="500" />
            </p>
            <p class="font-mono text-[11px] sm:text-xs text-term-muted mt-0.5">
              <TextScramble :text="exp.location" :duration="550" />
            </p>
          </div>

          <!-- Center: Dot & Line -->
          <div class="timeline-center relative flex flex-col items-center flex-shrink-0 w-5">
            <!-- Global Line segments -->
            <div
              class="absolute w-[1px] bg-base-border left-1/2 -translate-x-1/2 z-0"
              :class="{
                'top-[-40px]': index === 0,
                'top-0': index !== 0,
                'bottom-[-30px]': index === visibleExperiences.length - 1,
                'bottom-0': index !== visibleExperiences.length - 1
              }"
            />
            
            <!-- Dot -->
            <div 
              class="timeline-dot-wrapper relative z-10"
              v-motion
              :initial="{ scale: 0, opacity: 0 }"
              :visible-once="{ scale: 1, opacity: 1, transition: { duration: 350, delay: 150 } }"
            >
              <div 
                class="w-[8px] h-[8px] rounded-full transition-colors duration-500 ease-out ring-[5px] ring-base-bg"
                :class="{ 
                  'bg-term-label': activeItems.has(index),
                  'bg-term-muted': !activeItems.has(index)
                }" 
              />
            </div>
          </div>

          <!-- Right: Role Details (Only 3 lines: Role, Company, Tech, with mobile date header) -->
          <div class="timeline-right">
            <div 
              class="content-card"
              v-motion
              :initial="{ opacity: 0, x: 20 }"
              :visible-once="{ opacity: 1, x: 0, transition: { duration: 500, ease: 'easeOut', delay: 100 } }"
            >
              <!-- Mobile only: Date & Location on top -->
              <div class="sm:hidden mb-1.5 flex flex-wrap items-center gap-x-2 text-[11px] font-mono text-term-muted">
                <span><TextScramble :text="exp.date" :duration="450" /></span>
                <span class="text-term-border">•</span>
                <span><TextScramble :text="exp.location" :duration="500" /></span>
              </div>

              <!-- Line 1: Role / Posisi (Bold) -->
              <h3 
                class="font-mono text-sm sm:text-base font-bold text-term-text transition-colors duration-300 leading-snug"
                :class="{'text-term-label': activeItems.has(index)}"
              >
                <TextScramble :text="exp.role" :duration="600" />
              </h3>
              
              <!-- Line 2: Nama Perusahaan / Instansi (Medium) -->
              <p class="font-mono text-xs sm:text-sm text-term-text/80 mt-1">
                <TextScramble :text="exp.company" :duration="650" />
              </p>
              
              <!-- Line 3: Tech Stack terpisah koma (Small, muted) -->
              <p class="font-mono text-[11px] sm:text-xs text-term-muted mt-1 leading-snug">
                <TextScramble :text="exp.tech" :duration="700" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- See Others Button if needed -->
      <div
        v-if="!showAll && experiences.length > initialCount"
        class="flex flex-col items-center mt-6 relative z-10"
      >
        <button
          class="flex flex-col items-center gap-1 transition-colors duration-300 group"
          @click="showAll = true"
        >
          <div class="w-8 h-8 rounded-full bg-base-border flex items-center justify-center text-term-text group-hover:bg-term-label group-hover:text-base-bg transition-all ring-4 ring-base-bg">
            <svg class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
          <span class="font-mono text-xs text-term-muted group-hover:text-term-label mt-1">See Others</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import TextScramble from './TextScramble.vue'

const showAll = ref(false)
const initialCount = 5

interface Experience {
  date: string
  location: string
  role: string
  company: string
  tech: string
}

const experiences: Experience[] = [
  {
    date: 'October 2025 – April 2026',
    location: 'Tangerang, Indonesia',
    role: 'IT Developer Intern - Enterprise Technology Planning & IT Operations',
    company: 'AirNav Indonesia',
    tech: 'Flutter, RESTful API Integration, Figma, Clean Architecture',
  },
  {
    date: 'Oct 2023 – Nov 2023',
    location: 'Bandung, Indonesia',
    role: 'Web Development Intern',
    company: 'Dinas Komunikasi Dan Informatika Provinsi Jawa Barat',
    tech: 'Web Development, Database Management, Technical Support',
  },
]

const visibleExperiences = computed(() =>
  showAll.value ? experiences : experiences.slice(0, initialCount)
)

const itemRefs = ref<HTMLElement[]>([])
const activeItems = ref<Set<number>>(new Set())
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const index = Number(entry.target.getAttribute('data-index'))
      if (entry.isIntersecting) {
        const newSet = new Set(activeItems.value)
        newSet.add(index)
        activeItems.value = newSet
      } else {
        const newSet = new Set(activeItems.value)
        newSet.delete(index)
        activeItems.value = newSet
      }
    })
  }, { rootMargin: '-20% 0px -20% 0px', threshold: 0 })

  observeItems()
})

const observeItems = () => {
  if (!observer) return
  itemRefs.value.forEach(el => {
    if (el) observer?.observe(el)
  })
}

watch(visibleExperiences, async () => {
  await nextTick()
  if (observer) {
    observer.disconnect()
    observeItems()
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 0;
  padding-bottom: 24px;
  width: 100%;
  max-width: 720px;
}

.timeline-left {
  width: 44%;
  text-align: right;
  padding-right: 20px;
  padding-top: 2px;
  flex-shrink: 0;
}

.timeline-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 20px;
}

.timeline-dot-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  width: 14px;
  height: 14px;
}

.timeline-right {
  width: 56%;
  padding-left: 20px;
  flex-shrink: 0;
}

.content-card {
  padding: 10px 14px;
  margin-top: -6px;
  margin-left: -12px;
  border-radius: 10px;
  transition: all 0.25s ease;
  border: 1px solid transparent;
}

.content-card:hover {
  transform: translateX(4px);
  background-color: rgba(255, 255, 255, 0.02);
  border-color: rgba(255, 255, 255, 0.05);
}

@media (max-width: 640px) {
  .timeline-item {
    padding-bottom: 20px;
    align-items: flex-start;
  }

  .timeline-left {
    display: none;
  }

  .timeline-center {
    width: 16px;
    margin-right: 12px;
  }

  .timeline-right {
    width: auto;
    flex: 1;
    padding-left: 0;
  }
  
  .content-card {
    padding: 0 4px 10px 4px;
    margin-top: -2px;
    margin-left: 0; 
  }
}
</style>
