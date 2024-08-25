<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'
import SearchBar from '@/components/SearchBar/SearchBar.vue'

const props = defineProps({
  background: {
    type: String,
    required: false,
    default: '/images/welcome.png'
  },
  clearSearch: {
    type: Boolean,
    required: false,
    default: false
  }
})
const emit = defineEmits<{
  (e: 'search', name: string): void
}>()

const backgroundImage = computed(() => `url(${props.background})`)
const onSearch = (search: string) => {
  emit('search', search)
}
</script>
<template>
  <div class="flex flex-col gap-4 bg-gray-800 w-screen h-[455px]  items-center justify-center z-100 header-bg">
    <div class="">
      <img class="w-[347px] h-[122px]" src="/images/title.png" alt="title" />
    </div>
    <div class="flex w-full mx-auto items-center justify-center px-2">
      <SearchBar @search="onSearch" :clear-search="props.clearSearch" />
    </div>
  </div>

</template>

<style scoped>
.header-bg {
  background: rgb(3, 2, 36);
  background-image: radial-gradient(circle, rgba(3, 2, 36, 0.1) 0%, rgba(8, 31, 50, .5) 100%), v-bind(backgroundImage);
  @apply z-0 bg-cover bg-center bg-no-repeat h-[455px] w-screen;
}
</style>