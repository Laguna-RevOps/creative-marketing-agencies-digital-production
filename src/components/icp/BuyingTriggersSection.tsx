import { SectionBar, Label, Value } from "./ICPPrimitives";

const triggers = [
  {
    title: "Production Spike",
    trigger: "New client win or campaign launch increases asset demand.",
    reason: "Internal team is at capacity.",
  },
  {
    title: "Margin Pressure",
    trigger: "Payroll rises faster than revenue.",
    reason: "Hiring full-time designers or developers strains profitability.",
  },
  {
    title: "Freelancer Fatigue",
    trigger: "Missed deadlines or inconsistent quality.",
    reason: "Too many independent contractors create inconsistency.",
  },
  {
    title: "Campaign Delays",
    trigger: "Media launches without finalized assets.",
    reason: "Production bottlenecks block delivery rhythm.",
  },
  {
    title: "Agency Growth Phase",
    trigger: "Expanding client portfolio.",
    reason: "Need scalable production before hiring internally.",
  },
];

const BuyingTriggersSection = () => (
  <div>
    <SectionBar>
      <div className="text-center">Buying Trigger Events</div>
    </SectionBar>
    <div className="border-x border-b border-icp-grid/30 bg-icp-cell">
      {triggers.map((t, i) => (
        <div key={i} className="px-3 py-2.5 border-b border-icp-grid/20 last:border-b-0">
          <p className="text-[11px] font-bold text-icp-label mb-1">{t.title}</p>
          <p className="text-[11px] leading-relaxed text-icp-value pl-3">
            <Label>Trigger: </Label><Value>{t.trigger}</Value>
          </p>
          <p className="text-[11px] leading-relaxed text-icp-value pl-3">
            <Label>Reason: </Label><Value>{t.reason}</Value>
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default BuyingTriggersSection;
