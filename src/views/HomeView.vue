<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useAppStore, useNotificationsStore } from '../store'
import { getCharacters, type CharacterFilterParams } from '../api/index'
import type { Character } from '@/types'
import { GENDER, STATUS, TAB } from '@/types'
import { useRoute } from 'vue-router'

import Header from '@/components/Header/Header.vue'
import Tabs from '@/components/Tabs/Tabs.vue'
import FilterFavorite from '@/components/FilterFavorite/FilterFavorite.vue'
import NoResults from '@/components/NoResults/NoResults.vue'
import Footer from '@/components/Footer/Footer.vue'
import CardList from '@/components/CardList/CardList.vue'
import Loader from '@/components/Loader/Loader.vue'
import DialogCharacterDetails from '@/components/DialogCharacterDetails/DialogCharacterDetails.vue'
import { waitFor } from '@/utils'

const appStore = useAppStore()
const notificationStore = useNotificationsStore()
const route = useRoute()

const loading = ref(false)
const showDetails = ref(false)
const clearSearch = ref(false)
const showNoResults = ref(true)
const filterByFavorites = ref(false)
const currentCharacter = ref<Character>()
const characters = ref<Character[]>([])
const charactersStored = computed(() => appStore.characters)
const paramId = computed(() => route.params.id)

const onSearchByName = async (search: string) => {
  await onGetCharacters({ name: search })

  characters.value = appStore.characters?.filter((character) => character.name.toLowerCase().includes(search.toLowerCase())) ?? []

  window.scrollTo({ top: 250, behavior: 'smooth' })
  filterByFavorites.value = false
}

const onSearchByFilters = async (params: CharacterFilterParams) => {
  await onGetCharacters(params)
  const { status, gender } = params

  if (status) characters.value = appStore.characters?.filter((character) => character.status === status) ?? []
  if (gender) characters.value = appStore.characters?.filter((character) => character.gender === gender) ?? []

  window.scrollTo({ top: 250, behavior: 'smooth' })
  filterByFavorites.value = false
}

const onTabSelected = (tab: TAB) => {
  clearSearch.value = !clearSearch.value

  if (tab === TAB.ALL) onSearchByName('')
  if (tab === TAB.UNKNOWN) onSearchByFilters({ status: STATUS.UNKNOWN })
  if (tab === TAB.FEMALE) onSearchByFilters({ gender: GENDER.FEMALE })
  if (tab === TAB.MALE) onSearchByFilters({ gender: GENDER.MALE })
  if (tab === TAB.GENDERLESS) onSearchByFilters({ gender: GENDER.GENDERLESS })
  if (tab === TAB.UNKNOWN) onSearchByFilters({ gender: GENDER.UNKNOWN })

}

const onFilterByFavorites = (filter: boolean) => {
  clearSearch.value = !clearSearch.value
  filterByFavorites.value = !filterByFavorites.value

  if (filter) {
    characters.value = appStore.favorites
  } else {
    characters.value = appStore.characters
  }

  window.scrollTo({ top: 250, behavior: 'smooth' })
}

const onClearFilters = async () => {
  clearSearch.value = !clearSearch.value
  showNoResults.value = !showNoResults.value
  filterByFavorites.value = !filterByFavorites.value
  await onSearchByName('')
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const onShowDetails = (character: Character) => {
  currentCharacter.value = character
  showDetails.value = true
}

watch([clearSearch, characters], () => {
  showNoResults.value = !characters.value.length
})


const onGetCharacters = async (params: CharacterFilterParams) => {
  try {
    loading.value = true
    const characters = await getCharacters(params)
    appStore.setCharacters(characters.results as Character[])
  } catch (error) {
    notificationStore.setErrorNotification()
  } finally {
    loading.value = false
  }
}

const getCharacterById = async (id: string) => {
  try {
    loading.value = true
    const character = await getCharacters({ id })
    return character as unknown as Character
  } catch (error) {
    notificationStore.setErrorNotification()
  } finally {
    loading.value = false
  }
}

const handleShowCharacterDetailsByParamId = async () => {
  if (paramId.value) {
    const character = await getCharacterById(String(paramId.value))
    if (character) {
      currentCharacter.value = character
      showDetails.value = true
    }
    if (!character) {
      await waitFor(1500)
      showNoResults.value = true
    }
  }
}


onMounted(async () => {
  loading.value = true
  await waitFor(1000)
  characters.value = charactersStored.value

  await handleShowCharacterDetailsByParamId()
  loading.value = false

})

</script>
<template>
  <section>
    <DialogCharacterDetails v-if="showDetails" :character="currentCharacter" @close="showDetails = false" />
    <main>
      <Header @search="onSearchByName" :clear-search="clearSearch" />
      <Tabs @tab-selected="onTabSelected" />
      <div class="min-h-[955px] max-w-[1030px] mx-auto px-8 my-12">

        <FilterFavorite @favorite="onFilterByFavorites" :active="filterByFavorites" />

        <div v-if="loading" class="flex items-center justify-center h-[500px]">
          <Loader />
        </div>
        <div v-else>
          <Transition name="fade" mode="out-in">
            <CardList v-if="!showNoResults" :characters="characters" @click="onShowDetails" />
          </Transition>

          <Transition name="fade" mode="out-in">
            <NoResults v-if="showNoResults" @clear-filters="onClearFilters" class="mt-32" />
          </Transition>
        </div>
      </div>
    </main>
    <Footer />
  </section>
</template>
