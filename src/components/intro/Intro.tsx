import "../globals.css";
import Intro_Header from "./Intro_Header";
import Intro_Content from "./Intro_Content";

function Intro() {
  return (
    <div className="w-screen">
      <Intro_Header />
      <Intro_Content />
    </div>
  );
}

export default Intro;
