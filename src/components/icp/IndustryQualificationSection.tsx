import { SectionBar, GridCell, Label, Value, VerticalLabel } from "./ICPPrimitives";

const industries = [
  "SaaS & B2B Technology",
  "Healthcare & HealthTech",
  "Financial Services & FinTech",
  "E-commerce & Retail",
  "Professional Services",
  "Manufacturing",
  "Consumer Brands",
];

const industryNote = "Many position themselves as specialized agencies but lack scalable internal production bandwidth to support consistent multi-channel output.";

const solutions = [
  "Brand Strategy & Identity",
  "Campaign Strategy & Planning",
  "Paid Media Management",
  "SEO & Content Strategy",
  "Social Media Strategy",
  "Website Strategy & UX",
  "Creative Direction",
  "Performance Marketing",
];

const goodFit = [
  "Keeps strategy and client ownership fully in-house.",
  "Has recurring campaign volume across multiple clients.",
  "Experiences production spikes and asset backlog.",
  "Landing pages, banners, or videos sit waiting in queue.",
  "Uses freelancers but struggles with consistency and turnaround.",
  "Wants predictable monthly production capacity.",
  "Values structured workflows and QA.",
  "Cares about protecting margin.",
  "Sees execution as infrastructure, not optional.",
];

const badFit = [
  "Wants full campaign ownership outsourced.",
  "Expects ideation, positioning, or strategy from a production partner.",
  "No internal creative or account leadership.",
  "Only interested in one-off design tasks.",
  "No recurring campaign volume.",
  "Procurement-only mindset.",
  "Refuses structured request and approval workflows.",
  "Treats production as ad hoc, not operational.",
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
