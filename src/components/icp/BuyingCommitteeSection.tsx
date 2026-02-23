import { SectionBar, Label, Value } from "./ICPPrimitives";

const committeeData = [
  {
    category: "Champions",
    title: "Marketing Manager, Marketing Coordinator, Fractional CMO",
    role: "Owns marketing roadmap, messaging, and campaign priorities. Knows what needs to be built but lacks the production bandwidth to execute consistently. Seeks reliable design, web, and content support while retaining strategic control.",
  },
  {
    category: "Decision Makers",
    title: "CEO, Founder, Managing Partner",
    role: "Owns growth, margin, and vendor approval decisions. Skeptical of marketing vendors due to past disappointments. Focused on cost predictability, visible output, and protecting brand control.",
  },
  {
    category: "Influencers",
    title: "Head of Sales, Business Development Lead, vCIO",
    role: "Requires updated landing pages, case studies, and collateral aligned with live sales conversations. Feels the impact when materials are delayed or outdated.",
  },
  {
    category: "Blockers",
    title: "Finance Lead / Controller, Operations Manager",
    role: "Evaluates cost structure, scope clarity, and operational efficiency. Ensures recurring spend is predictable and justifiable compared to full-time hiring.",
  },
];

const jobsToBeDone = [
  "Keep website content current and aligned with real service capability.",
  "Turn internal expertise into visible proof assets.",
  "Support sales with ready-to-use collateral and landing pages.",
  "Launch vertical or cybersecurity initiatives without execution delays.",
  "Maintain consistent output of content and marketing materials.",
  "Keep pace with competitors that publish frequently.",
  "Reduce dependency on referral-only growth.",
  "Expand marketing capacity without hiring a full internal department.",
];

const painPoints = [
  "Marketing projects stall before completion.",
  "Website messaging lags behind actual delivery capabilities.",
  "Case studies are outdated or incomplete.",
  "Sales materials are reactive and assembled last minute.",
  "One internal marketing lead becomes the bottleneck.",
  "Agency engagements felt slow, generic, or unclear in value.",
  "Competitors appear more specialized due to higher publishing volume.",
  "Inconsistent marketing reduces perceived authority.",
  "Referral fluctuations create pipeline instability.",
  "Hiring multiple full-time marketing roles is financially risky.",
  "Campaign execution lacks consistency.",
  "Digital presence does not match service quality.",
];

const goals = [
  "Maintain control of messaging internally.",
  "Increase consistency of marketing output.",
  "Improve competitive positioning online.",
  "Support outbound and sales growth initiatives.",
  "Build visible vertical authority.",
  "Keep marketing costs predictable.",
  "Avoid unnecessary payroll expansion.",
  "Strengthen credibility to protect pricing power.",
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
