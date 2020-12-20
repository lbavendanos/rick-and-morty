<template>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div
        v-for="character in characters"
        :key="character.id"
        class="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
      >
        <Card
          type="CHARACTER"
          :to="{ name: 'character.show', params: { id: character.id } }"
          :name="character.name"
          :description="`${character.species} - ${character.status}`"
          :image="{ src: character.image, alt: character.name }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import Card from '@/components/Card.vue'
import { useCharacters } from '@/hooks/characters'

export default defineComponent({
  name: 'Characters',
  components: { Card },
  props: {
    name: {
      type: String,
      default: null
    }
  },
  async setup(props) {
    const { characters, fetchCharacters } = useCharacters()

    watch<string>(
      () => props.name,
      async value => {
        await fetchCharacters(value)
      }
    )

    await fetchCharacters()

    return { characters }
  }
})
</script>
