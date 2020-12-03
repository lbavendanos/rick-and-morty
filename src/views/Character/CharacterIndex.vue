<template>
  <div class="container pt-16 mx-auto">
    <div class="flex flex-col text-center w-full mb-5">
      <h1
        class="title sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
      >
        CHARACTERS
      </h1>
      <p class="subtitle lg:w-2/3 mx-auto leading-relaxed text-base">
        In this section you can search for a character
      </p>
    </div>
  </div>
  <div class="container mx-auto">
    <FormSearch @submit="onSubmit" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormSearch, { FormSearchData } from '@/components/FormSearch.vue'

export default defineComponent({
  name: 'CharacterIndex',
  components: { FormSearch },
  setup() {
    const onSubmit = (formData: FormSearchData) => {
      console.log(formData)
    }

    return { onSubmit }
  }
})
</script>
