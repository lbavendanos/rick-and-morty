import { shallowMount } from '@vue/test-utils'
import CharacterIndex from '@/views/Character/CharacterIndex.vue'

describe('CharacterIndex.vue', () => {
  it('render title', () => {
    const wrapper = shallowMount(CharacterIndex)
    const title = wrapper.get('.title')

    expect(title.text()).toBe('CHARACTERS')
  })

  it('render subtitle', () => {
    const wrapper = shallowMount(CharacterIndex)
    const subtitle = wrapper.get('.subtitle')

    expect(subtitle.text()).toBe(
      'In this section you can search for a character'
    )
  })
})
