import { SectionBar, Value } from "./ICPPrimitives";

const whereData = [
  { label: "Reddit", value: "r/MSP (asking blunt questions, sharing vendor experiences)" },
  { label: "Communities", value: "Vendor communities and peer groups" },
  { label: "LinkedIn", value: "Owners and sales leaders, more than engineers" },
  { label: "Events", value: "Conferences and local industry meetups" },
  { label: "Search", value: "Google (prospect research, competitor comparison)" },
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
