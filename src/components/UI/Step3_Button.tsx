interface ButtonProps {
  id: number;
  text: string;
  isSelected: boolean;
  onSelection: Function;
}

const Step3_Button = ({ id, text, isSelected, onSelection }: ButtonProps) => {
  return (
    <div
      className={`h-11 px-[72px] py-2.5 rounded-[32px] border-2 justify-center items-center gap-2.5 inline-flex cursor-pointer
  ${isSelected ? `border-[#ff4f4f] bg-[#ffecec]` : `border-[#9a9a9a] bg-[#ffffff]`}`}
      onClick={() => onSelection(id)}
    >
      <div
        className={`text-center text-xl font-normal font-['Inter'] ${isSelected ? `text-[#ff0e0e]` : `text-[#000000]`}`}
      >
        {text}
      </div>
    </div>
  );
};

export default Step3_Button;
