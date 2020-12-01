import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

describe('Navbar.vue', () => {
  it('render logo', () => {
    const wrapper = shallowMount(Navbar)
    const logo = wrapper.find('.logo>svg')

    expect(logo.exists()).toBe(true)
  })

  it('render title', () => {
    const wrapper = shallowMount(Navbar)
    const title = wrapper.get('.title')

    expect(title.text()).toBe('Rick and Morty')
  })

  it('render items', () => {
    const wrapper = shallowMount(Navbar)
    const navItems = wrapper.findAll('nav>.nav-item')

    expect(navItems).toHaveLength(3)
    expect(navItems[0].text()).toBe('Character')
    expect(navItems[1].text()).toBe('Location')
    expect(navItems[2].text()).toBe('Episode')
  })
})
