import { SectionBar, Value } from "./ICPPrimitives";

const whereData = [
  { label: "Communities", value: "MSP peer groups, vendor ecosystems, industry forums" },
  { label: "Professional Platforms", value: "LinkedIn" },
  { label: "Industry Events", value: "Channel conferences, vendor roadshows, regional MSP meetups" },
  { label: "Research Behavior", value: "Competitor website comparison, service positioning review, security offering analysis" },
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
