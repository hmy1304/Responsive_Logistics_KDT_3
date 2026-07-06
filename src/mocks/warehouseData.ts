import image from "../../public/images/image.svg";
import s1fi2 from "../../public/images/s1fi2.svg";
import s1fi3 from "../../public/images/s1fi3.svg";
import sk1i from "../../public/images/sk1i.svg";
import vector from "../../public/images/vector.svg";
import vector4 from "../../public/images/vector-4.svg";

export const summaryCards = [
  {
    title: "전체 관리 상품",
    value: "12,530",
    valueClass: "font-extrabold text-slate-900 text-[18px] sm:text-[22px] lg:text-[26px]",
    titleClass: "font-medium text-sky-700 text-[10px]",
    wrapperClass:
      "flex flex-col items-start gap-2.5 p-3 sm:p-4 lg:p-[18px] flex-1 rounded-xl border border-[#0284c730] bg-gradient-to-br from-sky-100 to-sky-200",
    iconSrc: sk1i,
    iconBgColor: "bg-blue-200",
    badgeType: "정상",
    badgeColor: "green",
  },
  {
    title: "냉장 보관 상품",
    value: "4,230",
    valueClass: "font-extrabold text-sky-600 text-[18px] sm:text-[22px] lg:text-[26px]",
    titleClass: "font-medium text-sky-700 text-[10px]",
    wrapperClass:
      "flex flex-col items-start gap-2.5 p-3 sm:p-4 lg:p-[18px] flex-1 rounded-xl border border-[#0284c730] bg-gradient-to-br from-sky-100 to-sky-200 opacity-70",
    iconSrc: vector,
    iconBgColor: "bg-blue-200",
    badgeType: "냉장",
    badgeColor: "blue",
  },
  {
    title: "위험 상품",
    value: "54",
    valueClass: "font-extrabold text-red-600 text-[18px] sm:text-[22px] lg:text-[26px]",
    titleClass: "font-medium text-red-500 text-[10px]",
    wrapperClass:
      "flex flex-col items-start gap-2.5 p-3 sm:p-4 lg:p-[18px] flex-1 rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-red-100",
    iconSrc: image,
    iconBgColor: "bg-red-200",
    badgeType: "긴급",
    badgeColor: "red",
  },
];

export const temperatureBars = [
  {
    label: "0~5°C",
    percent: "33.8%",
    widthClass: "w-[220px]",
    barClass: "h-[22px] rounded bg-gradient-to-b from-sky-400 to-sky-700",
  },
  {
    label: "-5~0°C",
    percent: "14.7%",
    widthClass: "w-[120px]",
    barClass: "h-[22px] rounded bg-gradient-to-b from-sky-300 to-sky-400",
  },
  {
    label: "-18°C↓",
    percent: "49.6%",
    widthClass: "w-[180px]",
    barClass: "h-[22px] rounded bg-gradient-to-b from-sky-700 to-blue-900",
  },
];

export const featureCards = [
  {
    title: "실시간 KPI 갱신",
    description: "5초 단위 자동 새로고침",
    iconSrc: vector4,
    bgColor: "bg-blue-50",
  },
  {
    title: "온도 구간 분포",
    description: "냉장·냉동·상온 비율 시각화",
    iconSrc: s1fi2,
    bgColor: "bg-green-50",
  },
  {
    title: "긴급 상품 즉시 표시",
    description: "위험 상태 배지 자동 강조",
    iconSrc: s1fi3,
    bgColor: "bg-red-50",
  },
];
