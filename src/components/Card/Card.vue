<script setup lang="ts">
import { computed, defineProps, type PropType, ref, onMounted } from 'vue'
import type { Character } from '@/types';
import { STATUS } from '@/types'
import { useAppStore } from '@/store'

import FavoriteIcon from '../FavoriteIcon/FavoriteIcon.vue'

const props = defineProps({
  character: {
    type: Object as PropType<Character>,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'click', character: Character): void
}>()

const appStore = useAppStore()
const randomIdNumber = Math.floor(Math.random() * 1000)
const id = computed(() => randomIdNumber.toString())
const loading = ref(true)
const characterIsOnFavorites = computed(() => appStore.favorites.some((c) => c.id === props.character.id))

const statusStyles = computed(() => {
  if (props.character.status === STATUS.ALIVE) return 'bg-green-500'
  if (props.character.status === STATUS.DEAD) return 'bg-red-500'
  if (props.character.status === STATUS.UNKNOWN) return 'bg-gray-300'
  return 'bg-gray-300'
})


const onSetFavorite = () => {
  if (characterIsOnFavorites.value) {
    appStore.removeFavorite(props.character)
  } else {
    appStore.addFavorite(props.character)
  }
}
const onClickCard = () => {
  emit('click', props.character)
}


onMounted(() => {
  const image = document.getElementById(id.value) as HTMLImageElement | null

  if (image) {
    image.addEventListener('load', () => {
      loading.value = false
    })
  }
})

</script>
<template>
  <div :key="props.character.id" data-test="activity-card" :class="[
    'group card rounded-md  h-36 flex gap-2 transition-all duration-200 ease-linear hover:opacity-80',
    loading ? 'animate-pulse hover:cursor-progress' : 'hover:cursor-pointer'
  ]" @click="onClickCard">
    <!-- image -->
    <div class="relative">
      <img :id="id" :class="['w-36 h-36 rounded-l-md', loading ? 'opacity-0' : 'opacity-100']"
        :src="props.character.image" alt="character" />
      <FavoriteIcon class="absolute bottom-1 right-1" @click="onSetFavorite" :active="characterIsOnFavorites" />
    </div>
    <!-- content -->
    <div class="flex flex-col gap-2  py-4">
      <div>
        <div class="flex items-center gap-2">
          <span :class="['inline-flex rounded-full h-2 w-2', statusStyles]"></span>
          <span class="font-xxs text-gray-500">{{ props.character.status }} - {{ props.character.species }}</span>
        </div>
        <h3 class="font-normal text-md line-clamp-1">{{ props.character.name }}</h3>
      </div>
      <div>
        <p class="font-xxs text-gray-500">Last location:</p>
        <p class="text-xs text-gray-800 line-clamp-1">{{ props.character.location.name }}</p>
      </div>
      <div>
        <p class="font-xxs text-gray-500">First seen in:</p>
        <p class="text-xs  text-gray-800 line-clamp-1">Never Ricking Morty</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  border: 1px solid #e0e0e0;
}

.font-xxs {
  font-size: 0.625rem;
}
</style>