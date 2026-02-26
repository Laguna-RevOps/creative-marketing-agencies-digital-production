import { SectionBar, Label, Value } from "./ICPPrimitives";

const firmographicsData = [
  { label: "Target Industry", value: "Creative, Marketing, and Digital Agencies" },
  { label: "Company Size", value: "5-50 employees" },
  { label: "Annual Revenue", value: "$2M-$15M" },
  { label: "Location", value: "United States & Canada" },
  { label: "Company Age", value: "3+ years" },
];

const techStacks = [
  { label: "Creative & Design Tools", value: "Adobe Creative Cloud, Figma, After Effects, Premiere Pro, Sketch" },
  { label: "CMS & Web Platforms", value: "WordPress, Webflow, Shopify, Adobe Experience Manager (AEM)" },
  { label: "CRM & Marketing Platforms", value: "HubSpot, Salesforce, HubSpot Marketing Hub" },
  { label: "Advertising Platforms", value: "Google Ads, Meta Ads, LinkedIn Ads" },
  { label: "Tracking & Analytics", value: "GA4, Tag Manager, Looker Studio" },
];

const FirmographicsSection = () => (
  <div>
    <SectionBar>
      <div className="text-center">Firmographics</div>
    </SectionBar>
    <div className="grid grid-cols-2 border-x border-b border-icp-grid/30">
      {/* Left: Firmographics list */}
      <div className="border-r border-icp-grid/30">
        <div className="min-h-[36px] px-4 py-1.5 flex items-center justify-center text-center border-b border-gray-200 bg-muted/50">
          <span className="text-[11px] font-semibold text-icp-label">
            <Label>Company Profile</Label>
          </span>
        </div>
        {firmographicsData.map((item, i) => (
          <div key={i} className="min-h-[44px] px-4 py-2.5 flex items-center justify-between border-b border-gray-200 last:border-b-0 bg-icp-cell">
            <span className="w-40 shrink-0 text-[11px] font-semibold text-icp-label">
              {item.label}
            </span>
            <span className="flex-1 text-right text-[11px] leading-relaxed text-icp-value">
              <Value>{item.value}</Value>
            </span>
          </div>
        ))}
      </div>
      {/* Right: Technology stack */}
      <div>
        <div className="min-h-[36px] px-4 py-1.5 flex items-center justify-center text-center border-b border-gray-200 bg-muted/50">
          <span className="text-[11px] font-semibold text-icp-label">
            <Label>Technology Stack</Label>
          </span>
        </div>
        {techStacks.map((item, i) => (
          <div key={i} className="min-h-[44px] px-4 py-2.5 flex items-center justify-between border-b border-gray-200 last:border-b-0 bg-icp-cell">
            <span className="w-40 shrink-0 text-[11px] font-semibold text-icp-label">
              {item.label}
            </span>
            <span className="flex-1 text-right text-[11px] leading-relaxed text-icp-value">
              <Value>{item.value}</Value>
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default FirmographicsSection;
