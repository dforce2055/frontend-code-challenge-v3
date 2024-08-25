<script setup lang="ts">
import { computed, defineProps, type PropType, ref, onMounted } from 'vue'
import type { Character } from '@/types';
import { STATUS } from '@/types'
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon.vue';

const props = defineProps({
  character: {
    type: Object as PropType<Character>,
    required: false,
    default: () => ({
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/37",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
        "https://rickandmortyapi.com/api/episode/42",
        "https://rickandmortyapi.com/api/episode/43",
        "https://rickandmortyapi.com/api/episode/44",
        "https://rickandmortyapi.com/api/episode/45",
        "https://rickandmortyapi.com/api/episode/46",
        "https://rickandmortyapi.com/api/episode/47",
        "https://rickandmortyapi.com/api/episode/48",
        "https://rickandmortyapi.com/api/episode/49",
        "https://rickandmortyapi.com/api/episode/50",
        "https://rickandmortyapi.com/api/episode/51"
      ],
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": "2017-11-04T18:48:46.250Z"
    }),
  },
})

const emit = defineEmits<{
  (e: 'click', character: Character): void
}>()

const randomIdNumber = Math.floor(Math.random() * 1000)
const id = computed(() => randomIdNumber.toString())
const loading = ref(true)
const isOnFavorite = ref(false)

const statusStyles = computed(() => {
  if (props.character.status === STATUS.ALIVE) return 'bg-green-500'
  if (props.character.status === STATUS.DEAD) return 'bg-red-500'
  if (props.character.status === STATUS.UNKNOWN) return 'bg-gray-300'
  return 'bg-gray-300'
})

const onSetFavorite = () => {
  isOnFavorite.value = !isOnFavorite.value
  // TODO: save on store
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
      <FavoriteIcon class="absolute bottom-1 right-1" @click="onSetFavorite" :active="isOnFavorite" />
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