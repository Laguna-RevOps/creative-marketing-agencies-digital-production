import { SectionBar, Label, Value } from "./ICPPrimitives";
import personaSteve from "@/assets/persona-steve.jpg";
import personaOlivia from "@/assets/persona-olivia.jpg";
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
    headerName: "Strategic Steve",
    headerType: "Decision Maker (CEO / Founder / Managing Partner)",
    image: personaSteve,
    general: [
      { label: "Name", value: "Strategic Steve" },
      { label: "Position", value: "CEO / Founder / Managing Partner" },
      { label: "Location", value: "United States" },
      { label: "Company Size", value: "10–50 employees" },
      { label: "Company Revenue", value: "$500K–$10M" },
    ],
    background: [
      "Owns business growth, margins, and client retention.",
      "Approves vendor partnerships that protect SLAs and enable scale.",
    ],
    goals: [
      "Scale service delivery without adding fixed headcount.",
      "Improve margins and stabilize delivery performance.",
      "Increase recurring revenue through higher client retention.",
    ],
    challenges: [
      "Delivery bottlenecks when client volume grows.",
      "Hiring delays for engineers and specialists.",
      "Margin compression from rising payroll costs.",
    ],
    motivators: [
      "Predictable delivery capacity.",
      "Faster response times and SLA stability.",
      "Reduced hiring risk and overhead.",
    ],
    painPoints: [
      "Capacity constraints create SLA breach risk.",
      "Hard to find experienced engineers quickly.",
      "Internal burnout impacts client satisfaction.",
    ],
    kpi: [
      "Gross margin per client",
      "Client retention rate",
      "SLA compliance rate",
      "Ticket backlog trend",
    ],
    projects: [
      "Scaling help desk coverage",
      "Expanding service delivery capacity",
      "Building security or cloud capability for managed accounts",
    ],
  },
  {
    headerName: "Operational Olivia",
    headerType: "Decision Maker (COO / Head of Operations)",
    image: personaOlivia,
    general: [
      { label: "Name", value: "Operational Olivia" },
      { label: "Position", value: "COO / Head of Operations" },
      { label: "Location", value: "United States" },
      { label: "Company Size", value: "10–50 employees" },
      { label: "Company Revenue", value: "$500K–$10M" },
    ],
    background: [
      "Owns the operational model across managed accounts, including scalability, consistency, and delivery resilience.",
      "Accountable for capacity planning, margin protection, and ensuring growth does not create operational fragility.",
    ],
    goals: [
      "Build an operating model that scales without margin erosion.",
      "Maintain consistent SLA performance across accounts as service volume grows.",
      "Align capacity planning and resourcing to growth forecasts and workload variability.",
    ],
    challenges: [
      "Growth increases delivery load and exposes weak points in the operating model.",
      "Hiring cycles lag behind demand, creating capacity gaps and SLA risk.",
      "Payroll expansion can compress margin and reduce flexibility.",
    ],
    motivators: [
      "Predictable operational capacity that scales with demand.",
      "Reduced risk of delivery instability during growth periods.",
      "Improved margin control without sacrificing service consistency.",
    ],
    painPoints: [
      "Operational fragility increases as client volume scales.",
      "Margin compression from reactive hiring decisions.",
      "Capacity constraints create systemic SLA risk across accounts.",
    ],
    kpi: [
      "Gross margin per client",
      "SLA compliance trend",
      "Revenue per engineer",
      "Cost per ticket",
      "Forecasted capacity vs actual demand",
    ],
    projects: [
      "Scaling the managed services operating model",
      "Standardizing processes across accounts",
      "Capacity planning and utilization initiatives",
      "Operational redundancy and continuity planning",
      "Expanding recurring delivery capacity without fixed headcount risk",
    ],
  },
  {
    headerName: "Technical Tom",
    headerType: "Decision Maker (CTO / Technical Director)",
    image: personaTom,
    general: [
      { label: "Name", value: "Technical Tom" },
      { label: "Position", value: "CTO / Technical Director" },
      { label: "Location", value: "United States" },
      { label: "Company Size", value: "10–50 employees" },
      { label: "Company Revenue", value: "$500K–$10M" },
    ],
    background: [
      "Owns technical standards, security posture, tooling decisions, and delivery quality.",
      "Evaluates external support based on technical competency, documentation, and rework risk.",
    ],
    goals: [
      "Maintain infrastructure reliability and reduce repeat incidents.",
      "Protect delivery quality while increasing throughput.",
      "Expand cloud and security capability without overloading internal engineers.",
    ],
    challenges: [
      "Escalations disrupt strategic projects and long-term improvements.",
      "Skill gaps slow delivery on cloud and security initiatives.",
      "Reactive support creates technical debt and rework.",
    ],
    motivators: [
      "Competent technical delivery that does not create rework.",
      "Clear documentation and adherence to standards.",
      "Predictable capacity for cloud and security initiatives.",
    ],
    painPoints: [
      "Interrupt-driven work prevents progress on system improvements.",
      "Quality slips when teams are overloaded.",
      "Security requirements increase workload without added capacity.",
    ],
    kpi: [
      "Mean time to resolve (MTTR)",
      "Escalation volume",
      "Repeat incident rate",
      "Project delivery timelines",
      "Security incident rate",
    ],
    projects: [
      "Cloud migrations and support",
      "Security hardening and remediation",
      "Network upgrades and maintenance",
      "Automation and scripting support",
    ],
  },
];

