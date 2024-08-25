<!-- eslint-disable vue/valid-define-props -->
<script setup lang="ts">
import { defineProps, type PropType, computed } from 'vue'

enum BUTTON_TYPE {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary'
}

const props = defineProps({
  text: {
    type: String,
    required: false,
    default: 'Button text'
  },
  buttonType: {
    type: String as PropType<BUTTON_TYPE | string>,
    required: false,
    default: BUTTON_TYPE.PRIMARY
  }
})

const buttonStyles = computed(() => {
  if (props.buttonType === BUTTON_TYPE.PRIMARY) return 'button-primary'

  return ''
})
</script>
<template>
  <button :class="buttonStyles">
    {{ props.text }}
  </button>
</template>

<style scoped>
.button-primary {
  @apply bg-primary text-white py-3 px-5 rounded-full font-bold transition-all duration-300 ease-in-out hover:bg-primary-hover;
}
</style>