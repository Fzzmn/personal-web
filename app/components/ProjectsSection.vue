<template>
  <!--
    ProjectsSection — Bento Grid Layout with subtle background grid pattern
    Center-aligned header: 'Projects' eyebrow, 'Selected Work' title, 2-line description
    Bento Grid: 4-column layout (2x1, 1x1, 1x2, 2x1, 1x1) with precise rectangular fit
  -->
  <section class="projects-section relative min-h-screen py-24 px-6 lg:px-8">
    <div class="max-w-6xl mx-auto w-full relative z-10">
      
      <!-- Center-Aligned Header -->
      <div class="text-center mb-14">
        <p class="text-term-label font-mono text-xs uppercase tracking-widest mb-2 font-semibold">
          <TextScramble text="Projects" :duration="500" />
        </p>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-white mb-3 tracking-tight">
          <TextScramble text="Selected Work" :duration="650" />
        </h2>
        <p class="max-w-xl mx-auto text-center font-mono text-xs sm:text-sm text-term-muted leading-relaxed">
          <TextScramble
            text="A curated selection of mobile applications and digital systems engineered with clean architecture, robust APIs, and fluid user experiences."
            :duration="750"
          />
        </p>
      </div>

      <!-- Bento Grid (4 Columns, responsive row height on mobile, 260px on desktop) -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[260px]">

        <!-- CARD 1: NavEvent (2x1 Horizontal) -->
        <NuxtLink
          to="/projects/navevent"
          class="bento-card col-span-1 md:col-span-2 md:row-span-1 group min-h-[250px] md:min-h-0"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 60 } }"
        >
          <!-- Mockup Image: Absolute, rotated -12deg, scale on hover -->
          <div class="absolute -right-4 sm:-right-6 -top-4 sm:-top-6 w-[58%] sm:w-[50%] pointer-events-none z-0 overflow-visible">
            <img
              src="/images/projects/naveven.png"
              alt="NavEvent Mockup"
              class="w-full h-auto object-cover -rotate-12 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_16px_30px_rgba(0,0,0,0.7)]"
              loading="lazy"
            />
          </div>

          <!-- Smooth Gradient Fade (replacing opaque dark block) -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

          <!-- Bottom Left Content -->
          <div class="absolute bottom-5 left-5 right-16 z-20 flex flex-col items-start">
            <span class="text-[10px] font-mono font-bold tracking-widest text-term-label uppercase mb-1">
              MOBILE DEVELOPER
            </span>
            <h3 class="text-lg sm:text-xl font-mono font-bold text-white group-hover:text-term-label transition-colors mb-2">
              NavEvent
            </h3>
            <div class="flex flex-wrap gap-1.5">
              <span class="tech-badge">Flutter</span>
              <span class="tech-badge">REST API</span>
              <span class="tech-badge">Clean Arch</span>
              <span class="tech-badge">Figma</span>
            </div>
          </div>

          <!-- Bottom Right Arrow Button -->
          <div class="corner-arrow-btn">
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </NuxtLink>

        <!-- CARD 2: Wolio Learning (1x1 Square) -->
        <NuxtLink
          to="/projects/wolio"
          class="bento-card col-span-1 md:col-span-1 md:row-span-1 group min-h-[220px] md:min-h-0"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 120 } }"
        >
          <!-- Clean Project Logo / Icon in Center Top -->
          <div class="absolute top-8 left-1/2 -translate-x-1/2 z-0 flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <div class="w-16 h-16 rounded-2xl bg-base-nav/40 border border-base-border/60 flex items-center justify-center shadow-lg group-hover:border-term-label/40 transition-colors">
              <svg class="w-8 h-8 text-term-dot-green" fill="none" stroke="currentColor" stroke-width="1.7" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
          </div>

          <!-- Smooth Gradient Fade -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

          <!-- Bottom Left Content -->
          <div class="absolute bottom-5 left-5 right-14 z-20 flex flex-col items-start">
            <span class="text-[10px] font-mono font-bold tracking-widest text-term-label uppercase mb-1">
              WEB DEVELOPER
            </span>
            <h3 class="text-base sm:text-lg font-mono font-bold text-white group-hover:text-term-label transition-colors mb-2">
              Wolio Learning
            </h3>
            <div class="flex flex-wrap gap-1.5">
              <span class="tech-badge">Vue.js</span>
              <span class="tech-badge">Firebase</span>
            </div>
          </div>

          <!-- Bottom Right Arrow Button -->
          <div class="corner-arrow-btn">
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </NuxtLink>

        <!-- CARD 3: Helpdesk Mobile (1x2 Vertical Rectangle on Right Side) -->
        <NuxtLink
          to="/projects/helpdesk"
          class="bento-card col-span-1 md:col-span-1 md:row-span-2 group min-h-[300px] md:min-h-0 md:h-full"
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 450, delay: 180 } }"
        >
          <!-- Mockup Image: Absolute, rotated -12deg, scale on hover -->
          <div class="absolute -right-3 sm:-right-6 -top-2 sm:-top-4 w-[68%] sm:w-[85%] pointer-events-none z-0">
            <img
              src="/images/projects/helpdesk.png"
              alt="Helpdesk Mockup"
              class="w-full h-auto object-cover -rotate-12 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_20px_40px_rgba(0,0,0,0.75)]"
              loading="lazy"
            />
          </div>

          <!-- Smooth Gradient Fade -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent z-10 pointer-events-none" />

          <!-- Bottom Left Content -->
          <div class="absolute bottom-5 left-5 right-14 z-20 flex flex-col items-start">
            <span class="text-[10px] font-mono font-bold tracking-widest text-term-label uppercase mb-1">
              MOBILE DEVELOPER
            </span>
            <h3 class="text-lg sm:text-xl font-mono font-bold text-white group-hover:text-term-label transition-colors mb-2">
              Helpdesk Mobile
            </h3>
            <div class="flex flex-wrap gap-1.5">
              <span class="tech-badge">Flutter</span>
              <span class="tech-badge">WebSocket</span>
              <span class="tech-badge">REST API</span>
            </div>
          </div>

          <!-- Bottom Right Arrow Button -->
          <div class="corner-arrow-btn">
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </NuxtLink>

        <!-- CARD 4: Arsipku Mobile (2x1 Horizontal) -->
        <NuxtLink
          to="/projects/arsipku"
          class="bento-card col-span-1 md:col-span-2 md:row-span-1 group min-h-[250px] md:min-h-0"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 240 } }"
        >
          <!-- Mockup Image: Absolute, rotated -12deg, scale on hover -->
          <div class="absolute -right-4 sm:-right-6 -top-4 sm:-top-6 w-[58%] sm:w-[50%] pointer-events-none z-0">
            <img
              src="/images/projects/arsipku.png"
              alt="Arsipku Mockup"
              class="w-full h-auto object-cover -rotate-12 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_16px_30px_rgba(0,0,0,0.7)]"
              loading="lazy"
            />
          </div>

          <!-- Smooth Gradient Fade -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

          <!-- Bottom Left Content -->
          <div class="absolute bottom-5 left-5 right-16 z-20 flex flex-col items-start">
            <span class="text-[10px] font-mono font-bold tracking-widest text-term-label uppercase mb-1">
              MOBILE DEVELOPER
            </span>
            <h3 class="text-lg sm:text-xl font-mono font-bold text-white group-hover:text-term-label transition-colors mb-2">
              Arsipku Mobile
            </h3>
            <div class="flex flex-wrap gap-1.5">
              <span class="tech-badge">Flutter</span>
              <span class="tech-badge">Clean Arch</span>
              <span class="tech-badge">REST API</span>
            </div>
          </div>

          <!-- Bottom Right Arrow Button -->
          <div class="corner-arrow-btn">
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </NuxtLink>

        <!-- CARD 5: Diskominfo Archive (1x1 Square) -->
        <NuxtLink
          to="/projects/archive"
          class="bento-card col-span-1 md:col-span-1 md:row-span-1 group min-h-[220px] md:min-h-0"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: 300 } }"
        >
          <!-- Clean Project Logo / Icon in Center Top -->
          <div class="absolute top-8 left-1/2 -translate-x-1/2 z-0 flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <div class="w-16 h-16 rounded-2xl bg-base-nav/40 border border-base-border/60 flex items-center justify-center shadow-lg group-hover:border-term-label/40 transition-colors">
              <svg class="w-8 h-8 text-term-dot-green" fill="none" stroke="currentColor" stroke-width="1.7" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </div>
          </div>

          <!-- Smooth Gradient Fade -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

          <!-- Bottom Left Content -->
          <div class="absolute bottom-5 left-5 right-14 z-20 flex flex-col items-start">
            <span class="text-[10px] font-mono font-bold tracking-widest text-term-label uppercase mb-1">
              WEB DEVELOPER
            </span>
            <h3 class="text-base sm:text-lg font-mono font-bold text-white group-hover:text-term-label transition-colors mb-2">
              Diskominfo Archive
            </h3>
            <div class="flex flex-wrap gap-1.5">
              <span class="tech-badge">Web Dev</span>
              <span class="tech-badge">Database</span>
            </div>
          </div>

          <!-- Bottom Right Arrow Button -->
          <div class="corner-arrow-btn">
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </NuxtLink>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TextScramble from './TextScramble.vue'
</script>

