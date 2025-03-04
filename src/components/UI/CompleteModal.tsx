import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OwlImg from "../../assets/img/other_animals/Owl.png";
import BeaverImg from "../../assets/img/other_animals/Beaver.png";
import SurricateImg from "../../assets/img/other_animals/Suricate.png";
import TypedText from "./TypedText";
interface modalProps {
  open: string;
  onClose: () => void;
  stage: number;
}

function CompleteModal({ open, onClose, stage }: modalProps) {
  const DUMMY_STAGE = [
    {
      img: OwlImg,
      upperText: ["STEP 01", "부엉이 구하기 성공!"],
      underText: [
        "기획자 부엉이를 구해냈어요!",
        "프로젝트의 운영과 관리는",
        "기획자에게 맡기세요.",
        "그럼 강력한 시스템을 만드는",
        "백엔드 개발자를 구하러 가볼까요!",
      ],
      bg_class: "bg-[#fbd4c0]",
      link: "/saving-cheetah",
    },

    {
      img: BeaverImg,
      upperText: ["STEP 02", "비버 구하기 성공!"],
      underText: [
        "백엔드 개발자 비버를 구해냈어요!",
        "데이터베이스와 서버 개발은",
        "비버에게 맡겨 주세요.",
        "웹사이트를 꾸며줄 디자이너를",
        "구하러 가볼까요?",
      ],
      bg_class: "bg-[#ead6c9]",
      link: "/finding-rabbit",
    },
    {
      img: SurricateImg,
      upperText: ["STEP 03", "미어캣 구하기 성공!"],
      underText: [
        "디자이너 미어캣을 구해냈어요!",
        "웹사이트의 디자인은",
        "미어캣에게 맡겨 주세요.",
        "웹사이트의 화면 부분을 개발하는",
        "프론트엔드 개발자를 구하러 가볼까요!",
      ],
      bg_class: "bg-[#ffe6bf]",
      link: "/distinguishing-growl",
    },
  ];

  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current!;

    if (open === "Complete") {
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
    <div className="bg-black fixed inset-0 opacity-40 z-50 flex">
      {open === "Complete" && (
        <motion.dialog
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-[80%] h-100 bg-white rounded-4xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden"
          ref={dialog}
        >
          <div className="z-10 flex pt-10 px-4 justify-between">
            <img
              className="w-30 h-30"
              src={DUMMY_STAGE[stage].img}
              alt="상단 아미지"
            />

            <div className="text-black text-xl font-bold mt-5 flex flex-col items-start">
              <p>{DUMMY_STAGE[stage].upperText[0]}</p>
              <p className="text-[#276b29] text-base">
                {DUMMY_STAGE[stage].upperText[1]}
              </p>
            </div>
          </div>
          <div
            className={`absolute top-36 left-0 w-full p-5 ${DUMMY_STAGE[stage].bg_class} h-64 rounded-4xl flex flex-col justify-between items-center z-0`}
          >
            <div className="text-center text-black text-sm font-semibold leading-relaxed mt-5">
              <TypedText textList={DUMMY_STAGE[stage].underText} />
            </div>
            <Link
              className="w-[90%] h-9 mt-8 mb-5 pt-3 pb-3 flex justify-center items-center bg-white rounded-3xl text-black text-base font-semibold"
              to={DUMMY_STAGE[stage].link}
            >
              다음 단계
            </Link>
          </div>
        </motion.dialog>
      )}
    </div>,
    document.getElementById("modal")!,
  );
}

export default CompleteModal;
