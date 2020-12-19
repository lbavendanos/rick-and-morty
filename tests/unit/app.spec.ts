import { mount } from '@vue/test-utils'
import App from '@/App.vue'

function wrapperFactory(options = {}) {
  return mount(App, {
    global: {
      stubs: ['router-view', 'router-link']
    },
    ...options
  })
}

describe('App.vue', () => {
  it('render main section', () => {
    const wrapper = wrapperFactory()
    const main = wrapper.find('main')

    expect(main.exists()).toBe(true)
  })
})
