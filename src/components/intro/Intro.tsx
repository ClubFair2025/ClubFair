import "../globals.css";
import Intro_Header from "./Intro_Header";
import Intro_Content from "./Intro_Content";
import Intro_Footer from "./Intro_footer";

function Intro() {
  return (
    <div className="w-screen">
      <Intro_Header />
      <Intro_Content />
      <Intro_Footer />
    </div>
  );
}

export default Intro;
