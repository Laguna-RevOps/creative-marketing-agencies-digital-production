import { SectionBar, Label, Value } from "./ICPPrimitives";
import personaSteve from "@/assets/persona-steve.jpg";
import personaOlivia from "@/assets/persona-olivia.jpg";
import personaJason from "@/assets/persona-jason.jpg";

interface Persona {
  headerName: string;
  headerType: string;
  image: string;
  general: { label: string; value: string }[];
  background: string;
  goals: string[];
  challenges: string[];
  motivators: string[];
  painPoints: string[];
  kpi: string[];
  projects: string[];
}

const personas: Persona[] = [
  {
    headerName: "MSP Owner / CEO",
    headerType: "Decision Maker",
    image: personaSteve,
    general: [
      { label: "Role", value: "Owner / CEO" },
      { label: "Company", value: "MSP, 8–40 employees" },
      { label: "Revenue", value: "$3M–$12M" },
      { label: "Location", value: "U.S.-based, regional" },
    ],
    background:
      "Built the business on relationships and referrals. Now feels the market tightening. Skeptical of vendors. Has likely seen \"great marketing to MSPs\" but not great execution for MSP buyers.",
    goals: [
      "Keep control of the company's voice and message.",
      "Stop relying on referrals as the only growth engine.",
      "Look credible next to larger MSPs and security-first competitors.",
      "Get consistent output without adding permanent payroll.",
    ],
    challenges: [
      "Vendor trust issues: too many promises, not enough shipped work.",
      "Growth work comes in waves, but payroll is fixed.",
      "Owner gets pulled into marketing decisions because nobody else can unblock the work.",
      "Hard to keep website and materials current while running delivery.",
    ],
    motivators: [
      "Clear monthly cost and clear deliverables.",
      "\"We are the voice\" stays true, vendor does not hijack messaging.",
      "Faster turnaround with less babysitting.",
      "Less waste, less vendor churn.",
    ],
    painPoints: [
      "Paying monthly and still feeling like marketing is \"an unpatched server you hope nobody notices.\"",
      "Website and collateral do not match the MSP's actual maturity.",
      "Referral flow is inconsistent.",
      "Every push becomes chaos because production is the bottleneck.",
    ],
    kpi: [
      "Pipeline consistency month to month",
      "Meetings booked that actually fit (not junk)",
      "Close rate and sales cycle length",
      "Margin impact (because bad spend is obvious)",
    ],
    projects: [
      "Security package refresh (pages, proof, enablement)",
      "Vertical expansion kit (vertical page + proof + one-pager)",
      "Website clean-up and ongoing updates",
      "Event asset bundle",
    ],
  },
  {
    headerName: "Marketing Manager / Fractional CMO",
    headerType: "Champion",
    image: personaOlivia,
    general: [
      { label: "Role", value: "Marketing Manager or Fractional CMO" },
      { label: "Company", value: "MSP, 8–40 employees" },
      { label: "Revenue", value: "$3M–$12M" },
      { label: "Location", value: "U.S.-based" },
    ],
    background:
      "Often the only marketing person. They already know what the MSP should say. They do not need \"ideas.\" They need a bench to execute. They also know outsiders rarely understand MSP nuance and they are tired of translating the business.",
    goals: [
      "Get the backlog under control and keep it from refilling.",
      "Ship core assets that make sales easier (pages, proof, one-pagers, follow-ups).",
      "Keep the MSP's voice consistent and internal.",
      "Stop being the bottleneck for every request.",
    ],
    challenges: [
      "Everything is urgent and everything routes through them.",
      "They are doing strategy, writing, design wrangling, web updates, and reporting.",
      "Vendors either move slow or try to \"own\" the message.",
      "MSP buyers do not care about technical detail. Messaging needs to translate outcomes.",
    ],
    motivators: [
      "A production team that can follow direction without constant rework.",
      "A clean request and approval loop so nothing gets lost.",
      "Ability to scale up during pushes, then scale down.",
      "Less vendor overhead and less \"project management tax.\"",
    ],
    painPoints: [
      "Landing pages, case studies, and web updates sit in draft for weeks.",
      "Sales requests pile up and get handled last minute.",
      "Quality is inconsistent when relying on freelancers.",
      "They spend more time coordinating than shipping.",
    ],
    kpi: [
      "Time-to-ship (how fast work goes live)",
      "Backlog size and backlog age",
      "Conversion rate on key pages",
      "Sales enablement turnaround time",
    ],
    projects: [
      "Quarterly \"website hygiene\" (service pages, vertical pages, proof updates)",
      "Case study pipeline",
      "One-pager and deck refresh cadence",
      "Email templates and follow-up assets",
      "Vendor co-marketing asset batches",
    ],
  },
  {
    headerName: "Head of Sales",
    headerType: "Influencer",
    image: personaJason,
    general: [
      { label: "Role", value: "Head of Sales" },
      { label: "Company", value: "MSP, 8–40 employees" },
      { label: "Revenue", value: "$3M–$12M" },
      { label: "Location", value: "U.S.-based" },
    ],
    background:
      "Carries the number. Wants the marketing stuff to match how they sell. Gets frustrated when outreach goes out and the website cannot back it up.",
    goals: [
      "Have the right pages and proof ready before outreach.",
      "Stop losing deals to \"they look more established than us.\"",
      "Get vertical credibility without making reps build assets themselves.",
      "Keep follow-up tight so deals do not cool off.",
    ],
    challenges: [
      "Prospects ask for proof and materials are outdated or missing.",
      "Competitors look sharper online.",
      "Marketing cannot keep up with real sales timing.",
      "Generic vendor PDFs do not help in competitive deals.",
    ],
    motivators: [
      "Fast enablement turnaround.",
      "Clear, simple assets that sales can use immediately.",
      "Vertical proof that matches the rep's pitch.",
      "Less scramble, fewer \"we'll send it later\" moments.",
    ],
    painPoints: [
      "\"We should have had that page ready\" happens too often.",
      "Follow-up is weak because proof is missing.",
      "Reps are improvising with outdated decks.",
      "Campaign timing slips because production is slow.",
    ],
    kpi: [
      "Meetings to qualified opportunities",
      "Proposal-to-close rate",
      "Sales cycle length",
      "Win rate by vertical",
    ],
    projects: [
      "Vertical sales kit builds",
      "Security credibility pack",
      "Event follow-up bundle",
      "Rep onboarding enablement kit",
    ],
  },
];

