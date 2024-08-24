<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import Button from '@/components/Button/Button.vue'

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: 'Bienvenido a Rick and Morty'
  },
  description: {
    type: String,
    required: false,
    default: 'En esta prueba, evaluaremos su capacidad para construir la aplicación mediante el análisis de código y la reproducción del siguiente diseño.'
  },
  background: {
    type: String,
    required: false,
    default: '/public/images/welcome.png'
  }
})

const router = useRouter()
const backgroundImage = computed(() => `url(${props.background})`)

const onClickContinue = () => {
  router.push('/home')
}

</script>
<template>
  <section>
    <div class="bg-gray-800 h-screen w-screen flex flex-col gap-2 items-center justify-center z-100 overlay">
      <div class="absolute top-0 right-0 w-screen h-screen bg-black  opacity-50 -z-10"></div>
      <div class="opacity-50 ">
        <img class="w-[134.81px] h-[50px]" src="/public/images/logo.png" alt="logo" />
      </div>
      <div class="">
        <img class="w-[664px] h-[233px]" src="/public/images/title.png" alt="title" />
      </div>
      <div class="flex flex-col w-9/12 mt-12 gap-6">
        <h1 class="text-white font-normal text-4xl leading-10 text-center">{{ props.title }}</h1>
        <p class="text-white font-normal text-lg leading-8 text-center">{{ props.description }}</p>

        <Button class="mx-auto" :text="'Continuar'" @click="onClickContinue" />
      </div>

    </div>


  </section>
</template>
<style scoped>
/* background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%, url('/public/images/welcome.png')); */

.overlay {
  background-image: v-bind(backgroundImage);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
</style>