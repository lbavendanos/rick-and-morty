import { ref } from 'vue'
import axios, { AxiosRequestConfig } from 'axios'

const baseConfig: AxiosRequestConfig = {
  baseURL: 'https://rickandmortyapi.com/api'
}

export function useApiGet<T>() {
  const response = ref<T>()
  const error = ref(null)

  const request = async (url: string, config?: AxiosRequestConfig) => {
    try {
      const { data } = await axios.get<T>(url, { ...baseConfig, ...config })
      response.value = data
    } catch (e) {
      error.value = e
    }
  }

  return { response, error, request }
}
