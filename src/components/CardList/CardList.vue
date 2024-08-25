<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { Character } from '../../types'
import Card from '../Card/Card.vue'

const props = defineProps({
  characters: {
    type: Array as () => Character[],
    required: true
  },
  gridLength: {
    type: Number,
    default: 3
  }
})

const emit = defineEmits<{
  (e: 'click', character: Character): void
}>()

const gridClasses = computed(() => {
  let classes = 'sm:grid-cols-2 lg:grid-cols-3 '
  if (props.gridLength === 2) classes = 'sm:grid-cols-1 lg:grid-cols-2'
  if (props.gridLength === 3) classes = 'sm:grid-cols-2 lg:grid-cols-3'
  if (props.gridLength === 4) classes = 'sm:grid-cols-3 lg:grid-cols-4'

  return classes
})
</script>
<template>
  <div class="bg-white">
    <div class="mx-auto overflow-hidden px-0 py-8 sm:px-0 sm:py-12 lg:px-0">
      <div :class="['grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-3', gridClasses]">
        <Card v-for="character in props.characters" :key="character.id" :character="character"
          @click="emit('click', $event)" />
      </div>
    </div>
  </div>
</template>
