<template>
  <form class="text-gray-700 relative" @submit.prevent="onSubmit">
    <div
      class="lg:w-1/2 md:w-2/3 rounded-lg border-2 border-gray-100 mx-auto p-5"
    >
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-full">
          <div class="relative">
            <label for="keywords" class="leading-7 text-sm text-gray-600">
              Keywords
            </label>
            <input
              type="text"
              id="keywords"
              v-model="form.keywords"
              name="keywords"
              class="w-full rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div class="flex justify-center p-2 w-full">
          <button
            type="submit"
            class="mx-1 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Ok
          </button>
          <button
            type="button"
            class="mx-1 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
            @click.prevent="onCancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { FilterOptions } from '@/types'

export default defineComponent({
  name: 'FilterForm',
  emits: ['submit', 'cancel'],
  setup(props, { emit }) {
    const form = reactive<FilterOptions>({})

    const onSubmit = () => {
      emit('submit', form)
    }

    const onCancel = () => {
      form.keywords = ''
      emit('cancel', form)
    }

    return { form, onSubmit, onCancel }
  },
})
</script>
