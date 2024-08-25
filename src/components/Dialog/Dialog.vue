<!-- eslint-disable vue/valid-define-props -->
<script setup lang="ts">
import { computed, defineProps, ref, watch, type PropType } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'

enum DIALOG_SIZE {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  EXTRA_LARGE = 'xl'
}
const props = defineProps({
  size: {
    type: String as PropType<DIALOG_SIZE | string>,
    required: false,
    default: DIALOG_SIZE.MEDIUM
  }
})

const emit = defineEmits(['close'])
const open = ref(true)

const sizeClasses = computed(() => {
  if (props.size === DIALOG_SIZE.SMALL) return 'sm:max-w-sm'
  if (props.size === DIALOG_SIZE.MEDIUM) return 'sm:max-w-md'
  if (props.size === DIALOG_SIZE.LARGE) return 'sm:max-w-lg'
  if (props.size === DIALOG_SIZE.EXTRA_LARGE) return 'sm:max-w-3xl'

  return 'sm:max-w-sm'
})

watch(open, (value) => {
  if (!value) {
    emit('close')
  }
})

</script>

<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-10" @close="open = false">

      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/35 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center pl-4 pb-4 pr-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
              :class="['relative transform overflow-hidden rounded-lg bg-white px-0 pb-4 pt-0 text-left shadow-xl transition-all sm:mb-8 sm:w-full sm:pb-6', sizeClasses]">
              <slot />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>