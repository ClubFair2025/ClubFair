import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import TypingFast from './Games/TypingFast';
import SavingCheetah from './Games/SavingCheetah';
import FindingRabbit from './Games/FindingRabbit';
import DistinguishingGrowl from './Games/DistinguishingGrowl';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/typing-fast" element={<TypingFast />} />
        <Route path="/saving-cheetah" element={<SavingCheetah />} />
        <Route path="/finding-rabbit" element={<FindingRabbit />} />
        <Route path="/distinguishing-growl" element={<DistinguishingGrowl />} />
      </Routes>
    </BrowserRouter>
  )
} 

export default Router;