import { SectionBar, Label, Value } from "./ICPPrimitives";

/* ── Funnel Messaging by Awareness Stage ── */
const funnelStages = [
  {
    stage: "Unaware",
    themes: [
      "If your website hasn't changed in a year, your competitors have.",
      "Marketing doesn't stall because of ideas. It stalls because of bandwidth.",
      "Referral growth hides execution gaps until it slows.",
      "One internal marketing person cannot do design, web, content, and campaign ops alone.",
      "Competitors look specialized because they publish consistently.",
    ],
  },
  {
    stage: "Problem Aware",
    themes: [
      "Website updates should not take months.",
      "Sales should not wait for landing pages.",
      "Case studies should not sit unfinished.",
      "Hiring a full team is not the only option.",
      "Freelancers create inconsistency and rework.",
    ],
  },
  {
    stage: "Solution Aware",
    themes: [
      "Keep strategy internal. Add execution capacity behind it.",
      "Consistent production beats sporadic campaigns.",
      "Flexible monthly support is safer than payroll expansion.",
      "Structured production reduces chaos.",
      "Output compounds when it ships regularly.",
    ],
  },
  {
    stage: "Product Aware",
    themes: [
      "Dedicated production team aligned to your workflow.",
      "Design, web, content, and campaign assets under one model.",
      "Clear monthly capacity allocation.",
      "Structured request and approval system.",
      "No loss of messaging control.",
    ],
  },
  {
    stage: "Most Aware",
    themes: [
      "Compare cost of 3 hires vs structured production support.",
      "Calculate current backlog time cost.",
      "Evaluate how many assets ship per quarter.",
      "Measure competitor publishing cadence.",
      "Decide whether internal bandwidth matches growth goals.",
    ],
  },
];

/* ── Buying Triggers to Activation Plays ── */
const triggerPlays = [
  {
    title: "Referral Slowdown",
    trigger: "Referral volume declines or becomes inconsistent.",
    reason: "Pipeline no longer feels stable.",
    play: "Immediate website refresh, vertical page build, sales asset audit, and outbound support bundle.",
  },
  {
    title: "New Sales Hire",
    trigger: "MSP hires a new sales rep.",
    reason: "Sales needs structure and materials before outreach scales.",
    play: "Landing page buildout, one-pager refresh, email follow-up sequence, and campaign support kit.",
  },
  {
    title: "Cybersecurity Push",
    trigger: "MSP updates or emphasizes security services.",
    reason: "Security positioning must be credible and clear.",
    play: "Security page rebuild, proof asset creation, security comparison sheet, webinar landing page.",
  },
  {
    title: "Vertical Expansion",
    trigger: "MSP targets healthcare, legal, finance, etc.",
    reason: "Must appear specialized quickly.",
    play: "Dedicated vertical page, tailored case study formatting, industry-specific one-pager.",
  },
  {
    title: "Agency Dissatisfaction",
    trigger: "Current marketing vendor relationship ends or underperforms.",
    reason: "MSP wants control without losing production velocity.",
    play: "Transition production in-house with structured request system and asset backlog clearance.",
  },
];

/* ── Execution Formats Matrix ── */
const executionFormats = [
  {
    stage: "Unaware",
    formats: [
      "Founder perspective post",
      "Website before/after audit comparison",
      "\"How many assets shipped last quarter?\" diagnostic",
      "Competitive visibility comparison breakdown",
    ],
  },
  {
    stage: "Problem Aware",
    formats: [
      "Backlog audit checklist",
      "Sales collateral gap analysis",
      "Website maturity scorecard",
      "\"Hiring vs Production Support\" cost breakdown sheet",
    ],
  },
  {
    stage: "Solution Aware",
    formats: [
      "Production workflow diagram",
      "Monthly capacity model explanation",
      "Case example of backlog reduction",
      "Before/after asset velocity comparison",
    ],
  },
  {
    stage: "Product Aware",
    formats: [
      "Scope breakdown document",
      "Onboarding timeline overview",
      "Sample request workflow",
      "Production turnaround benchmarks",
    ],
  },
  {
    stage: "Most Aware",
    formats: [
      "Cost comparison calculator",
      "Backlog clearing plan",
      "Capacity planning worksheet",
      "Implementation roadmap overview",
    ],
  },
];

const FunnelExecutionTab = () => (
  <div>
    {/* Section 1: Funnel Messaging by Awareness Stage */}
    <SectionBar>
      <div className="text-center">Funnel Messaging by Awareness Stage</div>
    </SectionBar>
    <div className="border-x border-b border-icp-grid/30 bg-background p-5">
      <div className="space-y-6">
        {funnelStages.map((stage) => (
          <div key={stage.stage} className="border border-icp-grid/30 bg-icp-cell">
            <div className="bg-icp-bar text-icp-bar-fg px-5 py-2.5">
              <h3 className="text-[13px] font-bold uppercase tracking-wider">{stage.stage}</h3>
            </div>
            <div className="px-5 py-4">
              <div className="space-y-2">
                {stage.themes.map((theme, i) => (
                  <p key={i} className="text-[11px] leading-relaxed text-icp-value">
                    <span className="text-icp-label mr-1.5">•</span>{theme}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Section 2: Buying Triggers to Activation Plays */}
    <SectionBar>
      <div className="text-center">Buying Triggers to Activation Plays</div>
    </SectionBar>
    <div className="border-x border-b border-icp-grid/30 bg-background p-5">
      <div className="space-y-6">
        {triggerPlays.map((item, i) => (
          <div key={i} className="border border-icp-grid/30 bg-icp-cell">
            <div className="px-5 py-4">
              <p className="text-[13px] font-bold text-icp-label mb-1">{item.title}</p>
              <p className="text-[11px] leading-relaxed text-icp-value pl-3 mb-0.5">
                <Label>Trigger: </Label><Value>{item.trigger}</Value>
              </p>
              <p className="text-[11px] leading-relaxed text-icp-value pl-3 mb-1.5">
                <Label>Reason: </Label><Value>{item.reason}</Value>
              </p>
              <p className="text-[11px] leading-relaxed text-icp-value pl-3">
                <Label>Activation Play: </Label><Value>{item.play}</Value>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Section 3: Execution Formats Matrix */}
    <SectionBar>
      <div className="text-center">Execution Formats Matrix</div>
    </SectionBar>
    <div className="border-x border-b border-icp-grid/30">
      {/* Column headers */}
      <div className="grid grid-cols-2 bg-muted/50 border-b border-icp-grid/20">
        <div className="px-3 py-2 text-[11px] font-bold border-r border-icp-grid/20 text-center">
          Awareness Stage
        </div>
        <div className="px-3 py-2 text-[11px] font-bold text-center">
          Best Formats
        </div>
      </div>
      {executionFormats.map((block, i) => (
        <div key={i} className="grid grid-cols-2 border-b border-icp-grid/20 last:border-b-0">
          <div className="px-3 py-2.5 text-[11px] font-bold bg-muted/50 border-r border-icp-grid/20">
            {block.stage}
          </div>
          <div className="px-3 py-2.5 bg-icp-cell">
            {block.formats.map((format, j) => (
              <p key={j} className="text-[11px] leading-relaxed text-icp-value mb-1 last:mb-0">
                <span className="text-icp-label mr-1.5">•</span>{format}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FunnelExecutionTab;
