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
        <span class="text-term-label font-mono text-sm shrink-0 pt-0.5 w-24">{{ group.category }}.</span>
        <div class="font-mono text-sm space-y-2 flex-1">
          <div
            v-for="skill in group.items"
            :key="skill.name"
            class="flex items-center gap-4"
          >
            <span class="text-term-text w-36 shrink-0">{{ skill.name }}</span>
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
    category: 'Frontend',
    items: [
      { name: 'Vue.js / Nuxt', level: 92 },
      { name: 'React / Next.js', level: 85 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 80 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'Lua / FiveM', level: 90 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git & DevOps', level: 82 },
      { name: 'Flutter / Dart', level: 75 },
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
