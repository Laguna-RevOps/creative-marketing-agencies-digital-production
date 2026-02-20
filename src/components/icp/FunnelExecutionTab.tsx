import { SectionBar, Label, Value } from "./ICPPrimitives";

/* ── Funnel Messaging by Awareness Stage ── */
const funnelStages = [
  {
    stage: "Unaware",
    description: "They have not named the problem yet. They just feel the drag.",
    themes: [
      "\"If your website still looks generic, you're going to get compared on price.\"",
      "\"If nothing ever gets finished, it's not because you're lazy. It's because one person can't do five jobs.\"",
      "\"Referrals are great until they slow down.\"",
    ],
  },
  {
    stage: "Problem Aware",
    description: "They can name the headaches.",
    themes: [
      "\"We've got a backlog a mile long.\"",
      "\"We pay for help and still don't see output.\"",
      "\"We keep saying we'll update the site, then months go by.\"",
      "\"Marketing is hard because nobody cares about the technical guts, they care about outcomes.\"",
    ],
  },
  {
    stage: "Solution Aware",
    description: "They are looking for a model that fits an MSP.",
    themes: [
      "\"We want to keep our voice in-house, but we need extra hands.\"",
      "\"I don't want a full department. I want a bench.\"",
      "\"I want predictable monthly cost, not another salary.\"",
    ],
  },
  {
    stage: "Product Aware",
    description: "They're comparing options.",
    themes: [
      "\"Do you understand MSP language or are we translating everything?\"",
      "\"Are you going to build what we ask for, or try to run our marketing?\"",
      "\"What do we actually get each month and how fast does it move?\"",
    ],
  },
  {
    stage: "Most Aware",
    description: "They're ready to pick and want clarity.",
    themes: [
      "\"We're done gambling on marketing companies.\"",
      "\"We want in-house control plus consistent output.\"",
      "\"We need to get past referrals this year.\"",
    ],
  },
];

/* ── Buying Triggers to Activation Plays ── */
const triggerPlays = [
  {
    trigger: "Referral slowdown",
    play: "\"Backlog clean-up month\"",
    actions: [
      "Update core service pages",
      "Add or fix vertical pages",
      "Create 1–2 case studies",
      "Refresh sales deck and one-pagers",
      "Build follow-up templates (email + simple PDFs)",
    ],
  },
  {
    trigger: "New security offer or security refresh",
    play: "\"Security credibility pack\"",
    actions: [
      "Rewrite and rebuild security pages in plain English",
      "Proof points and FAQs",
      "Case study format and first case study",
      "Sales one-pager + basic follow-up assets",
    ],
  },
  {
    trigger: "Hiring a new sales rep",
    play: "\"Sales ramp kit\"",
    actions: [
      "Updated deck",
      "One-pagers by service",
      "Vertical proof sheets",
      "Email templates for outreach",
    ],
  },
  {
    trigger: "Entering a new vertical",
    play: "\"Vertical kit\"",
    actions: [
      "Vertical page",
      "Vertical one-pager",
      "Proof asset (case study or customer story)",
      "A small bundle of outreach follow-ups",
    ],
  },
  {
    trigger: "Event or conference coming up",
    play: "\"Event bundle\"",
    actions: [
      "Event landing page",
      "Invite email templates",
      "Follow-up templates",
      "Handout PDF",
    ],
  },
];

/* ── Execution Formats Matrix ── */
const executionFormats = [
  {
    stage: "Unaware: \"Quick hits\"",
    formats: [
      "Owner note: what changed, what broke, what we learned",
      "A short list: \"If these are true, you've got a capacity problem\"",
      "Simple comparison: \"Why most MSP websites all look the same\"",
    ],
  },
  {
    stage: "Problem Aware: \"Show the backlog\"",
    formats: [
      "A real backlog list: what's stuck and why",
      "Before/after examples using plain language",
      "\"Here's what we tried that didn't work\" (freelancers, vendors, stop-start efforts)",
    ],
  },
  {
    stage: "Solution Aware: \"Explain the model\"",
    formats: [
      "Bench vs hire: simple roles and simple dollars",
      "\"You stay the voice\" explanation with clear boundaries",
      "How requests and approvals work so nothing gets lost",
    ],
  },
  {
    stage: "Product Aware: \"Make it concrete\"",
    formats: [
      "What's included each month",
      "What \"done\" looks like for common MSP assets",
      "How fast work moves and how reviews work",
    ],
  },
  {
    stage: "Most Aware: \"Make the next step obvious\"",
    formats: [
      "Start with a backlog clean-up month",
      "Then move to a monthly bucket",
      "Scale up for pushes, scale down after",
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
              <p className="text-[12px] leading-relaxed text-icp-value mb-3 italic">
                {stage.description}
              </p>
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
              <p className="text-[13px] font-bold text-icp-label mb-1">{item.trigger}</p>
              <p className="text-[12px] text-icp-value mb-3 pl-3">
                <Label>Play: </Label><Value>{item.play}</Value>
              </p>
              <div className="pl-3 space-y-1.5">
                {item.actions.map((action, j) => (
                  <p key={j} className="text-[11px] leading-relaxed text-icp-value">
                    <span className="text-icp-label mr-1.5">•</span>{action}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Section 3: Execution Formats Matrix */}
    <SectionBar>
      <div className="text-center">Execution Formats Matrix</div>
    </SectionBar>
    <div className="border-x border-b border-icp-grid/30 bg-background p-5">
      <div className="space-y-6">
        {executionFormats.map((block, i) => (
          <div key={i} className="border border-icp-grid/30 bg-icp-cell">
            <div className="bg-muted/60 border-b border-icp-grid/20 px-5 py-2.5">
              <h3 className="text-[12px] font-bold text-icp-label">{block.stage}</h3>
            </div>
            <div className="px-5 py-4 space-y-2">
              {block.formats.map((format, j) => (
                <p key={j} className="text-[11px] leading-relaxed text-icp-value">
                  <span className="text-icp-label mr-1.5">•</span>{format}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default FunnelExecutionTab;
