import { describe, it, expect } from 'vitest'
import { renderWithRouter } from '../../test-utils'
import CreatorLanding from '../CreatorLanding'

describe('CreatorLanding', () => {
  it('renders without crashing', () => {
    const { getByText } = renderWithRouter(<CreatorLanding />)
    expect(getByText('@juliahearts')).toBeInTheDocument()
  })

  it('shows the link stack', () => {
    const { getByText } = renderWithRouter(<CreatorLanding />)
    expect(getByText(/Watch my latest video/)).toBeInTheDocument()
  })
})
