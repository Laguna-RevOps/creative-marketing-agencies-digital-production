import { SectionBar, GridCell, Label, Value } from "./ICPPrimitives";

const firmographicsData = [
  { label: "Target Industry", value: "Privately owned MSPs selling recurring managed IT and security to SMBs and lower mid-market." },
  { label: "Company Size", value: "8–40 employees. Big enough to have a real delivery org, small enough that marketing is one person wearing too many hats." },
  { label: "Revenue Range", value: "$3M–$12M (mostly recurring contracts)." },
  { label: "Location", value: "U.S.-based, usually regional. Often strong in one metro or a few neighboring states." },
  {
    label: "Internal Setup",
    value: "Owner/CEO still involved in growth decisions. 1 internal marketing lead or fractional CMO. 1–5 sales reps (or owner-led sales).",
  },
];

const techStacks = [
  { label: "CRM / Sales", value: "HubSpot, Zoho, Salesforce, ConnectWise Sell. A CRM exists, but the \"marketing side\" is often underused because no one has time." },
  { label: "Website / CMS", value: "WordPress is common. Webflow sometimes. Website exists, but updates move slow. Some MSPs are still catching up on basics." },
  { label: "Email / Outreach", value: "Basic newsletters, occasional sequences, inconsistent sends because production work piles up." },
  { label: "Ads / Tracking", value: "Google Ads or LinkedIn Ads \"on and off,\" usually paused when results feel unclear or when the vendor relationship goes sideways." },
  { label: "Reporting", value: "Basic dashboards exist, but someone is stitching reports manually when leadership asks." },
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
