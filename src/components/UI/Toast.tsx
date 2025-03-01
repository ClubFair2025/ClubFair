import { motion } from "framer-motion";
import warning from "../../assets/img/cards/warning.png";

interface Props {
  text: string;
}

function Toast({ text }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="flex flex-row justify-between  gap-3.5 items-center px-4 py-1 rounded-xl absolute top-[42%] bg-white"
    >
      <img className="w-5 h-5" src={warning} alt="경고 이미지" />
      <p className="text-black text-xs font-semibold">{text}</p>
    </motion.div>
  );
}

export default Toast;
