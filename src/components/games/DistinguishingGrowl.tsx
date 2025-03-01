import { useState, useEffect } from "react";
import chameleonImg from "../../assets/img/other_animals/Chameleon.png";
import soundGreen from "../../assets/icon/soundGreen.png";
import soundWhite from "../../assets/icon/soundWhite.png";
import selectDe from "../../assets/icon/selectDeactive.png";
import selectAc from "../../assets/icon/selectActive.png";

import StartModal from "../UI/StartModal";
import CompleteModal from "../UI/CompleteModal";
// import FailModal from "../UI/FailModal";

import {
  preloadSounds,
  animalSounds,
  AnimalSound,
} from "../../constants/animalSound";
import { Link } from "react-router-dom";

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

function DistinguishingGrowl() {
  const [isModalOpen, setIsModalOpen] = useState("Start");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<AnimalSound[]>([]);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
    null,
  ); // 현재 재생 중인 오디오 추적

  const modalState = () => {
    switch (isModalOpen) {
      case "Start":
        return (
          <StartModal
            open={isModalOpen}
            onClose={() => setIsModalOpen("")}
            stage={3}
          />
        );
      // case "Fail":
      // return <FailModal />;
      default:
        return;
    }
  };

  const handleComplete = () => {
    if (selectedIndex !== null) {
      const selectedAnimal = shuffledOptions[selectedIndex];

      if (selectedAnimal && selectedAnimal.id === 2) {
        setIsModalOpen("Complete");
      } else {
        setIsModalOpen("Fail");
      }
    } else {
      alert("선택을 해주세요!");
    }
  };

  useEffect(() => {
    setShuffledOptions(shuffleArray(animalSounds)); // 초기 옵션 셔플
  }, []);

  useEffect(() => {
    preloadSounds();
  }, []);

  const playSound = (sound: HTMLAudioElement, event?: React.MouseEvent) => {
    event?.stopPropagation(); // 선택 이벤트 방지

    // 기존에 재생 중인 오디오가 있으면 정지
    if (currentAudio && currentAudio !== sound) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // 새로운 오디오 재생 및 상태 업데이트
    sound.currentTime = 0;
    sound.play();
    setCurrentAudio(sound);
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col bg-[url('/src/assets/img/step4_BG.webp')] bg-contain items-center">
        <div className="w-full flex flex-col items-center">
          <div className="w-[90%] flex justify-start mb-5 mt-4">
            <img className="w-8 h-8" src={chameleonImg} alt="카멜레온" />
          </div>
          {modalState()}

          <p className="text-slate-900 font-bold text-base mt-16">STEP 04</p>
          <p className="text-[#44652B] font-bold text-base mt-2">
            사용자의 눈을 사로잡을 프론트엔드,
          </p>
          <p className="text-[#44652B] font-bold text-xl">카멜레온 구하기</p>
          <p className="text-neutral-800 text-sm font-semibold mt-14">
            소리를 듣고 사자를 찾아주세요!
          </p>

          <div className="w-[346px] h-[400px] grid grid-cols-2 gap-4 mt-6 bg-gradient-to-b from-[#f1dbff] to-[#d5ffd7] p-7 rounded-[20px]">
            {shuffledOptions.map((animal, index) => (
              <div key={animal.id} className="flex flex-col items-center">
                <div
                  className={`w-[130px] h-[130px] flex justify-center items-center cursor-pointer rounded-[10px] transition-all duration-200 ${
                    selectedIndex === index
                      ? "bg-[#BEE5C1] border-[2.5px] border-[#258D2B]"
                      : "bg-white border-[2.5px] border-[#CAD7CB]"
                  }`}
                  onClick={() => playSound(animal.sound)}
                >
                  <img
                    className="w-8 h-8"
                    src={selectedIndex === index ? soundWhite : soundGreen}
                    alt="사운드 듣기"
                  />
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <img
                    className="w-5 h-5 cursor-pointer"
                    src={selectedIndex === index ? selectAc : selectDe}
                    alt="선택 버튼"
                    onClick={() => setSelectedIndex(index)}
                  />
                  <p className="text-neutral-800 text-sm font-semibold">
                    {index + 1}번
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            className="w-[90%] h-9 mt-8 mb-5 flex justify-center items-center bg-white rounded-3xl text-black text-base font-semibold"
            to={selectedIndex === 2 ? "/final" : "/fail"}
          >
            완료하기
          </Link>
        </div>
      </div>
    </>
  );
}

export default DistinguishingGrowl;
