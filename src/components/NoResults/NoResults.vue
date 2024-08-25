<script setup lang="ts">
import { defineProps } from 'vue'
import Button from '@/components/Button/Button.vue';

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: 'Uh-oh!'
  },
  description: {
    type: String,
    required: false,
    default: '¡Pareces perdido en tu viaje!'
  },
  textButton: {
    type: String,
    required: false,
    default: 'Eliminar filtros'
  },
  buttonType: {
    type: String,
    required: false,
    default: 'primary'
  }
})

const emit = defineEmits(['clear-filters'])

const onClearFilters = () => {
  emit('clear-filters')
}

</script>
<template>
  <section id="no-results">
    <div class="flex flex-col justify-center items-center gap-6 ">
      <h1 class="text-4xl font-bold text-gray-800">{{ props.title }}</h1>
      <p class="text-xl font-medium text-[#5e5e5e]">{{ props.description }}</p>
      <Button :text="props.textButton" :button-type="buttonType" @click="onClearFilters" />
    </div>
  </section>
</template>
