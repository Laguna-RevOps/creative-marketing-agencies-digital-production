import { SectionBar, Label, Value } from "./ICPPrimitives";

const leftTriggers = [
  {
    title: "New Client Acquisition Spike",
    trigger: "MSP signs multiple new managed service contracts in a short period.",
    reason: "Support volume increases and delivery capacity must scale quickly to protect SLAs.",
  },
  {
    title: "Key Engineer Turnover",
    trigger: "Senior engineer resigns or extended PTO impacts coverage.",
    reason: "Delivery gaps create backlog risk; MSP needs immediate coverage without long hiring cycles.",
  },
  {
    title: "Security Incident or Client Security Requirement",
    trigger: "A client incident or new security requirement increases workload.",
    reason: "MSP needs additional security, monitoring, or remediation capacity fast.",
  },
];

const rightTriggers = [
  {
    title: "Major Client Project (Migration or Modernization)",
    trigger: "Cloud migration, M365 rollout, network refresh, or compliance project begins.",
    reason: "Project workload spikes beyond normal managed services ticket volume.",
  },
  {
    title: "Tooling or Process Standardization",
    trigger: "MSP implements new PSA/RMM processes or documentation standards.",
    reason: "Needs additional hands to stabilize operations while keeping tickets on track.",
  },
];

const TriggerBlock = ({ title, trigger, reason }: { title: string; trigger: string; reason: string }) => (
  <div className="border-b border-icp-grid/20 last:border-b-0 px-2 py-1.5 bg-icp-cell text-[10px] leading-tight">
    <div className="font-bold text-icp-label mb-0.5">{title}</div>
    <div><Label>Trigger: </Label><Value>{trigger}</Value></div>
    <div className="mt-0.5"><Label>Reason: </Label><Value>{reason}</Value></div>
  </div>
);

const BuyingTriggersSection = () => (
  <div>
    <SectionBar>
      <div className="text-center">Buying Triggers Events</div>
    </SectionBar>
    <div className="grid grid-cols-2 border-x border-b border-icp-grid/30">
      <div className="border-r border-icp-grid/30">
        {leftTriggers.map((t, i) => <TriggerBlock key={i} {...t} />)}
      </div>
      <div>
        {rightTriggers.map((t, i) => <TriggerBlock key={i} {...t} />)}
      </div>
    </div>
  </div>
);

export default BuyingTriggersSection;
