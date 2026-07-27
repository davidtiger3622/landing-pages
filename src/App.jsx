import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SaasLanding from './pages/SaasLanding'
import BusinessLanding from './pages/BusinessLanding'
import CreatorLanding from './pages/CreatorLanding'
import EventLanding from './pages/EventLanding'
import AgencyLanding from './pages/AgencyLanding'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saas" element={<SaasLanding />} />
        <Route path="/business" element={<BusinessLanding />} />
        <Route path="/creator" element={<CreatorLanding />} />
        <Route path="/event" element={<EventLanding />} />
        <Route path="/agency" element={<AgencyLanding />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
