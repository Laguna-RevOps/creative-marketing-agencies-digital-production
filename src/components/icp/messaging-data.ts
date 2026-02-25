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
    pain: "Production Volatility",
    ceo: "When delivery rhythm breaks, growth feels unstable. Winning new business creates anxiety instead of confidence.",
    coo: "Launch output disrupts workflow predictability and creates daily operational stress.",
    marketing: "Escalations and timeline slips create tension before and during client launches.",
    sales: "Rushed output weakens creative standards and pride in work.",
    emotionalLever: "Loss of Control",
  },
  {
    pain: "Fragile Scaling",
    ceo: "Scaling feels risky when hiring decisions lock in fixed overhead.",
    coo: "Capacity planning becomes reactive when client volume spikes unexpectedly.",
    marketing: "New account wins create quiet concern about delivery sustainability.",
    sales: "Creative bandwidth tightens quickly when volume increases.",
    emotionalLever: "Fear of Fragility",
  },
  {
    pain: "Client Trust Instability",
    ceo: "Inconsistent delivery threatens long-term stability and renewal confidence.",
    coo: "Operational gaps spill into client experience and weaken reliability perception.",
    marketing: "Stress and embarrassment increase when timelines slip or revisions grow.",
    sales: "Brand integrity feels compromised under volume pressure.",
    emotionalLever: "Reputation Risk",
  },
  {
    pain: "Quality Drift at Volume",
    ceo: "Reputation weakens when output degrades at scale.",
    coo: "QA consistency declines when teams operate under strain.",
    marketing: "Clients notice inconsistency across campaign assets.",
    sales: "Senior creatives get pulled into production instead of direction.",
    emotionalLever: "Credibility Risk",
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
    title: "PAIN 1: PRODUCTION VOLATILITY",
    summary: "",
    personas: [
      {
        persona: "CEO",
        angles: [
          { type: "Desired Outcome", text: "Campaign execution scales without destabilizing the agency." },
          { type: "Consequence", text: "Volatility creates silent instability in the agency's growth model." },
          { type: "Competitive", text: "Agencies that stabilize execution scale faster and retain more clients." },
          { type: "Cost", text: "Reactive execution reduces efficiency and quietly impacts margin consistency." },
          { type: "Authority", text: "Delivery stability reinforces executive credibility." },
          { type: "Growth", text: "Sustainable growth requires execution elasticity." },
          { type: "Reality Check", text: "Revenue often grows faster than internal production structure." },
          { type: "Practical", text: "Add structured execution capacity without adding permanent headcount." },
          { type: "Alignment", text: "Keep strategy internal. Stabilize execution externally." },
          { type: "Compounding", text: "Volatility compounds stress and instability over time." },
        ],
      },
      {
        persona: "COO",
        angles: [
          { type: "Desired Outcome", text: "Predictable production flow without constant escalations." },
          { type: "Consequence", text: "Firefighting becomes the operating norm." },
          { type: "Competitive", text: "Structured production buffers separate mature agencies from chaotic ones." },
          { type: "Cost", text: "Escalations consume leadership time that should focus on optimization." },
          { type: "Authority", text: "Controlled workflow signals operational maturity." },
          { type: "Growth", text: "Throughput must increase without increasing chaos." },
          { type: "Reality Check", text: "Teams are usually already operating near capacity." },
          { type: "Practical", text: "Install a dedicated production lane that integrates with internal workflow." },
          { type: "Alignment", text: "Maintain workflow ownership while expanding capacity elasticity." },
          { type: "Compounding", text: "Escalation culture compounds burnout and inefficiency." },
        ],
      },
      {
        persona: "Client Services",
        angles: [
          { type: "Desired Outcome", text: "Confidence that launches will ship on schedule." },
          { type: "Consequence", text: "Client confidence weakens when delivery feels reactive." },
          { type: "Competitive", text: "Reliability becomes a competitive advantage in renewals." },
          { type: "Cost", text: "Rework and rushed production reduce account leverage." },
          { type: "Authority", text: "Consistent launches build internal authority." },
          { type: "Growth", text: "Predictable launches enable expansion conversations." },
          { type: "Reality Check", text: "Campaign calendars stack faster than asset pipelines." },
          { type: "Practical", text: "Pre-allocated asset bandwidth aligned to campaign calendars." },
          { type: "Alignment", text: "Client relationships remain fully in-house." },
          { type: "Compounding", text: "Small delays compound trust erosion." },
        ],
      },
      {
        persona: "Creative",
        angles: [
          { type: "Desired Outcome", text: "High-quality output delivered without rushing or compromise." },
          { type: "Consequence", text: "Creative standards erode when teams are overloaded." },
          { type: "Competitive", text: "Consistency at volume distinguishes elite creative teams." },
          { type: "Cost", text: "Senior creative time gets misallocated to execution tasks." },
          { type: "Authority", text: "Systems protect creative leadership integrity." },
          { type: "Growth", text: "Creative bandwidth must support scale." },
          { type: "Reality Check", text: "Volume without structure degrades output." },
          { type: "Practical", text: "Standardized production and QA framework." },
          { type: "Alignment", text: "Creative direction stays internal; production scales around it." },
          { type: "Compounding", text: "Rushed production compounds revision cycles." },
        ],
      },
    ],
  },
  {
    title: "PAIN 2: FRAGILE SCALING & STAFFING ANXIETY",
    summary: "",
    personas: [
      {
        persona: "CEO",
        angles: [
          { type: "Desired Outcome", text: "Scale confidently without payroll anxiety." },
          { type: "Consequence", text: "Hiring too fast locks in risk. Hiring too slow creates instability." },
          { type: "Competitive", text: "Scalable agencies build elastic production layers." },
          { type: "Cost", text: "Fixed payroll reduces financial flexibility during slower cycles." },
          { type: "Authority", text: "Controlled scaling reflects disciplined leadership." },
          { type: "Growth", text: "Elastic execution enables safer revenue expansion." },
          { type: "Reality Check", text: "Hiring alone does not create scalability." },
          { type: "Practical", text: "Flexible retainer-based production capacity." },
          { type: "Alignment", text: "Protect core team. Externalize volatility." },
          { type: "Compounding", text: "Payroll rigidity compounds financial risk over time." },
        ],
      },
      {
        persona: "COO",
        angles: [
          { type: "Desired Outcome", text: "Capacity aligned to demand without overcommitment." },
          { type: "Consequence", text: "Reactive staffing creates structural fragility." },
          { type: "Competitive", text: "Operational flexibility differentiates resilient firms." },
          { type: "Cost", text: "Inefficient resourcing increases cost per project." },
          { type: "Authority", text: "Capacity planning signals operational sophistication." },
          { type: "Growth", text: "Throughput expands without destabilizing systems." },
          { type: "Reality Check", text: "Forecasting rarely matches real production spikes." },
          { type: "Practical", text: "Embedded production pods aligned to internal processes." },
          { type: "Alignment", text: "Maintain internal control. Expand capacity flexibly." },
          { type: "Compounding", text: "Capacity gaps compound operational stress." },
        ],
      },
      {
        persona: "Client Services",
        angles: [
          { type: "Desired Outcome", text: "Take on new accounts without delivery hesitation." },
          { type: "Consequence", text: "Growth creates internal strain that clients eventually feel." },
          { type: "Competitive", text: "Stable growth increases client confidence." },
          { type: "Cost", text: "Delivery hesitation reduces expansion speed." },
          { type: "Authority", text: "Predictable delivery strengthens client trust." },
          { type: "Growth", text: "Upsell conversations become easier." },
          { type: "Reality Check", text: "Client volume fluctuates unpredictably." },
          { type: "Practical", text: "Reserved monthly asset hours for campaign stability." },
          { type: "Alignment", text: "Keep client ownership internal." },
          { type: "Compounding", text: "Hesitation compounds missed growth opportunities." },
        ],
      },
      {
        persona: "Creative",
        angles: [
          { type: "Desired Outcome", text: "Creative workload balanced during spikes." },
          { type: "Consequence", text: "Team burnout increases turnover risk." },
          { type: "Competitive", text: "Balanced workload preserves quality." },
          { type: "Cost", text: "Overloaded creatives reduce output efficiency." },
          { type: "Authority", text: "Structured production supports creative credibility." },
          { type: "Growth", text: "Creative focus is preserved even during volume increases." },
          { type: "Reality Check", text: "Creative demand is rarely linear." },
          { type: "Practical", text: "Scalable execution lanes." },
          { type: "Alignment", text: "Preserve creative oversight." },
          { type: "Compounding", text: "Burnout compounds quality decline." },
        ],
      },
    ],
  },
  {
    title: "PAIN 3: CLIENT TRUST INSTABILITY",
    summary: "",
    personas: [
      {
        persona: "CEO",
        angles: [
          { type: "Desired Outcome", text: "Long-term client confidence and renewal stability." },
          { type: "Consequence", text: "Trust erosion weakens long-term stability." },
          { type: "Competitive", text: "Reliable agencies win renewals and referrals." },
          { type: "Cost", text: "Retention instability reduces revenue predictability." },
          { type: "Authority", text: "Consistency reinforces leadership credibility." },
          { type: "Growth", text: "Trust stability enables expansion." },
          { type: "Reality Check", text: "Clients notice instability before agencies do." },
          { type: "Practical", text: "Dedicated execution layer protecting client timelines." },
          { type: "Alignment", text: "Protect client relationships while scaling output." },
          { type: "Compounding", text: "Trust erosion compounds into churn risk." },
        ],
      },
      {
        persona: "COO",
        angles: [
          { type: "Desired Outcome", text: "Reliable delivery experience." },
          { type: "Consequence", text: "Operational inconsistency damages reputation." },
          { type: "Competitive", text: "Consistency differentiates mature operators." },
          { type: "Cost", text: "Operational rework increases internal cost." },
          { type: "Authority", text: "Reliable delivery signals strong operations." },
          { type: "Growth", text: "Delivery reliability supports long-term scaling." },
          { type: "Reality Check", text: "Small delivery gaps eventually surface externally." },
          { type: "Practical", text: "Structured production integrated into workflow." },
          { type: "Alignment", text: "Control experience without expanding overhead." },
          { type: "Compounding", text: "Inconsistency compounds operational strain." },
        ],
      },
      {
        persona: "Client Services",
        angles: [
          { type: "Desired Outcome", text: "Confident client communication." },
          { type: "Consequence", text: "Stress increases before every launch." },
          { type: "Competitive", text: "Stability drives retention." },
          { type: "Cost", text: "Churn risk increases account pressure." },
          { type: "Authority", text: "Dependability strengthens client relationships." },
          { type: "Growth", text: "Expansion conversations feel safer." },
          { type: "Reality Check", text: "Minor delays accumulate in perception." },
          { type: "Practical", text: "Clear asset production pipeline." },
          { type: "Alignment", text: "Maintain direct client ownership." },
          { type: "Compounding", text: "Small slips compound into doubt." },
        ],
      },
      {
        persona: "Creative",
        angles: [
          { type: "Desired Outcome", text: "Consistent brand execution." },
          { type: "Consequence", text: "Creative pride diminishes when quality slips." },
          { type: "Competitive", text: "High standards increase perceived value." },
          { type: "Cost", text: "Revision cycles reduce efficiency." },
          { type: "Authority", text: "Brand consistency reinforces authority." },
          { type: "Growth", text: "Creative reputation improves referrals." },
          { type: "Reality Check", text: "Quality inconsistency becomes visible over time." },
          { type: "Practical", text: "QA discipline embedded into execution." },
          { type: "Alignment", text: "Retain creative direction control." },
          { type: "Compounding", text: "Repeated revisions compound inefficiency." },
        ],
      },
    ],
  },
  {
    title: "PAIN 4: QUALITY DRIFT AT VOLUME",
    summary: "",
    personas: [
      {
        persona: "CEO",
        angles: [
          { type: "Desired Outcome", text: "Reputation protected at scale." },
          { type: "Consequence", text: "Reputation weakens when output degrades." },
          { type: "Competitive", text: "Agencies that maintain standards at scale dominate." },
          { type: "Cost", text: "Inefficient production reduces leverage of talent." },
          { type: "Authority", text: "Stable quality reinforces brand strength." },
          { type: "Growth", text: "Sustained quality enables scale." },
          { type: "Reality Check", text: "Volume exposes structural weaknesses." },
          { type: "Practical", text: "Structured production pods." },
          { type: "Alignment", text: "Protect brand while scaling capacity." },
          { type: "Compounding", text: "Quality erosion compounds reputational risk." },
        ],
      },
      {
        persona: "COO",
        angles: [
          { type: "Desired Outcome", text: "Consistent QA and workflow integrity." },
          { type: "Consequence", text: "Quality inconsistency signals operational weakness." },
          { type: "Competitive", text: "Process discipline separates scalable agencies." },
          { type: "Cost", text: "Higher revision rates increase internal cost." },
          { type: "Authority", text: "QA discipline reflects operational maturity." },
          { type: "Growth", text: "Operational consistency supports volume increase." },
          { type: "Reality Check", text: "Without production systems, quality drops." },
          { type: "Practical", text: "Embedded QA workflow." },
          { type: "Alignment", text: "Maintain internal control while expanding output." },
          { type: "Compounding", text: "Inconsistency compounds operational inefficiency." },
        ],
      },
      {
        persona: "Client Services",
        angles: [
          { type: "Desired Outcome", text: "Uniform quality across campaigns." },
          { type: "Consequence", text: "Clients question reliability." },
          { type: "Competitive", text: "Consistency strengthens perceived value." },
          { type: "Cost", text: "Client dissatisfaction slows expansion." },
          { type: "Authority", text: "Consistent output builds credibility." },
          { type: "Growth", text: "Confidence accelerates growth." },
          { type: "Reality Check", text: "Clients notice inconsistencies quickly." },
          { type: "Practical", text: "Standardized asset processes." },
          { type: "Alignment", text: "Client ownership stays in-house." },
          { type: "Compounding", text: "Repeated slips compound client doubt." },
        ],
      },
      {
        persona: "Creative",
        angles: [
          { type: "Desired Outcome", text: "Creative excellence preserved." },
          { type: "Consequence", text: "Senior creatives lose focus on strategic direction." },
          { type: "Competitive", text: "Creative integrity differentiates brands." },
          { type: "Cost", text: "Senior talent time is misused." },
          { type: "Authority", text: "Creative leadership authority is preserved." },
          { type: "Growth", text: "Creative teams innovate when not overloaded." },
          { type: "Reality Check", text: "Creative strain reduces long-term output." },
          { type: "Practical", text: "Dedicated execution support." },
          { type: "Alignment", text: "Creative authority remains internal." },
          { type: "Compounding", text: "Revision cycles compound burnout." },
        ],
      },
    ],
  },
];

