import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./components/intro/Intro";
import TypingFast from "./components/games/TypingFast";
import SavingCheetah from "./components/games/SavingCheetah";
import FindingRabbit from "./components/games/FindingRabbit";
import DistinguishingGrowl from "./components/games/DistinguishingGrowl";
import FinalPage from "./components/games/FinalPage";
import FailPage from "./components/games/FailPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/typing-fast" element={<TypingFast />} />
        <Route path="/saving-cheetah" element={<SavingCheetah />} />
        <Route path="/finding-rabbit" element={<FindingRabbit />} />
        <Route path="/distinguishing-growl" element={<DistinguishingGrowl />} />
        <Route path="/final" element={<FinalPage />} />
        <Route path="/fail" element={<FailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
