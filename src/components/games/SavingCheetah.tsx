import { useState, useEffect } from "react";
import beaverImg from "../../assets/img/other_animals/Beaver.png";
import Progressbar from "../UI/Progressbar";
import StartModal from "../UI/StartModal";
import CompleteModal from "../UI/CompleteModal";

function SavingCheetah() {
  const [input, setInput] = useState();
  // 시작하기 모달 -> "Start"
  // 모달 닫힘 -> "Close"
  // 완료 모달 -> "Complete"
  // 실패 모달 -> "Fail"
  const [isModalOpen, setIsModalOpen] = useState("Start");

  useEffect(() => {
    if (input === "멋쟁이사자처럼") {
      setIsModalOpen("Complete");
    }
  }, [input]);

  const modalState = () => {
    switch (isModalOpen) {
      case "Start":
        return (
          <StartModal
            open={isModalOpen}
            onClose={() => setIsModalOpen("")}
            stage={0}
          />
        );
      case "Complete":
        return (
          <CompleteModal
            open={isModalOpen}
            onClose={() => setIsModalOpen("")}
            stage={0}
          />
        );
      // case "Fail":
      //   return <FailModal />;
      default:
        return;
    }
  };

  return (
    <>
      {modalState()}
      <div className="w-full h-screen flex flex-col bg-[url('/src/assets/img/gameBackground.webp')] bg-cover items-center">
        <p className="w-[90%] flex justify-start mb-5 mt-4">
          <img className="w-8 h-8" src={beaverImg} alt="비버" />
        </p>
        {isModalOpen === "" && <Progressbar time={15} />}
        <p className="text-slate-900 font-bold text-base mt-16">STEP 02</p>
        <p className="text-green-800 font-bold text-base mt-2">
          강력한 시스템을 구축할 백엔드,
        </p>
        <p className="text-green-800 font-bold text-xl">비버 구하기</p>
        <p className="text-neutral-800 text-sm font-semibold mt-14">
          10초 안에 숨은 비버를 찾아주세요!
        </p>
        <div className="w-90 h-90 p-5 bg-white rounded-[20px]"></div>
      </div>
    </>
  );
}

export default SavingCheetah;
