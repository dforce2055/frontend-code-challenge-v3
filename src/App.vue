<script setup lang="ts">
import { onBeforeMount, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import { getCharacters } from './api'
import { useAppStore } from './store'

import Notification from './components/Notification/Notification.vue'
import { type Character } from './types/api';

const store = useAppStore()

onBeforeMount(async () => {
  const characters = await getCharacters()
  store.setCharacters(characters.results as Character[])
})

onMounted(() => {
  document?.body?.classList.add('overflow-x-hidden')
})


onUnmounted(() => {
  document?.body?.classList.remove('overflow-x-hidden')
})
</script>
<template>
  <Notification />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
