import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import pmLion from "../../assets/img/lion/pmLion.png";
import owlWanted from "../../assets/img/other_animals/owlWanted.png";
import backendLion from "../../assets/img/lion/backendLion.png";
import beaverWanted from "../../assets/img/other_animals/beaverWanted.png";
import designLion from "../../assets/img/lion/designLion.png";
import surricateWanted from "../../assets/img/other_animals/surricateWanted.png";
import frontendLion from "../../assets/img/lion/frontendLion.png";
import chameleonWanted from "../../assets/img/other_animals/chameleonWanted.png";
import TypedText from "./TypedText";

interface modalProps {
  open: string;
  onClose: () => void;
  stage: number;
}

function StartModal({ open, onClose, stage }: modalProps) {
  const DUMMY_STAGE = [
    {
      upperImg: pmLion,
      upperText_main: ["STEP 01", "기획 구하기"],
      upperText_sub: ": 넓은 시야를 지닌 부엉이",
      underImg: owlWanted,
      underText: [
        `기획자는 꼼꼼해야 해요.`,
        `10초 안에`,
        `"멋쟁이 사자처럼"`,
        `문장을 완성해주세요!`,
      ],
      bg_class: "bg-[#fbd4c0]",
    },
    {
      upperImg: backendLion,
      upperText_main: ["STEP 02", "백엔드 구하기"],
      upperText_sub: ": 튼튼한 집을 만드는 비버",
      underImg: beaverWanted,
      underText: [
        `묵묵히 시스템을`,
        `구축하는 비버가`,
        `사자 사이에 숨어있어요.`,
        `10초 안에`,
        `비버를 찾아주세요!`,
      ],
      bg_class: "bg-[#ead6c9]",
    },
    {
      upperImg: designLion,
      upperText_main: ["STEP 03", "디자인 구하기"],
      upperText_sub: ": 예리한 눈썰미의 미어캣",
      underImg: surricateWanted,
      underText: [
        `섬세한 디자이너`,
        `미어캣처럼`,
        `10초 안에`,
        `'멋쟁이사자처럼' 을`,
        `찾아주세요!`,
      ],
      bg_class: "bg-[#ffe6bf]",
    },
    {
      upperImg: frontendLion,
      upperText_main: ["STEP 04", "프론트엔드 구하기"],
      upperText_sub: ": 눈을 사로잡는 카멜레온",
      underImg: chameleonWanted,
      underText: [
        `이제 마지막 단계에요.`,
        `감각적인 프론트엔드처럼`,
        `여러 소리 중`,
        `사자 울음소리를`,
        `찾아주세요!`,
      ],
      bg_class: "bg-[#dff5cb]",
    },
  ];

  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current!;

    if (open === "Start") {
      modal.showModal();
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => window.removeEventListener("keydown", handleKeyDown);
    } else {
      modal.close();
    }
  }, [open, onClose]);

  return createPortal(
    <div className="bg-black fixed inset-0 opacity-40 z-50">
      {open === "Start" && (
        <motion.dialog
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-[320px] w-[80%] h-100 bg-white rounded-4xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden"
          ref={dialog}
        >
          <div className="z-10 flex pt-8 px-2.5 gap-5 justify-start">
            <img
              className="w-30 h-36"
              src={DUMMY_STAGE[stage].upperImg}
              alt="상단 아미지"
            />
            <p className="flex flex-col items-start text-black text-xl font-bold mt-6">
              <span>{DUMMY_STAGE[stage].upperText_main[0]}</span>
              <span className="text-sm">
                {DUMMY_STAGE[stage].upperText_main[1]}
              </span>
              <span className="text-[10px]">
                {DUMMY_STAGE[stage].upperText_sub}
              </span>
            </p>
          </div>
          <div
            className={`absolute top-36 left-0 w-full ${DUMMY_STAGE[stage].bg_class} h-64 rounded-4xl flex flex-col items-center z-0`}
          >
            <div className="mt-9 px-2 w-full h-[60%] relative">
              <div className="w-50 text-black text-sm font-semibold leading-relaxed absoulte left-0 pt-3">
                <TypedText textList={DUMMY_STAGE[stage].underText} />
              </div>
              <img
                className="w-[100px] h-32 absolute right-4 top-0"
                src={DUMMY_STAGE[stage].underImg}
                alt="수배지 이미지"
              />
            </div>
            <button
              className="w-[90%] h-9 mt-8 mb-5 pt-3 pb-3 flex justify-center items-center bg-white rounded-3xl text-black text-base font-semibold"

              type="button"
              onClick={onClose}
            >
              시작하기
            </button>
          </div>
        </motion.dialog>
      )}
    </div>,
    document.getElementById("modal")!,
  );
}

export default StartModal;
