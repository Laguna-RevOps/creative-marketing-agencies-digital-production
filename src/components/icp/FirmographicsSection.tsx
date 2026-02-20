import { SectionBar, GridCell, Label, Value } from "./ICPPrimitives";

const firmographicsData = [
  { label: "Target Industry", value: "Managed IT Services / Managed Security Services (MSSP)" },
  { label: "Company size", value: "10–50 employees" },
  { label: "Annual Revenue", value: "$500,000–$10M" },
  { label: "Location", value: "United States" },
  { label: "Company Age", value: "3+ Years" },
];

const techStacks = [
  { label: "Cloud Platforms", value: "Microsoft Azure, Amazon Web Services (AWS), Google Cloud Platform (GCP)" },
  { label: "Core MSP Tools", value: "RMM Platforms, PSA Tools, Ticketing Systems, Endpoint Detection & Response (EDR)" },
  { label: "Infrastructure & Productivity", value: "Microsoft 365, Active Directory, Virtualization (VMware/Hyper-V), Backup & Disaster Recovery Solutions" },
  { label: "Security & Identity", value: "MFA, IAM, SIEM" },
];

const FirmographicsSection = () => (
  <div>
    <SectionBar>
      <div className="text-center">Firmographics</div>
    </SectionBar>
    <div className="grid grid-cols-2 border-x border-b border-icp-grid/30">
      {/* Left: Firmographics list */}
      <div className="border-r border-icp-grid/30">
        {firmographicsData.map((item, i) => (
          <div key={i} className="grid grid-cols-[180px_1fr] border-b border-icp-grid/20 last:border-b-0">
            <GridCell header><Label>{item.label}</Label></GridCell>
            <GridCell><Value>{item.value}</Value></GridCell>
          </div>
        ))}
      </div>
      {/* Right: Technology stack */}
      <div>
        <GridCell header className="text-center border-b border-icp-grid/20">
          <Label>Technology Stack</Label>
        </GridCell>
        {techStacks.map((item, i) => (
          <div key={i} className="border-b border-icp-grid/20 last:border-b-0 px-2 py-1 text-[10px] leading-tight bg-icp-cell">
            <Label>{item.label}:</Label>{" "}
            <Value>{item.value}</Value>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default FirmographicsSection;
