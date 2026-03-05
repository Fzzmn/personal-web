<template>
  <!--
    ProjectsSection — Grid project cards with 3 card styles:
    - wide: info bottom-left, mockup image rotated right
    - tall: info bottom-left, mobile mockups rotated right
    - square: centered logo only
  -->
  <section id="projects" class="py-24 px-6 lg:px-0">
    <div class="max-w-5xl mx-auto w-full">
      <!-- Project Grid -->
      <div class="project-grid">
        <div
          v-for="(project, index) in projects"
          :key="project.title + index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 100 + index * 60 } }"
          class="project-card group"
          :class="[
            project.size === 'wide' ? 'card-wide' : '',
            project.size === 'tall' ? 'card-tall' : '',
          ]"
          :style="{ backgroundColor: project.color || '#000000' }"
        >
          <!-- === WIDE CARD === -->
          <template v-if="project.size === 'wide'">
            <!-- Action buttons (top-right, appear on hover) -->
            <div class="card-actions">
              <a
                v-if="project.externalLink"
                :href="project.externalLink"
                target="_blank"
                rel="noopener noreferrer"
                class="action-btn"
                @click.stop
              >
                <svg class="w-4 h-4 text-base-bg" viewBox="0 0 1024 1024" fill="none" stroke="currentColor" stroke-width="85">
                  <path d="M384 640l256-256M469 256l20-23c40-40 94-62 151-62 57 0 111 22 151 62s62 94 62 151c0 57-22 111-62 151l-23 20M555 768l-17 23c-40 40-95 62-152 62s-112-22-152-62c-20-20-36-43-47-69s-16-54-16-82c0-28 6-56 16-82s27-49 47-69l22-20" stroke-linejoin="round" stroke-linecap="round" />
                </svg>
              </a>
              <a
                v-if="project.link"
                :href="project.link"
                class="action-btn"
                @click.stop
              >
                <svg class="w-4 h-4 text-base-bg" viewBox="0 0 1024 1024" fill="currentColor">
                  <path d="M249 775c-6-6-10-15-10-24s4-18 10-24l454-454H410c-9 0-18-4-24-10s-10-15-10-24 4-18 10-24 15-10 24-10h375c9 0 18 4 24 10s10 15 10 24v375c0 9-4 18-10 24s-15 10-24 10-18-4-24-10-10-15-10-24V321L297 775c-3 3-7 6-11 7s-9 3-13 3-9-1-13-3-8-4-11-7z" />
                </svg>
              </a>
            </div>

            <!-- Info (bottom-left) -->
            <div class="card-info-overlay">
              <h2 class="font-mono text-base sm:text-lg text-white mb-1 mt-4 font-bold">
                {{ project.title }}
              </h2>
              <p v-if="project.description" class="font-mono text-xs sm:text-sm text-white">
                {{ project.description }}
              </p>
              <div v-if="project.tech?.length" class="flex flex-wrap gap-2 mt-4">
                <div
                  v-for="tech in project.tech"
                  :key="tech"
                  class="tech-pill"
                >
                  <small class="font-mono text-xs sm:text-sm text-white">{{ tech }}</small>
                </div>
              </div>
            </div>

            <!-- Mockup image (rotated, right side) -->
            <div class="mockup-wide">
              <div class="w-[350px] rounded-2xl overflow-hidden">
                <img
                  v-if="project.mockupImage"
                  :alt="project.title"
                  :src="project.mockupImage"
                  class="w-full h-auto"
                  loading="lazy"
                />
                <div v-else class="w-full h-48 flex items-center justify-center opacity-30">
                  <span class="text-6xl">{{ project.emoji }}</span>
                </div>
              </div>
            </div>
          </template>

          <!-- === TALL CARD === -->
          <template v-else-if="project.size === 'tall'">
            <!-- Action buttons (top-right, appear on hover) -->
            <div class="card-actions">
              <a
                v-if="project.externalLink"
                :href="project.externalLink"
                target="_blank"
                rel="noopener noreferrer"
                class="action-btn"
                @click.stop
              >
                <svg class="w-4 h-4 text-base-bg" viewBox="0 0 1024 1024" fill="none" stroke="currentColor" stroke-width="85">
                  <path d="M384 640l256-256M469 256l20-23c40-40 94-62 151-62 57 0 111 22 151 62s62 94 62 151c0 57-22 111-62 151l-23 20M555 768l-17 23c-40 40-95 62-152 62s-112-22-152-62c-20-20-36-43-47-69s-16-54-16-82c0-28 6-56 16-82s27-49 47-69l22-20" stroke-linejoin="round" stroke-linecap="round" />
                </svg>
              </a>
              <a
                v-if="project.link"
                :href="project.link"
                class="action-btn"
                @click.stop
              >
                <svg class="w-4 h-4 text-base-bg" viewBox="0 0 1024 1024" fill="currentColor">
                  <path d="M249 775c-6-6-10-15-10-24s4-18 10-24l454-454H410c-9 0-18-4-24-10s-10-15-10-24 4-18 10-24 15-10 24-10h375c9 0 18 4 24 10s10 15 10 24v375c0 9-4 18-10 24s-15 10-24 10-18-4-24-10-10-15-10-24V321L297 775c-3 3-7 6-11 7s-9 3-13 3-9-1-13-3-8-4-11-7z" />
                </svg>
              </a>
            </div>

            <!-- Info (bottom-left) -->
            <div class="card-info-overlay">
              <h2 class="font-mono text-base sm:text-lg text-white mb-1 mt-4 font-bold">
                {{ project.title }}
              </h2>
              <p v-if="project.description" class="font-mono text-xs sm:text-sm text-white">
                {{ project.description }}
              </p>
              <div v-if="project.tech?.length" class="flex flex-wrap gap-2 mt-4">
                <div
                  v-for="tech in project.tech"
                  :key="tech"
                  class="tech-pill"
                >
                  <small class="font-mono text-xs sm:text-sm text-white">{{ tech }}</small>
                </div>
              </div>
            </div>

            <!-- Mobile mockup images (rotated, right side) -->
            <div class="mockup-tall">
              <template v-if="project.mockupImage">
                <div class="w-[170px] rounded-2xl">
                  <img :alt="project.title" :src="project.mockupImage" class="w-full h-auto" loading="lazy" />
                </div>
                <div class="w-[170px] rounded-2xl">
                  <img :alt="project.title" :src="project.mockupImage" class="w-full h-auto" loading="lazy" />
                </div>
              </template>
              <template v-else>
                <div class="w-[170px] h-72 rounded-2xl bg-base-card/30 flex items-center justify-center">
                  <span class="text-5xl opacity-30">{{ project.emoji }}</span>
                </div>
                <div class="w-[170px] h-72 rounded-2xl bg-base-card/30 flex items-center justify-center">
                  <span class="text-5xl opacity-30">{{ project.emoji }}</span>
                </div>
              </template>
            </div>
          </template>

          <!-- === SQUARE CARD === -->
          <template v-else>
            <div class="w-full h-full flex items-center justify-center">
              <img
                v-if="project.logoImage"
                :alt="project.title || 'Project'"
                :src="project.logoImage"
                class="h-20 w-auto"
                loading="lazy"
              />
              <span v-else class="text-5xl opacity-70">{{ project.emoji }}</span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  title: string
  description?: string
  tech?: string[]
  link?: string
  externalLink?: string
  mockupImage?: string
  logoImage?: string
  color?: string
  emoji?: string
  /** 'square' = 1x1, 'wide' = 2col x 1row, 'tall' = 1col x 2row */
  size?: 'square' | 'wide' | 'tall'
}

