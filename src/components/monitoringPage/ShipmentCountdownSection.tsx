import { useEffect, useState } from "react"
import { featureCards, alertItems } from "../../mocks/shipment"
import vector19 from "../../../public/images/vector-19.svg"
import { useInView } from "../../hooks/useInView"
import { useCountUp } from "../../hooks/useCountUp"
import Reveal from "../Reveal"

export const ShipmentCountdownSection = (): JSX.Element => {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const [counting, setCounting] = useState(false)

  useEffect(() => {
    if (inView) setCounting(true)
  }, [inView])

  const displayCount = useCountUp(127, { active: counting, duration: 1200 })

  return (
    <section
      id="expiry"
      ref={ref}
      aria-labelledby="shipment-countdown-title"
      className="relative flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-15 bg-[#f0f7ff]
                  px-4 sm:px-6 md:px-8 lg:px-10
                  py-8 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="flex w-full lg:w-[650px] flex-col items-start gap-9">
        <div className="flex flex-col items-start gap-5 self-stretch">
          <Reveal delay={0}>
            <div className="inline-flex items-center rounded-3xl bg-amber-100 px-4 py-2">
              <p className="text-sm font-semibold text-amber-700">
                유통기한 알림
              </p>
            </div>
          </Reveal>

          <h2
            id="shipment-countdown-title"
            className="text-[26px] sm:text-[32px] lg:text-[38px] font-extrabold leading-tight lg:leading-[45.6px] text-sky-900"
          >
            <Reveal delay={120} as="span" className="block">
              D-day 임박 상품을
            </Reveal>

            <Reveal delay={220} as="span" className="block">
              놓치지 않습니다
            </Reveal>
          </h2>

          <Reveal delay={340}>
            <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-slate-500 leading-relaxed">
              유통기한 D-3부터 단계별 경보를 발송하고, LOT 단위로 즉시 대응이
              가능한 액션 링크를 제공합니다.
            </p>
          </Reveal>

          <Reveal delay={500}>
            <button
              type="button"
              aria-label="유통기한 알림 설정 보기"
              onClick={() => {
                document.getElementById("expiry")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }}
              className="rounded-xl border border-amber-600 bg-white px-6 sm:px-8 lg:px-9 py-3 lg:py-4 text-amber-600 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              알림 설정 보기
            </button>
          </Reveal>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 self-stretch">
          {featureCards.map((card, idx) => (
            <Reveal
              key={card.title}
              delay={620 + idx * 100}
              className="w-full sm:flex-[1_1_200px]"
            >
              <article
                className="group flex w-full sm:flex-[1_1_200px] items-center gap-3.5 p-3 bg-white rounded-xl border border-slate-200 shadow
                            transition-all duration-500
                            hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/15"
              >
                <div
                  className={`${card.iconBgColor} flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-md flex-shrink-0`}
                >
                  <img
                    src={card.iconSrc}
                    alt={card.title}
                    className="w-5 h-5 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-sky-900 text-sm sm:text-base">
                    {card.title}
                  </span>
                  <p className="text-slate-500 text-xs sm:text-sm">
                    {card.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal variant="zoom" delay={620} className="w-full lg:w-[600px]">
        <aside className="flex w-full flex-col rounded-3xl bg-white p-4 sm:p-6 shadow">
          <div
            className="flex w-full flex-col gap-4 rounded-2xl bg-gradient-to-br from-[#020d1a] via-[#03294a] to-[#0c4a6e] p-4 sm:p-7"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-sky-300">
                유통기한 임박 알림
              </h3>

              <div className="inline-flex items-center gap-1.5 rounded-[20px] bg-[#ef444420] px-3 py-[5px]">
                <span className="h-1.5 w-1.5 rounded bg-red-500 animate-pulse" />

                <span className="text-[11px] font-semibold text-red-500 tabular-nums">
                  {displayCount}건
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              {alertItems.map((item) => (
                <div
                  key={`${item.name}-${item.day}`}
                  className={`flex items-center justify-between min-h-[60px] rounded-[12px] border px-3 sm:px-6 py-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.rowBgClass} ${item.rowBorderClass}`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div
                      className={`flex items-center justify-center rounded-lg ${item.iconBgClass} p-1.5 sm:p-2`}
                    >
                      <img
                        src={item.iconSrc}
                        alt={item.name}
                        className="w-auto h-auto max-w-[20px] sm:max-w-[24px] max-h-[20px] sm:max-h-[24px] object-contain"
                      />
                    </div>

                    <p
                      className={`text-[12px] sm:text-[14px] font-medium ${item.productTextClass}`}
                    >
                      {item.name}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3">
                    <p className={`text-xs sm:text-sm font-bold ${item.dayTextClass}`}>
                      {item.day}
                    </p>

                    {item.status && (
                      <div
                        className={`inline-flex items-center rounded-lg px-2 sm:px-3 py-[3px] sm:py-[4px] ${item.statusBgClass}`}
                      >
                        <span
                          className={`text-[10px] sm:text-[11px] font-semibold ${item.statusTextColor}`}
                        >
                          {item.status}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              aria-label="전체 127건 알림 보기"
              className="flex w-full items-center justify-center gap-[6px] mt-3 transition-all duration-300
                   hover:opacity-80 hover:translate-y-[-2px]
                   focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              <span className="text-[14px] font-medium text-amber-600">
                전체 127건 알림 보기
              </span>

              <img src={vector19} alt="" className="h-[15px] w-[15px]" />
            </button>
          </div>
        </aside>
      </Reveal>
    </section>
  )
}
