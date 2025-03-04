import { useState, useEffect } from "react";
import chameleonImg from "../../assets/img/other_animals/Chameleon.png";
import soundGreen from "../../assets/icon/soundGreen.png";
import soundWhite from "../../assets/icon/soundWhite.png";
import selectDe from "../../assets/icon/selectDeactive.png";
import selectAc from "../../assets/icon/selectActive.png";

import StartModal from "../UI/StartModal";
import Toast from "../UI/Toast";

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
  const [selectedAnimalId, setSelectedAnimalId] = useState<number | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<AnimalSound[]>([]);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
    null,
  ); // 현재 재생 중인 오디오 추적
  const [wrongState, setWrongState] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setShuffledOptions(shuffleArray(animalSounds)); // 초기 옵션 셔플
  }, []);

  useEffect(() => {
    preloadSounds();
  }, []);

  const playSound = (animal: AnimalSound, event?: React.MouseEvent) => {
    event?.stopPropagation(); // 선택 이벤트 방지

    if (currentAudio && currentAudio !== animal.sound) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    animal.sound.currentTime = 0;
    animal.sound.play();
    setCurrentAudio(animal.sound);

    setSelectedAnimalId(animal.id);
  };

  const handleComplete = (event: React.MouseEvent) => {
    if (selectedAnimalId === null) {
      event.preventDefault();
      setWrongState(true);
      setTimeout(() => setWrongState(false), 2000);
    }
  };

  return (
    <>
      <div className="w-full min-h-[844px] flex flex-col bg-[url('/src/assets/img/step4_BG.webp')] bg-cover items-center overflow-auto scroll-smooth">
        <div className="w-full flex flex-col items-center">
          <div className="w-[90%] flex justify-start mb-5 mt-4">
            <img className="w-8 h-8" src={chameleonImg} alt="카멜레온" />
          </div>

          {isModalOpen === "Start" && (
            <StartModal
              open={isModalOpen}
              onClose={() => setIsModalOpen("")}
              stage={3}
            />
          )}

          <p className="text-slate-900 font-bold text-base mt-16">STEP 04</p>
          <p className="text-[#44652B] font-bold text-base mt-2">
            사용자의 눈을 사로잡을 프론트엔드,
          </p>
          <p className="text-[#44652B] font-bold text-xl">카멜레온 구하기</p>
          <p className="text-neutral-800 text-sm font-semibold mt-14">
            소리를 듣고 사자를 찾아주세요!
          </p>
          {wrongState && <Toast text="먼저 선택해주세요!" />}
          <div className="w-[346px] h-[400px] grid grid-cols-2 gap-4 mt-6 bg-gradient-to-b from-[#f1dbff] to-[#d5ffd7] p-7 rounded-[20px]">
            {shuffledOptions.map((animal, index) => (
              <div
                key={animal.id}
                className="flex flex-col items-center"
                onClick={() => setSelectedAnimalId(animal.id)}
              >
                <div
                  className={`w-[130px] h-[130px] flex justify-center items-center cursor-pointer rounded-[10px] transition-all duration-200 ${
                    selectedAnimalId === animal.id
                      ? "bg-[#BEE5C1] border-[2.5px] border-[#258D2B]"
                      : "bg-white border-[2.5px] border-[#CAD7CB]"
                  }`}
                  onClick={(e) => playSound(animal, e)}
                >
                  <img
                    className="w-8 h-8"
                    src={
                      selectedAnimalId === animal.id ? soundWhite : soundGreen
                    }
                    alt="사운드 듣기"
                  />
                </div>

                <div className="flex items-center gap-2 mt-2 px-2">
                  <img
                    className="w-5 h-5 cursor-pointer"
                    src={selectedAnimalId === animal.id ? selectAc : selectDe}
                    alt="선택 버튼"
                    onClick={() => setSelectedAnimalId(animal.id)}
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
            to={selectedAnimalId === 2 ? "/final" : "/fail"}
            onClick={handleComplete}
          >
            완료하기
          </Link>
        </div>
      </div>
    </>
  );
}

export default DistinguishingGrowl;
