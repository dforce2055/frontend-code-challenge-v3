<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon.vue';

const props = defineProps({
  text: {
    type: String,
    required: false,
    default: 'Mostrar favoritos:'
  },
  active: {
    type: Boolean,
    required: false,
    default: false
  }
})
const emit = defineEmits(['favorite'])


</script>
<template>
  <div class="flex justify-start items-center h-[30px] gap-4">
    <span class="w-auto">{{ props.text }}</span>
    <FavoriteIcon @click="emit('favorite', !props.active)" :active="props.active" />
  </div>
</template>
