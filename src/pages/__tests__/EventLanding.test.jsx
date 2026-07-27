import { describe, it, expect } from 'vitest'
import { renderWithRouter } from '../../test-utils'
import EventLanding from '../EventLanding'

describe('EventLanding', () => {
  it('renders without crashing', () => {
    const { getByText } = renderWithRouter(<EventLanding />)
    expect(getByText(/Automated/)).toBeInTheDocument()
  })

  it('shows the countdown units', () => {
    const { getByText } = renderWithRouter(<EventLanding />)
    expect(getByText('Days')).toBeInTheDocument()
    expect(getByText('Hours')).toBeInTheDocument()
  })
})
