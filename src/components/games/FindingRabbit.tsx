import { useState } from "react";
import Step3_Button from "../UI/Step3_Button";
import { selectionData } from "../../constants/selectionData";

function FindingRabbit() {
  const [selected, setSelected] = useState(0);

  // 시작하기 모달 -> "Start"
  // 모달 닫힘 -> "Close"
  // 완료 모달 -> "Complete"
  // 실패 모달 -> "Fail"
  const [isModalOpen, setIsModalOpen] = useState("Start");

  const onSelection = (index: number) => {
    setSelected(index);
    console.log(selected);

    if (index === 3) alert("정답입니다!");
    else alert("오답입니다!");
  };

  return (
    <>
      {/* {modalState} */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center relative">
          <div className="text-center text-[#383838] text-base font-bold font-['Inter']">
            STEP 03
          </div>
          <div className=" text-center">
            <span className="text-[#852e2f] text-base font-bold font-['Inter']">
              트렌디하고 섬세한 디자이너,
              <br />
            </span>
            <span className="text-[#852e2f] text-xl font-bold font-['Inter']">
              미어캣 구하기
            </span>
          </div>
          <div className="text-center text-[#3e3e3e] text-sm font-semibold font-['Inter'] mt-10">
            10초 안에 ‘멋쟁이사자처럼'을 찾아주세요!
          </div>
        </div>
        <div className="w-full flex-col justify-center items-center gap-[17px] inline-flex mt-15">
          {selectionData.map(({ id, text }) => (
            <Step3_Button
              id={id}
              text={text}
              isSelected={id === selected}
              onSelection={onSelection}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default FindingRabbit;
