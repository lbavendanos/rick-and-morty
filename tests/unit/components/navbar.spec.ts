import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import router from '@/router'
import Navbar from '@/components/Navbar.vue'

describe('Navbar.vue', () => {
  it('render title and navigation', async () => {
    router.push('/')
    await router.isReady()

    render(Navbar, {
      global: {
        plugins: [router],
      },
    })

    const title = screen.getByText('Rick and Morty')
    const characters = screen.getByText(/characters/i)
    const locations = screen.getByText(/locations/i)
    const episodes = screen.getByText(/episodes/i)

    expect(title).toBeInTheDocument()
    expect(characters).toHaveAttribute('href', '/characters')
    expect(locations).toHaveAttribute('href', '/locations')
    expect(episodes).toHaveAttribute('href', '/episodes')
  })
})
