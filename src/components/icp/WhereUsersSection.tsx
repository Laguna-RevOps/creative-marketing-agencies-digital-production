import { SectionBar, Label, Value } from "./ICPPrimitives";

const whereData = [
  { label: "Social Media", value: "LinkedIn, X, YouTube, Facebook" },
  { label: "Search Engine", value: "Google and Bing" },
  { label: "Networking Events", value: "Local IT meetups, Channel events, Tech conferences" },
];

const WhereUsersSection = () => (
  <div>
    <SectionBar>
      <div className="text-center">Where Users Spend Time</div>
    </SectionBar>
    <div className="border-x border-b border-icp-grid/30 bg-icp-cell">
      {whereData.map((item, i) => (
        <div key={i} className="grid grid-cols-[160px_1fr] border-b border-icp-grid/20 last:border-b-0">
          <div className="px-2 py-1 text-[10px] font-bold border-r border-icp-grid/20 bg-muted/50">
            {item.label}
          </div>
          <div className="px-2 py-1 text-[10px]">
            <Value>{item.value}</Value>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default WhereUsersSection;
