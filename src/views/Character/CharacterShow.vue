<template>
  <div v-if="character" class="">
    <h1>{{ character.name }}</h1>
    <h1>{{ character.id }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCharacter } from '@/hooks/characters'

export default defineComponent({
  name: 'CharacterShow',
  setup() {
    const route = useRoute()
    const { id } = route.params
    const { character, fetchCharacter } = useCharacter()

    onMounted(async () => {
      await fetchCharacter(+id)
    })

    return { character }
  }
})
</script>
