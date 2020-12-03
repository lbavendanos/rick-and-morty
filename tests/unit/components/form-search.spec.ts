import { shallowMount } from '@vue/test-utils'
import FormSearch from '@/components/FormSearch.vue'

type MockData = {
  search: string | null
}

type ArrayMockData = MockData[]

const mockData: MockData = {
  search: 'rick and morty'
}

describe('FormSearch.vue', () => {
  it('render form', () => {
    const wrapper = shallowMount(FormSearch)
    const form = wrapper.find('form')

    expect(form.exists()).toBe(true)

    const label = form.find('label[for=inputSearch]')
    const input = form.find('#inputSearch')
    const button = form.find('button[type=submit]')

    expect(label.exists()).toBe(true)
    expect(input.exists()).toBe(true)
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe('Search')
  })

  it('sets the value', async () => {
    const wrapper = shallowMount(FormSearch)
    const form = wrapper.find('form')
    const input = form.find<HTMLInputElement>('#inputSearch')

    await input.setValue(mockData.search)

    expect(input.element.value).toBe(mockData.search)
  })

  it('submits a form', async () => {
    const wrapper = shallowMount(FormSearch)
    const form = wrapper.find('form')
    const input = form.find<HTMLInputElement>('#inputSearch')

    await input.setValue(mockData.search)
    await form.trigger('submit.prevent')

    expect(wrapper.emitted<ArrayMockData>('submit')[0][0]).toStrictEqual(
      mockData
    )
  })
})
