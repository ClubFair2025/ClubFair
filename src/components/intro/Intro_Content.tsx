import FirstScene from "../../assets/img/scene 1st.png";
import SecondScene from "../../assets/img/scene 2nd.png";
import ThirdScene from "../../assets/img/scene 3rd.png";
import Intro_Footer from "./Intro_Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "lottie-react";
import introScroll from "../../assets/animation/introScroll.json";

function Intro_Content() {
  const { scrollYProgress } = useScroll();

  const firstSectionOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.55],
    [0, 1, 0],
  );
  const secondSectionOpacity = useTransform(
    scrollYProgress,
    [0.44, 0.54, 0.75],
    [0, 1, 0],
  );
  const thirdSectionOpacity = useTransform(
    scrollYProgress,
    [0.65, 0.75, 0.95],
    [0, 1, 0],
  );

  return (
    <main className="flex flex-col items-center">
      <p
        className="w-full text-white text-base font-semibold pt-8"
        style={{
          background: "#1e1d3e",
        }}
      >
        아래로 스크롤해보세요!
      </p>
      <div
        className="w-full flex justify-center pt-8"
        style={{
          background: "#1e1d3e",
        }}
      >
        <Lottie
          animationData={introScroll}
          loop
          autoplay
          style={{
            width: 40,
            height: 40,
          }}
        />
      </div>
      <div
        className="h-100 w-full"
        style={{
          background: "linear-gradient(to bottom, #1e1d3e 0%, #BFE3FF 100%)",
        }}
      ></div>
      <div className="relative flex flex-col items-center w-full bg-cover bg-no-repeat bg-top bg-[url('/src/assets/img/introGreenBackground.webp')]">
        {/* <div className="sticky w-full h-dvh top-0"></div> */}
        <motion.section
          className="flex flex-col items-center h-screen py-30"
          style={{ opacity: firstSectionOpacity }}
        >
          <p className="text-gray-800 text-lg font-semibold mb-16">
            어느 날 사자는 <br /> 번뜩이는 아이디어가 떠올랐어요.
          </p>
          <img
            className="w-80 h-96 mb-16 rounded-xl"
            src={FirstScene}
            alt="첫번째 장면"
          />
          <p className="text-gray-500 text-lg font-bold">
            "기필코 이 웹사이트를 만들겠어!"
          </p>
        </motion.section>
        <motion.section
          className="flex flex-col items-center h-screen py-30"
          style={{ opacity: secondSectionOpacity }}
        >
          <p className="text-gray-800 text-lg font-semibold mb-16">
            하지만 한 가지 걸림돌이 있었죠.
          </p>
          <img
            className="w-80 h-96 mb-16 rounded-xl"
            src={SecondScene}
            alt="두번째 장면"
          />
          <p className="text-gray-500 text-lg font-bold">
            "혼자서 웹사이트를 만드는 건<br /> 너무 버거운데...."
          </p>
        </motion.section>
        <motion.section
          className="flex flex-col items-center h-screen py-30"
          style={{ opacity: thirdSectionOpacity }}
        >
          <p className="text-gray-800 text-lg font-semibold mb-16">
            멋쟁이 사자는 여기서 포기하지 않고
            <br /> 방법을 생각해냈어요.
          </p>
          <img
            className="w-80 h-96 mb-16 rounded-xl"
            src={ThirdScene}
            alt="세번째 장면"
          />
          <p className="text-gray-500 text-lg font-bold">
            "그럼 웹사이트를 같이 <br />
            만들 수 있는 팀원을 구해보자!"
          </p>
        </motion.section>
        <Intro_Footer />
      </div>
    </main>
  );
}

export default Intro_Content;
