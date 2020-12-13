<template>
  <div class="">
    <h1>{{ character.name }}</h1>
    <h1>{{ character.id }}</h1>
  </div>
</template>

<script lang="ts">
import { Character, fetchCharacter } from '@/api/characters'
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'CharacterShow',
  setup() {
    const route = useRoute()
    const { id } = route.params
    const character = ref<Character | object>({})

    onMounted(async () => {
      const result = await fetchCharacter(+id)
      character.value = result
    })

    return { character }
  }
})
</script>
