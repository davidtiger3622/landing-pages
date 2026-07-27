import { describe, it, expect } from 'vitest'
import { renderWithRouter } from '../../test-utils'
import AgencyLanding from '../AgencyLanding'

describe('AgencyLanding', () => {
  it('renders without crashing', () => {
    const { getByText } = renderWithRouter(<AgencyLanding />)
    expect(getByText(/STUDIO\/9/)).toBeInTheDocument()
  })

  it('shows all four services', () => {
    const { getByText } = renderWithRouter(<AgencyLanding />)
    expect(getByText('Brand Identity')).toBeInTheDocument()
    expect(getByText('Web Design')).toBeInTheDocument()
    expect(getByText('Motion & Video')).toBeInTheDocument()
    expect(getByText('Growth Strategy')).toBeInTheDocument()
  })
})
