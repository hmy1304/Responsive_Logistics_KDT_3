import { useNavigate } from "react-router-dom"
import vector35 from "../../../public/images/vector-35.svg"
import vector39 from "../../../public/images/vector-39.svg"
import Reveal from "../Reveal"

const benefits = [
  { icon: vector39, text: "14일 무료 체험" },
  { icon: vector39, text: "별도 설치 불필요" },
  { icon: vector39, text: "전담 온보딩 지원" },
]

export const MonitoringCTASection = (): JSX.Element => {
  const navigate = useNavigate()
  
  return (
    <section
      id="apply"
      aria-labelledby="monitoring-cta-title"
      className="relative flex flex-col items-center justify-center text-center
                  overflow-hidden bg-gradient-to-br from-sky-200 via-sky-400 to-sky-500
                  px-6 py-24 sm:px-8 lg:px-10 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/images/section4-bg_monitoring.png')] bg-cover bg-center animate-ken-burns"
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <Reveal delay={0}>
          <h2
            id="monitoring-cta-title"
            className="font-extrabold text-white text-3xl sm:text-4xl lg:text-[44px] leading-tight"
          >
            지금 바로 모니터링을 시작하세요
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-2 text-base sm:text-lg text-sky-300">
            무료 체험 14일, 설치 없이 바로 시작됩니다.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-6">
            <button
              type="button"
              aria-label="대시보드 전체 보기"
              onClick={() => {
                document.getElementById("realtime")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4
                          rounded-xl bg-sky-500 text-white font-bold shadow-lg
                          transition-all duration-300
                          hover:-translate-y-0.5 hover:bg-sky-600
                          hover:shadow-xl hover:shadow-sky-500/30"
            >
              <img
                src={vector35}
                alt=""
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
              />
              대시보드 전체 보기
            </button>

            <button
              type="button"
              aria-label="더 알아보기"
              onClick={() => navigate("/service")}
              className="group inline-flex items-center justify-center
                          px-8 py-4 rounded-xl border border-white/40
                          text-white font-semibold
                          transition-all duration-300
                          hover:-translate-y-0.5
                          hover:bg-white hover:text-sky-700"
            >
              더 알아보기
            </button>
          </div>
        </Reveal>

        <Reveal delay={360}>
          <ul className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center mt-8">
            {benefits.map((benefit) => (
              <li key={benefit.text} className="flex items-center gap-2">
                <img src={benefit.icon} alt="" className="w-4 h-4" />
                <span className="text-sky-300 text-sm sm:text-base">
                  {benefit.text}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
