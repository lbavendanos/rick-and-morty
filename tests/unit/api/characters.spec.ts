import { fetchCharacters, baseConfig, url } from '@/api/characters'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import mockCharactersData from './characters-mock'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedFetchCharacters = jest.fn() as jest.MockedFunction<
  typeof fetchCharacters
>

const axiosResponse: AxiosResponse = {
  data: mockCharactersData,
  status: 200,
  statusText: 'Ok',
  headers: {},
  config: {}
}
const params = { name: 'rick' }

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Characters Api', () => {
  it('call fetchCharacters function', async () => {
    await mockedFetchCharacters()

    expect(mockedFetchCharacters).toHaveBeenCalledTimes(1)
  })

  it('call fetchCharacters function with config param', async () => {
    await mockedFetchCharacters(params.name)

    expect(mockedFetchCharacters).toHaveBeenCalledWith(params.name)
  })

  it('fetches characters', async () => {
    mockedAxios.get.mockResolvedValueOnce(axiosResponse)

    const response = await fetchCharacters()

    expect(mockedAxios.get).toHaveBeenCalledTimes(1)
    expect(mockedAxios.get).toHaveBeenCalledWith(url, baseConfig)
    expect(response).toBe(mockCharactersData)
  })

  it('fetches characters by name', async () => {
    mockedAxios.get.mockResolvedValueOnce(axiosResponse)

    const config: AxiosRequestConfig = {
      ...baseConfig,
      params
    }
    const response = await fetchCharacters(params.name)

    expect(mockedAxios.get).toHaveBeenCalledWith(url, config)
    expect(mockedAxios.get).toHaveBeenCalledTimes(1)
    expect(response).toBe(mockCharactersData)
  })
})
