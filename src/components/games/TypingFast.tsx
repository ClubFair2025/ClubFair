import { useState, useEffect } from "react";
import owlImg from "../../assets/img/other_animals/Owl.png";
import Progressbar from "../UI/Progressbar";
import StartModal from "../UI/StartModal";
import CompleteModal from "../UI/CompleteModal";

function TypingFast() {
  const [input, setInput] = useState("");
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
          <img className="w-8 h-8" src={owlImg} alt="부엉이" />
        </p>
        {isModalOpen === "" && <Progressbar time={15} />}
        <p className="text-slate-900 font-bold text-base mt-16">STEP 01</p>
        <p className="text-green-800 font-bold text-base mt-2">
          넓은 시야를 지닌 기획자,
        </p>
        <p className="text-green-800 font-bold text-xl">부엉이 구하기</p>
        <p className="text-neutral-800 text-sm font-semibold mt-14">
          "멋쟁이사자처럼"을 입력해주세요.
        </p>
        <input
          className="w-[80%] h-10 rounded-[10px] mt-7 bg-white shadow-[inset_0px_0px_2px_1.5px_rgba(195,168,153,1.00)]"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </>
  );
}

export default TypingFast;
