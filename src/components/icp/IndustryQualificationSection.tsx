import { SectionBar, GridCell, Label, Value, VerticalLabel } from "./ICPPrimitives";

const industries = [
  "Healthcare practices",
  "Legal firms",
  "Financial services",
  "Manufacturing",
  "Multi-location retail",
  "Professional services",
  "General SMB",
];

const solutions = [
  "Managed IT (helpdesk, patching, monitoring)",
  "Microsoft 365 and cloud projects",
  "Security packages (EDR/MDR stack, awareness, basic compliance support)",
  "Backup and disaster recovery",
  "vCIO/QBR advisory",
];

const goodFit = [
  "They are tired of paying \"marketing companies\" that sell hard but do not deliver what was pitched.",
  "They want to keep marketing direction internal because they believe \"we are the voice.\"",
  "They already know what they want to say, but the work sits in draft.",
];

const currentNeeds = [
  "They have a backlog of website updates, case studies, one-pagers, vertical pages, email templates, and follow-ups.",
  "They are trying to grow beyond \"referrals and sheer luck.\"",
  "They do not want a vendor to take over the message. They want extra hands that can follow their direction.",
];

const badFit = [
  "No one internally owns marketing. They want a vendor to \"figure it all out\" with no internal direction.",
  "They want guaranteed results without doing the basic work (site pages, proof, follow-up, sales enablement).",
  "They want a \"magic lead machine\" and get angry when it is a long game.",
  "They refuse any process for requests, approvals, and handoffs.",
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
          <div className="mt-3 pt-2 border-t border-icp-grid/20">
            <Label>Current Marketing Needs</Label>
            <BulletList items={currentNeeds} className="mt-1" />
          </div>
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
