<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  placeholder: {
    type: String,
    required: false,
    default: 'Buscar personaje...'
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

const search = ref('')
const showFilters = ref(false)
const filters = ref([
  {
    name: 'Status',
    options: [
      {
        name: 'Alive',
        value: 'alive'
      },
      {
        name: 'Dead',
        value: 'dead'
      },
      {
        name: 'Unknown',
        value: 'unknown'
      }
    ]
  },
  {
    name: 'Origin',
    options: [
      {
        name: 'Earth (C-137)',
        value: 'earth (c-137)'
      },
      {
        name: 'Earth (Replacement Dimension)',
        value: 'earth (replacement dimension)'
      },
      {
        name: 'Abadango',
        value: 'abadango'
      },
      {
        name: 'unknown',
        value: 'unknown'
      }
    ]
  }
])

const onSearch = () => {
  emit('search', search.value)
}

const onShowFilters = () => {
  showFilters.value = !showFilters.value
}

watch(() => props.clearSearch, () => {
  search.value = ''
})

</script>
<template>
  <div class="flex flex-col gap-4">
    <!-- SearchBar -->
    <div
      class="flex items-center justify-evenly gap-2 transition-all duration-200 ease-in-out  bg-black border-2 border-white lg:w-[500px] h-[60px] rounded-md">
      <span class="cursor-pointer" @click="onSearch">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M27.8072 26.3362L20.7529 19.2819C20.6271 19.1561 20.4631 19.0905 20.2881 19.0905H19.7248C21.6005 17.0617 22.7489 14.3548 22.7489 11.3744C22.7489 5.09116 17.6577 0 11.3744 0C5.09116 0 0 5.09116 0 11.3744C0 17.6577 5.09116 22.7489 11.3744 22.7489C14.3548 22.7489 17.0617 21.6005 19.0905 19.7303V20.2881C19.0905 20.4631 19.1616 20.6271 19.2819 20.7529L26.3362 27.8072C26.5932 28.0643 27.0088 28.0643 27.2659 27.8072L27.8072 27.2659C28.0643 27.0088 28.0643 26.5932 27.8072 26.3362ZM11.3744 20.999C6.05361 20.999 1.74991 16.6953 1.74991 11.3744C1.74991 6.05361 6.05361 1.74991 11.3744 1.74991C16.6953 1.74991 20.999 6.05361 20.999 11.3744C20.999 16.6953 16.6953 20.999 11.3744 20.999Z"
            fill="#F2F2F2" />
        </svg>

      </span>
      <input class="bg-transparent text-white w-9/12" style="outline: none;" v-model="search" type="text"
        :placeholder="props.placeholder" @keyup.enter="onSearch" />
      <span class="cursor-pointer" @click="onShowFilters">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M27.5625 21H10.5V18.8125C10.5 18.0852 9.91484 17.5 9.1875 17.5H6.5625C5.83516 17.5 5.25 18.0852 5.25 18.8125V21H0.4375C0.196875 21 0 21.1969 0 21.4375V22.3125C0 22.5531 0.196875 22.75 0.4375 22.75H5.25V24.9375C5.25 25.6648 5.83516 26.25 6.5625 26.25H9.1875C9.91484 26.25 10.5 25.6648 10.5 24.9375V22.75H27.5625C27.8031 22.75 28 22.5531 28 22.3125V21.4375C28 21.1969 27.8031 21 27.5625 21ZM8.75 24.5H7V19.25H8.75V24.5ZM27.5625 5.25H14V3.0625C14 2.33516 13.4148 1.75 12.6875 1.75H10.0625C9.33516 1.75 8.75 2.33516 8.75 3.0625V5.25H0.4375C0.196875 5.25 0 5.44688 0 5.6875V6.5625C0 6.80312 0.196875 7 0.4375 7H8.75V9.1875C8.75 9.91484 9.33516 10.5 10.0625 10.5H12.6875C13.4148 10.5 14 9.91484 14 9.1875V7H27.5625C27.8031 7 28 6.80312 28 6.5625V5.6875C28 5.44688 27.8031 5.25 27.5625 5.25ZM12.25 8.75H10.5V3.5H12.25V8.75ZM27.5625 13.125H22.75V10.9375C22.75 10.2102 22.1648 9.625 21.4375 9.625H18.8125C18.0852 9.625 17.5 10.2102 17.5 10.9375V13.125H0.4375C0.196875 13.125 0 13.3219 0 13.5625V14.4375C0 14.6781 0.196875 14.875 0.4375 14.875H17.5V17.0625C17.5 17.7898 18.0852 18.375 18.8125 18.375H21.4375C22.1648 18.375 22.75 17.7898 22.75 17.0625V14.875H27.5625C27.8031 14.875 28 14.6781 28 14.4375V13.5625C28 13.3219 27.8031 13.125 27.5625 13.125ZM21 16.625H19.25V11.375H21V16.625Z"
            fill="#BDBDBD" />
        </svg>

      </span>
    </div>
    <!-- Filters -->
    <Transition name="fade">
      <div v-show="showFilters" class="flex gap-1 text-lg bg-[#f2f2f2] px-5 max-w-[500px] rounded-md">
        <span class="text-secondary font-bold">Filtros aplicados: </span>
        <span v-for="(filter, index) in filters" :key="filter.name">
          {{ filter.name }}{{ index < filters.length - 1 ? ', ' : '' }} </span>
      </div>
    </Transition>

  </div>
</template>

<style lang="scss" scoped></style>