import { SectionBar, Label, Value } from "./ICPPrimitives";

const committeeData = [
  {
    category: "Champions",
    title: "Head of Service Delivery, Technical Operations Manager, Director of IT Services",
    role: "Responsible for day-to-day service delivery, SLA performance, resourcing, and keeping ticket flow under control.",
  },
  {
    category: "Decision Makers",
    title: "CEO, Founder, Managing Partner",
    role: "Owns growth, margins, and vendor decisions; approves recurring delivery partnerships.",
  },
  {
    category: "Influencers",
    title: "Senior Systems Engineer, Network Engineer, Security Engineer, Service Desk Manager",
    role: "Validates technical fit, workflow impact, and quality; influences vendor choice based on execution results.",
  },
  {
    category: "Blockers",
    title: "Finance Lead/Controller, Operations Manager",
    role: "Focused on cost control, risk, and operational disruption; may push back on external resourcing.",
  },
];

const jobsToBeDone = [
  "Maintain SLA compliance across all managed accounts.",
  "Reduce ticket resolution time.",
  "Scale service delivery during growth phases.",
  "Expand cybersecurity and cloud service offerings.",
  "Improve operational efficiency.",
  "Maintain client retention and satisfaction.",
  "Increase recurring revenue without increasing fixed costs.",
];

const painPoints = [
  "Difficulty hiring skilled IT engineers in the U.S. market.",
  "Rising payroll costs reducing margins.",
  "Service desk burnout.",
  "Ticket backlog accumulation.",
  "Limited internal bandwidth for complex projects (cloud migrations, security upgrades).",
  "Risk of SLA breaches.",
  "Client churn risk due to delayed support.",
];

const goals = [
  "Increase profit margins.",
  "Improve utilization rates.",
  "Scale operations without adding long-term headcount risk.",
  "Deliver faster response times.",
  "Strengthen service reliability.",
  "Expand service offerings.",
  "Grow recurring revenue.",
];

const BuyingCommitteeSection = () => (
  <div>
    <SectionBar>
      <div className="grid grid-cols-2">
        <span>Buying Committee</span>
        <span className="text-center">Jobs to Be Done</span>
      </div>
    </SectionBar>
    <div className="grid grid-cols-2 border-x border-b border-icp-grid/30">
      {/* Left: Buying Committee */}
      <div className="border-r border-icp-grid/30">
        {committeeData.map((item, i) => (
          <div key={i} className="border-b border-icp-grid/20 last:border-b-0 px-2 py-1.5 bg-icp-cell">
            <div className="text-[10px] leading-tight">
              <div className="flex gap-1 items-start mb-0.5">
                <span className="bg-icp-bar text-icp-bar-fg px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide inline-block min-w-[80px] text-center">
                  {item.category}
                </span>
              </div>
              <div className="mt-0.5">
                <Label>Title: </Label>
                <span className="font-serif-italic text-[10px]"><Value>{item.title}</Value></span>
              </div>
              <div className="mt-0.5">
                <Label>Role: </Label>
                <Value>{item.role}</Value>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right: JTBD, Pain Points, Goals */}
      <div>
        {/* Jobs to Be Done */}
        <div className="border-b border-icp-grid/20 px-2 py-1.5 bg-icp-cell">
          <Label>Jobs to Be Done</Label>
          <ol className="mt-0.5 list-decimal list-inside">
            {jobsToBeDone.map((item, i) => (
              <li key={i} className="text-[9px] leading-[1.3] text-icp-value">{item}</li>
            ))}
          </ol>
        </div>
        {/* Pain Points */}
        <div className="border-b border-icp-grid/20 px-2 py-1.5 bg-icp-cell">
          <Label>Pain Points</Label>
          <ol className="mt-0.5 list-decimal list-inside">
            {painPoints.map((item, i) => (
              <li key={i} className="text-[9px] leading-[1.3] text-icp-value">{item}</li>
            ))}
          </ol>
        </div>
        {/* Goals */}
        <div className="px-2 py-1.5 bg-icp-cell">
          <Label>Goals</Label>
          <ol className="mt-0.5 list-decimal list-inside">
            {goals.map((item, i) => (
              <li key={i} className="text-[9px] leading-[1.3] text-icp-value">{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </div>
);

export default BuyingCommitteeSection;
