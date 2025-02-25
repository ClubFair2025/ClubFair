import { useState, useEffect } from "react";

interface Props {
  time: number;
}

function Progressbar({ time }: Props) {
  const [progress, setProgress] = useState(100);

  const colors = ["bg-[#B5FF77]", "bg-[#ffc66b]", "bg-[#ffbb8b]", "bg-red-700"];
  const intervalUnit = 100 / (time * 10);

  const changeColors = () => {
    switch (true) {
      case progress >= 80:
        return colors[0];
      case progress >= 50:
        return colors[1];
      case progress >= 30:
        return colors[2];
      default:
        return colors[3];
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => prev - intervalUnit);
    }, 100);

    return () => clearInterval(timer);
  }, [intervalUnit]);

  return (
    <div className="w-[90%] h-2.5 rounded-4xl bg-white">
      <div
        className={` h-2.5 rounded-4xl ${changeColors()}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default Progressbar;
