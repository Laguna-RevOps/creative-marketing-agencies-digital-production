import { SectionBar, Label, Value } from "./ICPPrimitives";

const committeeData = [
  {
    category: "Champion",
    title: "Marketing manager or fractional CMO",
    role: "Wants production help, not someone trying to run the company's message.",
  },
  {
    category: "Decision Maker",
    title: "Owner/CEO",
    role: "Skeptical, has likely been burned, wants clear cost and clear output.",
  },
  {
    category: "Influencer",
    title: "Head of Sales",
    role: "Needs pages and collateral ready before outreach and follow-up.",
  },
  {
    category: "Blockers",
    title: "Finance/ops",
    role: "Hates vague scope, hates \"ongoing projects,\" wants clarity.",
  },
];

const jobsToBeDone = [
  "Keep the website current so it does not look stale next to competitors.",
  "Turn internal \"we're good at X\" into actual pages and proof, not just internal talk.",
  "Produce case studies and proof assets consistently.",
  "Keep sales materials updated so reps stop winging it.",
  "Support launches (new security package, new vertical, new rep) without chaos.",
  "Stop the stop-start marketing cycle where everything resets every month.",
  "Keep the MSP's voice internal while getting the build work off the internal team's plate.",
];

const painPoints = [
  "\"Everything sits in draft.\"",
  "Website updates take forever.",
  "Sales asks for a one-pager and it becomes a two-week scramble.",
  "The MSP pays outsiders, but still feels like nothing ships.",
  "They do not want generic language because MSP buyers do not care about \"nuts and bolts,\" they care about outcomes.",
  "They have to grow beyond referrals, but do not have the bandwidth to do the work consistently.",
];

const goals = [
  "Keep marketing direction in-house without hiring a full team.",
  "Ship work every week so it stacks up over time (pages, proof, follow-ups).",
  "Reduce reliance on referrals.",
  "Make the website and materials look like a serious MSP, not a template.",
  "Move faster during pushes without burning out the internal lead.",
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
