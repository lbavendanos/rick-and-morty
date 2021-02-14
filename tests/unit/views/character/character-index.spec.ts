import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import CharacterIndex from '@/views/Character/CharacterIndex.vue'

describe('CharacterIndex.vue', () => {
  it('render title and subtitle', () => {
    render(CharacterIndex, {
      global: {
        stubs: ['FilterForm', 'Characters'],
      },
    })

    const title = screen.getByText('CHARACTERS')
    const subtitle = screen.getByText(
      'In this section you can search for a character'
    )

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })
})
