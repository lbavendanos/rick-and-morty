import axios, { AxiosRequestConfig } from 'axios'

interface Response {
  info: Info
  results: Character[]
}

interface Info {
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

export const baseConfig: AxiosRequestConfig = {
  baseURL: 'https://rickandmortyapi.com/api'
}
export const url = '/character'

export async function fetchCharacters(name?: string): Promise<Response> {
  const config = { ...baseConfig, ...(name ? { params: { name } } : {}) }
  const { data } = await axios.get<Response>(url, config)

  return data
}
