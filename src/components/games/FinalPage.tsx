import arrow from "../../assets/img/arrow.png";

function FinalPage() {
  return (
    <div className="w-full h-screen bg-[url('/src/assets/img/lastBackground.webp')] bg-cover flex flex-col items-center justify-between overflow-y-scroll pb-10">
      <div>
        <p className="mt-12 text-3xl font-semibold">축하해요!</p>
        <p className="text-xl font-semibold">모든 팀원 구하기에 성공했어요</p>
      </div>
      <div className="w-full flex flex-col items-center">
        <p className="text-base font-semibold leading-7">
          숭멋사에서 프로젝트를 실제로 구현할 수 있어요
          <br /> 함께 도전해볼까요?🧡
        </p>
        <a
          className="mt-15 w-[90%] h-11 bg-white flex justify-center items-center relative rounded-3xl"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeNx3dRjVz4PpOWAVA8Cmdy6aHtkFqV886ZGx_ZWF2HlLRJsw/viewform"
        >
          <span className="text-base font-semibold">지원하러 가기</span>
          <img className="w-5 h-5 absolute left-[90%]" src={arrow} alt="꺽쇠" />
        </a>
        <a
          className="mt-3 w-[90%] h-11 bg-white flex justify-center items-center relative rounded-3xl"
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
