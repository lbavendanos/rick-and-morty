import { mount } from '@vue/test-utils'
import Card from '@/components/Card.vue'
import {
  createRouter,
  createWebHistory,
  RouteLocationRaw,
  RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'card',
    component: Card
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

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
  return mount(Card, {
    global: {
      plugins: [router]
    },
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

  it('render learn more link with "href" prop', async () => {
    const wrapper = wrapperFactory()
    const href = '/foo/bar'

    await wrapper.setProps({ href })

    const card = wrapper.find('.card')
    const cardAction = card.find('.card-actions')

    expect(cardAction.exists()).toBe(true)

    const cardLink = card.find('.card-link')

    expect(cardLink.exists()).toBe(true)
    expect(cardLink.attributes('href')).toBe(href)
  })

  it('render learn more link with "to" prop', async () => {
    const wrapper = wrapperFactory()
    const { name } = routes[0]
    const { path } = routes[0]
    const to: RouteLocationRaw = { name }

    await wrapper.setProps({ to })

    const card = wrapper.find('.card')
    const cardAction = card.find('.card-actions')

    expect(cardAction.exists()).toBe(true)

    const cardLink = card.find('.card-link')

    expect(cardLink.exists()).toBe(true)
    expect(cardLink.attributes('href')).toBe(path)
  })
})
