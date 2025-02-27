interface Props {
  text: string;
}

function Toast({ text }: Props) {
  return (
    <div className="flex flex-row justify-between  gap-3.5 items-center px-4 py-1 rounded-xl mt-6 bg-white">
      <img
        className="w-5 h-5"
        src="/src/assets/img/cards/warning.png"
        alt="경고 이미지"
      />
      <p className="text-black text-xs font-semibold">{text}</p>
    </div>
  );
}

export default Toast;
