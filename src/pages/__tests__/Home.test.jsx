import { describe, it, expect } from 'vitest'
import { renderWithRouter } from '../../test-utils'
import Home from '../Home'

describe('Home', () => {
  it('renders without crashing', () => {
    const { getByText } = renderWithRouter(<Home />)
    expect(getByText('Landing Pages')).toBeInTheDocument()
  })

  it('shows all five landing page cards', () => {
    const { getAllByText } = renderWithRouter(<Home />)
    expect(getAllByText('SaaS Landing').length).toBeGreaterThan(0)
    expect(getAllByText('Business / Service').length).toBeGreaterThan(0)
    expect(getAllByText('Creator / Personal').length).toBeGreaterThan(0)
    expect(getAllByText('Event / Webinar').length).toBeGreaterThan(0)
    expect(getAllByText('Agency').length).toBeGreaterThan(0)
  })
})