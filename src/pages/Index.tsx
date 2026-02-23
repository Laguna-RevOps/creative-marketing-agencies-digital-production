import { useState } from "react";
import boombitLogo from "@/assets/boombit-logo.png";
import FirmographicsSection from "@/components/icp/FirmographicsSection";
import IndustryQualificationSection from "@/components/icp/IndustryQualificationSection";
import BuyingCommitteeSection from "@/components/icp/BuyingCommitteeSection";
import BuyingTriggersSection from "@/components/icp/BuyingTriggersSection";
import WhereUsersSection from "@/components/icp/WhereUsersSection";
import BuyerPersonasTab from "@/components/icp/BuyerPersonasTab";
import MessagingArchitectureTab from "@/components/icp/MessagingArchitectureTab";
import FunnelExecutionTab from "@/components/icp/FunnelExecutionTab";
import { SectionBar } from "@/components/icp/ICPPrimitives";

const tabs = [
  { id: "icp", label: "ICP" },
  { id: "personas", label: "Buyer Personas" },
  { id: "messaging", label: "Messaging Architecture" },
  { id: "funnel", label: "Funnel & Execution" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabId>("icp");

  return (
    <div className="min-h-screen bg-background p-4 flex flex-col items-center">
      {/* Print button */}
      <button
        onClick={() => window.print()}
        className="no-print mb-3 px-4 py-1.5 bg-icp-bar text-icp-bar-fg text-xs font-bold uppercase tracking-wide hover:opacity-80 transition-opacity"
      >
        Download PDF
      </button>

      {/* Tab bar */}
      <div className="no-print w-full max-w-[1100px] flex mb-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide border border-foreground border-b-0 transition-colors ${
              activeTab === tab.id
                ? "bg-icp-cell text-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            } ${tab.id !== tabs[0].id ? "-ml-px" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ICP Sheet */}
      <div className="icp-sheet w-full max-w-[1100px] border-2 border-foreground bg-icp-cell font-suse">
        {/* Logo placeholder */}
        <div className="flex justify-center py-3 border-b border-icp-grid/30">
          <img src={boombitLogo} alt="Boombit" className="h-8 inline-block mr-2 align-middle" />
          <span className="text-2xl font-bold tracking-wider text-icp-label uppercase align-middle">
            Boombit
          </span>
        </div>

        {/* Main title bar */}
        <SectionBar>
          <div className="text-center text-[13px] tracking-widest">
            {activeTab === "icp" && "MANAGED SERVICE PROVIDERS (MSPs) – MARKETING EXECUTION MODEL"}
            {activeTab === "personas" && "MSP MARKETING PRODUCTION – BUYER PERSONAS"}
            {activeTab === "messaging" && "MANAGED SERVICE PROVIDERS (MSP) – MESSAGING ARCHITECTURE"}
            {activeTab === "funnel" && "MANAGED SERVICE PROVIDER (MSP) – FUNNEL & EXECUTION"}
          </div>
        </SectionBar>

        {activeTab === "icp" && (
          <>
            <FirmographicsSection />
            <IndustryQualificationSection />
            <BuyingCommitteeSection />
            <BuyingTriggersSection />
            <WhereUsersSection />
          </>
        )}
        {activeTab === "personas" && <BuyerPersonasTab />}
        {activeTab === "messaging" && <MessagingArchitectureTab />}
        {activeTab === "funnel" && <FunnelExecutionTab />}
      </div>
    </div>
  );
};

export default Index;
