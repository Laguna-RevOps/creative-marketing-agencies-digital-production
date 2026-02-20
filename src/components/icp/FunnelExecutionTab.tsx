import { SectionBar, Label, Value } from "./ICPPrimitives";

const funnelColumns = [
  {
    stage: "Unaware",
    lines: [
      "If your MSP feels chaotic, it is not chaos. It is math.",
      "Burnout is not cultural. It is structural.",
      "Backlog is not random. It is predictable.",
    ],
  },
  {
    stage: "Problem Aware",
    lines: [
      "Your SLA is at risk because engineers are maxed out.",
      "Hiring cycles are longer than your growth cycle.",
      "Escalation spikes are a leading indicator of churn and turnover.",
    ],
  },
  {
    stage: "Solution Aware",
    lines: [
      "High-growth MSPs use flexible engineering capacity.",
      "Stop hiring for every spike.",
      "Elastic delivery beats fixed payroll.",
    ],
  },
  {
    stage: "Product Aware",
    lines: [
      "CST/EST aligned nearshore delivery capacity.",
      "White-label support under your brand.",
      "Engineers integrate into your workflows without long-term hiring risk.",
    ],
  },
  {
    stage: "Most Aware",
    lines: [
      "If backlog exceeds 15%, you need delivery elasticity.",
      "If utilization is above 80%, capacity is already constrained.",
      "If hiring takes more than 60 days, flexibility becomes the safer option.",
    ],
  },
];

const leftTriggers = [
  {
    title: "New Client Acquisition Spike",
    trigger: "MSP signs multiple new managed service contracts in a short period.",
    reason: "Support volume increases and delivery capacity must scale quickly to protect SLAs.",
  },
  {
    title: "Key Engineer Turnover",
    trigger: "Senior engineer resigns or extended PTO impacts coverage.",
    reason: "Delivery gaps create backlog risk; MSP needs immediate coverage without long hiring cycles.",
  },
];

const rightTriggers = [
  {
    title: "Major Client Project (Migration or Modernization)",
    trigger: "Cloud migration, M365 rollout, network refresh, or compliance project begins.",
    reason: "Project workload spikes beyond normal managed services ticket volume.",
  },
  {
    title: "Tooling or Process Standardization",
    trigger: "MSP implements new PSA/RMM processes or documentation standards.",
    reason: "Needs additional hands to stabilize operations while keeping tickets on track.",
  },
];

const formatsMatrix = [
  { stage: "Unaware", formats: "Founder POV, Meme/Trend, Story post, Industry stat post" },
  { stage: "Problem Aware", formats: "Whiteboard breakdown, Before/After scenario, Case walkthrough, Workflow diagram" },
  { stage: "Solution Aware", formats: "Comparison (Hiring vs Flexible Capacity), Framework visual, Utilization model explanation" },
  { stage: "Product Aware", formats: "Process diagram, Onboarding timeline, Tool compatibility overview, Proof points" },
  { stage: "Most Aware", formats: "Offer-first banner, Capacity audit CTA, Utilization calculator, Direct response post" },
];

const TriggerBlock = ({ title, trigger, reason }: { title: string; trigger: string; reason: string }) => (
  <div className="border-b border-icp-grid/20 last:border-b-0 px-2 py-1.5 bg-icp-cell text-[10px] leading-tight">
    <div className="font-bold text-icp-label mb-0.5">{title}</div>
    <div><Label>Trigger: </Label><Value>{trigger}</Value></div>
    <div className="mt-0.5"><Label>Reason: </Label><Value>{reason}</Value></div>
  </div>
);

const FunnelExecutionTab = () => (
  <div>
    {/* Section 1: Funnel Messaging by Awareness Stage */}
    <SectionBar>
      <div className="text-center">Funnel Messaging by Awareness Stage</div>
    </SectionBar>
    <div className="border-x border-b border-icp-grid/30">
      {/* Column headers */}
      <div className="grid grid-cols-5 bg-muted/50 border-b border-icp-grid/20">
        {funnelColumns.map((col) => (
          <div key={col.stage} className="px-2 py-1 text-[9px] font-bold border-r border-icp-grid/20 last:border-r-0 text-center">
            {col.stage}
          </div>
        ))}
      </div>
      {/* Body */}
      <div className="grid grid-cols-5">
        {funnelColumns.map((col) => (
          <div key={col.stage} className="border-r border-icp-grid/20 last:border-r-0 bg-icp-cell px-2 py-1.5">
            {col.lines.map((line, i) => (
              <p key={i} className="text-[9px] leading-[1.3] mb-1 text-icp-value">
                <span className="text-icp-label">•</span> {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
    <div className="border-x border-b border-icp-grid/30 bg-icp-cell px-3 py-1">
      <p className="text-[9px] italic text-icp-value/70">
        (Use angles from Tab 3, matched to the persona from Tab 2)
      </p>
    </div>

    {/* Section 2: Buying Triggers to Activation Plays */}
    <SectionBar>
      <div className="text-center">Buying Triggers to Activation Plays</div>
    </SectionBar>
    <div className="grid grid-cols-2 border-x border-b border-icp-grid/30">
      <div className="border-r border-icp-grid/30">
        {leftTriggers.map((t, i) => <TriggerBlock key={i} {...t} />)}
      </div>
      <div>
        {rightTriggers.map((t, i) => <TriggerBlock key={i} {...t} />)}
      </div>
    </div>

    {/* Bottom: Execution Formats Matrix */}
    <SectionBar>
      <div className="text-center">Execution Formats Matrix</div>
    </SectionBar>
    <div className="border-x border-b border-icp-grid/30">
      {/* Header row */}
      <div className="grid grid-cols-[180px_1fr] bg-muted/50 border-b border-icp-grid/20">
        <div className="px-2 py-1 text-[9px] font-bold border-r border-icp-grid/20">Awareness Stage</div>
        <div className="px-2 py-1 text-[9px] font-bold">Best Formats</div>
      </div>
      {formatsMatrix.map((row, i) => (
        <div key={i} className="grid grid-cols-[180px_1fr] border-b border-icp-grid/20 last:border-b-0">
          <div className="px-2 py-1 text-[9px] font-bold bg-muted/50 border-r border-icp-grid/20">
            {row.stage}
          </div>
          <div className="px-2 py-1 text-[9px] text-icp-value bg-icp-cell">
            {row.formats}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FunnelExecutionTab;
