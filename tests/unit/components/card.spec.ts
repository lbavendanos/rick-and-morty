import { shallowMount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

interface MockData {
  type: string
  image: string
  name: string
  description: string
}

const mockData: MockData = {
  type: 'CHARACTER',
  image: 'rick-and-morty.png',
  name: 'Rick and Morty',
  description: 'Rick and Morty the best serie'
}

function wrapperFactory(options = {}) {
  return shallowMount(Card, {
    props: mockData,
    ...options
  })
}

describe('Card.vue', () => {
  it('render structure', () => {
    const wrapper = wrapperFactory()
    const card = wrapper.find('.card')

    expect(card.exists()).toBe(true)

    const cardImage = card.find('.card-image')
    const cardName = card.find('.card-name')
    const cardType = card.find('.card-type')
    const cardDescription = card.find('.card-description')

    expect(cardImage.exists()).toBe(true)
    expect(cardName.exists()).toBe(true)
    expect(cardType.exists()).toBe(true)
    expect(cardDescription.exists()).toBe(true)
  })

  it('sets the value', () => {
    const wrapper = wrapperFactory()

    const card = wrapper.find('.card')
    const cardImage = card.find('.card-image')
    const cardName = card.find('.card-name')
    const cardType = card.find('.card-type')
    const cardDescription = card.find('.card-description')

    expect(cardImage.attributes('src')).toBe(mockData.image)
    expect(cardName.text()).toBe(mockData.name)
    expect(cardType.text()).toBe(mockData.type)
    expect(cardDescription.text()).toBe(mockData.description)
  })
})
