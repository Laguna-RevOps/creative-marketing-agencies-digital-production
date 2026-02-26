import { SectionBar, Label, Value } from "./ICPPrimitives";
import personaSteve from "@/assets/persona-steve.jpg";
import personaOlivia from "@/assets/persona-olivia.jpg";
import personaJason from "@/assets/persona-jason.jpg";
import personaTom from "@/assets/persona-tom.jpg";

interface Persona {
  headerName: string;
  headerType: string;
  image: string;
  general: { label: string; value: string }[];
  emotionalDrivers: string[];
  background: string[];
  goals: string[];
  challenges: string[];
  motivators: string[];
  painPoints: string[];
  kpi: string[];
  projects: string[];
}

const personas: Persona[] = [
  {
    headerName: "SCALING SAM",
    headerType: "CEO / Founder - Creative or Digital Agency",
    image: personaSteve,
    general: [
      { label: "Name", value: "Scaling Sam" },
      { label: "Position", value: "CEO / Founder" },
      { label: "Location", value: "United States / Canada" },
      { label: "Company Size", value: "5-50 employees" },
      { label: "Company Revenue", value: "$2M-$15M" },
    ],
    emotionalDrivers: [
      "Fear of growth creachaos",
      "Anxiety around silent margin erosion",
      "Desire to scale without operational fragility",
      "Pride in running a disciplined, efficient agency",
      "Relief in knowing capacity flexes with revenue",
    ],
    background: [
      "Built the agency around relationships, positioning, and strategic delivery.",
      "Revenue comes from retainers, campaigns, and scoped projects.",
      "Understands that margin lives and dies in delivery efficiency.",
      "Knows that underutilized staff kills profitability.",
      "Has experienced painful hiring mistakes during growth spurts.",
      "This is an agency operator who understands utilization math.",
    ],
    goals: [
      "Increase client volume without lowering gross margin.",
      "Maintain 55-70 percent gross margin across accounts.",
      "Avoid hiring full-time designers or developers for short-term spikes.",
      "Improve revenue per employee.",
      "Build a delivery model that can handle campaign surges.",
    ],
    challenges: [
      "New client wins create production strain within 30-60 days.",
      "Payroll is the largest fixed cost on the P&L.",
      "Creative and dev teams become bottlenecks during multi-channel launches.",
      "Freelancers increase revision cycles and reduce predictability.",
      "Scope creep eats margin when production is reactive.",
    ],
    motivators: [
      "Protecting EBITDA.",
      "Smoother scaling without operational fragility.",
      "Predictable cost per asset.",
      "Flexible production capacity tied to revenue growth.",
    ],
    painPoints: [
      "Media budgets increase but asset production cannot keep pace.",
      "Client retainers grow but internal output does not scale proportionally.",
      "Hiring full-time reduces flexibility during pipeline fluctuations.",
      "Margin erodes quietly due to inefficient production cycles.",
    ],
    kpi: [
      "Gross margin by account",
      "Revenue per employee",
      "Billable utilization rate",
      "Client retention rate",
      "Contribution margin per campaign",
    ],
    projects: [
      "Supporting a new multi-channel client launch",
      "Scaling paid media creative volume across accounts",
      "Handling Q4 campaign surge",
      "Expanding service lines without hiring internally",
      "Increasing asset output per client without increasing payroll",
    ],
  },
  {
    headerName: "OPERATIONAL OLIVIA",
    headerType: "COO / Head of Operations - Agency",
    image: personaTom,
    general: [
      { label: "Name", value: "Operational Olivia" },
      { label: "Position", value: "COO / Head of Operations" },
      { label: "Location", value: "United States / Canada" },
      { label: "Company Size", value: "5-50 employees" },
      { label: "Company Revenue", value: "$2M-$15M" },
    ],
    emotionalDrivers: [
      "Stress from unpredictable production spikes",
      "Frustration with constant firefighting",
      "Need for structured, reliable throughput",
      "Pride in operational control and precision",
      "Relief when delivery runs without escalation",
    ],
    background: [
      "Owns delivery across all client accounts.",
      "Manages resource allocation between design, dev, motion, and QA.",
      "Lives inside Asana, Monday, ClickUp, or Jira.",
      "Feels every delay before the CEO does.",
      "Balances utilization, SLAs, and production timelines.",
      "This is someone juggling campaign calendars and resourcing sheets weekly.",
    ],
    goals: [
      "Maintain SLA adherence across all accounts.",
      "Prevent production bottlenecks before they impact clients.",
      "Smooth capacity across high and low demand cycles.",
      "Reduce dependency on inconsistent freelancers.",
      "Standardize asset intake and QA processes.",
    ],
    challenges: [
      "Campaign calendars stack during product launches.",
      "Designers hit 100 percent utilization too often.",
      "Developers are pulled from strategic builds to do small updates.",
      "Creative resizing and localization eats internal bandwidth.",
      "Revision cycles compound when production is rushed.",
    ],
    motivators: [
      "Stable production velocity.",
      "Clear request pipelines.",
      "Fewer internal fire drills.",
      "Reliable turnaround windows.",
      "Consistent asset quality across clients.",
    ],
    painPoints: [
      "Landing pages not ready before paid campaigns go live.",
      "HTML banners delayed due to dev capacity.",
      "Video edits and cutdowns are backlogged.",
      "QA becomes reactive instead of structured.",
      "Account teams escalate delivery concerns weekly.",
    ],
    kpi: [
      "SLA compliance rate",
      "Average asset turnaround time",
      "Utilization by role",
      "Revision rate per asset",
      "On-time campaign launch percentage",
    ],
    projects: [
      "Campaign calendar capacity planning",
      "Landing page and banner production pipeline",
      "Creative resizing and localization operations",
      "Structured QA process for campaign builds",
      "Backlog reduction and throughput stabilization",
    ],
  },
  {
    headerName: "CLIENT CARLA",
    headerType: "Head of Client Services / Account Director - Agency",
    image: personaOlivia,
    general: [
      { label: "Name", value: "Client Carla" },
      { label: "Position", value: "Head of Client Services / Account Director" },
      { label: "Location", value: "United States / Canada" },
      { label: "Company Size", value: "5-50 employees" },
      { label: "Company Revenue", value: "$2M-$15M" },
    ],
    emotionalDrivers: [
      "Fear of being exposed by missed timelines",
      "Anxiety around client escalations",
      "Desire to commit with confidence",
      "Need to protect client trust",
      "Relief during launches when execution is stable",
    ],
    background: [
      "Owns client relationships and revenue retention.",
      "Responsible for aligning campaign strategy with delivery timelines.",
      "Bridges internal teams and client expectations.",
      "Lives in client calls, scope discussions, and launch calendars.",
      "Escalates production issues when delivery impacts perception.",
      "This is someone whose job security depends on smooth campaign execution.",
    ],
    goals: [
      "Ensure assets are ready before media and campaign launches.",
      "Avoid last-minute production escalations.",
      "Deliver campaigns that feel seamless to the client.",
      "Maintain high client retention and expansion.",
      "Reduce scope friction tied to production delays.",
    ],
    challenges: [
      "Clients expect fast turnaround once strategy is approved.",
      "Media teams lock launch dates before assets are fully built.",
      "Scope creep expands asset requirements mid-campaign.",
      "Designers and dev teams operate at full capacity.",
      "Delays force uncomfortable client conversations.",
    ],
    motivators: [
      "Reliable delivery timelines.",
      "Clear asset request processes.",
      "Confidence in campaign readiness.",
      "Fewer internal escalations.",
      "Stronger client trust and renewal rates.",
    ],
    painPoints: [
      "Landing pages not ready when ads go live.",
      "Creative resizing backlogged across paid channels.",
      "Video cutdowns delayed for campaign variants.",
      "Client review cycles drag due to rushed production.",
      "Campaign momentum stalls because assets are incomplete.",
    ],
    kpi: [
      "Client retention rate",
      "Net revenue retention",
      "On-time campaign launch rate",
      "Client satisfaction score",
      "Account expansion revenue",
    ],
    projects: [
      "Multi-channel campaign launches",
      "Retainer-based creative production",
      "Landing page and microsite builds",
      "Paid media creative rollouts",
      "Seasonal campaign asset surges",
      "Ongoing creative refresh cycles",
    ],
  },
  {
    headerName: "CREATIVE CHRIS",
    headerType: "Head of Creative / Creative Director - Agency",
    image: personaJason,
    general: [
      { label: "Name", value: "Creative Chris" },
      { label: "Position", value: "Head of Creative / Creative Director" },
      { label: "Location", value: "United States / Canada" },
      { label: "Company Size", value: "5-50 employees" },
      { label: "Company Revenue", value: "$2M-$15M" },
    ],
    emotionalDrivers: [
      "Fear of creative quality slipping under pressure",
      "Frustration with production bottlenecks",
      "Pride in protecting brand standards",
      "Tension between speed and excellence",
      "Relief when volume does not compromise quality",
    ],
    background: [
      "Owns creative direction and brand quality.",
      "Defines visual standards and campaign concepts.",
      "Reviews and approves final assets before client delivery.",
      "Manages designers, motion artists, and production resources.",
      "Often pulled between ideation and execution oversight.",
      "This is someone balancing vision, revisions, and bandwidth weekly.",
    ],
    goals: [
      "Protect creative quality across all client accounts.",
      "Ensure assets reflect strategic intent.",
      "Maintain brand consistency at scale.",
      "Free internal creatives to focus on concept development.",
      "Reduce revision cycles caused by rushed production.",
    ],
    challenges: [
      "Designers are overloaded with resizing and production tasks.",
      "Campaign ideation time gets consumed by execution.",
      "Freelancers do not always follow brand systems precisely.",
      "High-volume asset production reduces creative focus.",
      "QA becomes inconsistent during busy cycles.",
    ],
    motivators: [
      "Reliable production support that follows brand systems.",
      "Structured QA processes.",
      "Consistent asset execution standards.",
      "More time for strategic and conceptual work.",
      "Predictable turnaround windows.",
    ],
    painPoints: [
      "Creative team stuck in production instead of concepting.",
      "Asset resizing drains senior designer bandwidth.",
      "Brand inconsistencies across high-volume campaigns.",
      "Revision loops caused by unclear production workflows.",
      "Internal morale dips during campaign spikes.",
    ],
    kpi: [
      "Creative quality consistency",
      "Revision rate per asset",
      "On-time creative approvals",
      "Campaign readiness score",
      "Designer utilization balance",
    ],
    projects: [
      "Campaign creative rollouts across channels",
      "Motion graphics and video cutdowns",
      "HTML banner sets",
      "Landing page visual implementation",
      "Asset localization and resizing",
      "Ongoing creative retainer production",
    ],
  },
];

