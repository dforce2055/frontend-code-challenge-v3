<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
const props = defineProps({
  active: {
    type: Boolean,
    required: false,
    default: false
  }
})
const emit = defineEmits(['click'])

</script>
<template>
  <span @click="emit('click')" class="cursor-pointer  ">
    <svg data-test="icon" class="border-2 border-white rounded-full" width="30" height="30" viewBox="0 0 30 30"
      fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="15" fill="#E0E0E0" />
      <g clip-path="url(#clip0_706_1535)">
        <path class="transition-all duration-150 ease-linear"
          d="M14.1031 6.62578L12.0625 11.2805L7.49688 12.0293C6.67813 12.1629 6.35001 13.2984 6.94376 13.9488L10.2469 17.5699L9.46563 22.6852C9.32501 23.6098 10.1906 24.3024 10.9156 23.8699L15 21.4547L19.0844 23.8699C19.8094 24.2988 20.675 23.6098 20.5344 22.6852L19.7531 17.5699L23.0563 13.9488C23.65 13.2984 23.3219 12.1629 22.5031 12.0293L17.9375 11.2805L15.8969 6.62578C15.5313 5.7961 14.4719 5.78555 14.1031 6.62578Z"
          :fill="props.active ? '#F2994A' : '#828282'" />
      </g>
      <defs>
        <clipPath id="clip0_706_1535">
          <rect width="18" height="18" fill="white" transform="translate(6 6)" />
        </clipPath>
      </defs>
    </svg>
  </span>
</template>