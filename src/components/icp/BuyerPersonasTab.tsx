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
    headerName: "MARKETING MARIA",
    headerType: "Champion (Marketing Manager / Fractional CMO)",
    image: personaOlivia,
    general: [
      { label: "Name", value: "Marketing Maria" },
      { label: "Position", value: "Marketing Manager / Fractional CMO" },
      { label: "Location", value: "United States" },
      { label: "Company Size", value: "5–50 employees" },
      { label: "Company Revenue", value: "$2M–$15M" },
    ],
    background: [
      "Owns marketing direction, messaging, and campaign planning.",
      "Typically the only dedicated marketing person internally.",
      "Understands MSP positioning, vertical focus, and service maturity.",
      "Has likely worked with outside agencies before and was dissatisfied.",
      "Balances strategic planning with hands-on execution.",
    ],
    goals: [
      "Keep marketing direction and voice fully in-house.",
      "Launch campaigns without long delays.",
      "Maintain an updated website that reflects current services.",
      "Build visible vertical credibility.",
      "Support sales with materials that are ready before outreach begins.",
      "Maintain consistent publishing without burnout.",
      "Prove that marketing investment is not wasted.",
    ],
    challenges: [
      "Too many projects, not enough execution bandwidth.",
      "Website updates take weeks or months to ship.",
      "Case studies are stuck waiting for design or formatting.",
      "Sales requests materials faster than they can be produced.",
      "Feels pressure from leadership to \"do more marketing.\"",
      "Competes against MSPs that publish content more consistently.",
      "Managing freelancers creates inconsistency and rework.",
      "Hiring a full in-house team is not realistic.",
      "Agency relationships felt slow, generic, or disconnected from MSP reality.",
    ],
    motivators: [
      "Having reliable production support behind her.",
      "Seeing work ship consistently.",
      "Keeping full control of messaging decisions.",
      "Avoiding burnout.",
      "Being seen internally as organized and dependable.",
      "Working with a team that understands MSP context.",
      "Not having to re-explain the business every month.",
    ],
    painPoints: [
      "Marketing backlog keeps growing.",
      "One project delays the next.",
      "Execution depends entirely on her availability.",
      "Design, web, and content work compete for attention.",
      "Competitors' websites look more specialized.",
      "Sales complains about outdated collateral.",
      "Every new initiative feels heavier than it should.",
      "Cannot justify hiring multiple full-time specialists.",
      "Feels stuck between leadership expectations and limited resources.",
    ],
    kpi: [
      "Website updates completed per quarter.",
      "Campaigns launched on time.",
      "Number of new vertical pages created.",
      "Case studies published.",
      "Sales enablement materials delivered.",
      "Email campaign consistency.",
      "Lead-to-meeting conversion support quality.",
    ],
    projects: [
      "Website service page updates.",
      "Vertical landing page builds.",
      "Cybersecurity positioning refresh.",
      "Case study creation and formatting.",
      "Sales one-pagers and decks.",
      "Webinar landing pages and follow-up sequences.",
      "Event asset bundles.",
      "Ongoing blog or content publishing.",
      "Design refresh for core marketing materials.",
    ],
  },
  {
    headerName: "STRATEGIC STEVE",
    headerType: "Decision Maker (CEO / Owner)",
    image: personaSteve,
    general: [
      { label: "Name", value: "Strategic Steve" },
      { label: "Position", value: "CEO / Owner" },
      { label: "Location", value: "United States" },
      { label: "Company Size", value: "5–50 employees" },
      { label: "Company Revenue", value: "$2M–$15M" },
    ],
    background: [
      "Founder or long-term owner of the MSP.",
      "Built the company through referrals and reputation.",
      "Deep understanding of clients and service delivery.",
      "Has likely worked with one or more marketing agencies before.",
      "Skeptical of marketing spend that does not produce visible results.",
      "Involved in high-level messaging decisions.",
      "Closely monitors margin and payroll expansion.",
    ],
    goals: [
      "Grow beyond pure referral dependency.",
      "Maintain control over company messaging and brand voice.",
      "Increase credibility in competitive bids.",
      "Protect pricing power in a crowded MSP market.",
      "Support sales without increasing fixed payroll.",
      "Avoid vendor relationships that feel vague or unproductive.",
      "Build a marketing foundation that compounds over time.",
      "Keep costs predictable and aligned with revenue growth.",
    ],
    challenges: [
      "Marketing feels inconsistent and hard to measure.",
      "Agencies have delivered generic messaging in the past.",
      "Hiring a full internal marketing team is financially risky.",
      "One internal marketing lead cannot execute everything.",
      "Competitors appear more active online.",
      "Website does not fully reflect the maturity of services.",
      "Referral flow fluctuates unpredictably.",
      "Growth initiatives stall due to execution delays.",
      "Marketing often feels reactive instead of structured.",
    ],
    motivators: [
      "Seeing consistent output month over month.",
      "Maintaining internal control of strategy.",
      "Knowing exactly what is being produced.",
      "Avoiding long-term payroll commitments.",
      "Working with partners who understand MSP operations.",
      "Clear cost structure with defined scope.",
      "Reduced dependency on unpredictable referrals.",
      "Strengthening brand credibility in competitive markets.",
    ],
    painPoints: [
      "Marketing spend in the past did not translate into clear assets.",
      "Website updates move too slowly.",
      "Case studies and vertical proof lag behind real capability.",
      "Competitors look more specialized.",
      "Sales occasionally loses deals due to weak positioning.",
      "Payroll expansion adds pressure to margin.",
      "Hiring mistakes are expensive.",
      "Marketing vendors overpromise and underdeliver.",
      "Growth depends too heavily on existing relationships.",
    ],
    kpi: [
      "Recurring revenue growth.",
      "Sales pipeline stability.",
      "Close rate in competitive deals.",
      "Average deal size.",
      "Client retention rate.",
      "Marketing spend as percentage of revenue.",
      "Margin protection.",
    ],
    projects: [
      "Website overhaul or restructuring.",
      "Vertical specialization push.",
      "Cybersecurity positioning refresh.",
      "Sales enablement rebuild.",
      "Ongoing production support for marketing assets.",
      "Campaign launches tied to growth initiatives.",
      "Asset updates before competitive bid cycles.",
      "Replacing underperforming marketing vendors.",
    ],
  },
  {
    headerName: "OPERATIONAL OLIVIA",
    headerType: "Decision Maker (COO / Head of Operations)",
    image: personaTom,
    general: [
      { label: "Name", value: "Operational Olivia" },
      { label: "Position", value: "COO / Head of Operations" },
      { label: "Location", value: "United States" },
      { label: "Company Size", value: "5–50 employees" },
      { label: "Company Revenue", value: "$2M–$15M" },
    ],
    background: [
      "Oversees daily operations and delivery consistency.",
      "Focused on efficiency, workload distribution, and process control.",
      "Works closely with sales and marketing on capacity planning.",
      "Concerned about operational strain from rapid growth.",
      "Often involved in evaluating vendor partnerships.",
      "Monitors resource allocation and internal workload balance.",
    ],
    goals: [
      "Ensure growth does not overwhelm internal teams.",
      "Maintain operational efficiency during marketing expansion.",
      "Avoid adding unnecessary headcount.",
      "Keep processes structured and predictable.",
      "Align marketing initiatives with operational capacity.",
      "Reduce last-minute chaos tied to campaigns.",
      "Ensure marketing output does not disrupt core service delivery.",
    ],
    challenges: [
      "Marketing initiatives create operational bottlenecks.",
      "Website and asset updates pull internal resources away from delivery.",
      "Hiring full-time marketing specialists increases payroll pressure.",
      "Managing freelancers increases coordination overhead.",
      "Campaign deadlines create internal scramble.",
      "No consistent production rhythm.",
      "Execution delays affect sales planning.",
      "Internal teams are already stretched thin.",
      "Difficulty forecasting marketing workload.",
    ],
    motivators: [
      "Predictable production rhythm.",
      "Clear workflow and request structure.",
      "Flexible resource model without permanent payroll risk.",
      "Reduced internal overload.",
      "Defined turnaround timelines.",
      "Smooth coordination between marketing and operations.",
      "Improved planning visibility.",
    ],
    painPoints: [
      "Internal marketing requests disrupt operational priorities.",
      "Marketing workload spikes are hard to absorb.",
      "Adding headcount increases long-term fixed costs.",
      "Lack of process around asset production.",
      "Campaign launches feel chaotic.",
      "Resource planning is reactive.",
      "Production bottlenecks affect broader initiatives.",
      "Coordination between sales and marketing lacks structure.",
      "External vendors require too much management.",
    ],
    kpi: [
      "Operational efficiency metrics.",
      "Cost per internal resource.",
      "Payroll as percentage of revenue.",
      "Campaign launch timelines.",
      "On-time project completion.",
      "Resource utilization rate.",
      "Margin stability during growth phases.",
    ],
    projects: [
      "Structured production workflow implementation.",
      "Ongoing asset production under defined hours.",
      "Website updates aligned with operational calendar.",
      "Sales collateral refresh tied to growth plans.",
      "Campaign asset bundles executed on schedule.",
      "Production support during peak workload periods.",
      "Capacity augmentation without permanent hires.",
      "Process standardization for marketing requests.",
    ],
  },
  {
    headerName: "SALES SAM",
    headerType: "Influencer (Head of Sales / VP of Sales)",
    image: personaJason,
    general: [
      { label: "Name", value: "Sales Sam" },
      { label: "Position", value: "Head of Sales / VP of Sales" },
      { label: "Location", value: "United States" },
      { label: "Company Size", value: "5–50 employees" },
      { label: "Company Revenue", value: "$2M–$15M" },
    ],
    background: [
      "Leads sales and business development for the MSP.",
      "Manages outbound efforts, partnerships, and pipeline tracking.",
      "Works closely with the CEO on growth targets.",
      "Relies on marketing for positioning, collateral, and landing pages.",
      "Often frustrated by delays in asset production.",
      "Judges marketing by how well it supports live deals.",
    ],
    goals: [
      "Increase pipeline consistency beyond referrals.",
      "Shorten sales cycles.",
      "Improve close rates in competitive deals.",
      "Present stronger vertical and security credibility.",
      "Ensure reps have clean, current materials.",
      "Avoid improvising messaging during live calls.",
      "Support outbound efforts with proper landing pages and follow-up assets.",
      "Make marketing support predictable.",
    ],
    challenges: [
      "Landing pages are not ready when campaigns begin.",
      "Sales decks and one-pagers are outdated.",
      "Case studies are missing for key industries.",
      "Reps modify materials themselves, creating inconsistency.",
      "Competitors appear more specialized in proposals.",
      "Marketing output does not always align with active deals.",
      "Campaign launches are delayed due to asset bottlenecks.",
      "Security positioning is not clearly explained to non-technical buyers.",
      "Sales momentum slows when materials are incomplete.",
    ],
    motivators: [
      "Having assets ready before outreach begins.",
      "Clear messaging that matches what sales is saying.",
      "Faster turnaround on new materials.",
      "Consistent visual and message alignment.",
      "Reduced friction between sales and marketing.",
      "Predictable campaign support.",
      "Winning competitive bids with stronger proof.",
    ],
    painPoints: [
      "Deals stall because proof assets are missing.",
      "Reps rely too heavily on verbal explanations.",
      "Vertical credibility is claimed but not shown.",
      "Marketing takes too long to produce updates.",
      "Event campaigns feel rushed.",
      "Competitors present more polished materials.",
      "Inconsistent branding across assets.",
      "Follow-up sequences are incomplete.",
      "Sales ends up building materials internally to fill gaps.",
    ],
    kpi: [
      "Pipeline growth.",
      "Close rate.",
      "Sales cycle length.",
      "Meetings-to-opportunity conversion.",
      "Opportunity-to-close conversion.",
      "Average deal size.",
      "Revenue per sales rep.",
    ],
    projects: [
      "Industry-specific landing pages.",
      "Security service explanation pages.",
      "Case study creation and formatting.",
      "Sales one-pagers and proposal templates.",
      "Campaign landing pages and email sequences.",
      "Event support materials.",
      "Competitive comparison sheets.",
      "Ongoing collateral updates.",
      "Follow-up email templates aligned to outreach campaigns.",
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