export const objectionHandling = [
  {
    objection: '"We have tried outsourcing production before. It was a mess."',
    response: "This is not outsourcing strategy or creative direction. You keep the standards and direction. This is a structured execution layer inside your workflow with defined intake, QA, and turnaround.",
  },
  {
    objection: '"We cannot risk quality slipping."',
    response: "Quality stays controlled because direction stays internal. Production follows your brand systems, review process, and QA checkpoints. The goal is consistency at volume.",
  },
  {
    objection: '"We are not ready to hire."',
    response: "You do not need to hire to stabilize delivery. This adds capacity without adding fixed payroll or long recruiting cycles.",
  },
  {
    objection: '"We only need help occasionally."',
    response: "Occasional spikes are exactly where control breaks. This is a predictable production lane you can turn up or down when campaign calendars stack.",
  },
  {
    objection: '"We do not want to lose control of the client or the work."',
    response: "You keep client ownership, communication, strategy, and approvals. Production support handles execution tasks behind the scenes to protect delivery rhythm.",
  },
  {
    objection: '"We already have freelancers."',
    response: "Freelancers can fill gaps, but they rarely create consistent throughput. This replaces randomness with predictable capacity, standardized process, and consistent output.",
  },
  {
    objection: '"Onboarding a new partner will slow us down."',
    response: "A structured production lane reduces escalations and rework. Setup aligns tools, intake, and QA once, so execution becomes faster going forward.",
  },
];

export const desireState = [
  "Campaign launches ship on schedule without last-minute chaos.",
  "Production backlogs stop dictating client timelines.",
  "The agency can take on new work without staffing panic.",
  "Delivery feels predictable week to week.",
  "Account teams can commit to timelines with confidence.",
  "Client trust strengthens because execution is consistent.",
  "Creative standards hold at volume across channels and variants.",
  "Senior creatives spend more time directing and less time resizing and fixing.",
  "The team feels less burned out, with fewer escalations and fewer weekends.",
  "Growth feels stable because execution capacity can flex without fixed payroll expansion.",
];
