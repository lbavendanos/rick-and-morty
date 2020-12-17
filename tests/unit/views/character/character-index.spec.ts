import { mount } from '@vue/test-utils'
import CharacterIndex from '@/views/Character/CharacterIndex.vue'

function wrapperFactory(options = {}) {
  return mount(CharacterIndex, {
    global: {
      stubs: ['Characters']
    },
    ...options
  })
}

describe('CharacterIndex.vue', () => {
  it('render title', () => {
    const wrapper = wrapperFactory()
    const title = wrapper.get('.title')

    expect(title.text()).toBe('CHARACTERS')
  })

  it('render subtitle', () => {
    const wrapper = wrapperFactory()
    const subtitle = wrapper.get('.subtitle')

    expect(subtitle.text()).toBe(
      'In this section you can search for a character'
    )
  })
})
