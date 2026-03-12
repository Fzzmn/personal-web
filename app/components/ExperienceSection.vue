<template>
  <!--
    ExperienceSection — Timeline-style experience layout
    Left: date & location, Center: timeline dot/line, Right: role details + description
  -->
  <section id="experience" class="py-24 px-6 lg:px-0">
    <div class="max-w-3xl mx-auto w-full">
      <!-- Section Header -->
      <h2
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-xl lg:text-2xl font-mono font-bold text-term-text mb-14 text-center"
      >
        Experiences<span class="text-term-muted animate-pulse">_</span>
      </h2>

      <!-- Timeline -->
      <div class="relative flex flex-col items-center">
        <!-- Timeline Items -->
        <div
          v-for="(exp, index) in visibleExperiences"
          :key="exp.role + exp.company"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 + index * 100 } }"
          class="timeline-item"
        >
          <!-- Left: Date & Location -->
          <div class="timeline-left">
            <p class="font-mono text-sm text-term-text">{{ exp.date }}</p>
            <p class="font-mono text-xs text-term-muted">{{ exp.location }}</p>
          </div>

          <!-- Center: Dot & Line -->
          <div class="timeline-center">
            <div class="timeline-dot" />
            <div v-if="index < visibleExperiences.length - 1" class="timeline-line" />
          </div>

          <!-- Right: Role Details -->
          <div class="timeline-right">
            <h3 class="font-mono text-sm font-bold text-term-text">{{ exp.role }}</h3>
            <p class="font-mono text-xs text-term-muted">{{ exp.company }}</p>
            <p class="font-mono text-xs text-term-label mt-1">{{ exp.tech }}</p>
            <!-- Description bullets -->
            <ul v-if="exp.description?.length" class="mt-2 space-y-1">
              <li
                v-for="(desc, dIdx) in exp.description"
                :key="dIdx"
                class="font-mono text-xs text-term-muted leading-relaxed flex gap-1.5"
              >
                <span class="text-term-dot-green shrink-0 mt-0.5">▸</span>
                <span>{{ desc }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- See Others Button -->
      <div
        v-if="!showAll && experiences.length > initialCount"
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{ opacity: 1, transition: { duration: 500, delay: 600 } }"
        class="flex flex-col items-center mt-8 gap-2"
      >
        <button
          class="flex flex-col items-center gap-1 text-term-muted hover:text-term-label transition-colors duration-300 group"
          @click="showAll = true"
        >
          <!-- Chevron Down Icon -->
          <svg
            class="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
          <span class="font-mono text-sm">See Others</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const showAll = ref(false)
const initialCount = 5

interface Experience {
  date: string
  location: string
  role: string
  company: string
  tech: string
  description?: string[]
}

const experiences: Experience[] = [
  {
    date: 'October 2025 - Present',
    location: 'Jakarta, Indonesia',
    role: 'IT Development - Enterprise Technology Planning & IT Operations',
    company: 'AirNav Indonesia',
    tech: 'Flutter, REST API, Firebase, Clean Architecture',
    description: [
      'Developed 3 mobile applications: NavEvent, Helpdesk Mobile, and Arsipku Mobile using Flutter, building reusable UI components to enhance design consistency and accelerate development time.',
      'Implemented real-time communication and interaction features in the Helpdesk Mobile system, enabling rapid information exchange between users and administrators to improve service response.',
      'Integrated REST API endpoints into mobile applications, handling complex logic such as user authentication, application state management, and role-based data processing (RBAC).',
      'Contributed to end-to-end development of production-scale mobile applications, translating designs from Figma into responsive and functional interfaces focusing on clean architecture and maintainable code.',
    ],
  },
  {
    date: 'Oct 2023 - Nov 2023',
    location: 'Bandung, West Java - Indonesia',
    role: 'Web Developer Intern',
    company: 'West Java Communication and Information Department (Diskominfo Jawa Barat)',
    tech: 'Information Technology, Databases',
    description: [
      'In this internship, I focused on assisting IT staff with daily operations and developed a data archiving application to streamline information management for the department.',
    ],
  },
]

const visibleExperiences = computed(() =>
  showAll.value ? experiences : experiences.slice(0, initialCount)
)
</script>

<style scoped>
.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 0;
  min-height: 80px;
  width: 100%;
  max-width: 720px;
}

.timeline-left {
  width: 45%;
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

.timeline-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #4dc9b0;
  flex-shrink: 0;
  margin-top: 5px;
}

.timeline-line {
  width: 1px;
  flex: 1;
  min-height: 50px;
  background-color: #2a3f55;
}

.timeline-right {
  width: 55%;
  padding-left: 20px;
  padding-bottom: 28px;
  flex-shrink: 0;
}

/* Mobile responsive */
@media (max-width: 640px) {
  .timeline-left {
    width: 130px;
    padding-right: 12px;
  }

  .timeline-left p:first-child {
    font-size: 0.7rem;
  }

  .timeline-left p:last-child {
    font-size: 0.6rem;
  }

  .timeline-right {
    width: auto;
    flex: 1;
    padding-left: 12px;
  }
}
</style>
