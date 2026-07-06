import {
  Activity,
  BarChart,
  Bell,
  Layers,
  Package,
  ShieldCheck,
  Snowflake,
  Thermometer,
  TrendingUp,
  Zap,
} from "../components/icons";
import Reveal from "../components/Reveal";
import PageTabs from "../components/common/PageTabs";

const tabs = [
  { id: "system", label: "시스템 구조" },
  { id: "features", label: "핵심기능" },
  { id: "dashboard", label: "대시보드" },
  { id: "infra", label: "인프라" },
  { id: "performance", label: "성능 수치" },
];

const featureCards = [
  {
    title: "실시간 물류 추적",
    desc: "GPS 및 IoT 기반의 실시간 위치 추적과 상태 모니터링",
    icon: Thermometer,
    color: "text-sky-500 bg-sky-50",
  },
  {
    title: "AI 수요 예측",
    desc: "머신러닝 모델을 통한 정밀한 수요 예측과 재고 최적화",
    icon: TrendingUp,
    color: "text-emerald-500 bg-emerald-50",
  },
  {
    title: "자동화 워크플로우",
    desc: "비즈니스 룰 기반의 자동화된 물류 프로세스",
    icon: Layers,
    color: "text-violet-500 bg-violet-50",
  },
  {
    title: "다중 창고 관리",
    desc: "글로벌 다중 창고의 통합 관리와 재고 최적 배분",
    icon: Package,
    color: "text-orange-500 bg-orange-50",
  },
  {
    title: "실시간 알림",
    desc: "중요 이벤트 및 예외 상황에 대한 즉시 알림",
    icon: Bell,
    color: "text-red-500 bg-red-50",
  },
  {
    title: "데이터 분석 대시보드",
    desc: "실시간 KPI 모니터링과 인사이트 대시보드",
    icon: BarChart,
    color: "text-sky-500 bg-sky-50",
  },
];

const dashboardMenus = [
  {
    title: "운영 현황",
    desc: "실시간 물류 처리 모니터링",
    icon: BarChart,
    color: "text-sky-500 bg-sky-100",
  },
  {
    title: "배송 현황",
    desc: "배송 상태 및 지연 관리",
    icon: Package,
    color: "text-emerald-500 bg-emerald-50",
  },
  {
    title: "재고 현황",
    desc: "재고 수준 및 회전율 분석",
    icon: Layers,
    color: "text-violet-500 bg-violet-50",
  },
  {
    title: "성과 현황",
    desc: "비즈니스 성과 및 KPI 분석",
    icon: Activity,
    color: "text-orange-500 bg-orange-50",
  },
];

const stacks = [
  {
    title: "Frontend",
    desc: "React, TypeScript\nTailwind CSS",
    icon: BarChart,
    color: "text-sky-500 bg-sky-50",
  },
  {
    title: "Backend",
    desc: "Spring Boot, Java\nNode.js",
    icon: Layers,
    color: "text-emerald-500 bg-emerald-50",
  },
  {
    title: "Database",
    desc: "MySQL, Redis\nElasticsearch",
    icon: Package,
    color: "text-violet-500 bg-violet-50",
  },
  {
    title: "Infrastructure",
    desc: "Kubernetes, Docker\nAWS, Terraform",
    icon: Snowflake,
    color: "text-orange-500 bg-orange-50",
  },
  {
    title: "Monitoring",
    desc: "Prometheus, Grafana\nELK Stack",
    icon: Activity,
    color: "text-purple-500 bg-purple-50",
  },
  {
    title: "Messaging",
    desc: "Apache Kafka\nRabbitMQ",
    icon: Bell,
    color: "text-red-500 bg-red-50",
  },
];

const performance = [
  {
    value: "12ms",
    label: "평균 API 응답시간",
    desc: "평균 API 응답 시간",
    icon: Zap,
    color: "text-sky-400 bg-sky-400/10 border-sky-300/20",
  },
  {
    value: "99.97%",
    label: "시스템 가용성",
    desc: "연간 가용성 목표",
    icon: ShieldCheck,
    color: "text-emerald-400 bg-emerald-400/10 border-emerald-300/20",
  },
  {
    value: "50,000+",
    label: "처리량",
    desc: "TPS (초당 처리량)",
    icon: TrendingUp,
    color: "text-amber-300 bg-amber-300/10 border-amber-200/20",
  },
  {
    value: "< 1ms",
    label: "에러율",
    desc: "평균 캐시 응답 시간",
    icon: Package,
    color: "text-violet-300 bg-violet-300/10 border-violet-200/20",
  },
];

// Removed scrollTo, using PageTabs instead