const whereData = [
  { label: "Reddit", value: "r/MSP (asking blunt questions, sharing vendor experiences)" },
  { label: "Communities", value: "Vendor communities and peer groups" },
  { label: "LinkedIn", value: "Owners and sales leaders, more than engineers" },
  { label: "Events", value: "Conferences and local industry meetups" },
  { label: "Search", value: "Google (prospect research, competitor comparison)" },
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
        {persona.headerName} – {persona.headerType}
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
      </div>

      <div>
        <div className="border-b border-icp-grid/20 px-3 py-2 bg-icp-cell">
          <Label>Background</Label>
          <p className="text-[11px] leading-relaxed mt-1 text-icp-value">{persona.background}</p>
        </div>
        <ListSection title="Goals" items={persona.goals} numbered />
        <ListSection title="Challenges" items={persona.challenges} numbered />
        <ListSection title="Motivators" items={persona.motivators} />
        <ListSection title="Pain Points" items={persona.painPoints} numbered />
        <ListSection title="KPIs" items={persona.kpi} />
        <ListSection title="Projects / Use Cases" items={persona.projects} />
      </div>
    </div>
  </div>
);

const BuyerPersonasTab = () => (
  <div>
    {personas.map((persona, i) => (
      <PersonaBlock key={i} persona={persona} />
    ))}

    <SectionBar>
      <div className="text-center">Where Users Spend Time</div>
    </SectionBar>
    <div className="border-x border-b border-icp-grid/30 bg-icp-cell">
      {whereData.map((item, i) => (
        <div key={i} className="grid grid-cols-[160px_1fr] border-b border-icp-grid/20 last:border-b-0">
          <div className="px-3 py-2 text-[11px] font-bold border-r border-icp-grid/20 bg-muted/50">
            {item.label}
          </div>
          <div className="px-3 py-2 text-[11px] leading-relaxed">
            <Value>{item.value}</Value>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BuyerPersonasTab;
