import { SectionBar, GridCell, Label, Value, VerticalLabel } from "./ICPPrimitives";

const industries = [
  "Small & Mid-Sized Businesses (SMBs)",
  "Healthcare Practices",
  "Legal Firms",
  "Financial Services Firms",
  "Manufacturing Companies",
  "Professional Services",
  "Multi-location businesses",
];

const industryNote = "Many position themselves as specialized providers but lack consistent vertical pages and documented proof to support that positioning.";

const solutions = [
  "Managed IT Support (Help Desk, Monitoring, Endpoint Management)",
  "Microsoft 365 & Cloud Services",
  "Cybersecurity Services (EDR, MDR, Compliance Support)",
  "Backup & Disaster Recovery",
  "vCIO / Advisory Services",
];

const goodFit = [
  "MSP wants to keep marketing direction and messaging internal.",
  "There is at least one internal marketing owner.",
  "Marketing backlog exists (pages, case studies, collateral waiting to ship).",
  "Website does not reflect actual service maturity.",
  "Sales regularly requests updated materials that are not ready.",
  "Competitors are visibly more active online.",
  "MSP recognizes digital presence impacts perceived credibility and pricing.",
  "They have experienced disappointment with traditional marketing agencies.",
  "They prefer structured production support over full strategy outsourcing.",
  "They want predictable cost without long-term payroll expansion.",
  "They understand that consistent output compounds over time.",
];

const badFit = [
  "No internal marketing ownership.",
  "Wants a third party to fully control positioning and messaging.",
  "Expects guaranteed leads without investing in foundational assets.",
  "Refuses structured request and approval workflows.",
  "Only interested in isolated one-off tasks.",
  "Does not see competitive digital presence as important.",
  "Unwilling to commit to consistent production rhythm.",
];

const BulletList = ({ items, className = "" }: { items: string[]; className?: string }) => (
  <div className={className}>
    {items.map((item, i) => (
      <p key={i} className="text-[11px] leading-relaxed mb-1.5 text-icp-value">
        <span className="text-icp-label mr-1">•</span>{item}
      </p>
    ))}
  </div>
);

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
        <div className="px-3 py-2 text-[10px] leading-relaxed bg-icp-cell italic text-icp-value">
          {industryNote}
        </div>
      </div>

      {/* Solutions vertical label + list */}
      <VerticalLabel>Solutions</VerticalLabel>
      <div className="border-r border-icp-grid/30">
        {solutions.map((sol, i) => (
          <div key={i} className="px-3 py-2 text-[11px] leading-relaxed border-b border-icp-grid/20 last:border-b-0 bg-icp-cell">
            <Value>{sol}</Value>
          </div>
        ))}
      </div>

      {/* Good column */}
      <div className="border-r border-icp-grid/30">
        <GridCell header className="text-center border-b border-icp-grid/20">
          Good Fit
        </GridCell>
        <div className="px-3 py-2 bg-icp-cell">
          <BulletList items={goodFit} />
        </div>
      </div>

      {/* Bad column */}
      <div>
        <GridCell header className="text-center border-b border-icp-grid/20">
          Bad Fit
        </GridCell>
        <div className="px-3 py-2 bg-icp-cell">
          <BulletList items={badFit} />
        </div>
      </div>
    </div>
  </div>
);

export default IndustryQualificationSection;
