import vector35 from "../../../public/images/vector-35.svg";
import vector39 from "../../../public/images/vector-39.svg";

const ENTER = "animate-rise";

const benefits = [
  { icon: vector39, text: "14일 무료 체험" },
  { icon: vector39, text: "별도 설치 불필요" },
  { icon: vector39, text: "전담 온보딩 지원" },
];

export const MonitoringCTASection = (): JSX.Element => {
  return (
    <section
      id="apply"
      aria-labelledby="monitoring-cta-title"
      className="relative flex flex-col items-center justify-center text-center
                 overflow-hidden bg-gradient-to-br from-sky-200 via-sky-400 to-sky-500
                 px-6 py-24 sm:px-8 lg:px-10 lg:py-28"
    >
      {/* 배경 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/images/section4-bg_monitoring.png')] bg-cover bg-center animate-ken-burns"
      />

      {/* 콘텐츠 */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <h2
          id="monitoring-cta-title"
          className={`${ENTER} font-extrabold text-white text-3xl sm:text-4xl lg:text-[44px] leading-tight`}
          style={{ animationDelay: "100ms" }}
        >
          지금 바로 모니터링을 시작하세요
        </h2>

        <p
          className={`${ENTER} text-sky-300 text-base sm:text-lg mt-2`}
          style={{ animationDelay: "200ms" }}
        >
          무료 체험 14일, 설치 없이 바로 시작됩니다.
        </p>

        {/* 버튼 영역 */}
        <div
          className={`${ENTER} flex flex-col sm:flex-row gap-4 items-center justify-center mt-6`}
          style={{ animationDelay: "300ms" }}
        >
          <button
            type="button"
            aria-label="대시보드 전체 보기"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 
                       bg-sky-500 rounded-xl shadow-lg text-white font-bold 
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            <img src={vector35} alt="" className="w-5 h-5" />
            대시보드 전체 보기
          </button>
          <button
            type="button"
            aria-label="더 알아보기"
            className="inline-flex items-center justify-center px-8 py-4 
                       rounded-xl border border-white/30 text-sky-300 font-semibold 
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            더 알아보기
          </button>
        </div>

        {/* 혜택 리스트 */}
        <ul
          className={`${ENTER} flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center mt-8`}
          style={{ animationDelay: "400ms" }}
        >
          {benefits.map((benefit) => (
            <li key={benefit.text} className="flex items-center gap-2">
              <img src={benefit.icon} alt="" className="w-4 h-4" />
              <span className="text-sky-300 text-sm sm:text-base">
                {benefit.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
