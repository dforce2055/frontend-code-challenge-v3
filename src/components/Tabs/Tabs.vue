<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { TAB } from '../../types/ui';


const emit = defineEmits(['tab-selected'])

const tabs = ref<TAB[]>(Object.values(TAB))

const onClickTab = (tab: TAB) => {
  emit('tab-selected', tab)
}
</script>
<template>
  <!-- Tabs -->
  <div class="relative w-screen h-[80px] left-0 bg-[#f2f2f2]" style="border-bottom: 1px solid #ccc;">
    <div class="flex h-full max-w-[1030px] mx-auto items-center justify-evenly gap-2 ">
      <span v-for="tab in tabs" :key="tab"
        class="flex items-center justify-center h-full w-[161px] cursor-pointer text-gray-800 font-normal text-lg transition-all duration-100 ease-linear hover:opacity-80 hover:border-b-2 hover:border-secondary"
        @click="onClickTab(tab)">
        {{ tab }}
      </span>
    </div>
  </div>
</template>
