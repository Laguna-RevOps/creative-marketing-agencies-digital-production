import { SectionBar, Label, Value } from "./ICPPrimitives";

const painPersonaRows = [
  {
    pain: "Ticket Backlog & SLA Pressure",
    ceo: "Churn risk and brand damage from missed response targets.",
    coo: "Delivery model strain, capacity gaps, and operational fragility under volume.",
    cto: "Escalation overload disrupting strategic work and quality control.",
    lever: "Stress",
  },
  {
    pain: "Hiring Delays & Cost",
    ceo: "Growth bottleneck, payroll risk, margin compression.",
    coo: "Capacity planning fails when hiring cycles lag behind growth forecasts.",
    cto: "Skill gaps slow cloud and security delivery.",
    lever: "Risk",
  },
  {
    pain: "Burnout & Escalation Chaos",
    ceo: "Retention risk and culture damage impacts delivery reliability.",
    coo: "Operational instability, margin risk, and delivery model fragility.",
    cto: "Interrupt-driven work increases rework and technical debt.",
    lever: "Frustration",
  },
  {
    pain: "Growth Without Capacity Planning",
    ceo: "Scaling ceiling, operational collapse risk during growth.",
    coo: "Delivery model fragility increases with every new account.",
    cto: "Technical debt accelerates as complexity grows.",
    lever: "Fear",
  },
];

const messagingAngles = [
  {
    heading: "Ticket Backlog & SLA Pressure",
    ceo: [
      "Backlog is a silent revenue leak.",
      "SLA breaches do not happen suddenly, they accumulate.",
      "Every delayed ticket compounds churn risk.",
    ],
    coo: [
      "You do not have a workflow issue, you have a capacity ceiling.",
      "You cannot optimize your way out of a structural capacity gap.",
      "Delivery model resilience requires capacity elasticity, not process tuning.",
    ],
    cto: [
      "Escalations are crowding out strategic projects.",
      "Interrupt-driven engineering reduces quality and increases rework.",
      "Technical debt grows when tickets dominate.",
    ],
  },
  {
    heading: "Hiring Delays & Cost",
    ceo: [
      "Hiring takes 90 days, demand grows daily.",
      "Payroll is fixed, client volume is not.",
      "You do not need another hiring gamble.",
    ],
    coo: [
      "Capacity gaps widen while hiring pipelines move slowly.",
      "Hiring lag becomes delivery model fragility.",
      "Open roles create systemic SLA risk across accounts.",
    ],
    cto: [
      "Security and cloud work does not wait for headcount.",
      "Skill gaps widen during hiring delays.",
      "Architecture improvements stall without bandwidth.",
    ],
  },
  {
    heading: "Burnout & Escalation Chaos",
    ceo: [
      "Burnout erodes retention before revenue drops.",
      "Your best engineers are your highest churn risk.",
      "Delivery reliability fails when people are overloaded.",
    ],
    coo: [
      "Firefighting is not a sustainable operating model.",
      "Escalation patterns predict margin compression and turnover.",
      "Overutilization is not efficiency, it is operational fragility.",
    ],
    cto: [
      "Engineers were hired to build, not survive.",
      "Reactive work kills strategic execution.",
      "Interruptions destroy focus and increase mistakes.",
    ],
  },
  {
    heading: "Growth Without Capacity Planning",
    ceo: [
      "You cannot scale a 20-person MSP with a 20-person ceiling.",
      "Revenue growth without delivery elasticity is dangerous.",
      "Margin shrinks when payroll grows faster than efficiency.",
    ],
    coo: [
      "Every new contract increases delivery model fragility.",
      "Client growth amplifies operating model weaknesses.",
      "Delivery resilience must scale with demand or margins collapse.",
    ],
    cto: [
      "Growth amplifies infrastructure complexity.",
      "Scaling clients without scaling systems increases risk.",
      "Technical debt accelerates under constant pressure.",
    ],
  },
];

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <div>
    {items.map((item, i) => (
      <p key={i} className="text-[9px] leading-[1.3] mb-0.5 text-icp-value">
        <span className="text-icp-label">•</span> {item}
      </p>
    ))}
  </div>
);

