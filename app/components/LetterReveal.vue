<template>
  <!--
    LetterReveal — Typewriter-style per-character animation
    Characters are grouped by words so line breaks only happen between words.
    Props: text, delay (ms), stagger (ms between chars)
  -->
  <component :is="tag" class="letter-reveal">
    <template v-for="(word, wIndex) in words" :key="wIndex">
      <!-- Space between words -->
      <span
        v-if="wIndex > 0"
        class="letter-char"
        :style="{ animationDelay: `${delay + (word.globalOffset - 1) * stagger}ms` }"
      >{{ '\u00A0' }}</span>
      <!-- Word group — never breaks mid-word -->
      <span class="letter-word">
        <span
          v-for="(char, cIndex) in word.chars"
          :key="cIndex"
          class="letter-char"
          :style="{ animationDelay: `${delay + (word.globalOffset + cIndex) * stagger}ms` }"
        >{{ char }}</span>
      </span>
    </template>
  </component>
</template>

<script setup lang="ts">
interface Word {
  chars: string[]
  globalOffset: number
}

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

const words = computed<Word[]>(() => {
  const parts = props.text.split(' ')
  const result: Word[] = []
  let offset = 0
  for (const part of parts) {
    result.push({
      chars: part.split(''),
      globalOffset: offset,
    })
    offset += part.length + 1 // +1 for the space
  }
  return result
})
</script>

<style scoped>
.letter-reveal {
  display: inline;
}

.letter-word {
  display: inline-block;
  white-space: nowrap;
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