<style scoped>
/* Page with subtle grid lines */
.projects-section {
  background-color: #0a0f1a;
  background-image: 
    linear-gradient(to right, rgba(42, 63, 85, 0.22) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(42, 63, 85, 0.22) 1px, transparent 1px);
  background-size: 32px 32px;
}

/* Base Bento Card */
.bento-card {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #111827;
  border: 1px solid rgba(42, 63, 85, 0.7);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.3s ease,
              box-shadow 0.3s ease;
  cursor: pointer;
  display: block;
}

.bento-card:hover {
  transform: translateY(-4px);
  border-color: rgba(77, 201, 176, 0.45);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(77, 201, 176, 0.15);
}

/* Tech Badges */
.tech-badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  color: rgba(200, 214, 229, 0.9);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 2px 7px;
  border-radius: 4px;
  white-space: nowrap;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.bento-card:hover .tech-badge {
  border-color: rgba(77, 201, 176, 0.3);
  color: #fff;
}

/* Corner Arrow Button in bottom-right */
.corner-arrow-btn {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 25;
  width: 1.85rem;
  height: 1.85rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(42, 63, 85, 0.8);
  background: rgba(10, 15, 26, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: #6b7f94;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@media (min-width: 640px) {
  .corner-arrow-btn {
    bottom: 1.25rem;
    right: 1.25rem;
    width: 2rem;
    height: 2rem;
  }
}

.bento-card:hover .corner-arrow-btn {
  border-color: rgba(77, 201, 176, 0.5);
  color: #4dc9b0;
  background: rgba(10, 15, 26, 0.95);
  box-shadow: 0 0 12px rgba(77, 201, 176, 0.2);
}
</style>
