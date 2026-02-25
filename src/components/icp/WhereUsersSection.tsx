import { SectionBar, Value } from "./ICPPrimitives";

const whereData = [
  { label: "Communities", value: "Agency owner communities, Creative Operations groups, Operations-focused Slack communities" },
  { label: "Professional Platforms", value: "LinkedIn" },
  { label: "Industry Events", value: "Traffic & Conversion Summit, HubSpot Inbound" },
  { label: "Research Behavior", value: "Founder-led agency newsletters, partner and competitor workflow research" },
];

const WhereUsersSection = () => (
  <div>
    <SectionBar>
      <div className="text-center">Where Users Spend Time</div>
    </SectionBar>
    <div className="border-x border-b border-icp-grid/30 bg-icp-cell">
      {whereData.map((item, i) => (
        <div key={i} className="grid grid-cols-[160px_1fr] border-b border-icp-grid/20 last:border-b-0">
          <div className="px-3 py-2 text-[11px] font-bold border-r border-icp-grid/20 bg-muted/50">
            {item.label}
          </div>
          <div className="px-3 py-2 text-[11px] leading-relaxed">
            <Value>{item.value}</Value>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default WhereUsersSection;
