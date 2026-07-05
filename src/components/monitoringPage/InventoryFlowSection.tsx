import { statCards, legendItems, featureCards } from "../../mocks/inventory"
import vector26 from "../../../public/images/vector-26.svg"
import vector27 from "../../../public/images/vector-27.svg"
import vector28 from "../../../public/images/vector-28.svg"
import vector29 from "../../../public/images/vector-29.svg"
import Reveal from "../Reveal"

export const InventoryFlowSection = (): JSX.Element => {
  return (
    <section
      id="stock"
      className="flex flex-col items-center justify-between shadow-2xl bg-white"
      aria-labelledby="inventory-flow-section-heading"
    >
      <div
        id="warehouse-overview-panel"
        role="tabpanel"
        aria-labelledby="warehouse-overview-heading"
        className="flex flex-col lg:flex-row items-center justify-center gap-15 mx-auto w-full lg:w-[1400px]
                    px-4 sm:px-6 md:px-8 lg:px-10
                    py-8 sm:py-12 md:py-14 lg:py-16"
      >
        <Reveal variant="zoom" delay={0} className="w-full lg:w-[600px]">
          <div className="flex flex-col p-6 bg-white rounded-3xl shadow">
            <div className="flex flex-col gap-4 p-7 rounded-2xl bg-gradient-to-br from-[#020d1a] via-[#03294a] to-[#0c4a6e]">
              <div className="flex items-center justify-between">
                <h2 className="text-sky-300 font-semibold text-sm">
                  재고 현황
                </h2>
                <div className="px-3 py-1 bg-green-100 rounded-[20px]">
                  <span className="text-green-600 text-xs font-semibold">
                    이번 달
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                {statCards.map((card) => (
                  <article
                    key={card.label}
                    className={`group ${card.wrapperClass}`}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={card.icon}
                        alt={card.label}
                        className="w-5 h-5 transition-transform duration-500 group-hover:scale-110"
                      />
                      <span className={card.labelClass}>{card.label}</span>
                    </div>
                    <div className={card.valueClass}>{card.value}</div>
                    <div className={card.unitClass}>{card.unit}</div>
                  </article>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="text-sky-300 text-xs">재고 소진율</span>
                  <span className="text-white text-xs font-semibold">
                    93.3%
                  </span>
                </div>
                <div
                  className="h-2.5 w-full bg-sky-900 rounded overflow-hidden"
                  role="progressbar"
                  aria-valuenow={93.3}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="w-[280px] h-2.5 bg-gradient-to-b from-green-600 to-sky-500 rounded" />
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                <div
                  className="relative w-full h-[120px]"
                  aria-label="30일 재고 추이 차트 이미지"
                >
                  <img
                    src={vector26}
                    alt=""
                    className="absolute w-full h-full bottom-0 left-0"
                  />
                  <img
                    src={vector27}
                    alt=""
                    className="absolute w-full h-full bottom-0 left-0"
                  />
                  <img
                    src={vector28}
                    alt=""
                    className="absolute w-full h-full bottom-0 left-0"
                  />
                  <img
                    src={vector29}
                    alt=""
                    className="absolute w-full h-full bottom-0 left-0"
                  />
                  <div className="absolute top-[85%] left-0 text-[10px] text-slate-400">
                    1일
                  </div>
                  <div className="absolute top-[85%] left-[46%] text-[10px] text-slate-400">
                    15일
                  </div>
                  <div className="absolute top-[85%] left-[94%] text-[10px] text-slate-400">
                    30일
                  </div>
                </div>

                <div className="flex gap-4">
                  {legendItems.map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <span className={item.colorClass} />
                      <span className="text-sky-300 text-xs">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col w-full lg:w-[700px]  gap-6">
          <Reveal delay={0}>
            <div className="inline-flex items-start justify-start px-[18px] py-[7px] bg-green-100 rounded-3xl w-fit">
              <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-green-700 text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                재고 추이 분석
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="font-extrabold text-sky-900 text-left text-base text-[38px] leading-tight">
              입출고 흐름과 재고 소진율을
              <br className="hidden lg:block" />
              그래프로 확인합니다
            </h3>
          </Reveal>

          <Reveal delay={240}>
            <p className="text-slate-500 text-left text-[18px] w-full md:w-full lg:max-w-[64ch]">
              30일 입출고 추이 그래프와 로케이션별 재고 분포로 선제적인 발주
              계획을 수립할 수 있습니다.
            </p>
          </Reveal>
          <Reveal delay={360} className="mt-4">
            <button
              type="button"
              onClick={() => {
                document.getElementById("stock")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }}
              className="group inline-flex items-center justify-center
                          w-full lg:w-auto
                          gap-2 rounded-xl border-[1.5px] border-green-600
                          px-9 py-3.5
                          text-base md:text-[16px] font-semibold text-green-600
                          transition-all duration-300
                          hover:-translate-y-0.5 hover:bg-green-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/25"
            >
              재고 리포트 보기
            </button>
          </Reveal>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 self-stretch">
            {featureCards.map((card, idx) => (
              <Reveal
                key={card.title}
                delay={520 + idx * 100}
                className="w-full sm:flex-[1_1_200px]"
              >
                <article
                  className="group flex w-full sm:flex-[1_1_200px] items-center gap-3.5 p-3 bg-white rounded-xl border border-slate-200 shadow transition-all duration-500
                            hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/15"
                >
                  <div
                    className={`${card.iconBgColor} flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-md flex-shrink-0`}
                  >
                    <img
                      src={card.icon}
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
