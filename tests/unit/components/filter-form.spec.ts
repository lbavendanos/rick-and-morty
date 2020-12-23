/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { render, screen, fireEvent } from '@testing-library/vue'
import FilterForm from '@/components/FilterForm.vue'
import { FilterOptions } from '@/types'

describe('FilterForm.vue', () => {
  it('render form', async () => {
    const { emitted } = render(FilterForm)

    const filterOptions: FilterOptions = {}
    const keywordsInput = screen.getByLabelText(/keywords/i)
    const okButton = screen.getByText(/ok/i)
    const cancelButton = screen.getByText(/cancel/i)

    filterOptions.keywords = 'Rick and Morty'

    await fireEvent.update(keywordsInput, filterOptions.keywords)
    await fireEvent.click(okButton)

    // @ts-ignore
    expect(emitted().submit[0][0]).toStrictEqual(filterOptions)

    filterOptions.keywords = ''

    await fireEvent.click(cancelButton)

    // @ts-ignore
    expect(emitted().cancel[0][0]).toStrictEqual(filterOptions)
  })
})
