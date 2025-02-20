import FirstScene from "../../assets/scene 1st.png";
import SecondScene from "../../assets/scene 2nd.png";
import ThirdScene from "../../assets/scene 3rd.png";
import { motion, useScroll, useTransform } from "framer-motion";

function Intro_Content() {
  const { scrollYProgress } = useScroll();

  const firstSectionOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.25, 0.7],
    [0, 1, 0]
  );
  const secondSectionOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.55, 0.9],
    [0, 1, 0.2]
  );
  const thirdSectionOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  return (
    <main className="bg-gradient-to-b from-[#CC6617] from-0% via-[#ffffff] via-30% to-[#D5CAE4] to-100%">
      <motion.section
        className="flex flex-col items-center h-screen py-30"
        style={{ opacity: firstSectionOpacity }}
      >
        <p className="text-gray-800 text-lg font-semibold mb-16">
          어느 날 사자는 <br /> 번뜩이는 아이디어가 떠올랐어요.
        </p>
        <img className="w-80 h-96 mb-16" src={FirstScene} alt="첫번째 장면" />
        <p className="text-amber-600 text-lg font-bold">
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
        <img className="w-80 h-96 mb-16" src={SecondScene} alt="두번째 장면" />
        <p className="text-amber-600 text-lg font-bold">
          "혼자서 웹사이트를 만드는 건 너무 버거운데...."
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
        <img className="w-80 h-96 mb-16" src={ThirdScene} alt="세번째 장면" />
        <p className="text-amber-600 text-lg font-bold">
          "그럼 웹사이트를 같이 <br />
          만들 수 있는 팀원을 구해보자!"
        </p>
      </motion.section>
    </main>
  );
}

export default Intro_Content;
