<template>
  <component :is="as" :class="['text-scramble', customClass]">
    {{ displayText }}
  </component>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  text: string
  as?: string
  duration?: number
  delay?: number
  customClass?: string
  symbols?: string
}>(), {
  as: 'span',
  duration: 750,
  delay: 50,
  customClass: '',
  symbols: '^_-/\\*~#!?><0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
})

const displayText = ref('')
let animId: number | null = null
let timeoutId: ReturnType<typeof setTimeout> | null = null

function getRandomChar(pool: string) {
  return pool[Math.floor(Math.random() * pool.length)]
}

function runScramble() {
  if (timeoutId) clearTimeout(timeoutId)
  if (animId) cancelAnimationFrame(animId)

  const original = props.text ?? ''
  if (!original) {
    displayText.value = ''
    return
  }

  const pool = props.symbols
  const len = original.length

  // Generate initial scrambled string preserving whitespace
  displayText.value = original
    .split('')
    .map(ch => (ch === ' ' || ch === '\n' || ch === '\t' ? ch : getRandomChar(pool)))
    .join('')

  timeoutId = setTimeout(() => {
    const startTime = performance.now()
    const dur = props.duration

    // Generate random resolving threshold jitter per character (between 0.2 and 1.0 of progress)
    const charProgressThresholds = original.split('').map((_, idx) => {
      const base = idx / len
      // Slight randomness so it doesn't resolve in a purely mechanical robotic line
      return Math.min(1, Math.max(0, base + (Math.random() * 0.25 - 0.125)))
    })

    function frame(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / dur, 1)

      let res = ''
      for (let i = 0; i < len; i++) {
        const char = original[i]!
        if (char === ' ' || char === '\n' || char === '\t') {
          res += char
        } else if (progress >= 1 || progress >= charProgressThresholds[i]!) {
          res += char
        } else {
          // Still scrambling
          res += getRandomChar(pool)
        }
      }

      displayText.value = res

      if (progress < 1) {
        animId = requestAnimationFrame(frame)
      } else {
        displayText.value = original
      }
    }

    animId = requestAnimationFrame(frame)
  }, props.delay)
}

onMounted(() => {
  runScramble()
})

watch(() => props.text, () => {
  runScramble()
})

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId)
  if (animId) cancelAnimationFrame(animId)
})
</script>

<style scoped>
.text-scramble {
  display: inline;
}
</style>
