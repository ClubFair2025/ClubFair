import arrow from "../../assets/img/arrow.png";
import { useEffect } from "react";

function FinalPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-[844px] bg-[url('/src/assets/img/lastBackground.webp')] bg-[length:100%_100%] flex flex-col items-center overflow-y-auto relative">
      <div className="absolute top-[72%] w-full flex flex-col items-center">
        <a
          className="mt-15 w-[90%] h-11 bg-white flex justify-center items-center relative rounded-3xl"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeNx3dRjVz4PpOWAVA8Cmdy6aHtkFqV886ZGx_ZWF2HlLRJsw/viewform"
        >
          <span className="text-base font-semibold">지원하러 가기</span>
          <img className="w-5 h-5 absolute left-[90%]" src={arrow} alt="꺽쇠" />
        </a>
        <a
          className="my-3 w-[90%] h-11 bg-white flex justify-center items-center relative rounded-3xl"
          href="https://www.likelionssu.kr/"
        >
          <span className="text-base font-semibold">
            숭멋사 공식 홈페이지 구경하기
          </span>
          <img className="w-5 h-5 absolute left-[90%]" src={arrow} alt="꺽쇠" />
        </a>
      </div>
    </div>
  );
}

export default FinalPage;
