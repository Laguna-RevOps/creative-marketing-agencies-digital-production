import { SectionBar, Label, Value } from "./ICPPrimitives";

const triggers = [
  {
    title: "Referral Volume Decline",
    trigger: "Referral flow slows or becomes inconsistent over multiple months.",
    reason: "MSP recognizes the need for structured marketing output to stabilize pipeline.",
  },
  {
    title: "New Sales Hire",
    trigger: "MSP hires a sales representative or begins outbound efforts.",
    reason: "Sales requires landing pages, case studies, and updated collateral to operate effectively.",
  },
  {
    title: "Cybersecurity Service Expansion",
    trigger: "MSP enhances security offerings or faces increased security-focused competition.",
    reason: "Updated security messaging and proof assets are required to remain credible.",
  },
  {
    title: "Vertical Market Push",
    trigger: "MSP targets a specific industry segment for growth.",
    reason: "Vertical positioning requires dedicated pages and tailored collateral.",
  },
  {
    title: "Agency Dissatisfaction",
    trigger: "Existing marketing vendor underperforms or relationship ends.",
    reason: "MSP wants to retain internal control while maintaining consistent production support.",
  },
  {
    title: "Competitive Visibility Pressure",
    trigger: "Competitors are visibly more active online and publishing consistently.",
    reason: "MSP must increase output to maintain perceived authority.",
  },
  {
    title: "Event or Campaign Deadline",
    trigger: "Conference, webinar, or campaign deadline approaches.",
    reason: "Asset bundle must be produced quickly without internal overload.",
  },
];

const BuyingTriggersSection = () => (
  <div>
    <SectionBar>
      <div className="text-center">Buying Triggers Events</div>
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
