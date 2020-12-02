import { mount } from '@vue/test-utils'
import router from '@/router'
import App from '@/App.vue'

function wrapperFactory(options = {}) {
  return mount(App, {
    global: {
      plugins: [router]
    },
    ...options
  })
}

describe('App.vue', () => {
  it('render main section', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = wrapperFactory()
    const main = wrapper.find('main')

    expect(main.exists()).toBe(true)
  })
})