const MessagingArchitectureTab = () => (
  <div>
    {/* Section 1: Primary Organizing Principle */}
    <SectionBar>
      <div className="text-center">Primary Organizing Principle</div>
    </SectionBar>
    <div className="border-x border-b border-icp-grid/30 bg-icp-cell px-3 py-2">
      <p className="text-[10px] leading-[1.4] text-icp-value">
        <Label>Pain-First</Label> — MSPs in the 10–50 employee range buy solutions to operational pressure. Messaging must lead with capacity constraints, SLA risk, hiring delays, and burnout, then position Boombit as delivery elasticity that stabilizes execution without increasing fixed payroll.
      </p>
      <p className="text-[9px] italic text-icp-value/70 mt-1">
        (Ref: Tab 1 Pain Points + Tab 2 CEO/COO/CTO Goals)
      </p>
    </div>

    {/* Section 2: Pain × Persona Mapping */}
    <SectionBar>
      <div className="text-center">Pain × Persona Mapping</div>
    </SectionBar>
    <div className="border-x border-b border-icp-grid/30">
      {/* Column headers */}
      <div className="grid grid-cols-[180px_1fr_1fr_1fr_100px] bg-muted/50 border-b border-icp-grid/20">
        {["Pain", "CEO (Strategic Steve)", "COO (Operational Olivia)", "CTO (Technical Tom)", "Emotional Lever"].map((h) => (
          <div key={h} className="px-2 py-1 text-[9px] font-bold border-r border-icp-grid/20 last:border-r-0 text-center">
            {h}
          </div>
        ))}
      </div>
      {/* Rows */}
      {painPersonaRows.map((row, i) => (
        <div key={i} className="grid grid-cols-[180px_1fr_1fr_1fr_100px] border-b border-icp-grid/20 last:border-b-0">
          <div className="px-2 py-1 text-[9px] font-bold bg-muted/50 border-r border-icp-grid/20">
            {row.pain}
          </div>
          <div className="px-2 py-1 text-[9px] leading-[1.3] text-icp-value border-r border-icp-grid/20 bg-icp-cell">
            {row.ceo}
          </div>
          <div className="px-2 py-1 text-[9px] leading-[1.3] text-icp-value border-r border-icp-grid/20 bg-icp-cell">
            {row.coo}
          </div>
          <div className="px-2 py-1 text-[9px] leading-[1.3] text-icp-value border-r border-icp-grid/20 bg-icp-cell">
            {row.cto}
          </div>
          <div className="px-2 py-1 text-[9px] font-bold text-center bg-icp-cell">
            {row.lever}
          </div>
        </div>
      ))}
    </div>
    <div className="border-x border-b border-icp-grid/30 bg-icp-cell px-3 py-1">
      <p className="text-[9px] italic text-icp-value/70">
        (Ref: Tab 1 Qualification Criteria + Buying Triggers Events)
      </p>
    </div>

    {/* Section 3: Messaging Angles by Pain */}
    <SectionBar>
      <div className="text-center">Messaging Angles by Pain</div>
    </SectionBar>
    <div className="border-x border-b border-icp-grid/30">
      {messagingAngles.map((block, i) => (
        <div key={i} className={`${i > 0 ? "border-t-2 border-icp-grid/40" : ""}`}>
          {/* Sub-block heading */}
          <div className="bg-muted/50 border-b border-icp-grid/20 px-2 py-1 text-[10px] font-bold">
            {block.heading}
          </div>
          {/* Three columns */}
          <div className="grid grid-cols-3 border-b border-icp-grid/20 last:border-b-0">
            <div className="px-2 py-1.5 border-r border-icp-grid/20 bg-icp-cell">
              <div className="text-[9px] font-bold mb-0.5 text-icp-label">CEO</div>
              <BulletList items={block.ceo} />
            </div>
            <div className="px-2 py-1.5 border-r border-icp-grid/20 bg-icp-cell">
              <div className="text-[9px] font-bold mb-0.5 text-icp-label">COO</div>
              <BulletList items={block.coo} />
            </div>
            <div className="px-2 py-1.5 bg-icp-cell">
              <div className="text-[9px] font-bold mb-0.5 text-icp-label">CTO</div>
              <BulletList items={block.cto} />
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="border-x border-b border-icp-grid/30 bg-icp-cell px-3 py-1">
      <p className="text-[9px] italic text-icp-value/70">
        (Ref: Tab 4 for funnel deployment of each angle)
      </p>
    </div>
  </div>
);

export default MessagingArchitectureTab;
