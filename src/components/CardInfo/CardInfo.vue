<script setup lang="ts">

const props = defineProps({
  inputText: {
    type: String,
    required: false,
    default: ''
  },
  title: {
    type: String,
    required: false,
    default: ''
  },
  description: {
    type: String,
    required: false,
    default: ''
  },
  showIcon: {
    type: Boolean,
    required: false,
    default: false
  },
})
</script>
<template>
  <div
    :class="['flex flex-col justify-center items-start  rounded-md w-44 p-4 overflow-hidden', props.description ? 'h-22' : 'h-20']"
    style="border: 1px solid #ccc">
    <div class="flex items-center justify-start gap-2">
      <span v-if="props.showIcon">
        <svg data-test="icon" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 0.6875C2.79007 0.6875 0.1875 3.29101 0.1875 6.5C0.1875 9.71087 2.79007 12.3125 6 12.3125C9.20993 12.3125 11.8125 9.71087 11.8125 6.5C11.8125 3.29101 9.20993 0.6875 6 0.6875ZM6 3.26562C6.54366 3.26562 6.98438 3.70634 6.98438 4.25C6.98438 4.79366 6.54366 5.23438 6 5.23438C5.45634 5.23438 5.01562 4.79366 5.01562 4.25C5.01562 3.70634 5.45634 3.26562 6 3.26562ZM7.3125 9.21875C7.3125 9.37407 7.18657 9.5 7.03125 9.5H4.96875C4.81343 9.5 4.6875 9.37407 4.6875 9.21875V8.65625C4.6875 8.50093 4.81343 8.375 4.96875 8.375H5.25V6.875H4.96875C4.81343 6.875 4.6875 6.74907 4.6875 6.59375V6.03125C4.6875 5.87593 4.81343 5.75 4.96875 5.75H6.46875C6.62407 5.75 6.75 5.87593 6.75 6.03125V8.375H7.03125C7.18657 8.375 7.3125 8.50093 7.3125 8.65625V9.21875Z"
            fill="#828282" />
        </svg>

      </span>
      <span class="text-gray-500 line-clamp-1 text-xs">
        {{ props.inputText }}
      </span>
    </div>
    <p class="text-base font-medium text-gray-800 line-clamp-1">
      {{ props.title === '' ? 'unknown' : props.title }}
    </p>
    <p v-if="props.description" class="text-gray-500 line-clamp-1 text-xs uppercase">
      {{ props.description === '' ? 'unknown' : props.description }}
    </p>
  </div>
</template>
