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
  <Suspense>
    <template #default>
      <Characters :name="name" />
    </template>
    <template #fallback>
      <div class="container px-5 py-24 mx-auto">
        <p class="text-center">Loading...</p>
      </div>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import FormSearch, { FormSearchData } from '@/components/FormSearch.vue'
import Characters from '@/components/Sections/Character/Characters.vue'

export default defineComponent({
  name: 'CharacterIndex',
  components: { FormSearch, Characters },
  setup() {
    const name = ref<string>()

    const onSubmit = (formData: FormSearchData) => {
      name.value = formData.search
    }

    return { onSubmit, name }
  }
})
</script>
