import "../globals.css";
import Lottie from "lottie-react";
import { motion, useScroll, useTransform } from "framer-motion";
import scrollSign from "../../assets/scrollSign.json";
import savanaBlack from "../../assets/savanaBlack.png";
import savanaSun from "../../assets/savanaSun.png";

function Intro_Header() {
  const { scrollYProgress } = useScroll();

  const sunX = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const sunY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const blackOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <header className="bg-gradient-to-b from-[#FC7A16] from-0% via-[#FDBA47] via-[71.22%] to-[#CC6617] to-100% h-screen">
      <div className="flex flex-col justify-between h-screen">
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
          <p className="text-black/60 text-base font-semibold">
            아래로 스크롤해보세요!
          </p>
          <div className="flex justify-center">
            <Lottie
              animationData={scrollSign}
              loop
              autoplay
              style={{
                width: 50,
                height: 50,
              }}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-10">
          <motion.img
            className="w-20 h-20 ml-12"
            src={savanaSun}
            alt="intro_sun"
            style={{ x: sunX, y: sunY }}
          />
          <motion.img
            className="w-screen h-50"
            src={savanaBlack}
            alt="intro_background"
            style={{ opacity: blackOpacity }}
          />
        </div>
      </div>
    </header>
  );
}

export default Intro_Header;
