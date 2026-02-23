export interface AngleItem {
  type: string;
  text: string;
}

export interface PersonaAngles {
  persona: string;
  angles: AngleItem[];
}

export interface PainData {
  title: string;
  summary: string;
  personas: PersonaAngles[];
}

export interface PainMapping {
  pain: string;
  ceo: string;
  coo: string;
  marketing: string;
  sales: string;
  emotionalLever: string;
}

export const painMappings: PainMapping[] = [
  {
    pain: "Marketing Backlog & Inconsistent Output",
    ceo: "Marketing spend does not compound when assets do not consistently ship. Competitors appear more specialized because they publish more frequently.",
    coo: "Production delays create internal bottlenecks and unstructured workload spikes.",
    marketing: "Roadmap exists, but execution bandwidth is insufficient to keep projects moving.",
    sales: "Deals slow when landing pages and proof assets are not ready.",
    emotionalLever: "Loss of Control",
  },
  {
    pain: "Competitive Digital Pressure",
    ceo: "Market is crowded. Digital presence now influences credibility and pricing power.",
    coo: "Marketing workload increases as competitive expectations rise.",
    marketing: "Other MSPs publish consistently; falling behind feels visible.",
    sales: "Competitors show more vertical proof during bids.",
    emotionalLever: "Relevance Risk",
  },
  {
    pain: "Hiring Risk & Fixed Payroll Pressure",
    ceo: "Hiring multiple marketing specialists increases fixed cost and long-term risk.",
    coo: "Headcount expansion adds operational overhead.",
    marketing: "Managing freelancers creates inconsistency; hiring full-time is unrealistic.",
    sales: "Pipeline timing does not wait for recruiting cycles.",
    emotionalLever: "Financial Risk",
  },
  {
    pain: "Agency Disappointment & Loss of Trust",
    ceo: "Past agency relationships felt generic and disconnected from MSP reality.",
    coo: "External vendors required too much oversight.",
    marketing: "Agency output did not reflect actual service depth.",
    sales: "Messaging did not match real conversations with buyers.",
    emotionalLever: "Skepticism",
  },
];

export const ANGLE_TYPE_ORDER = [
  "Desired Outcome",
  "Consequence",
  "Competitive",
  "Cost",
  "Authority",
  "Growth",
  "Reality Check",
  "Practical",
  "Alignment",
  "Compounding",
] as const;

