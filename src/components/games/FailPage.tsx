import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import frustratedLion from "../../assets/img/lion/frustratedLion.png";
import arrow from "../../assets/img/arrow.png";

function FailPage() {
  return (
    <div className="w-full h-screen bg-[url('/src/assets/img/failureBackground.webp')] bg-cover flex flex-col items-center">
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-[80%] h-100 bg-white rounded-4xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden"
      >
        <div className="z-10 flex pt-8 px-4 gap-5 justify-start">
          <img className="w-24 h-36" src={frustratedLion} alt="상단 아미지" />
          <p className="flex flex-col items-start text-black text-xl font-bold mt-6">
            팀원 구하기에
            <span className="mt-1">
              <span className="text-amber-500">실패&nbsp;</span>했어요....
            </span>
          </p>
        </div>
        <div className="absolute top-36 left-0 w-full bg-[#ffdbbc] h-64 rounded-4xl flex flex-col items-center z-0">
          <p className="mt-18 text-sm font-bold">
            이제 당신이 함께할 차례입니다!!
            <br />
            지금 숭멋사에 지원해 사자를 구해주세요🧡
          </p>
          <a
            className="w-[90%] h-9 mt-12 relative bg-white rounded-[20px] flex justify-center items-center text-base font-bold "
            href="https://www.likelionssu.kr/"
          >
            <span>숭멋사 공식 홈페이지 구경하기</span>
            <img
              className="w-5 h-5 absolute left-[90%]"
              src={arrow}
              alt="꺽쇠"
            />
          </a>
          <Link
            className="text-xs mt-3.5 font-bold underline"
            to={"/typing-fast"}
          >
            처음부터 다시 하기
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default FailPage;
