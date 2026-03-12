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
            <!-- Emoji center (visible by default, fades on hover) -->
            <div class="w-full h-full flex items-center justify-center transition-opacity duration-300 group-hover:opacity-20">
              <img
                v-if="project.logoImage"
                :alt="project.title || 'Project'"
                :src="project.logoImage"
                class="h-20 w-auto"
                loading="lazy"
              />
              <span v-else class="text-5xl opacity-70">{{ project.emoji }}</span>
            </div>
            <!-- Info overlay (appears on hover) -->
            <div class="square-info-overlay">
              <h3 v-if="project.title" class="font-mono text-sm font-bold text-white mb-1">{{ project.title }}</h3>
              <p v-if="project.description" class="font-mono text-xs text-white/80 leading-relaxed line-clamp-3">{{ project.description }}</p>
              <div v-if="project.tech?.length" class="flex flex-wrap gap-1.5 mt-2">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="tech-pill-sm"
                >{{ tech }}</span>
              </div>
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
  {
    title: 'NavEvent',
    description: 'A comprehensive mobile event management system for AirNav Indonesia built with Flutter, featuring real-time updates and interactive scheduling.',
    tech: ['Flutter', 'REST API', 'Figma', 'Clean Architecture'],
    link: '#',
    mockupImage: '/images/projects/naveven.png',
    color: '#0a0f18',
    size: 'wide',
  },
  {
    title: 'Helpdesk Mobile',
    description: 'Enterprise internal support application with real-time communication features between users and administrators.',
    tech: ['Flutter', 'WebSocket', 'REST API'],
    link: '#',
    mockupImage: '/images/projects/helpdesk.png',
    color: '#0f1a26',
    size: 'tall',
  },
  {
    title: 'Arsipku Mobile',
    description: 'Production-ready mobile archive management system for secure and efficient company document handling.',
    tech: ['Flutter', 'Clean Architecture', 'REST API'],
    link: '#',
    mockupImage: '/images/projects/arsipku.png',
    color: '#1a1e2a',
    size: 'wide',
  },
  {
    title: 'Wolio Learning',
    description: 'My University Capstone Project — An interactive digital learning platform designed to bridge the gap between students and educational resources.',
    tech: ['Vue.js', 'Firebase', 'TailwindCSS'],
    link: '#',
    emoji: '📚',
    color: '#0f2a20',
    size: 'wide',
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

/* Small tech pill for square cards */
.tech-pill-sm {
  padding: 2px 8px;
  background-color: rgba(77, 201, 176, 0.3);
  border-radius: 16px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  color: white;
}

/* ============================
   Square Card — Hover Info Overlay
   ============================ */
.square-info-overlay {
  position: absolute;
  inset: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.85) 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;
  border-radius: 15px;
}

.project-card:hover .square-info-overlay {
  opacity: 1;
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
