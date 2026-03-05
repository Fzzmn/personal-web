<template>
  <!--
    LetterReveal — Typewriter-style per-character animation
    Each letter appears instantly like a keystroke
    Props: text, delay (ms), stagger (ms between chars)
  -->
  <component :is="tag" class="letter-reveal">
    <span
      v-for="(char, index) in characters"
      :key="index"
      class="letter-char"
      :style="{
        animationDelay: `${delay + index * stagger}ms`,
      }"
    >{{ char }}</span>
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  text: string
  delay?: number
  stagger?: number
  tag?: string
}>(), {
  delay: 0,
  stagger: 30,
  tag: 'span',
})

const characters = computed(() =>
  props.text.split('').map(c => (c === ' ' ? '\u00A0' : c))
)
</script>

<style scoped>
.letter-reveal {
  display: inline;
}

.letter-char {
  display: inline-block;
  opacity: 0;
  animation: typeIn 0s steps(1) forwards;
  white-space: pre;
}

@keyframes typeIn {
  to {
    opacity: 1;
  }
}
</style>

