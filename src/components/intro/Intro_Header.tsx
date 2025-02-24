import "../globals.css";
import title from "../../assets/img/intro_title.png";
import subtitle from "../../assets/img/intro_subtitle.png";

function Intro_Header() {
  return (
    <header className="bg-cover bg-no-repeat bg-top bg-[url('/src/assets/img/introBackground.webp')] h-[627px]">
      <div className="flex flex-col justify-between items-center">
        <div className="px-10 pt-30 flex flex-col items-center">
          <img className="w-80" src={title} alt="타이틀" loading="eager"/>
          <img className="w-50 mt-10" src={subtitle} alt="서브타이틀" loading="eager"/>
        </div>
      </div>
    </header>
  );
}

export default Intro_Header;
