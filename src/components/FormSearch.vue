<template>
  <form class="text-gray-700 relative" @submit.prevent="onSubmit">
    <div
      class="lg:w-1/2 md:w-2/3 rounded-lg border-2 border-gray-100 mx-auto p-5"
    >
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-full">
          <div class="relative">
            <label for="inputSearch" class="leading-7 text-sm text-gray-600">
              Search
            </label>
            <input
              type="text"
              id="inputSearch"
              v-model="form.search"
              name="search"
              class="w-full rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div class="p-2 w-full">
          <button
            type="submit"
            class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export interface FormSearchData {
  search?: string
}

export default defineComponent({
  name: 'FormSearch',
  emits: ['submit'],
  setup(props, ctx) {
    const form = reactive<FormSearchData>({})

    const onSubmit = () => {
      ctx.emit('submit', form)
    }

    return { form, onSubmit }
  }
})
</script>
