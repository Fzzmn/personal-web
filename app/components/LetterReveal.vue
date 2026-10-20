<template>
  <TextScramble
    :text="text"
    :as="tag"
    :delay="delay"
    :duration="duration"
  />
</template>

<script setup lang="ts">
import TextScramble from './TextScramble.vue'

withDefaults(defineProps<{
  text: string
  delay?: number
  stagger?: number
  tag?: string
  duration?: number
}>(), {
  delay: 0,
  tag: 'span',
  duration: 750,
})
</script>

<style scoped>
</style>
