import { useEffect, useState } from 'react'
import { useCountUp } from '../../hooks/useCountUp'

const ENTER = 'animate-rise'

function Stat({
  value,
  suffix = '',
  label,
  color,
  active,
}: {
  value: number
  suffix?: string
  label: string
  color: string
  active: boolean
}) {
  const display = useCountUp(value, { active })
  return (
    <div className="text-center">
      <div className={`text-[28px] font-extrabold tabular-nums ${color}`}>
        {display.toLocaleString()}
        <span>{suffix}</span>
      </div>
      <div className="mt-1 text-[13px] text-sky-300/90">{label}</div>
    </div>
  )
}

export default function HeroBannerSection() {
  const [counting, setCounting] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setCounting(true), 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero-banner"
      className="relative overflow-hidden bg-gradient-to-br from-sky-500 via-sky-600 to-sky-800 px-6 py-24 sm:px-8 lg:px-10 lg:py-28"
    >
      {/* 배경 이미지 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/images/hero-banner-bg_monitoring.png')] bg-cover bg-center animate-ken-burns"
      />
      {/* 오버레이 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-sky-950/80 via-sky-950/55 to-sky-950/85 animate-fadeIn delay-200"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        {/* Badge */}
        <span
          className={`${ENTER} inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-1.5 text-[13px] font-medium text-sky-300 backdrop-blur-sm`}
          style={{ animationDelay: '0ms' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          REAL-TIME MONITORING
        </span>

        {/* Headline */}
        <h1
          id="hero-banner-title"
          className="text-shadow-hero mt-8 text-[34px] font-normal leading-[1.25] text-white sm:text-[46px] lg:text-[58px]"
        >
          <span className={`${ENTER} block`} style={{ animationDelay: '120ms' }}>
            한눈에 파악하는
          </span>
          <span className={`${ENTER} block`} style={{ animationDelay: '220ms' }}>
            신선 물류 창고 현황
          </span>
        </h1>

        {/* Sub copy */}
        <p
          className={`${ENTER} mt-5 max-w-xl text-[15px] leading-relaxed text-sky-200/90 sm:text-[17px]`}
          style={{ animationDelay: '340ms' }}
        >
          12,530개 상품의 온도, 유통기한, 재고를 실시간으로 확인하세요.
        </p>

        {/* Stats */}
        <div
          className={`${ENTER} mt-14 grid grid-cols-2 gap-x-12 gap-y-10 sm:flex sm:gap-14`}
          style={{ animationDelay: '500ms' }}
        >
          <Stat value={12530} label="전체 관리 상품" color="text-white" active={counting} />
          <Stat value={4230} label="냉장 상품" color="text-sky-400" active={counting} />
          <Stat value={6210} label="냉동 상품" color="text-sky-300" active={counting} />
          <Stat value={54} label="위험 상품" color="text-red-500" active={counting} />
        </div>
      </div>
    </section>
  )
}