const projects: Project[] = [
  // Row 1
  {
    title: 'GCLI FiveM Server',
    description: 'GTA V Competitive League Indonesia FiveM Server',
    tech: ['Lua', 'MySQL', 'FiveM'],
    link: '#',
    externalLink: '#',
    color: '#000000',
    emoji: '🎮',
    size: 'wide',
  },
  {
    title: 'GCLI Official Website',
    description: 'GTA V Competitive League Indonesia Official Website',
    tech: ['Next.js', 'TailwindCSS', 'Prisma', 'MySQL'],
    link: '#',
    externalLink: '#',
    color: '#000000',
    emoji: '🌐',
    size: 'tall',
  },
  {
    title: '',
    emoji: '🏆',
    color: '#2a3a4a',
    size: 'square',
  },
  // Row 2
  {
    title: '',
    emoji: '🔮',
    color: '#0d1a2e',
    size: 'square',
  },
  {
    title: '',
    emoji: '⚙️',
    color: '#f5f0e5',
    size: 'square',
  },
  // Row 3
  {
    title: 'Chart Demo',
    description: 'My free-time project for learning Chart.js and D3.js',
    tech: ['Next.js', 'Chart.js', 'D3.js'],
    link: '#',
    color: '#000000',
    emoji: '📊',
    size: 'wide',
  },
  {
    title: 'IFEM 2022',
    description: 'Biggest Mechanical Engineering ITS Event.',
    tech: ['Laravel', 'Bootstrap', 'SCSS'],
    link: '#',
    color: '#000000',
    emoji: '🎓',
    size: 'tall',
  },
  // Row 4
  {
    title: 'Petrolida 2022',
    description: 'Biggest Events by SPE ITS.',
    tech: ['React', 'Bootstrap', 'Laravel'],
    link: '#',
    color: '#000000',
    emoji: '⚡',
    size: 'wide',
  },
  // Row 5
  {
    title: '',
    emoji: '📱',
    color: '#1a2636',
    size: 'square',
  },
  {
    title: '',
    emoji: '🔧',
    color: '#0d1a3e',
    size: 'square',
  },
  // Row 6
  {
    title: 'Dafkur.com 2.0',
    description: 'My second version of Personal Website',
    tech: ['React', 'Bootstrap', 'SCSS'],
    link: '#',
    color: '#000000',
    emoji: '💻',
    size: 'wide',
  },
  {
    title: 'Smart Hydroponic',
    description: 'My first project for Internet of Things.',
    tech: ['Laravel', 'Bootstrap', 'SCSS'],
    link: '#',
    color: '#000000',
    emoji: '🌱',
    size: 'tall',
  },
  {
    title: '',
    emoji: '🔥',
    color: '#1e2a3a',
    size: 'square',
  },
  // Row 7
  {
    title: '',
    emoji: '🔗',
    color: '#a8e6cf',
    size: 'square',
  },
  {
    title: 'Crawlerhub',
    description: 'Web Crawler by InData Indonesia.',
    tech: ['React', 'AntDesign', 'Django'],
    link: '#',
    color: '#000000',
    emoji: '🕷️',
    size: 'wide',
  },
  {
    title: '',
    emoji: '🎨',
    color: '#f8d7da',
    size: 'square',
  },
]
</script>

