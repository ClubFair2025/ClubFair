import { useState } from "react";
import beaverImg from "../../assets/img/other_animals/Beaver.png";
import Progressbar from "../UI/Progressbar";
import StartModal from "../UI/StartModal";
import CompleteModal from "../UI/CompleteModal";
import lionCard from "../../assets/img/cards/lionCard.png";
import beaverCard from "../../assets/img/cards/beaverCard.png";
import justinBieberCard from "../../assets/img/cards/justinBieberCard.png";
import Toast from "../UI/Toast";

function SavingCheetah() {
  const DUMMY_CARD = [
    lionCard,
    lionCard,
    lionCard,
    justinBieberCard,
    lionCard,
    lionCard,
    lionCard,
    lionCard,
    lionCard,
    beaverCard,
    lionCard,
    lionCard,
    lionCard,
    lionCard,
    lionCard,
    lionCard,
  ];

  // 시작하기 모달 -> "Start"
  // 모달 닫힘 -> "Close"
  // 완료 모달 -> "Complete"
  // 실패 모달 -> "Fail"
  const [isModalOpen, setIsModalOpen] = useState("Start");
  const [wrongState, setWrongState] = useState("");

  const modalState = () => {
    switch (isModalOpen) {
      case "Start":
        return (
          <StartModal
            open={isModalOpen}
            onClose={() => setIsModalOpen("")}
            stage={1}
          />
        );
      case "Complete":
        return (
          <CompleteModal
            open={isModalOpen}
            onClose={() => setIsModalOpen("")}
            stage={1}
          />
        );
      // case "Fail":
      //   return <FailModal />;
      default:
        return;
    }
  };

  const handlePressingCard = (id: number) => {
    if (id === 9) {
      setIsModalOpen("Complete");
    } else if (id === 3) {
      setWrongState("Oh~! 저는 저스틴 비버에요.");
    } else {
      setWrongState("어흥~ 난 사자라고!!");
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
        <div className="w-90 h-90 flex justify-center items-center bg-white rounded-[20px] mt-13">
          <div className="grid grid-cols-4 grid-rows-4 gap-1">
            {DUMMY_CARD.map((item, index) => (
              <img
                className="w-20 h-20"
                key={index}
                src={item}
                alt="카드"
                onClick={() => handlePressingCard(index)}
              />
            ))}
          </div>
        </div>
        {wrongState.length > 0 && <Toast text={wrongState} />}
      </div>
    </>
  );
}

export default SavingCheetah;
