<template>
  <section id="certifications" class="py-24 px-6 lg:px-0">
    <div class="max-w-6xl mx-auto w-full">
      <!-- Section Header (Matches Projects style) -->
      <div class="mb-16 text-center">
        <h1 class="text-2xl lg:text-3xl font-mono font-bold text-term-text mb-4">
          Featured Certifications<span class="text-term-muted animate-pulse">_</span>
        </h1>
        <p class="text-sm font-mono text-term-muted max-w-2xl mx-auto">
          A selection of professional recognitions and academic achievements I've earned throughout my journey.
        </p>
      </div>

      <!-- Grid Wrapper -->
      <div class="cert-grid">
        <div
          v-for="(cert, index) in certifications"
          :key="cert.title"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 100 + index * 100 } }"
          class="cert-card group"
        >
          <!-- Banner Image (Top) -->
          <div class="cert-image-area" :style="{ backgroundColor: cert.bgColor || '#111' }">
            <template v-if="cert.image">
              <img :src="cert.image" :alt="cert.title" class="cert-img group-hover:scale-105" />
            </template>
            <template v-else>
              <span class="text-6xl grayscale opacity-30 group-hover:scale-110 transition-transform duration-500">
                {{ cert.emoji || '📜' }}
              </span>
            </template>
          </div>

          <!-- Content (Bottom) -->
          <div class="cert-content">
            <h3 class="cert-title">{{ cert.title }}</h3>
            <p class="cert-desc">{{ cert.description }}</p>
            
            <!-- Tech/Tag Pills (Bottom) -->
            <div class="cert-tags">
              <span v-for="tag in cert.tags" :key="tag" class="tag-pill">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Certification {
  title: string
  description: string
  tags: string[]
  image?: string
  emoji?: string
  bgColor?: string
}

const certifications: Certification[] = [
  {
    title: 'Certification Title 01',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    tags: ['Dummy', 'Tag', 'Test'],
    emoji: '📜',
    bgColor: '#1a1a1a'
  },
  {
    title: 'Certification Title 02',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    tags: ['Placeholder', 'Data'],
    emoji: '📜',
    bgColor: '#161B22'
  },
  {
    title: 'Certification Title 03',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    tags: ['Generic', 'Simple'],
    emoji: '📜',
    bgColor: '#0a1a2a'
  },
  {
    title: 'Certification Title 04',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
    tags: ['Example', 'UX'],
    emoji: '📜',
    bgColor: '#111'
  },
  {
    title: 'Certification Title 05',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.',
    tags: ['Sample', 'UI'],
    emoji: '📜',
    bgColor: '#0f0f0f'
  },
  {
    title: 'Certification Title 06',
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.',
    tags: ['Testing', 'Dev'],
    emoji: '📜',
    bgColor: '#1a1a2e'
  }
]
</script>

<style scoped>
/* ── Grid System (Matches Projects) ── */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* ── Card Base ── */
.cert-card {
  display: flex;
  flex-direction: column;
  background-color: #0d0d0d; /* Pitch dark like reference */
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
}

.cert-card:hover {
  transform: translateY(-5px);
  border-color: rgba(77, 201, 176, 0.3);
  background-color: #111;
}

/* ── Image/Banner Part ── */
.cert-image-area {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.cert-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

/* ── Content Part ── */
.cert-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.cert-title {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 1.15rem;
  color: white;
  margin-bottom: 12px;
}

.cert-desc {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: #888;
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
}

/* ── Tags Pills ── */
.cert-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.tag-pill {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  padding: 4px 10px;
  background: #1a1a1a;
  color: #666;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  transition: all 0.3s ease;
}

.cert-card:hover .tag-pill {
  color: #999;
  border-color: rgba(255, 255, 255, 0.1);
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .cert-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .cert-grid {
    grid-template-columns: 1fr;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .5; }
}
</style>
