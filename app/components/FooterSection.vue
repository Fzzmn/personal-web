<template>
  <!--
    FooterSection — Minimal footer with location, live clock, and version
    Matches dafkur.com style exactly
  -->
  <footer class="py-6 px-6 lg:px-0">
    <div class="max-w-2xl mx-auto w-full">
      <div class="flex items-center justify-between font-mono text-xs text-term-muted">
        <div>
          <p>Tangerang, Banten - Indonesia</p>
          <p>UTC+7 - {{ currentTime }}</p>
        </div>
        <div class="text-right">
          <p>Fauziman Portfolio</p>
          <p>v1.0.0</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentTime = ref('')

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('en-GB', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
}

let interval: ReturnType<typeof setInterval>

onMounted(() => {
  updateTime()
  interval = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>
