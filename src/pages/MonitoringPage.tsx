import HeroBannerSection from '../components/monitoringPage/HeroBannerSection'
import { WarehouseOverviewSection } from "../components/monitoringPage/WarehouseOverviewSection"
import { ShipmentCountdownSection } from "../components/monitoringPage/ShipmentCountdownSection"
import { InventoryFlowSection } from '../components/monitoringPage/InventoryFlowSection';
import { MonitoringCTASection } from "../components/monitoringPage/MonitoringCTASection"
import PageTabs from '../components/common/PageTabs';

export const tabs = [
  { id: "realtime", label: "실시간 현황" },
  { id: "expiry", label: "유통기한" },
  { id: "stock", label: "재고추이" },
  { id: "apply", label: "신청하러 가기" },
];

export default function MonitoringPage() {
  return (
    <>
        <HeroBannerSection />

        <PageTabs tabs={tabs} />

        <WarehouseOverviewSection />
        <ShipmentCountdownSection />
        <InventoryFlowSection />
        <MonitoringCTASection />
    </>
  )
}
