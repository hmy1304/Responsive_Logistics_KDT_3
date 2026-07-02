// icons
import s3fi3 from "../../public/images/s3fi3.svg";
import vector20 from "../../public/images/vector-20.svg";
import vector23 from "../../public/images/vector-23.svg";
import vector30 from "../../public/images/vector-30.svg";
import vector32 from "../../public/images/vector-32.svg";

// 인터페이스 정의
interface StatCard {
  label: string;
  value: string;
  unit: string;
  wrapperClass: string;
  labelClass: string;
  valueClass: string;
  unitClass: string;
  icon: string;
}

interface LegendItem {
  label: string;
  colorClass: string;
}

interface FeatureCard {
  title: string;
  description: string;
  iconWrapperClass: string;
  iconBgColor: string;
  icon: string;
}

// 데이터
export const statCards: StatCard[] = [
  {
    label: "입고",
    value: "2,840",
    unit: "개",
    wrapperClass:
      "flex flex-col min-w-px items-start gap-2 p-[18px] relative flex-1 grow bg-blue-50 rounded-xl border border-solid border-blue-200",
    labelClass:
      "relative w-fit font-medium text-sky-700 text-xs leading-[14.4px]",
    valueClass:
      "relative w-fit font-extrabold text-sky-600 text-[28px] leading-[33.6px]",
    unitClass:
      "relative w-fit font-normal text-sky-700 text-[11px] leading-[13.2px]",
    icon: vector20,
  },
  {
    label: "출고",
    value: "2,650",
    unit: "개",
    wrapperClass:
      "flex flex-col min-w-px items-start gap-2 p-[18px] relative flex-1 grow bg-green-50 rounded-xl border border-solid border-green-200",
    labelClass:
      "relative w-fit font-medium text-green-600 text-xs leading-[14.4px]",
    valueClass:
      "relative w-fit font-extrabold text-green-600 text-[28px] leading-[33.6px]",
    unitClass:
      "relative w-fit font-normal text-green-600 text-[11px] leading-[13.2px]",
    icon: vector23,
  },
];

export const legendItems: LegendItem[] = [
  { label: "입고", colorClass: "relative w-5 h-1 bg-sky-400 rounded-sm" },
  { label: "출고", colorClass: "relative w-5 h-1 bg-green-500 rounded-sm" },
];

export const featureCards: FeatureCard[] = [
  {
    title: "30일 추이 차트",
    description: "입출고 흐름 라인 그래프",
    iconWrapperClass:
      "flex w-10 h-10 items-center justify-center rounded-[10px]",
    iconBgColor: "bg-green-50",
    icon: vector30,
  },
  {
    title: "로케이션별 재고",
    description: "구역 단위 실시간 수량 조회",
    iconWrapperClass:
      "flex w-10 h-10 items-center justify-center rounded-[10px]",
    iconBgColor: "bg-blue-50",
    icon: vector32,
  },
  {
    title: "자동 일간 리포트",
    description: "매일 오전 8시 이메일 발송",
    iconWrapperClass:
      "flex w-10 h-10 items-center justify-center rounded-[10px]",
    iconBgColor: "bg-purple-50",
    icon: s3fi3,
  },
];
