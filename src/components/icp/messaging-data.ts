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

export const painCards: PainData[] = [
  {
    title: "PAIN 1: Marketing Backlog & Inconsistent Output",
    summary: "",
    personas: [
      {
        persona: "CEO",
        angles: [
          { type: "Desired outcome", text: "Marketing assets ship consistently and build visible credibility over time." },
          { type: "Consequence", text: "Projects stall. Pages sit unfinished. Output does not match ambition." },
          { type: "Competitive", text: "Competitors look more specialized. Pricing pressure increases." },
          { type: "Waste angle", text: "Marketing spend without visible accumulation feels wasted." },
          { type: "Growth", text: "Growth slows when marketing cannot support outbound efforts." },
          { type: "Reality check", text: "One internal lead cannot produce what a structured production team can." },
          { type: "Authority", text: "Inconsistent marketing weakens authority in competitive bids." },
          { type: "Compounding", text: "Every quarter without consistent output compounds the gap." },
          { type: "Control angle", text: "Keep messaging in-house. Add production capacity behind it." },
          { type: "Identity", text: "Serious MSPs do not let marketing stall." },
        ],
      },
      {
        persona: "Marketing",
        angles: [
          { type: "Desired outcome", text: "Campaigns launch on time without burnout." },
          { type: "Consequence", text: "The backlog keeps growing." },
          { type: "Momentum", text: "Momentum dies between planning and execution." },
          { type: "Reality check", text: "Planning is not the issue. Bandwidth is." },
          { type: "Coordination", text: "Freelancers require constant re-explanation." },
          { type: "Process", text: "Structured production reduces chaos." },
          { type: "Stress", text: "Shipping consistently lowers stress." },
          { type: "Control angle", text: "Marketing should feel organized, not reactive." },
          { type: "Practical", text: "Add capacity without hiring three full-time roles." },
          { type: "Compounding", text: "Consistency builds authority over time." },
        ],
      },
      {
        persona: "COO",
        angles: [
          { type: "Desired outcome", text: "Predictable marketing workload." },
          { type: "Consequence", text: "Campaign launches create last-minute spikes." },
          { type: "Operations", text: "Internal priorities get disrupted." },
          { type: "Process", text: "Production support stabilizes workflow." },
          { type: "Cost", text: "Flexible support avoids payroll expansion." },
          { type: "Forecasting", text: "Marketing workload becomes forecastable." },
          { type: "Structure", text: "Defined request structure reduces chaos." },
          { type: "Stability", text: "Fewer internal fire drills." },
          { type: "Alignment", text: "Sales and marketing operate on schedule." },
          { type: "Growth", text: "Growth without operational strain." },
        ],
      },
      {
        persona: "Sales",
        angles: [
          { type: "Desired outcome", text: "Assets ready before outreach begins." },
          { type: "Consequence", text: "Deals stall waiting for materials." },
          { type: "Competitive", text: "Momentum weakens in competitive bids." },
          { type: "Proof", text: "Vertical proof must be visible." },
          { type: "Speed", text: "Landing pages cannot take weeks." },
          { type: "Practical", text: "Reps should not build their own materials." },
          { type: "Authority", text: "Other MSPs show more proof." },
          { type: "Cost", text: "Delays cost deals." },
          { type: "Alignment", text: "Marketing output must match live conversations." },
          { type: "Identity", text: "Professional sales teams operate with prepared assets." },
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
