<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  background: {
    type: String,
    required: false,
    default: '/images/welcome.png'
  },

})
const emit = defineEmits(['search'])

const backgroundImage = computed(() => `url(${props.background})`)

</script>
<template>
  <footer class=" bg-gray-800 w-screen h-[142px]  z-100 footer-bg">
  </footer>
</template>

<style scoped>
.footer-bg {
  background: rgb(3, 2, 36);
  background-image: radial-gradient(circle, rgba(3, 2, 36, 0.1) 0%, rgba(8, 31, 50, .5) 100%), v-bind(backgroundImage);
  background-position-x: center;
  background-position-y: -60px;
  @apply z-0 bg-auto bg-no-repeat w-screen;
}
</style>