<style scoped>
/* ============================
   Grid Layout
   ============================ */
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  grid-auto-rows: 200px;
}

/* ============================
   Base Card
   ============================ */
.project-card {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-2px);
}

/* Card sizes */
.card-wide {
  grid-column: span 2;
}

.card-tall {
  grid-row: span 2;
}

/* ============================
   Action Buttons (top-right)
   Show on hover with slide-down
   ============================ */
.card-actions {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  display: flex;
  gap: 8px;
  transform: translateY(-100px);
  transition: transform 0.3s ease;
}

.project-card:hover .card-actions {
  transform: translateY(0);
}

.action-btn {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.action-btn:hover {
  transform: scale(1.1);
}

/* ============================
   Info Overlay (bottom-left)
   ============================ */
.card-info-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 24px;
  z-index: 10;
}

/* ============================
   Tech Pill Tags
   ============================ */
.tech-pill {
  padding: 6px 16px;
  background-color: rgba(77, 201, 176, 0.25);
  border-radius: 32px;
  display: flex;
}

/* ============================
   Wide Card — Mockup (right side, rotated)
   ============================ */
.mockup-wide {
  position: absolute;
  z-index: 0;
  right: 0;
  top: -20px;
  transform: translateX(25%) rotate(-24deg);
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.project-card:hover .mockup-wide {
  opacity: 0.9;
}

/* ============================
   Tall Card — Mobile Mockups (right side, rotated)
   ============================ */
.mockup-tall {
  position: absolute;
  z-index: 0;
  right: -12px;
  top: -20px;
  transform: translateX(50%) rotate(-30deg);
  opacity: 0.7;
  display: flex;
  gap: 16px;
  transition: opacity 0.3s ease;
}

.project-card:hover .mockup-tall {
  opacity: 0.9;
}

/* ============================
   Responsive
   ============================ */
@media (max-width: 1024px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 180px;
  }
}

@media (max-width: 640px) {
  .project-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 200px;
  }

  .card-wide {
    grid-column: span 1;
  }

  .card-tall {
    grid-row: span 2;
  }

  .mockup-wide {
    transform: translateX(30%) rotate(-24deg);
  }

  .card-info-overlay {
    padding: 16px;
  }
}
</style>