const whereData = [
  { label: "Social Media", value: "LinkedIn, YouTube" },
  { label: "Search Engine", value: "Google" },
  { label: "Communities", value: "MSP peer groups, vendor communities" },
  { label: "Events", value: "Channel conferences, local IT meetups" },
];

const ListSection: React.FC<{ title: string; items: string[]; numbered?: boolean }> = ({
  title,
  items,
  numbered,
}) => (
  <div className="border-b border-icp-grid/20 last:border-b-0 px-2 py-1 bg-icp-cell">
    <Label>{title}</Label>
    {numbered ? (
      <ol className="mt-0.5 list-decimal list-inside">
        {items.map((item, i) => (
          <li key={i} className="text-[9px] leading-[1.3] text-icp-value">{item}</li>
        ))}
      </ol>
    ) : (
      <ul className="mt-0.5 list-disc list-inside">
        {items.map((item, i) => (
          <li key={i} className="text-[9px] leading-[1.3] text-icp-value">{item}</li>
        ))}
      </ul>
    )}
  </div>
);

const PersonaBlock: React.FC<{ persona: Persona }> = ({ persona }) => (
  <div className="border-b-2 border-foreground last:border-b-0">
    <SectionBar>
      <div className="text-center text-[11px]">
        {persona.headerName} – {persona.headerType}
      </div>
    </SectionBar>

    <div className="grid grid-cols-[280px_1fr] border-x border-b border-icp-grid/30">
      <div className="border-r border-icp-grid/30">
        <div className="p-2 bg-icp-cell border-b border-icp-grid/20">
          <img
            src={persona.image}
            alt={persona.headerName}
            className="w-full aspect-square object-cover border border-[#CFCFCF] grayscale-[8%]"
          />
        </div>
        <div className="bg-muted/50 border-b border-icp-grid/20 px-2 py-1 text-[10px] font-bold text-center">
          General Information
        </div>
        {persona.general.map((item, i) => (
          <div key={i} className="grid grid-cols-[100px_1fr] border-b border-icp-grid/20 last:border-b-0">
            <div className="px-2 py-1 text-[10px] font-bold border-r border-icp-grid/20 bg-muted/50">
              {item.label}
            </div>
            <div className="px-2 py-1 text-[10px] bg-icp-cell">
              <Value>{item.value}</Value>
            </div>
          </div>
        ))}
      </div>

      <div>
        <ListSection title="Background" items={persona.background} />
        <ListSection title="Goals" items={persona.goals} numbered />
        <ListSection title="Challenges" items={persona.challenges} numbered />
        <ListSection title="Motivators" items={persona.motivators} />
        <ListSection title="Pain Points" items={persona.painPoints} numbered />
        <ListSection title="KPI" items={persona.kpi} />
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

    <SectionBar>
      <div className="text-center">Where Users Spend Time</div>
    </SectionBar>
    <div className="border-x border-b border-icp-grid/30 bg-icp-cell">
      {whereData.map((item, i) => (
        <div key={i} className="grid grid-cols-[160px_1fr] border-b border-icp-grid/20 last:border-b-0">
          <div className="px-2 py-1 text-[10px] font-bold border-r border-icp-grid/20 bg-muted/50">
            {item.label}
          </div>
          <div className="px-2 py-1 text-[10px]">
            <Value>{item.value}</Value>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BuyerPersonasTab;