const ListSection: React.FC<{ title: string; items: string[]; numbered?: boolean }> = ({
  title,
  items,
  numbered,
}) => (
  <div className="border-b border-icp-grid/20 last:border-b-0 px-3 py-2 bg-icp-cell">
    <Label>{title}</Label>
    {numbered ? (
      <ol className="mt-1.5 list-decimal list-inside">
        {items.map((item, i) => (
          <li key={i} className="text-[11px] leading-relaxed mb-1.5 text-icp-value">{item}</li>
        ))}
      </ol>
    ) : (
      <ul className="mt-1.5">
        {items.map((item, i) => (
          <li key={i} className="text-[11px] leading-relaxed mb-1.5 text-icp-value">
            <span className="text-icp-label mr-1">•</span>{item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const PersonaBlock: React.FC<{ persona: Persona }> = ({ persona }) => (
  <div className="border-b-2 border-foreground last:border-b-0">
    <SectionBar>
      <div className="text-center text-[12px]">
        {persona.headerName} - {persona.headerType}
      </div>
    </SectionBar>

    <div className="grid grid-cols-[280px_1fr] border-x border-b border-icp-grid/30">
      <div className="border-r border-icp-grid/30">
        <div className="p-3 bg-icp-cell border-b border-icp-grid/20">
          <img
            src={persona.image}
            alt={persona.headerName}
            className="w-full aspect-square object-cover border border-[#CFCFCF] grayscale-[8%]"
          />
        </div>
        <div className="bg-muted/50 border-b border-icp-grid/20 px-3 py-1.5 text-[11px] font-bold text-center">
          General Information
        </div>
        {persona.general.map((item, i) => (
          <div key={i} className="grid grid-cols-[100px_1fr] border-b border-icp-grid/20 last:border-b-0">
            <div className="px-3 py-1.5 text-[11px] font-bold border-r border-icp-grid/20 bg-muted/50">
              {item.label}
            </div>
            <div className="px-3 py-1.5 text-[11px] bg-icp-cell">
              <Value>{item.value}</Value>
            </div>
          </div>
        ))}
        <div className="mt-2 bg-muted/50 border-b border-icp-grid/20 px-3 py-1.5 text-[11px] font-bold text-center">
          Emotional Drivers
        </div>
        {persona.emotionalDrivers.map((driver, i) => (
          <div key={i} className="px-3 py-1.5 text-[11px] bg-icp-cell border-b border-icp-grid/20 last:border-b-0">
            <Value>{driver}</Value>
          </div>
        ))}
      </div>

      <div>
        <div className="border-b border-icp-grid/20 px-3 py-2 bg-icp-cell">
          <Label>Background</Label>
          <ul className="mt-1.5">
            {persona.background.map((item, i) => (
              <li key={i} className="text-[11px] leading-relaxed mb-1.5 text-icp-value">
                <span className="text-icp-label mr-1">•</span>{item}
              </li>
            ))}
          </ul>
        </div>
        <ListSection title="Goals" items={persona.goals} numbered />
        <ListSection title="Challenges" items={persona.challenges} numbered />
        <ListSection title="Motivators" items={persona.motivators} />
        <ListSection title="Pain Points" items={persona.painPoints} numbered />
        <ListSection title="KPIs" items={persona.kpi} />
        <ListSection title="Type of Projects" items={persona.projects} />
      </div>
    </div>
  </div>
);

const BuyerPersonasTab = () => (
  <div>
    {personas.map((persona, i) => (
      <PersonaBlock key={i} persona={persona} />
    ))}
  </div>
);

export default BuyerPersonasTab;