export default function ArchitecturePage() {
  return (
    <div className="bg-white">
      <section className="relative isolate overflow-hidden bg-sky-950 px-6 py-20 text-white sm:py-24">
        <img
          src="/images/archHero.png"
          alt="물류 차량과 창고 네트워크가 보이는 기술 아키텍처 배경"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/30 bg-white/10 px-4 py-2 text-sm font-semibold text-sky-100 backdrop-blur">
            <Snowflake className="h-4 w-4" /> Cold Chain Architecture
          </span>
          <h1 className="mt-7 text-[28px] font-extrabold tracking-tight sm:text-4xl lg:text-6xl">
            엔터프라이즈급 신선 물류를 위한
            <span className="block text-sky-200">기술 아키텍처</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            시스템 구조부터 핵심 기능, 대시보드, 인프라, 성능 수치까지 이미지
            순서대로 구성했습니다.
          </p>
        </div>
      </section>

      <PageTabs tabs={tabs} />

      <section id="system" className="scroll-mt-32 px-5 sm:px-6 pb-16 pt-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:gap-16 rounded-[28px] border border-slate-200 bg-white px-5 sm:px-12 py-8 sm:py-14 shadow-[0_24px_70px_rgba(15,23,42,0.08)] lg:grid-cols-[0.88fr_1.5fr] lg:items-center">
           <Reveal variant="zoom" className="rounded-3xl bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 p-5 sm:p-7 text-white shadow-2xl shadow-slate-300/60">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold text-sky-100">
                시스템 아키텍처
              </h2>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">
                ● LIVE
              </span>
            </div>
            <div className="flex sm:block overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-0 pb-2 sm:pb-0 -mx-5 px-5 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
              {[
                [
                  "Client Layer",
                  "React / Next.js",
                  ["Web Dashboard", "Mobile App"],
                  "text-sky-300 border-sky-400/20 bg-sky-400/10",
                ],
                [
                  "API Gateway",
                  "Kong / Nginx",
                  ["Load Balancer", "Rate Limiting"],
                  "text-emerald-300 border-emerald-400/20 bg-emerald-400/10",
                ],
                [
                  "Microservices",
                  "Spring Boot / Node",
                  ["재고 서비스", "온도 서비스", "알림 서비스"],
                  "text-violet-300 border-violet-400/20 bg-violet-400/10",
                ],
                [
                  "Data Layer",
                  "PostgreSQL / Redis",
                  ["Primary DB", "Cache / Queue"],
                  "text-yellow-300 border-yellow-400/20 bg-yellow-400/10",
                ],
              ].map(([title, badge, items, theme]) => (
                <div
                  key={title as string}
                  className={`w-[85%] sm:w-auto shrink-0 snap-center sm:mb-4 rounded-2xl border p-4 ${theme as string}`}
                >
                  <div className="mb-3 flex items-center justify-between text-sm font-bold">
                    <span>{title}</span>
                    <span className="rounded-full bg-white/10 px-2 py-1 text-[11px]">
                      {badge}
                    </span>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {(items as string[]).map((item) => (
                      <span
                        key={item}
                        className="rounded-lg bg-slate-950/35 px-4 py-2 text-center text-xs font-semibold text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 text-sm font-extrabold text-sky-700">
              시스템 구조
            </span>
            <h2 className="mt-6 text-[26px] sm:text-3xl lg:text-4xl font-black leading-tight text-sky-950">
              마이크로서비스 기반의
              <br />
              확장 가능한 아키텍처
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-500">
              각 도메인은 독립 서비스로 분리하여 장애 격리, 독립 배포, 무중단
              스케일아웃을 보장합니다.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-slate-500">
              {[
                "Kubernetes 오케스트레이션",
                "Apache Kafka 이벤트 스트리밍",
                "Redis 인메모리 캐시",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-100 text-emerald-500">
                    ✓
                  </span>
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-7 sm:mt-9 flex sm:grid gap-4 sm:gap-5 sm:grid-cols-2 overflow-x-auto snap-x snap-mandatory pb-4 sm:pb-0 -mx-5 px-5 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
              {[
                [
                  "레이어드 아키텍처",
                  "Client → API → Service → DB 명확한 분리",
                  Layers,
                  "text-sky-500 bg-sky-50",
                ],
                [
                  "MSA 독립 배포",
                  "서비스별 독립 배포 및 장애 격리",
                  Activity,
                  "text-emerald-500 bg-emerald-50",
                ],
                [
                  "무중단 운영",
                  "롤링 배포·블루그린 전략 적용",
                  ShieldCheck,
                  "text-violet-500 bg-violet-50",
                ],
                [
                  "Auto Scaling",
                  "트래픽 급증 시 자동 스케일아웃",
                  TrendingUp,
                  "text-amber-500 bg-amber-50",
                ],
              ].map(([title, desc, Icon, color]) => (
                <div
                  key={title as string}
                  className="w-[85%] sm:w-auto shrink-0 snap-center rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6"
                >
                  <span
                    className={`grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-2xl ${color as string}`}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-extrabold text-sky-950">
                    {title as string}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-500">
                    {desc as string}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="features" className="scroll-mt-28 bg-sky-50 px-5 py-12 sm:px-6 sm:py-18">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-black text-sky-950">
            핵심 기능 하이라이트
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            물류 운영의 모든 단계를 스마트하게 관리하고 최적화합니다.
          </p>
          <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <Reveal
                  key={card.title}
                  as="article"
                  delay={(featureCards.indexOf(card) % 3) * 80}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm sm:gap-5 sm:p-7"
                >
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl sm:h-14 sm:w-14 ${card.color}`}
                  >
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </span>
                  <div>
                    <h3 className="text-[16px] font-extrabold text-sky-950 sm:text-lg">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-6 text-slate-500 sm:mt-2 sm:text-sm">
                      {card.desc}
                    </p>
                  </div>
                 </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="dashboard" className="scroll-mt-28 px-5 py-12 sm:px-6 sm:py-18">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.55fr] lg:items-center">
          <div>
            <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-black leading-tight text-sky-950">
              실시간 대시보드
              <br />
              미리보기
            </h2>
            <p className="mt-5 text-lg text-slate-500">
              데이터 기반의 의사결정을 위한 통합 대시보드
            </p>
            <div className="mt-8 space-y-3">
              {dashboardMenus.map((menu, index) => {
                const Icon = menu.icon;
                return (
                  <div
                    key={menu.title}
                    className={`flex items-center justify-between rounded-2xl border p-5 ${index === 0 ? "border-sky-100 bg-sky-100" : "border-slate-200 bg-slate-50"}`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`grid h-11 w-11 place-items-center rounded-xl ${menu.color}`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <strong className="text-sm font-extrabold text-sky-950">
                          {menu.title}
                        </strong>
                        <p className="mt-1 text-xs text-slate-500">
                          {menu.desc}
                        </p>
                      </div>
                    </div>
                    <span className="text-slate-400">›</span>
                  </div>
                );
              })}
            </div>
          </div>

          <Reveal variant="zoom" className="rounded-[28px] bg-gradient-to-br from-slate-950 to-sky-950 p-5 sm:p-8 text-white shadow-2xl shadow-slate-300/70">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0">
              <div>
                <h3 className="text-lg font-bold">운영 현황</h3>
                <p className="mt-2 inline-flex rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                  ● 실시간 업데이트 · 2분 전
                </p>
              </div>
              <button
                className="rounded-xl bg-white/10 px-4 py-2 text-sm text-sky-100"
                type="button"
              >
                전체 기간⌄
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
              {[
                ["총 주문량", "28,547", "+324", "text-sky-400"],
                ["배송 완료율", "98.2%", "+12.5%", "text-emerald-400"],
                ["평균 배송시간", "2.4일", "-3%", "text-amber-300"],
                ["고객 만족도", "4.8/5", "+0.2", "text-yellow-300"],
              ].map(([label, value, diff, color]) => (
                <div key={label} className="rounded-2xl bg-white/10 p-4 sm:p-5">
                  <p className="text-[11px] sm:text-xs text-slate-300">{label}</p>
                  <strong className={`mt-2 block text-2xl sm:text-3xl font-black ${color}`}>
                    {value}
                  </strong>
                  <span className="text-[11px] sm:text-xs text-emerald-300">↗ {diff}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_200px]">
              <div className="rounded-2xl bg-[#203f56] p-6">
                <div className="mb-2 flex justify-between text-sm font-bold">
                  <span className="text-2xl text-sky-300">주문량 추이</span>
                  <span className="text-base font-medium text-slate-500">
                    최근 7일
                  </span>
                </div>
                <svg
                  viewBox="0 0 760 250"
                  className="h-64 w-full"
                  aria-label="주문량 추이 그래프"
                >
                  <defs>
                    <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="#22c55e" stopOpacity="0.38" />
                      <stop offset="1" stopColor="#22c55e" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>
                  {[40, 90, 140, 190].map((y) => (
                    <line
                      key={y}
                      x1="58"
                      x2="735"
                      y1={y}
                      y2={y}
                      stroke="rgba(148,163,184,0.08)"
                      strokeWidth="1"
                    />
                  ))}
                  {[
                    ["40K", 40],
                    ["30K", 90],
                    ["20K", 140],
                    ["10K", 190],
                  ].map(([label, y]) => (
                    <text
                      key={label as string}
                      x="20"
                      y={(y as number) + 5}
                      fill="rgba(148,163,184,0.32)"
                      fontSize="14"
                    >
                      {label}
                    </text>
                  ))}
                  <path
                    d="M72 210 C150 202 205 190 275 172 S400 135 475 105 S610 58 715 40 L715 220 L72 220 Z"
                    fill="url(#chartFill)"
                  />
                  <path
                    d="M72 210 C150 202 205 190 275 172 S400 135 475 105 S610 58 715 40"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  {[
                    [72, 210],
                    [175, 196],
                    [300, 168],
                    [405, 130],
                    [505, 92],
                    [625, 58],
                    [715, 40],
                  ].map(([x, y]) => (
                    <circle
                      key={`${x}-${y}`}
                      cx={x}
                      cy={y}
                      r="6"
                      fill="#22c55e"
                      stroke="#203f56"
                      strokeWidth="4"
                    />
                  ))}
                  {["5/20", "5/21", "5/22", "5/23", "5/24", "5/25", "5/26"].map(
                    (label, index) => (
                      <text
                        key={label}
                        x={72 + index * 107}
                        y="242"
                        textAnchor="middle"
                        fill="rgba(148,163,184,0.32)"
                        fontSize="14"
                      >
                        {label}
                      </text>
                    ),
                  )}
                </svg>
              </div>
              <div className="rounded-2xl bg-white/10 p-6 text-center">
                <h4 className="text-sm font-bold">지역별 배송 현황</h4>
                <div className="mx-auto mt-6 grid h-28 w-28 place-items-center rounded-full bg-[conic-gradient(#0ea5e9_0_35%,#22c55e_35%_63%,#f59e0b_63%_78%,#8b5cf6_78%_87%,#475569_87%_100%)]">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-sky-950 text-sm font-bold">
                    서울
                    <br />
                    <span className="text-xs text-slate-300">35.2%</span>
                  </div>
                </div>
                <div className="mt-5 space-y-2 text-xs">
                  {[
                    "서울 35.2%",
                    "경기 28.1%",
                    "부산 15.3%",
                    "대구 8.7%",
                    "기타 12.7%",
                  ].map((item) => (
                    <p
                      key={item}
                      className="flex justify-between text-slate-200"
                    >
                      <span>{item.split(" ")[0]}</span>
                      <b>{item.split(" ")[1]}</b>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="infra" className="scroll-mt-28 bg-sky-50 px-5 py-12 sm:px-6 sm:py-18">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-black text-sky-950">
            기술 스택 &amp; 인프라
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            최신 기술로 구축된 안정적이고 확장 가능한 플랫폼
          </p>
          <div className="mt-8 sm:mt-10 grid overflow-hidden bg-white grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {stacks.map((stack) => {
              const Icon = stack.icon;
              return (
                <Reveal
                  key={stack.title}
                  as="article"
                  delay={(stacks.indexOf(stack) % 6) * 70}
                  className="border border-slate-100 p-5 sm:p-9"
                >
                  <span
                    className={`mx-auto grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-2xl ${stack.color}`}
                  >
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </span>
                  <h3 className="mt-4 sm:mt-5 text-[15px] sm:text-base font-extrabold text-sky-950">
                    {stack.title}
                  </h3>
                  <p className="mt-3 sm:mt-4 whitespace-pre-line text-[12px] sm:text-sm leading-5 sm:leading-6 text-slate-500">
                    {stack.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="performance"
        className="scroll-mt-28 bg-gradient-to-br from-sky-950 to-slate-950 px-5 py-12 sm:px-6 sm:py-18 text-white"
      >
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-black">검증된 성능과 신뢰성</h2>
          <p className="mt-4 text-lg text-sky-200">
            실제 운영 환경에서 검증된 안정적인 성능
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-4">
            {performance.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.label}
                  as="article"
                  variant="zoom"
                  delay={(performance.indexOf(item) % 4) * 90}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-xl shadow-slate-950/20 sm:p-8 lg:p-10"
                >
                  <span
                    className={`mx-auto grid h-11 w-11 place-items-center rounded-2xl border sm:h-14 sm:w-14 ${item.color}`}
                  >
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </span>
                  <strong
                    className={`mt-4 block text-[22px] font-black sm:mt-6 sm:text-3xl lg:text-4xl ${item.color.split(" ")[0]}`}
                  >
                    {item.value}
                  </strong>
                  <p className="mt-2.5 text-[14px] font-semibold text-sky-100 sm:mt-4 sm:text-base">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-[12px] text-sky-200 sm:mt-5 sm:text-sm">{item.desc}</p>
                 </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
