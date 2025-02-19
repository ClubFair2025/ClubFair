function Intro_Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#d5cae4] from-0% to-white to-100% py-4 flex justify-center">
      <div className="px-10 py-5 bg-gray-400 rounded-lg flex flex-col items-center w-[90%]">
        <p className="font-semibold text-lg mb-5">
          웹 프로젝트의 완성을 위해 <br /> 각 분야의 팀원들을 구해야 합니다
        </p>
        <p className="font-semibold text-lg mb-16">
          4번의 게임을 통해 팀원을 구해보세요!
        </p>
        <div></div>
        <button
          className="bg-gray-700 flex justify-center items-center rounded-lg w-[90%] h-12"
          type="button"
        >
          게임 시작하기
        </button>
      </div>
    </footer>
  );
}

export default Intro_Footer;
