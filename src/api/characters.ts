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

const baseConfig = {
  baseURL: 'https://rickandmortyapi.com/api'
}

export async function fetchCharacters(
  config?: AxiosRequestConfig
): Promise<Response> {
  const url = '/character'
  const { data } = await axios.get<Response>(url, { ...baseConfig, ...config })

  return data
}
