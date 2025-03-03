import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypedTextProps {
  textList: string[];
}

function TypedText({ textList }: TypedTextProps) {
  const typedRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    let delay = 0;

    textList.forEach((text, index) => {
      setTimeout(() => {
        if (typedRefs.current[index]) {
          const typed = new Typed(typedRefs.current[index]!, {
            strings: [text],
            typeSpeed: 50,
            showCursor: false,
          });

          return () => typed.destroy();
        }
      }, delay);

      // 한 줄 끝나고 약간의 대기 시간 추가
      delay += text.length * 50 + 400;
    });
  }, [textList]);

  return (
    <>
      {textList.map((_, index) => (
        <p
          key={index}
          ref={(el) => {
            typedRefs.current[index] = el;
          }}
          className="text-black text-sm font-semibold leading-relaxed"
        ></p>
      ))}
    </>
  );
}

export default TypedText;
