import { describe, it, expect } from 'vitest'
import { renderWithRouter } from '../../test-utils'
import BusinessLanding from '../BusinessLanding'

describe('BusinessLanding', () => {
  it('renders without crashing', () => {
    const { getAllByText } = renderWithRouter(<BusinessLanding />)
    expect(getAllByText(/EMBER/).length).toBeGreaterThan(0)
  })

  it('shows business hours', () => {
    const { getByText } = renderWithRouter(<BusinessLanding />)
    expect(getByText('Mon – Thu')).toBeInTheDocument()
  })
})