import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Step3_Button from "../UI/Step3_Button";
import owlImg from "../../assets/img/other_animals/Suricate.png";
import { selectionData } from "../../constants/selectionData";
import StartModal from "../UI/StartModal";
import CompleteModal from "../UI/CompleteModal";
import Progressbar from "../UI/Progressbar";

function FindingRabbit() {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  // 시작하기 모달 -> "Start"
  // 모달 닫힘 -> "Close"
  // 완료 모달 -> "Complete"
  // 실패 모달 -> "Fail"
  const [isModalOpen, setIsModalOpen] = useState("Start");

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
            stage={2}
          />
        );
      case "Complete":
        return (
          <CompleteModal
            open={isModalOpen}
            onClose={() => setIsModalOpen("")}
            stage={2}
          />
        );
      // case "Fail":
      //   return <FailModal />;
      default:
        return;
    }
  };

  useEffect(() => {
    if (selected === 3) {
      setIsModalOpen("Complete");
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }
  }, [selected]);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      navigate("/fail");
    }, 11000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [navigate]);

  return (
    <>
      {modalState()}
      <div className="w-full h-screen flex flex-col bg-[url('/src/assets/img/step3_BG.webp')] bg-contain items-center">
        <p className="w-[90%] flex justify-start mb-5 mt-4">
          <img className="w-8 h-8" src={owlImg} alt="부엉이" />
        </p>
        {isModalOpen === "" && <Progressbar time={10} />}
        <p className="text-slate-900 font-bold text-base mt-16">STEP 03</p>
        <p className="text-[#852e2f] font-bold text-base mt-2">
          트렌디하고 섬세한 디자이너,
        </p>
        <p className="text-[#852e2f] font-bold text-xl">미어캣 구하기</p>
        <p className="text-neutral-800 text-sm font-semibold mt-14">
          10초 안에 '멋쟁이사자처럼'을 찾아주세요!
        </p>
        <div className="w-full h-120 overflow-y-hidden flex-col justify-center items-center gap-[17px] inline-flex">
          {selectionData.map(({ id, text }) => (
            <Step3_Button
              key={id}
              id={id}
              text={text}
              isSelected={id === selected}
              onSelection={setSelected}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default FindingRabbit;
