<template>
  <!--
    NavBar — macOS-style glossy glass pill navigation
    Frosted glass effect with gradient sheen and soft shadows
    Hover shows tooltip label below with glassmorphism
  -->
  <nav class="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none">
    <div class="nav-pill pointer-events-auto">
      <div
        v-for="item in menuItems"
        :key="item.path"
        class="relative"
        @mouseenter="hoveredItem = item.path"
        @mouseleave="hoveredItem = null"
      >
        <NuxtLink
          :to="item.path"
          :class="[
            'nav-icon',
            isActive(item.path)
              ? 'nav-icon--active'
              : 'nav-icon--inactive',
          ]"
          :aria-label="item.label"
        >
          <!-- Home -->
          <svg v-if="item.icon === 'home'" class="w-[18px] h-[18px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <!-- About -->
          <svg v-else-if="item.icon === 'person'" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          <!-- Experience / Link -->
          <svg v-else-if="item.icon === 'link'" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
          </svg>
          <!-- Projects / Code -->
          <svg v-else-if="item.icon === 'code'" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
          <!-- Blog -->
          <svg v-else-if="item.icon === 'book'" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
          </svg>
          <!-- Contact -->
          <svg v-else-if="item.icon === 'chat'" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
        </NuxtLink>

        <!-- Tooltip label below icon -->
        <Transition name="tooltip">
          <div
            v-if="hoveredItem === item.path"
            class="nav-tooltip"
          >
            {{ item.label }}
          </div>
        </Transition>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const hoveredItem = ref<string | null>(null)

const menuItems = [
  { path: '/', label: 'Home', icon: 'home' },
  { path: '/about', label: 'About', icon: 'person' },
  { path: '/experience', label: 'Experience', icon: 'link' },
  { path: '/projects', label: 'Projects', icon: 'code' },
  { path: '/blogs', label: 'Blogs', icon: 'book' },
  { path: '/contact', label: 'Contact', icon: 'chat' },
]

const isActive = (path: string): boolean => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<style scoped>
/* ── Glossy macOS-style Nav Pill ── */
.nav-pill {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 7px 11px;
  border-radius: 50px;
  /* Frosted glass — same base color as page (#0a0f1a) at 50% opacity */
  background: rgba(10, 15, 26, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  /* Solid green border like reference */
  border: 1px solid rgba(77, 201, 176, 0.5);
}

/* ── Nav Icon Button ── */
.nav-icon {
  width: 43px;
  height: 43px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}

.nav-icon--active {
  background: linear-gradient(
    135deg,
    rgba(47, 77, 102, 0.9) 0%,
    rgba(42, 63, 85, 0.95) 100%
  );
  color: #4dc9b0;

}

.nav-icon--inactive {
  color: #6b7f94;
}

.nav-icon--inactive:hover {
  color: #c8d6e5;
  background: linear-gradient(
    135deg,
    rgba(47, 77, 102, 0.5) 0%,
    rgba(42, 63, 85, 0.6) 100%
  );

  transform: scale(1.08);
}

/* ── Glossy Tooltip ── */
.nav-tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
  padding: 5px 14px;
  border-radius: 8px;
  /* Frosted glass tooltip */
  background: linear-gradient(
    135deg,
    rgba(47, 77, 102, 0.85) 0%,
    rgba(36, 58, 79, 0.9) 100%
  );
  backdrop-filter: blur(16px) saturate(1.6);
  -webkit-backdrop-filter: blur(16px) saturate(1.6);
  border: 1px solid rgba(200, 214, 229, 0.1);
  border-top-color: rgba(255, 255, 255, 0.12);

  /* Text */
  color: #c8d6e5;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  white-space: nowrap;
  letter-spacing: 0.02em;
}

/* Tooltip arrow */
.nav-tooltip::before {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-bottom-color: rgba(47, 77, 102, 0.85);
}

/* ── Tooltip Transition ── */
.tooltip-enter-active {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.tooltip-leave-active {
  transition: all 0.12s ease-in;
}

.tooltip-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(-6px) scale(0.9);
}

.tooltip-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-4px) scale(0.95);
}
</style>
