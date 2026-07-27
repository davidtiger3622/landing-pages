import { describe, it, expect } from 'vitest'
import { renderWithRouter } from '../../test-utils'
import SaasLanding from '../SaasLanding'

describe('SaasLanding', () => {
  it('renders without crashing', () => {
    const { getByText } = renderWithRouter(<SaasLanding />)
    expect(getByText(/Analytics that actually/)).toBeInTheDocument()
  })

  it('shows all three pricing tiers', () => {
    const { getByText } = renderWithRouter(<SaasLanding />)
    expect(getByText('Starter')).toBeInTheDocument()
    expect(getByText('Pro')).toBeInTheDocument()
    expect(getByText('Enterprise')).toBeInTheDocument()
  })
})
