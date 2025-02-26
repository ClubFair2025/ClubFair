import { useState, useEffect } from "react";

import chameleonImg from "../../assets/img/other_animals/Chameleon.png";
import soundGreen from "../../assets/icon/soundGreen.png";
import soundWhite from "../../assets/icon/soundWhite.png";
import selectDe from "../../assets/icon/selectDeactive.png";
import selectAc from "../../assets/icon/selectActive.png";

import StartModal from "../UI/StartModal";
import { animalSounds, AnimalSound } from "../../constants/animalSound";

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

function DistinguishingGrowl() {
  const [isModalOpen, setIsModalOpen] = useState<string>("Start");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<AnimalSound[]>([]); // AnimalSound[] 타입 지정

  useEffect(() => {
    setShuffledOptions(shuffleArray(animalSounds));
  }, []);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const playSound = (soundUrl: string) => {
    const audio = new Audio(soundUrl);
    audio.play();
  };

  return (
    <>
      {isModalOpen === "Start" && (
        <StartModal
          open={isModalOpen}
          onClose={() => setIsModalOpen("")}
          stage={0}
        />
      )}

      <div className="w-full flex flex-col items-center">
        <div className="w-[90%] flex justify-start mb-5">
          <img className="w-8 h-8" src={chameleonImg} alt="카멜레온" />
        </div>
        <p className="text-slate-900 font-bold text-base mt-16">STEP 04</p>
        <p className="text-green-800 font-bold text-base mt-2">
          사용자의 눈을 사로잡을 프론트엔드,
        </p>
        <p className="text-green-800 font-bold text-xl">카멜레온 구하기</p>
        <p className="text-neutral-800 text-sm font-semibold mt-14">
          소리를 듣고 사자를 찾아주세요!
        </p>

        <div className="grid grid-cols-2 gap-4 mt-6">
          {shuffledOptions.map(
            (
              animal: AnimalSound,
              index: number, // 👈 여기 타입 지정
            ) => (
              <div key={animal.id} className="flex flex-col items-center">
                <div
                  className={`w-[133px] h-[133px] flex justify-center items-center cursor-pointer rounded-lg transition-all duration-200 ${
                    selectedIndex === index
                      ? "bg-[#BEE5C1] border-[2.5px] border-[#258D2B]"
                      : "bg-white border-[2.5px] border-[#CAD7CB]"
                  }`}
                  onClick={() => handleSelect(index)}
                >
                  <img
                    className="w-8 h-8"
                    src={selectedIndex === index ? soundWhite : soundGreen}
                    alt="사운드 듣기"
                    onClick={() => playSound(animal.sound)}
                  />
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <img
                    className="w-5 h-5"
                    src={selectedIndex === index ? selectAc : selectDe}
                    alt="선택 버튼"
                  />
                  <p className="text-neutral-800 text-sm font-semibold">
                    {index + 1}번
                  </p>
                </div>
              </div>
            ),
          )}
        </div>

        <button
          className="w-[90%] h-9 mt-8 mb-5 flex justify-center items-center bg-white rounded-3xl text-black text-base font-semibold"
          type="button"
        >
          완료하기
        </button>
      </div>
    </>
  );
}

export default DistinguishingGrowl;
