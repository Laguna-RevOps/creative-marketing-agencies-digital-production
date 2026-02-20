import { SectionBar, GridCell, Label, Value, VerticalLabel } from "./ICPPrimitives";

const industries = [
  "Small & Mid-Sized Businesses (SMBs)",
  "Healthcare Practices",
  "Legal Firms",
  "Financial Services Firms",
  "Multi-location Retail",
  "Manufacturing Companies",
  "Professional Services",
];

const solutions = [
  { cat: "Managed IT Support", items: "Help Desk Services, Network Monitoring, End-User Support" },
  { cat: "Cloud Services", items: "Cloud Migration, Cloud Support, Cloud Management" },
  { cat: "Managed Security", items: "Security Monitoring, Endpoint Protection, Incident Response Support" },
  { cat: "Resilience", items: "Backup & Disaster Recovery, Business Continuity Support" },
  { cat: "Advisory", items: "IT Consulting, vCIO Services" },
];

const goodFit = [
  "MSP has recurring monthly service contracts and is growing its client base with limited internal engineering capacity.",
  "MSP struggles to hire or retain qualified IT engineers, cloud specialists, or security professionals.",
  "MSP experiences ticket backlog or SLA pressure and needs to scale delivery without increasing fixed payroll.",
  "MSP has seasonal or growth-based workload spikes and requires flexible staffing without long-term hiring commitments.",
  "MSP is interested in white-label technical support under their brand and wants to improve margin without additional internal overhead.",
];

const badFit = [
  "Break-fix only IT providers without recurring managed service agreements.",
  "MSPs with no clear capacity constraints (no backlog, no SLA pressure, no delivery bottlenecks).",
  "MSPs unwilling to work with external partners or require only on-site support with no remote delivery.",
  "MSPs with strict constraints that prevent adding any delivery capacity (no budget or no operational willingness).",
  "MSPs that cannot support standardized onboarding and recurring collaboration processes.",
];

const IndustryQualificationSection = () => (
  <div>
    <SectionBar>
      <div className="grid grid-cols-[1fr_1fr_1fr] items-center">
        <span>What Industry They Serve</span>
        <span className="text-center">Qualification Criteria</span>
        <div className="grid grid-cols-2 text-center">
          <span>Good</span>
          <span>Bad</span>
        </div>
      </div>
    </SectionBar>
    <div className="grid grid-cols-[28px_1fr_28px_1fr_1fr_1fr] border-x border-b border-icp-grid/30">
      {/* Industries vertical label + list */}
      <VerticalLabel>Industries</VerticalLabel>
      <div className="border-r border-icp-grid/30">
        {industries.map((ind, i) => (
          <GridCell key={i} className="border-b border-icp-grid/20 last:border-b-0">
            <Value>{ind}</Value>
          </GridCell>
        ))}
      </div>

      {/* Solutions vertical label + list */}
      <VerticalLabel>Solutions</VerticalLabel>
      <div className="border-r border-icp-grid/30">
        {solutions.map((sol, i) => (
          <div key={i} className="px-2 py-1 text-[10px] leading-tight border-b border-icp-grid/20 last:border-b-0 bg-icp-cell">
            <Label>{sol.cat}:</Label> <Value>{sol.items}</Value>
          </div>
        ))}
      </div>

      {/* Good column */}
      <div className="border-r border-icp-grid/30">
        <GridCell header className="text-center text-[9px] border-b border-icp-grid/20">
          What makes account a good fit?
        </GridCell>
        <div className="px-2 py-1 bg-icp-cell">
          {goodFit.map((item, i) => (
            <p key={i} className="text-[9px] leading-[1.3] mb-1 text-icp-value">
              <span className="text-icp-label">•</span> {item}
            </p>
          ))}
        </div>
      </div>

      {/* Bad column */}
      <div>
        <GridCell header className="text-center text-[9px] border-b border-icp-grid/20">
          What makes account a bad fit?
        </GridCell>
        <div className="px-2 py-1 bg-icp-cell">
          {badFit.map((item, i) => (
            <p key={i} className="text-[9px] leading-[1.3] mb-1 text-icp-value">
              <span className="text-icp-label">•</span> {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default IndustryQualificationSection;
