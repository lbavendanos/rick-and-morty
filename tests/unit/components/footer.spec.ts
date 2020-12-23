import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import Footer from '@/components/Footer.vue'

describe('Footer.vue', () => {
  it('render creator', () => {
    render(Footer)

    const creator = '© 2020 lbavendanos'
    const footer = screen.getByText(creator)

    expect(footer).toBeInTheDocument()
  })
})
