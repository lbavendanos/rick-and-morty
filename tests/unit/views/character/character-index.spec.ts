import { shallowMount } from '@vue/test-utils'
import CharacterIndex from '@/views/Character/CharacterIndex.vue'

describe('CharacterIndex.vue', () => {
  it('render character index', () => {
    const wrapper = shallowMount(CharacterIndex)

    expect(wrapper.html()).toContain('Characters')
  })
})
