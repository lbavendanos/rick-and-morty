import { mount } from '@vue/test-utils'
import router from '@/router'
import Navbar from '@/components/Navbar.vue'

function wrapperFactory(options = {}) {
  return mount(Navbar, {
    global: {
      plugins: [router]
    },
    ...options
  })
}

describe('Navbar.vue', () => {
  it('render logo', () => {
    const wrapper = wrapperFactory()
    const logo = wrapper.find('.logo>svg')

    expect(logo.exists()).toBe(true)
  })

  it('render title', () => {
    const wrapper = wrapperFactory()
    const title = wrapper.get('.title')

    expect(title.text()).toBe('Rick and Morty')
  })

  it('render items', async () => {
    const wrapper = wrapperFactory()
    const items = wrapper.findAll('nav>.nav-item')

    expect(items).toHaveLength(3)
    expect(items[0].text()).toBe('Characters')
    expect(items[0].attributes('href')).toBe('/characters')
    expect(items[1].text()).toBe('Locations')
    expect(items[1].attributes('href')).toBe('/locations')
    expect(items[2].text()).toBe('Episodes')
    expect(items[2].attributes('href')).toBe('/episodes')
  })
})
