import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Intro from './components/intro/Intro'
import TypingFast from './components/games/TypingFast';
import SavingCheetah from './components/games/SavingCheetah';
import FindingRabbit from './components/games/FindingRabbit';
import DistinguishingGrowl from './components/games/DistinguishingGrowl';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/typing-fast" element={<TypingFast />} />
        <Route path="/saving-cheetah" element={<SavingCheetah />} />
        <Route path="/finding-rabbit" element={<FindingRabbit />} />
        <Route path="/distinguishing-growl" element={<DistinguishingGrowl />} />
      </Routes>
    </BrowserRouter>
  )
} 

export default Router;