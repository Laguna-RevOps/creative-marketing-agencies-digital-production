import { SectionBar, Label, Value } from "./ICPPrimitives";

/* ── Funnel Messaging by Awareness Stage ── */
const funnelStages = [
  {
    stage: "Unaware",
    themes: [
      "If every campaign feels like a sprint, that is not growth. That is structural strain.",
      "Winning new business should not create internal anxiety.",
      "Creative teams should not be resizing assets at midnight.",
      "Delivery chaos is not a badge of honor. It is a system gap.",
      "If your calendar feels unpredictable, your execution layer is underbuilt.",
      "Most agencies do not have a strategy problem. They have a throughput problem.",
    ],
  },
  {
    stage: "Problem Aware",
    themes: [
      "Hiring alone does not fix production volatility.",
      "Freelancers do not create structural stability.",
      "Escalations are not isolated. They are signals.",
      "Growth without execution elasticity increases fragility.",
      "When delivery feels reactive, clients feel it.",
      "Production instability compounds silently.",
    ],
  },
  {
    stage: "Solution Aware",
    themes: [
      "Keep strategy internal. Expand execution capacity around it.",
      "Structured production beats sporadic freelancers.",
      "Elastic capacity stabilizes campaign calendars.",
      "Execution support should integrate into your workflow.",
      "Control does not decrease when capacity increases.",
      "Stability improves morale.",
    ],
  },
  {
    stage: "Product Aware",
    themes: [
      "Dedicated production lanes aligned to campaign workflow.",
      "Pre-allocated monthly asset capacity.",
      "Structured intake and QA processes.",
      "Clear turnaround SLAs.",
      "Integrated into your tools and approval systems.",
      "Scalable up or down based on campaign volume.",
    ],
  },
  {
    stage: "Most Aware",
    themes: [
      "You keep client ownership and creative direction.",
      "Execution becomes predictable, not reactive.",
      "Volume no longer destabilizes the team.",
      "Growth feels controlled.",
      "Creative standards hold at scale.",
      "Capacity expands without payroll lock-in.",
    ],
  },
];

/* ── Buying Triggers to Activation Plays ── */
const triggerPlays = [
  {
    title: "Major Client Win",
    trigger: "New revenue increases execution pressure immediately.",
    reason: "Campaign demand spikes across landing pages and multi-channel assets.",
    play: "Campaign production pod, landing page builds, multi-channel asset rollouts, and dedicated asset retainer for the first 90 days.",
  },
  {
    title: "Creative Team Burnout",
    trigger: "Volume exceeds internal bandwidth.",
    reason: "Production load outpaces available design and motion capacity.",
    play: "Monthly production retainer, creative resizing lane, motion/video production lane, and QA support integration.",
  },
  {
    title: "Missed Launch or Timeline Slip",
    trigger: "Execution gap is exposed publicly.",
    reason: "Workflow and intake process cannot keep up with launch pressure.",
    play: "Stabilization sprint, backlog reduction sprint, workflow and intake alignment, and ongoing structured capacity layer.",
  },
  {
    title: "Seasonal or Campaign Surge",
    trigger: "Volume spikes temporarily.",
    reason: "Campaign periods compress production timelines.",
    play: "Short-term production retainer, pre-booked asset capacity, and dedicated campaign asset pod.",
  },
  {
    title: "Hesitation to Hire",
    trigger: "Growth exists but payroll expansion feels risky.",
    reason: "Agency wants output expansion without fixed headcount lock-in.",
    play: "Elastic monthly capacity model, scalable production blocks, and flexible capacity tiers.",
  },
];

/* ── Execution Formats Matrix ── */
const executionFormats = [
  {
    stage: "Unaware",
    formats: [
      "LinkedIn thought leadership posts",
      "Founder POV posts",
      "Agency operations commentary",
      "Short video clips on execution instability",
      "Email newsletter insights",
      "Goal: Surface normalized instability.",
    ],
  },
  {
    stage: "Problem Aware",
    formats: [
      "Case-based breakdown posts",
      "Operational audit checklist",
      '"Signs your production layer is underbuilt" guide',
      "Webinar on agency scalability",
      "LinkedIn carousel posts",
      "Goal: Intensify consequence.",
    ],
  },
  {
    stage: "Solution Aware",
    formats: [
      "Comparison posts: freelancers vs structured production",
      "White-label production explainer",
      "Retainer model breakdown",
      "FAQ content",
      "Mid-funnel nurture emails",
      "Goal: Reduce fear of outsourcing.",
    ],
  },
  {
    stage: "Product Aware",
    formats: [
      "Process walkthrough",
      "Production workflow diagrams",
      "Sample engagement model",
      "SLA explanation",
      "Mini case snapshots",
      "Goal: Build operational confidence.",
    ],
  },
  {
    stage: "Most Aware",
    formats: [
      "Strategic call",
      "Customized production capacity proposal",
      "Campaign rollout plan",
      "Financial impact summary as reinforcement",
      "90-day stabilization roadmap",
      "Goal: Reinforce safety and control.",
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
