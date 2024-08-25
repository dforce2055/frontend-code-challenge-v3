<script setup lang="ts">
import { defineProps, defineEmits, computed, type PropType, ref } from 'vue'
import type { Character, Episode } from '@/types'
import { useAppStore, useNotificationsStore } from '@/store'

import Dialog from '@/components/Dialog/Dialog.vue'
import Button from '@/components/Button/Button.vue'
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon.vue'
import CardInfo from '../CardInfo/CardInfo.vue'
import Card from '../Card/Card.vue'
import { waitFor } from '@/utils'


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
  background: {
    type: String,
    required: false,
    default: '/images/details.png'
  },
})

const emit = defineEmits<{
  (e: 'close'): void
}>()

const appStore = useAppStore()
const notificationStore = useNotificationsStore()

const characterIsOnFavorites = computed(() => appStore.favorites.some((c) => c.id === props.character.id))
const episodes = ref<Episode[]>([
  {
    "id": 28,
    "name": "The Ricklantis Mixup",
    "air_date": "September 10, 2017",
    "episode": "S03E07",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2"
    ],
    "url": "https://rickandmortyapi.com/api/episode/28",
    "created": "2017-11-10T12:56:36.618Z"
  },
  {
    "id": 29,
    "name": "Morty's Mind Blowers",
    "air_date": "September 17, 2017",
    "episode": "S03E08",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2"
    ],
    "url": "https://rickandmortyapi.com/api/episode/29",
    "created": "2017-11-10T12:56:36.618Z"
  },
  {
    "id": 30,
    "name": "The ABC's of Beth",
    "air_date": "September 24, 2017",
    "episode": "S03E09",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2"
    ],
    "url": "https://rickandmortyapi.com/api/episode/30",
    "created": "2017-11-10T12:56:36.618Z"
  },
  {
    "id": 31,
    "name": "The Rickchurian Mortydate",
    "air_date": "October 1, 2017",
    "episode": "S03E10",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2"
    ],
    "url": "https://rickandmortyapi.com/api/episode/31",
    "created": "2017-11-10T12:56:36.618Z"
  },
  {
    "id": 32,
    "name": "Edge of Tomorty: Rick Die Rickpeat",
    "air_date": "November 10, 2019",
    "episode": "S04E01",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2"
    ],
    "url": "https://rickandmortyapi.com/api/episode/32",
    "created": "2017-11-10T12:56:36.618Z"
  },
]
)
const relatedCharacters = computed(() => {
  const relatedCharacters = appStore.characters.filter((c) => c.id !== props.character.id)
  return relatedCharacters.slice(0, 2)
})


const onCloseDialog = () => {
  emit('close')
}

const onSetFavorite = () => {
  if (characterIsOnFavorites.value) {
    appStore.removeFavorite(props.character)
  } else {
    appStore.addFavorite(props.character)
  }
}

const onClickCard = (character: Character) => {
  console.log('onClickCard', character)
}

const onShareCharacter = async () => {
  const BASE_URL = window.location.origin

  const characterFormatted = `Character: ${props.character.name} - Status: ${props.character.status} - Species: ${props.character.species} - ${BASE_URL}/character/${props.character.id}`

  navigator?.clipboard?.writeText(characterFormatted)

  onCloseDialog()

  await waitFor(200)
  notificationStore.setSuccessNotification(
    'Compartir Personaje',
    'El personaje ha sido copiado al porta papeles con éxito y esta listo para ser compartido CTRL + V',
  )
}

</script>
<template>
  <Dialog :size="'xl'" @close="onCloseDialog">
    <div class=" bg-no-repeat bg-top bg-cover h-[220px]"
      style="background-image: url(/images/details.png); border-image: fill 0 linear-gradient(#0003 100%,#000 100%); background-position-y: -64px">
    </div>
    <div class="">
      <div class="">
        <div
          class="absolute top-36 left-0 right-0 mx-auto h-40 w-40 items-center justify-center rounded-full bg-green-100">
          <img class="h-40 w-40 border-4 border-white rounded-full" :src="props.character.image"
            :alt="props.character.name" />

          <FavoriteIcon :active="characterIsOnFavorites" @click="onSetFavorite"
            class="w-8 absolute -bottom-1 left-0 right-0 mx-auto" />
        </div>
        <div class="pt-3 text-center sm:pt-24 h-44 bg-gray-100 ">
          <div class="flex flex-col gap-0">
            <p class="text-xs uppercase text-gray-800">{{ props.character.status }}</p>
            <p class="text-xl  text-gray-800 font-semibold">{{ props.character.name }}</p>
            <p class="text-sm uppercase text-gray-800">{{ props.character.species }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-end items-end  p-6  divide-y gap-4">
        <!-- information -->
        <div class="flex flex-col gap-2 w-full">
          <p class="text-xl font-semibold text-gray-800 self-start">Información:</p>
          <div class=" flex items-center justify-between gap-4 w-full h-28">
            <CardInfo :input-text="'Gender:'" :title="props.character.gender" show-icon />
            <CardInfo :input-text="'Origin:'" :title="props.character.origin.name" show-icon />
            <CardInfo :input-text="'Type:'" :title="props.character.type" show-icon />
          </div>
        </div>
        <!-- episodes -->
        <div class="flex flex-col gap-2 w-full">
          <p class="text-xl font-semibold text-gray-800 self-start mt-6">Episodios:</p>
          <div class=" grid grid-cols-1 gap-x-3 gap-y-6  lg:gap-x-6 sm:grid-cols-3 lg:grid-cols-4 w-full h-auto">
            <CardInfo v-for="episode in episodes" :key="episode.id" :input-text="'Episode:'" :title="episode.episode"
              :description="episode.air_date" />
          </div>
        </div>
        <!-- related characters -->
        <div class="flex flex-col gap-2 w-full mb-12">
          <p class="text-xl font-semibold text-gray-800 self-start mt-6">Personajes interesantes:</p>
          <div class=" flex items-center justify-between gap-12 w-full h-auto">
            <Card v-for="character in relatedCharacters" :key="character.id" :character="character" @click="onClickCard"
              class="w-6/12" />
          </div>
        </div>

        <Button :text="'Compartir Personaje'" @click="onShareCharacter" />
      </div>
    </div>
  </Dialog>
</template>
