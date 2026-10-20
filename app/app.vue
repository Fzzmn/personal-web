<template>
  <!--
    Main App — Terminal aesthetic portfolio
    Multi-page layout with shared NavBar and Footer
  -->
  <div class="relative bg-base-bg min-h-screen flex flex-col text-term-text font-mono">
    <!-- Initial Loading Transition: 2x3 dot matrix pulsing in center -->
    <Transition name="loader-fade">
      <div
        v-if="isLoading"
        class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base-bg"
      >
        <div class="grid grid-cols-2 gap-3 p-4">
          <div
            v-for="i in 6"
            :key="i"
            class="w-3 h-3 rounded-full"
            :class="i <= 3 ? 'bg-term-dot-green' : 'bg-term-dot-blue'"
            :style="{
              animation: 'dotPulse 1s ease-in-out infinite',
              animationDelay: `${(i - 1) * 120}ms`
            }"
          />
        </div>
      </div>
    </Transition>

    <!-- Navigation -->
    <NavBar />

    <!-- Page Content -->
    <main class="flex-1 flex flex-col">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  // Brief loading screen on initial site load
  setTimeout(() => {
    isLoading.value = false
  }, 850)
})
</script>

<style>
@keyframes dotPulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.85);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
    box-shadow: 0 0 12px currentColor;
  }
}

.loader-fade-leave-active {
  transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}
.loader-fade-leave-to {
  opacity: 0;
}
</style>
