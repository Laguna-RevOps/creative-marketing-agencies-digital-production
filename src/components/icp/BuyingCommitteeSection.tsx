import { SectionBar, Label, Value } from "./ICPPrimitives";

const committeeData = [
  {
    category: "Champions",
    title: "Director of Operations, Head of Creative Operations, Production Manager, Head of Client Services",
    role: "Owns delivery timelines, workflow health, and resource allocation. Feels pressure when production delays affect clients. Primary concern: maintaining output quality without overwhelming internal teams.",
  },
  {
    category: "Decision Makers",
    title: "CEO, Founder, Managing Partner",
    role: "Owns margin, scalability, and agency growth. Primary concern: protecting profitability while scaling client volume. Risk lens: avoiding fixed payroll expansion during uncertain pipeline cycles.",
  },
  {
    category: "Influencers",
    title: "Creative Director, Technical Director, Paid Media Lead",
    role: "Needs assets and builds delivered on time to execute strategy. Primary concern: execution reliability and technical accuracy.",
  },
];

const jobsToBeDone = [
  "Launch multi-channel campaigns without production delays.",
  "Scale asset output without hiring full-time staff.",
  "Maintain quality across client accounts.",
  "Reduce freelancer inconsistency and rework.",
  "Support paid media with fast landing page builds.",
  "Deliver recurring creative collateral at predictable cost.",
  "Protect margins while increasing client volume.",
  "Keep internal leads focused on strategy instead of production firefighting.",
];

const painPoints = [
  "Production backlog slows campaign launches.",
  "Designers overloaded during client spikes.",
  "Developers tied up on small updates.",
  "Freelancers cause QA and revision cycles.",
  "Campaign assets not ready when media goes live.",
  "Margin compression due to inefficient production.",
  "Hiring full-time staff feels risky.",
];

const goals = [
  "Predictable production capacity.",
  "Faster turnaround times.",
  "Consistent asset quality.",
  "Improved margin stability.",
  "Reduced operational chaos.",
  "Higher client retention due to delivery reliability.",
];

const BulletList = ({ items, numbered }: { items: string[]; numbered?: boolean }) => (
  <div className="mt-1.5">
    {numbered ? (
      <ol className="list-decimal list-inside">
        {items.map((item, i) => (
          <li key={i} className="text-[11px] leading-relaxed mb-1.5 text-icp-value">{item}</li>
        ))}
      </ol>
    ) : (
      items.map((item, i) => (
        <p key={i} className="text-[11px] leading-relaxed mb-1.5 text-icp-value">
          <span className="text-icp-label mr-1">•</span>{item}
        </p>
      ))
    )}
  </div>
);

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
          <div key={i} className="border-b border-icp-grid/20 last:border-b-0 px-3 py-2.5 bg-icp-cell">
            <div className="text-[11px] leading-relaxed">
              <div className="flex gap-1 items-start mb-1">
                <span className="bg-icp-bar text-icp-bar-fg px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide inline-block min-w-[90px] text-center">
                  {item.category}
                </span>
              </div>
              <div className="mt-1">
                <Label>Title: </Label>
                <span className="font-serif-italic"><Value>{item.title}</Value></span>
              </div>
              <div className="mt-1">
                <Label>Role: </Label>
                <Value>{item.role}</Value>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right: JTBD, Pain Points, Goals */}
      <div>
        <div className="border-b border-icp-grid/20 px-3 py-2.5 bg-icp-cell">
          <Label>Jobs to Be Done</Label>
          <BulletList items={jobsToBeDone} numbered />
        </div>
        <div className="border-b border-icp-grid/20 px-3 py-2.5 bg-icp-cell">
          <Label>Pain Points</Label>
          <BulletList items={painPoints} />
        </div>
        <div className="px-3 py-2.5 bg-icp-cell">
          <Label>Goals</Label>
          <BulletList items={goals} />
        </div>
      </div>
    </div>
  </div>
);

export default BuyingCommitteeSection;
