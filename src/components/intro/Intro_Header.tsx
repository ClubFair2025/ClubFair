import "../globals.css";

function Intro_Header() {
  return (
    <header className="bg-cover bg-no-repeat bg-top bg-[url('/src/assets/introBackground.png')]">
      <div className="flex flex-col justify-between">
        <div className="px-10 pt-30">
          <p className="bg-gradient-to-b from-[#C5500E] to-[#5C2001] bg-clip-text text-transparent text-xl font-medium font-['Inter'] [text-shadow:_0px_0px_2px_rgb(144_95_95_/_0.25)]">
            팀원을 구하기 위한
          </p>
          <p className="bg-gradient-to-b from-[#C5500E] to-[#5C2001] bg-clip-text text-transparent text-xl font-medium font-['Inter'] [text-shadow:_0px_0px_2px_rgb(144_95_95_/_0.25)] mb-20">
            사자의 멋있는 모험
          </p>
          <p className="text-black text-[32px] font-bold font-['Inter'] [text-shadow:_0px_2px_4px_rgb(0_0_0_/_0.25)] mb-30">
            멋쟁이&nbsp;
            <span className="bg-gradient-to-b from-[#c93c00] from-0% to-[#ff2b00] to-100% bg-clip-text text-transparent">
              사자&nbsp;
            </span>
            의 모험
          </p>
        </div>
      </div>
    </header>
  );
}

export default Intro_Header;
