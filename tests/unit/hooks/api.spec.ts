import { useApiGet } from '@/hooks/api'
import axios, { AxiosResponse, AxiosError } from 'axios'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

interface MockData {
  company: string
  country: string
}

export function getAxiosResponse<T>(data: T): AxiosResponse<T> {
  return {
    data,
    status: 200,
    statusText: 'Ok',
    headers: {},
    config: {}
  }
}

export function getAxiosError(): AxiosError {
  return {
    config: {},
    isAxiosError: true,
    message: 'Not found resource',
    name: 'AxiosError',
    toJSON: () => ({}),
    code: '404'
  }
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Api hooks', () => {
  it('call useApiGet hook to request data', async () => {
    const mockData: MockData = {
      company: 'Crooks, Schiller and Swaniawski',
      country: 'Denmark'
    }
    const axiosResponse = getAxiosResponse(mockData)

    mockedAxios.get.mockResolvedValueOnce(axiosResponse)

    const url = '/foo'
    const { response, error, request } = useApiGet<MockData>()

    await request(url)

    expect(response.value).toStrictEqual(mockData)
    expect(error.value).toBeNull()
  })

  it('call useApiGet hook to get error', async () => {
    const axiosError = getAxiosError()

    mockedAxios.get.mockRejectedValueOnce(axiosError)

    const url = '/foo'
    const { error, request } = useApiGet<MockData>()

    await request(url)

    expect(error.value).toStrictEqual(axiosError)
  })
})
