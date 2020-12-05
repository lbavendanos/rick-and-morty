import { fetchCharacters } from '@/api/characters'
import axios, { AxiosResponse } from 'axios'
import mockCharactersData from './characters-mock'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

it('fetches characters', async () => {
  const axiosResponse: AxiosResponse = {
    data: mockCharactersData,
    status: 200,
    statusText: 'Ok',
    headers: {},
    config: {}
  }

  mockedAxios.get.mockResolvedValueOnce(axiosResponse)

  const response = await fetchCharacters()

  expect(mockedAxios.get).toHaveBeenCalledTimes(1)
  expect(response).toBe(mockCharactersData)
})
