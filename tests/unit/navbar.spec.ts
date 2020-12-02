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

  it('render items', () => {
    const wrapper = wrapperFactory()
    const navItems = wrapper.findAll('nav>.nav-item')

    expect(navItems).toHaveLength(3)
    expect(navItems[0].text()).toBe('Character')
    expect(navItems[1].text()).toBe('Location')
    expect(navItems[2].text()).toBe('Episode')
  })
})
