import {
  useCharacters,
  useCharacter,
  Response,
  Character
} from '@/hooks/characters'
import axios from 'axios'
import { mockInfo, mockCharacters } from './characters-mock'
import { getAxiosResponse } from './api.spec'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Characters hooks', () => {
  it('call useCharacters hook to get info and characters', async () => {
    const mockData: Response = { info: mockInfo, results: mockCharacters }
    const axiosResponse = getAxiosResponse(mockData)

    mockedAxios.get.mockResolvedValueOnce(axiosResponse)

    const { info, characters, fetchCharacters } = useCharacters()

    await fetchCharacters()

    expect(info.value).toStrictEqual(mockInfo)
    expect(characters.value).toStrictEqual(mockCharacters)
  })

  it('call useCharacters hook to get specific info and characters', async () => {
    const mockData: Response = { info: mockInfo, results: mockCharacters }
    const axiosResponse = getAxiosResponse(mockData)

    mockedAxios.get.mockResolvedValueOnce(axiosResponse)

    const use = useCharacters()
    const spyFetchCharacters = jest.spyOn(use, 'fetchCharacters')
    const name = 'Rick'

    await use.fetchCharacters(name)

    expect(spyFetchCharacters).toHaveBeenCalledWith(name)
    expect(use.info.value).toStrictEqual(mockInfo)
    expect(use.characters.value).toStrictEqual(mockCharacters)
  })

  it('call useCharacter hook to get a character', async () => {
    const mockData: Character = { ...mockCharacters[0] }
    const axiosResponse = getAxiosResponse(mockData)

    mockedAxios.get.mockResolvedValueOnce(axiosResponse)

    const { character, fetchCharacter } = useCharacter()
    const id = 1

    await fetchCharacter(id)

    expect(character.value).toStrictEqual(mockCharacters[0])
  })
})