export const painCards: PainData[] = [
  {
    title: "PAIN 1: MARKETING BACKLOG & INCONSISTENT OUTPUT",
    summary: "",
    personas: [
      {
        persona: "CEO",
        angles: [
          { type: "Desired Outcome", text: "Marketing assets ship consistently and build visible credibility over time." },
          { type: "Consequence", text: "Projects stall. Pages sit unfinished. Output does not match ambition." },
          { type: "Competitive", text: "Competitors look more specialized because they publish more frequently." },
          { type: "Cost", text: "Marketing spend without visible accumulation feels wasted." },
          { type: "Authority", text: "Inconsistent marketing weakens authority in competitive bids." },
          { type: "Growth", text: "Growth slows when marketing cannot support outbound efforts." },
          { type: "Reality Check", text: "One internal lead cannot produce what a structured production team can." },
          { type: "Practical", text: "Keep messaging in-house and add production capacity behind it." },
          { type: "Alignment", text: "Marketing output must match growth ambition." },
          { type: "Compounding", text: "Every quarter without consistent output compounds the gap." },
        ],
      },
      {
        persona: "Marketing",
        angles: [
          { type: "Desired Outcome", text: "Campaigns launch on time without burnout." },
          { type: "Consequence", text: "The backlog keeps growing and momentum slows." },
          { type: "Competitive", text: "Other MSPs ship consistently and appear more credible." },
          { type: "Cost", text: "Rework from inconsistent execution wastes time." },
          { type: "Authority", text: "Gaps in content reduce perceived expertise." },
          { type: "Growth", text: "Campaign volume cannot scale without added capacity." },
          { type: "Reality Check", text: "Planning is not the issue. Bandwidth is." },
          { type: "Practical", text: "Add support without hiring three full-time specialists." },
          { type: "Alignment", text: "Execution must align with campaign roadmap." },
          { type: "Compounding", text: "Consistency builds authority over time." },
        ],
      },
      {
        persona: "COO",
        angles: [
          { type: "Desired Outcome", text: "Predictable marketing workload without internal disruption." },
          { type: "Consequence", text: "Campaign launches create last-minute workload spikes." },
          { type: "Competitive", text: "Competitive pressure increases production expectations." },
          { type: "Cost", text: "Reactive production creates hidden operational cost." },
          { type: "Authority", text: "Execution gaps reduce organizational credibility." },
          { type: "Growth", text: "Growth initiatives increase operational strain." },
          { type: "Reality Check", text: "Internal resources are already stretched thin." },
          { type: "Practical", text: "Flexible support avoids permanent payroll expansion." },
          { type: "Alignment", text: "Sales and marketing must operate on schedule." },
          { type: "Compounding", text: "Structured execution stabilizes long-term operations." },
        ],
      },
      {
        persona: "Sales",
        angles: [
          { type: "Desired Outcome", text: "Assets ready before outreach begins." },
          { type: "Consequence", text: "Deals stall waiting for materials." },
          { type: "Competitive", text: "Momentum weakens in competitive bids." },
          { type: "Cost", text: "Delays cost deals." },
          { type: "Authority", text: "Other MSPs show more proof." },
          { type: "Growth", text: "Pipeline expansion requires consistent marketing support." },
          { type: "Reality Check", text: "Sales momentum depends on prepared assets." },
          { type: "Practical", text: "Reps should not build their own materials." },
          { type: "Alignment", text: "Marketing output must match live conversations." },
          { type: "Compounding", text: "Consistent publishing strengthens positioning over time." },
        ],
      },
    ],
  },
  {
    title: "PAIN 2: COMPETITIVE DIGITAL PRESSURE",
    summary: "",
    personas: [
      {
        persona: "CEO",
        angles: [
          { type: "Desired Outcome", text: "Digital presence reinforces credibility and pricing power." },
          { type: "Consequence", text: "Falling behind competitors reduces perceived expertise." },
          { type: "Competitive", text: "Market is crowded and digital visibility now influences buying decisions." },
          { type: "Cost", text: "Weak digital positioning pressures pricing." },
          { type: "Authority", text: "Strong digital presence protects brand authority." },
          { type: "Growth", text: "Digital authority supports outbound growth." },
          { type: "Reality Check", text: "Referrals alone are no longer sufficient." },
          { type: "Practical", text: "Increase output without increasing fixed payroll." },
          { type: "Alignment", text: "Digital presence must reflect real service maturity." },
          { type: "Compounding", text: "Strong digital presence compounds credibility." },
        ],
      },
      {
        persona: "Marketing",
        angles: [
          { type: "Desired Outcome", text: "Vertical authority is visible and consistent." },
          { type: "Consequence", text: "Publishing inconsistency makes positioning weak." },
          { type: "Competitive", text: "Competitors publish more frequently and appear stronger." },
          { type: "Cost", text: "Rebuilding credibility later is more expensive." },
          { type: "Authority", text: "Consistent output reinforces expertise." },
          { type: "Growth", text: "Vertical content supports campaign expansion." },
          { type: "Reality Check", text: "Publishing once per quarter is not enough." },
          { type: "Practical", text: "Build vertical assets consistently." },
          { type: "Alignment", text: "Campaign strategy must match visible content." },
          { type: "Compounding", text: "Regular publishing builds long-term authority." },
        ],
      },
      {
        persona: "COO",
        angles: [
          { type: "Desired Outcome", text: "Marketing workload scales in a controlled way." },
          { type: "Consequence", text: "Competitive response increases production stress." },
          { type: "Competitive", text: "Competitive pace increases workload demands." },
          { type: "Cost", text: "Constant reactive adjustments waste operational time." },
          { type: "Authority", text: "Visible structure signals maturity." },
          { type: "Growth", text: "Growth must not overwhelm execution." },
          { type: "Reality Check", text: "Internal bandwidth limits visibility." },
          { type: "Practical", text: "Structured production reduces chaos." },
          { type: "Alignment", text: "Marketing growth must align with operational capacity." },
          { type: "Compounding", text: "Structured output stabilizes growth." },
        ],
      },
      {
        persona: "Sales",
        angles: [
          { type: "Desired Outcome", text: "Strong proof assets support competitive bids." },
          { type: "Consequence", text: "Competitors look more specialized during evaluations." },
          { type: "Competitive", text: "Buyers compare websites before conversations." },
          { type: "Cost", text: "Poor positioning extends sales cycles." },
          { type: "Authority", text: "Authority shortens decision timelines." },
          { type: "Growth", text: "Competitive strength improves close rates." },
          { type: "Reality Check", text: "Buyers research before responding." },
          { type: "Practical", text: "Ensure proof assets are ready before outreach." },
          { type: "Alignment", text: "Sales messaging must match website positioning." },
          { type: "Compounding", text: "Consistent visibility strengthens competitive position." },
        ],
      },
    ],
  },
  {
    title: "PAIN 3: HIRING RISK & FIXED PAYROLL PRESSURE",
    summary: "",
    personas: [
      {
        persona: "CEO",
        angles: [
          { type: "Desired Outcome", text: "Expand marketing capacity without permanent payroll risk." },
          { type: "Consequence", text: "Hiring multiple specialists increases fixed cost and long-term exposure." },
          { type: "Competitive", text: "Overhiring reduces margin flexibility." },
          { type: "Cost", text: "Payroll expansion increases long-term financial risk." },
          { type: "Authority", text: "Stable execution protects brand credibility." },
          { type: "Growth", text: "Scale marketing output safely." },
          { type: "Reality Check", text: "Hiring is expensive and slow." },
          { type: "Practical", text: "Flexible production support reduces risk." },
          { type: "Alignment", text: "Cost structure must match growth stage." },
          { type: "Compounding", text: "Avoid long-term payroll lock-in." },
        ],
      },
      {
        persona: "Marketing",
        angles: [
          { type: "Desired Outcome", text: "Reliable support without managing multiple freelancers." },
          { type: "Consequence", text: "Freelancer coordination creates inconsistency." },
          { type: "Competitive", text: "Inconsistent contractors weaken execution." },
          { type: "Cost", text: "Mis-hires waste budget." },
          { type: "Authority", text: "Structured support maintains consistency." },
          { type: "Growth", text: "Increase output without burnout." },
          { type: "Reality Check", text: "Managing freelancers is not scalable." },
          { type: "Practical", text: "Dedicated support improves consistency." },
          { type: "Alignment", text: "Support must align with campaign roadmap." },
          { type: "Compounding", text: "Stable support builds process maturity." },
        ],
      },
      {
        persona: "COO",
        angles: [
          { type: "Desired Outcome", text: "Flexible resourcing aligned to workload." },
          { type: "Consequence", text: "Headcount expansion increases operational overhead." },
          { type: "Competitive", text: "Fixed payroll reduces agility." },
          { type: "Cost", text: "Benefits and overhead compound cost." },
          { type: "Authority", text: "Operational stability reinforces professionalism." },
          { type: "Growth", text: "Support growth without structural strain." },
          { type: "Reality Check", text: "Internal teams are already stretched." },
          { type: "Practical", text: "Scale up or down based on demand." },
          { type: "Alignment", text: "Capacity must match workload." },
          { type: "Compounding", text: "Predictable resourcing improves planning." },
        ],
      },
      {
        persona: "Sales",
        angles: [
          { type: "Desired Outcome", text: "Pipeline timing is supported without hiring delays." },
          { type: "Consequence", text: "Pipeline timing does not wait for recruiting cycles." },
          { type: "Competitive", text: "Delayed hires weaken campaign timing." },
          { type: "Cost", text: "Delays reduce revenue opportunity." },
          { type: "Authority", text: "Consistent marketing builds buyer trust." },
          { type: "Growth", text: "Align capacity to pipeline growth." },
          { type: "Reality Check", text: "Revenue opportunities move faster than hiring cycles." },
          { type: "Practical", text: "Maintain campaign momentum." },
          { type: "Alignment", text: "Marketing must match sales velocity." },
          { type: "Compounding", text: "Consistent support strengthens pipeline reliability." },
        ],
      },
    ],
  },
  {
    title: "PAIN 4: AGENCY DISAPPOINTMENT & LOSS OF TRUST",
    summary: "",
    personas: [
      {
        persona: "CEO",
        angles: [
          { type: "Desired Outcome", text: "Maintain control of messaging internally." },
          { type: "Consequence", text: "Past agencies felt generic and disconnected." },
          { type: "Competitive", text: "Generic messaging weakens differentiation." },
          { type: "Cost", text: "Paying for strategy without execution wastes budget." },
          { type: "Authority", text: "Internal control protects brand identity." },
          { type: "Growth", text: "Structured execution supports sustainable growth." },
          { type: "Reality Check", text: "Outsourcing strategy does not guarantee execution." },
          { type: "Practical", text: "Keep strategy in-house. Add production support." },
          { type: "Alignment", text: "Brand direction remains internal." },
          { type: "Compounding", text: "Internal control builds long-term brand equity." },
        ],
      },
      {
        persona: "Marketing",
        angles: [
          { type: "Desired Outcome", text: "Work with support that understands MSP reality." },
          { type: "Consequence", text: "Agency output lacked depth." },
          { type: "Competitive", text: "Template-style content reduces credibility." },
          { type: "Cost", text: "Revisions increase time cost." },
          { type: "Authority", text: "Deep service knowledge improves positioning." },
          { type: "Growth", text: "Production consistency improves momentum." },
          { type: "Reality Check", text: "Agencies do not know the business as well as internal teams." },
          { type: "Practical", text: "Use structured support instead of full outsourcing." },
          { type: "Alignment", text: "Execution aligns to roadmap." },
          { type: "Compounding", text: "Consistent execution builds trust internally." },
        ],
      },
      {
        persona: "COO",
        angles: [
          { type: "Desired Outcome", text: "Reduce oversight burden." },
          { type: "Consequence", text: "Vendors required constant management." },
          { type: "Competitive", text: "Poor vendor fit creates friction." },
          { type: "Cost", text: "Oversight consumes operational time." },
          { type: "Authority", text: "Clear process reduces vendor friction." },
          { type: "Growth", text: "Stable vendor partnership reduces chaos." },
          { type: "Reality Check", text: "External partners must integrate cleanly." },
          { type: "Practical", text: "Maintain workflow control." },
          { type: "Alignment", text: "Vendor support fits operational workflow." },
          { type: "Compounding", text: "Reduced friction improves operational rhythm." },
        ],
      },
      {
        persona: "Sales",
        angles: [
          { type: "Desired Outcome", text: "Messaging matches real sales conversations." },
          { type: "Consequence", text: "Messaging did not reflect buyer conversations." },
          { type: "Competitive", text: "Buyers notice shallow positioning." },
          { type: "Cost", text: "Weak positioning reduces win rate." },
          { type: "Authority", text: "Accurate messaging builds trust." },
          { type: "Growth", text: "Clear positioning supports pipeline expansion." },
          { type: "Reality Check", text: "Messaging must match live conversations." },
          { type: "Practical", text: "Ensure assets reflect real buyer discussions." },
          { type: "Alignment", text: "Messaging aligns with deal reality." },
          { type: "Compounding", text: "Stronger messaging improves long-term win rates." },
        ],
      },
    ],
  },
];

export const objectionHandling = [
  {
    objection: "\"We've tried marketing agencies before.\"",
    response: "This is not outsourcing strategy. Strategy stays internal. Execution support handles production.",
  },
  {
    objection: "\"How do we maintain quality?\"",
    response: "All messaging direction remains internal. Production follows defined guidelines.",
  },
  {
    objection: "\"We're not ready to hire.\"",
    response: "This avoids long-term payroll risk while increasing capacity.",
  },
  {
    objection: "\"We don't need a big team.\"",
    response: "This is not a big team. It is structured production support aligned to workload.",
  },
];

export const desireState = [
  "Marketing launches on schedule.",
  "Website reflects current services.",
  "Vertical pages show real expertise.",
  "Sales materials are always ready.",
  "Competitive pressure is matched.",
  "Internal marketing lead is not overwhelmed.",
  "Growth does not require multiple full-time hires.",
];
