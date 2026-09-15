<template>
  <!--
    SkillsSection — Terminal-style skills list with inline progress
  -->
  <section id="skills" class="py-24 px-6 lg:px-0">
    <div class="max-w-2xl mx-auto w-full">
      <!-- Section Header -->
      <h2
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-xl lg:text-2xl font-mono font-bold text-term-text mb-10"
      >
        Skills<span class="text-term-muted animate-pulse">_</span>
      </h2>

      <!-- Skills grouped by category -->
      <div
        v-for="(group, gIndex) in skillGroups"
        :key="group.category"
        v-motion
        :initial="{ opacity: 0, y: 15 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 + gIndex * 150 } }"
        class="flex gap-8 mb-8"
      >
        <span class="text-term-label font-mono text-sm shrink-0 pt-0.5 w-36">{{ group.category }}.</span>
        <div class="font-mono text-sm space-y-2 flex-1">
          <div
            v-for="skill in group.items"
            :key="skill.name"
            class="flex items-center gap-4"
          >
            <span class="text-term-text w-44 shrink-0">{{ skill.name }}</span>
            <!-- Terminal-style progress bar -->
            <div class="flex-1 flex items-center gap-2">
              <div class="flex-1 h-1 bg-base-border rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-1000 ease-out"
                  :class="skill.level >= 90 ? 'bg-term-dot-green' : skill.level >= 80 ? 'bg-term-label' : 'bg-term-dot-blue'"
                  :style="{ width: isVisible ? `${skill.level}%` : '0%' }"
                />
              </div>
              <span class="text-term-muted text-xs w-8 text-right">{{ skill.level }}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const isVisible = ref(false)

const skillGroups = [
  {
    category: 'Programming & Dev',
    items: [
      { name: 'Flutter & Dart', level: 95 },
      { name: 'JavaScript & TypeScript', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'HTML', level: 90 },
    ],
  },
  {
    category: 'Mobile',
    items: [
      { name: 'Flutter', level: 95 },
      { name: 'Android & iOS', level: 85 },
      { name: 'GetX / State Mgmt', level: 90 },
      { name: 'RESTful API', level: 92 },
    ],
  },
  {
    category: 'Web',
    items: [
      { name: 'Nuxt 3 & Vue.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'NestJS', level: 80 },
      { name: 'REST API', level: 90 },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'Prisma ORM', level: 85 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Postman & Vercel', level: 88 },
      { name: 'Figma & VS Code', level: 90 },
      { name: 'Discord', level: 85 },
    ],
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      })
    },
    { threshold: 0.2 }
  )

  const section = document.getElementById('skills')
  if (section) observer.observe(section)
})
</script>
