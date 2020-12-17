import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer.vue', () => {
  it('render creator', () => {
    const wrapper = shallowMount(Footer)
    const logo = wrapper.get('.creator')

    expect(logo.text()).toBe('© 2020 lbavendanos')
  })
})
