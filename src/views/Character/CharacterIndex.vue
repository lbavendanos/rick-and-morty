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
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div
        v-for="character in characters"
        :key="character.id"
        class="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
      >
        <Card
          type="CHARACTER"
          :name="character.name"
          :description="`${character.species} - ${character.status}`"
          :image="character.image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import FormSearch, { FormSearchData } from '@/components/FormSearch.vue'
import Card from '@/components/Card.vue'
import { Character, fetchCharacters } from '@/api/characters'

export default defineComponent({
  name: 'CharacterIndex',
  components: { FormSearch, Card },
  setup() {
    const characters = ref<Character[]>([])

    const onSubmit = async (formData: FormSearchData) => {
      const name = formData.search
      const { results } = await fetchCharacters(name)
      characters.value = results
    }

    onMounted(async () => {
      const { results } = await fetchCharacters()
      characters.value = results
    })

    return { onSubmit, characters }
  }
})
</script>
