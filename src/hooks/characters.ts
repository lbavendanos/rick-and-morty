import { ref } from 'vue'
import { useApiGet } from './api'

export interface Response {
  info: Info
  results: Character[]
}

export interface Info {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

interface Origin {
  name: string
  url: string
}

interface Location {
  name: string
  url: string
}

export function useCharacters() {
  const info = ref<Info>()
  const characters = ref<Character[]>()
  const { response, error, request } = useApiGet<Response>()

  const fetchCharacters = async (name?: string) => {
    const config = { ...(name ? { params: { name } } : {}) }

    await request('/character', config)

    info.value = response.value?.info
    characters.value = response.value?.results
  }

  return { info, characters, error, fetchCharacters }
}

export function useCharacter() {
  const character = ref<Character>()
  const { response, error, request } = useApiGet<Character>()

  const fetchCharacter = async (id: number) => {
    await request(`/character/${id}`)

    character.value = response.value
  }

  return { character, error, fetchCharacter }
}
