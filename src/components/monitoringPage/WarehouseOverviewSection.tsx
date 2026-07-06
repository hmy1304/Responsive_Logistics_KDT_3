import { useState, useRef, useEffect } from "react"
import {
  summaryCards,
  temperatureBars,
  featureCards,
} from "../../mocks/warehouseData"
import Reveal from "../Reveal"

function HoverTilt({
  children,
  className = "",
  maxRotate = 8,
  scale = 1.03,
}: {
  children: React.ReactNode
  className?: string
  maxRotate?: number
  scale?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const raf = useRef<number | null>(null)
  const pointer = useRef({ x: 0, y: 0 })
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function onMove(e: MouseEvent) {
      if (!el) return
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      pointer.current.x = px
      pointer.current.y = py
      if (raf.current == null) {
        raf.current = requestAnimationFrame(update)
      }
    }

    function onLeave() {
      setIsHover(false)
      if (raf.current == null) {
        raf.current = requestAnimationFrame(() => {
          if (ref.current) {
            ref.current.style.transform = `perspective(1000px) translateZ(0) scale(1)`
            ref.current.style.transition = `transform 300ms ease`
            ref.current.style.willChange = "auto"
          }
          raf.current = null
        })
      }
    }

    function onEnter() {
      setIsHover(true)
      if (ref.current) {
        ref.current.style.transition = `transform 180ms ease`
      }
    }

    function update() {
      raf.current = null
      const el = ref.current
      if (!el) return
      const { x, y } = pointer.current
      const nx = x - 0.5
      const ny = y - 0.5
      const rotateY = nx * maxRotate * 2
      const rotateX = -ny * maxRotate * 2
      const s = isHover ? scale : 1
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${s})`
      el.style.willChange = "transform"
    }

    el.addEventListener("mousemove", onMove)
    el.addEventListener("mouseenter", onEnter)
    el.addEventListener("mouseleave", onLeave)

    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseenter", onEnter)
      el.removeEventListener("mouseleave", onLeave)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [maxRotate, scale])

  return (
    <div
      ref={ref}
      className={`${className} transform-gpu transition-transform duration-200`}
      style={{ transform: "perspective(1000px) translateZ(0) scale(1)" }}
    >
      {children}
    </div>
  )
}

export const WarehouseOverviewSection = (): JSX.Element => {

  return (
    <section
      id="realtime"
      className="flex flex-col items-center justify-center bg-white"
      aria-labelledby="warehouse-overview-heading"
    >
      <div
        id="warehouse-overview-panel"
        role="tabpanel"
        aria-labelledby="warehouse-overview-heading"
        className="flex flex-col lg:flex-row items-center justify-center w-full md:max-w-[1400px] mx-auto
                    gap-4 sm:gap-6 md:gap-8 lg:gap-12
                    px-4 sm:px-6 md:px-8 lg:px-10
                    py-8 sm:py-12 md:py-14 lg:py-16"
      >
        <Reveal variant="zoom" delay={0} className="w-full lg:w-[600px]">
          <HoverTilt className="rounded-2xl">
            <article
              className="w-full p-6 rounded-2xl shadow min-w-0
                          animate-float duration-500"
            >
              <div className="flex flex-col gap-4 rounded-2xl bg-gradient-to-br from-sky-950 to-sky-800 p-6 sm:p-7">
                <div
                  className="flex flex-col justify-center
                              gap-3 sm:gap-4 md:gap-5 lg:gap-6
                              p-2 sm:p-3 md:p-4 lg:p-6
                              rounded-2xl"
                >
                  <header className="flex justify-between items-center w-full">
                    <h2 className="font-semibold text-sky-300 text-sm leading-[16.8px] whitespace-nowrap">
                      물류 정보
                    </h2>
                    <div
                      aria-label="실시간 상태"
                      className="inline-flex items-center gap-1.5 px-3 py-[5px] bg-green-100 rounded-[20px] animate-pulse"
                    >
                      <span
                        aria-hidden
                        className="w-[7px] h-[7px] bg-emerald-500 rounded animate-pulse"
                      />
                      <span className="font-bold text-emerald-600 text-[11px] leading-[13.2px] whitespace-nowrap">
                        LIVE
                      </span>
                    </div>
                  </header>

                  <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 w-full">
                    {summaryCards.map((card) => (
                      <HoverTilt key={card.title} maxRotate={6} scale={1.03}>
                        <div
                          className={`${card.wrapperClass} min-w-0 bg-white/5 transition-all duration-500 hover:shadow-lg`}
                        >
                          <div className="flex justify-between items-center w-full">
                            <div
                              className={`flex items-center justify-center w-8 h-8 rounded-md ${card.iconBgColor} flex-shrink-0`}
                            >
                              <img
                                src={card.iconSrc}
                                alt={card.title}
                                className="w-5 h-5"
                              />
                            </div>

                            {card.badgeType === "냉장" ? (
                              <span className="flex items-center px-2 py-[2px] h-[22px] rounded-full bg-blue-100 text-blue-600 text-[11px] font-medium">
                                {card.badgeType}
                              </span>
                            ) : (
                              <span
                                className={`flex items-center px-2 py-[1px] h-[22px] rounded-full text-[11px] font-medium ${card.badgeType === "정상" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                              >
                                <span
                                  className={`w-[7px] h-[7px] rounded-full mr-1 ${card.badgeType === "정상" ? "bg-green-600" : "bg-red-600"}`}
                                />
                                {card.badgeType}
                              </span>
                            )}
                          </div>

                          <div className={`${card.valueClass} mt-2 truncate`}>
                            {card.value}
                          </div>
                          <div className={`${card.titleClass} mt-1 truncate`}>
                            {card.title}
                          </div>
                        </div>
                      </HoverTilt>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2 sm:gap-2.5 mt-2">
                    {temperatureBars.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2.5 duration-500"
                      >
                        <span className="text-sky-300 text-xs w-16 sm:w-20 md:w-24 flex-shrink-0">
                          {item.label}
                        </span>
                        <div className="flex-1 h-[20px] sm:h-[22px] bg-sky-900 rounded overflow-hidden min-w-0">
                          <div
                            className={`${item.widthClass} ${item.barClass} h-full transition-all duration-1000`}
                          />
                        </div>
                        <span className="text-sky-300 text-xs w-10 sm:w-12 text-right flex-shrink-0">
                          {item.percent}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </HoverTilt>
        </Reveal>

        <div
          className="flex flex-col flex-1
                      lg:w-[700px] mx-auto w-full lg:max-w-none min-w-0
                      gap-3 sm:gap-4 md:gap-5 lg:gap-8
                      px-1 sm:px-2 md:px-3 lg:px-0"
        >
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-3 lg:gap-4 text-center lg:text-left">
            <Reveal
              delay={0}
              className="inline-flex items-start justify-start px-[18px] py-[7px] bg-sky-100 rounded-3xl w-fit"
            >
              <div className="font-semibold text-sky-700 text-sm sm:text-base whitespace-nowrap">
                실시간 현황 Overview
              </div>
            </Reveal>

            <h1
              id="warehouse-overview-heading"
              className="font-extrabold text-sky-900 text-left text-[38px] leading-tight"
            >
              <Reveal delay={120} as="span" className="block">
                전체 창고 현황을
              </Reveal>

              <Reveal delay={220} as="span" className="block">
                한눈에 파악합니다
              </Reveal>
            </h1>

            <Reveal delay={340}>
              <p className="text-slate-500 text-left text-[18px] w-full lg:max-w-[64ch]">
                KPI 수치와 온도 구간별 현황을 실시간으로 업데이트하여 물류
                담당자가 즉각 대응할 수 있도록 돕습니다.
              </p>
            </Reveal>

            <Reveal delay={500}>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => {
                    document.getElementById("realtime")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }}
                  className="group inline-flex items-center justify-center
                              w-full lg:w-auto gap-2 rounded-xl border-[1.5px] border-blue-600 bg-white
                              px-9 py-3.5 text-base md:text-[16px] font-semibold text-blue-600
                              transition-all duration-300
                              hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white
                              hover:shadow-lg hover:shadow-blue-600/25"
                >
                  대시보드 전체 보기
                </button>
              </div>
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
                  className={`group
                              flex w-full sm:flex-[1_1_200px]
                              items-center gap-3.5 p-3
                              bg-white rounded-xl border border-slate-200 shadow
                              transition-all duration-500
                              hover:-translate-y-2
                              hover:shadow-2xl
                              hover:shadow-sky-500/15`}
                >
                  <div
                    className={`${card.bgColor} flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-md flex-shrink-0`}
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
      </div>
    </section>
  )
}
