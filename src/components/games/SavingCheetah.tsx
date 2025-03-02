import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import beaverImg from "../../assets/img/other_animals/Beaver.png";
import Progressbar from "../UI/Progressbar";
import StartModal from "../UI/StartModal";
import CompleteModal from "../UI/CompleteModal";
import lionCard from "../../assets/img/cards/lionCard.png";
import beaverCard from "../../assets/img/cards/beaverCard.png";
import justinBieberCard from "../../assets/img/cards/justinBieberCard.png";
import Toast from "../UI/Toast";
import { AnimatePresence } from "framer-motion";

function SavingCheetah() {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const navigate = useNavigate();

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    } else if (id === 3) {
      setWrongState("Oh~! 저는 저스틴 비버에요.");
      setTimeout(() => {
        setWrongState("");
      }, 1000);
    } else {
      setWrongState("어흥~ 난 사자라고!!");
      setTimeout(() => {
        setWrongState("");
      }, 1000);
    }
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      if (isModalOpen === "") navigate("/fail");
    }, 10000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [navigate, isModalOpen]);

  return (
    <>
      {modalState()}
      <div className="w-full h-screen flex flex-col bg-[url('/src/assets/img/secondBackground.webp')] bg-cover items-center overflow-y-scroll relative">
        <p className="w-[90%] flex justify-start mb-5 mt-4">
          <img className="w-8 h-8" src={beaverImg} alt="비버" />
        </p>
        {isModalOpen === "" && <Progressbar time={10} />}
        <p className="text-slate-900 font-bold text-base mt-16">STEP 02</p>
        <p className="text-green-800 font-bold text-base mt-2">
          강력한 시스템을 구축할 백엔드,
        </p>
        <p className="text-green-800 font-bold text-xl">비버 구하기</p>
        <p className="text-neutral-800 text-sm font-semibold mt-14">
          10초 안에 숨은 비버를 찾아주세요!
        </p>
        <AnimatePresence>
          {wrongState.length > 0 && <Toast text={wrongState} />}
        </AnimatePresence>
        <div className="w-90 h-90 flex justify-center items-center bg-white rounded-[20px] mt-7">
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
      </div>
    </>
  );
}

export default SavingCheetah;
