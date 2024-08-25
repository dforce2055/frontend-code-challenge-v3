<script setup lang="ts">
import { defineEmits, defineProps, ref, watch } from 'vue';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon.vue';

const props = defineProps({
  text: {
    type: String,
    required: false,
    default: 'Mostrar favoritos:'
  },
})
const emit = defineEmits(['favorite'])
const active = ref(false)

watch(active, (value) => {
  emit('favorite', value)
})

</script>
<template>
  <div class="flex justify-start items-center h-[30px] gap-4">
    <span class="w-auto">{{ props.text }}</span>
    <FavoriteIcon @click="active = !active" :active="active" />
  </div>
</template>

<style lang="scss" scoped></style>