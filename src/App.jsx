import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditionsPl from './pages/TermsAndConditionsPl'
import PrivacyPolicyPl from './pages/PrivacyPolicyPl'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-and-conditions-en" element={<TermsAndConditions />} />
        <Route path="/privacy-policy-en" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions-pl" element={<TermsAndConditionsPl />} />
        <Route path="/privacy-policy-pl" element={<PrivacyPolicyPl />} />
      </Routes>
    </Router>
  )
}

export default App

