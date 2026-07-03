import { useEffect, useState } from "react";
import { featureCards, alertItems } from "../../mocks/shipment";
import vector19 from "../../../public/images/vector-19.svg";
import { useInView } from "../../hooks/useInView";
import { useCountUp } from "../../hooks/useCountUp";

export const ShipmentCountdownSection = (): JSX.Element => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    if (inView) setCounting(true);
  }, [inView]);

  const displayCount = useCountUp(127, { active: counting, duration: 1200 });

  return (
    <section
      id="expiry"
      ref={ref}
      aria-labelledby="shipment-countdown-title"
      className="relative flex flex-col lg:flex-row items-center justify-center gap-15 bg-[#f0f7ff]
              px-4 sm:px-6 md:px-8 lg:px-10
              py-8 sm:py-12 md:py-16 lg:py-20
              transition-all duration-700 ease-out
              opacity-0 translate-y-6
              data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0"
      data-inview={inView}
    >
      <div
        className="flex w-full lg:w-[650px] flex-col items-start gap-9
                   transition-all duration-700 ease-out
                   opacity-0 -translate-x-6
                   data-[inview=true]:opacity-100 data-[inview=true]:translate-x-0"
        data-inview={inView}
      >
        <div className="flex flex-col items-start gap-5 self-stretch">
          <div className="inline-flex items-center rounded-3xl bg-amber-100 px-4 py-2">
            <p className="text-sm font-semibold text-amber-700">
              유통기한 알림
            </p>
          </div>
          <h2
            id="shipment-countdown-title"
            className="text-[26px] sm:text-[32px] lg:text-[38px] font-extrabold leading-tight lg:leading-[45.6px] text-sky-900"
          >
            D-day 임박 상품을
            <br />
            놓치지 않습니다
          </h2>
          <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-slate-500 leading-relaxed">
            유통기한 D-3부터 단계별 경보를 발송하고, LOT 단위로 즉시 대응이
            가능한 액션 링크를 제공합니다.
          </p>
          <button
            type="button"
            aria-label="유통기한 알림 설정 보기"
            className="rounded-xl border border-amber-600 bg-white px-6 sm:px-8 lg:px-9 py-3 lg:py-4 text-amber-600 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            알림 설정 보기
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 self-stretch">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className="flex items-center gap-2.5 sm:gap-3.5
                           p-2 sm:p-3 md:p-2 lg:p-3
                           flex-1
                           bg-white rounded-xl border border-slate-200 shadow min-w-0
                           transition-all duration-300 hover:shadow-lg
                           animate-in fade-in scale-in"
            >
              <div
                className={`${card.iconBgColor} flex w-10 h-10 items-center justify-center rounded-[10px] flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-md flex-shrink-0`}
              >
                <img src={card.iconSrc} alt={card.title} className="w-5 h-5" />
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
          ))}
        </div>
      </div>

      <aside
        className="flex w-full md:w-[600px] flex-col rounded-3xl bg-white p-6 shadow
             transition-all duration-700 ease-out
             opacity-0 translate-x-6
             data-[inview=true]:opacity-100 data-[inview=true]:translate-x-0"
        data-inview={inView}
      >
        <div
          className="flex w-full flex-col gap-4 
                  px-1 sm:px-2 md:px-3 lg:px-0 
                  rounded-2xl 
                  bg-gradient-to-br from-[#020d1a] via-[#03294a] to-[#0c4a6e] 
                  p-6 sm:p-7"
        >
          {/* 헤더 */}
          <div className="flex items-center justify-center">
            <h3 className="text-sm font-semibold text-sky-300">
              유통기한 임박 알림
            </h3>
            <div className="inline-flex items-center gap-1.5 rounded-[20px] bg-[#ef444420] px-3 py-[5px]">
              <span className="h-1.5 w-1.5 rounded bg-red-500" />
              <span className="text-[11px] font-semibold text-red-500">
                {displayCount}건
              </span>
            </div>
          </div>

          {/* 알림 리스트 */}
          <div className="flex flex-col gap-3">
            {alertItems.map((item, idx) => (
              <div
                key={`${item.name}-${item.day}`}
                className={`flex min-h-[60px] items-center justify-between rounded-[12px] border px-6 py-2 ${item.rowBgClass} ${item.rowBorderClass}
                      transition-all duration-700 ease-out
                      opacity-0 translate-y-4
                      data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0`}
                style={{ transitionDelay: `${idx * 120}ms` }}
                data-inview={inView}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex items-center justify-center rounded-lg ${item.iconBgClass} p-2`}
                  >
                    <img
                      src={item.iconSrc}
                      alt={item.name}
                      className="w-auto h-auto max-w-[24px] max-h-[24px] object-contain"
                    />
                  </div>
                  <p
                    className={`text-[14px] font-medium ${item.productTextClass}`}
                  >
                    {item.name}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className={`text-sm font-bold ${item.dayTextClass}`}>
                    {item.day}
                  </p>
                  {item.status && (
                    <div
                      className={`inline-flex items-center rounded-lg px-3 py-[4px] ${item.statusBgClass}`}
                    >
                      <span
                        className={`text-[11px] font-semibold ${item.statusTextColor}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 버튼 */}
          <button
            type="button"
            aria-label="전체 127건 알림 보기"
            className="flex items-center justify-center gap-[6px] mt-3
                 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            <span className="text-[14px] font-medium text-amber-600">
              전체 127건 알림 보기
            </span>
            <img src={vector19} alt="" className="h-[15px] w-[15px]" />
          </button>
        </div>
      </aside>
    </section>
  );
};
