import { SectionBar, GridCell, Label, Value } from "./ICPPrimitives";

const firmographicsData = [
  { label: "Target Industry", value: "Managed Service Providers (MSPs)" },
  { label: "Company Size", value: "5–50 employees" },
  { label: "Annual Revenue", value: "$2M–$15M" },
  { label: "Location", value: "United States" },
  { label: "Company Age", value: "3+ Years" },
];

const techStacks = [
  { label: "CRM Systems", value: "HubSpot, Zoho, Salesforce, ConnectWise Sell" },
  { label: "Website / CMS", value: "WordPress, Webflow" },
  { label: "Email & Automation", value: "Basic newsletter cadence, limited automation sequences" },
  { label: "Advertising Platforms", value: "Google Ads, LinkedIn Ads (intermittent campaigns)" },
  { label: "Tracking", value: "GA4, Tag Manager, call tracking (often partially implemented)" },
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
          <div key={i} className="grid grid-cols-[160px_1fr] border-b border-icp-grid/20 last:border-b-0">
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
          <div key={i} className="border-b border-icp-grid/20 last:border-b-0 px-3 py-2 text-[11px] leading-relaxed bg-icp-cell">
            <Label>{item.label}:</Label>{" "}
            <Value>{item.value}</Value>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default FirmographicsSection;
