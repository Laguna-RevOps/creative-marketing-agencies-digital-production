import { SectionBar, Label, Value } from "./ICPPrimitives";
import { painMappings, painCards, objectionHandling, desireState } from "./messaging-data";
import type { PainData, PersonaAngles } from "./messaging-data";

const PersonaBlock: React.FC<{ data: PersonaAngles }> = ({ data }) => (
  <div className="bg-icp-cell border border-icp-grid/20 p-5">
    <h4 className="text-[13px] font-bold text-icp-label mb-4 pb-2 border-b border-icp-grid/20">
      {data.persona}
    </h4>
    <div className="space-y-3">
      {data.angles.map((angle, i) => (
        <div key={i} className="flex items-start gap-2">
          <span className="inline-block bg-muted text-[9px] font-bold text-icp-label px-2 py-0.5 mt-0.5 whitespace-nowrap shrink-0 uppercase tracking-wide">
            {angle.type}
          </span>
          <span className="text-[11px] leading-relaxed text-icp-value">{angle.text}</span>
        </div>
      ))}
    </div>
  </div>
);

const PainCard: React.FC<{ data: PainData }> = ({ data }) => (
  <div className="border border-icp-grid/30 bg-icp-cell">
    <div className="bg-icp-bar text-icp-bar-fg px-6 py-3">
      <h3 className="text-[13px] font-bold uppercase tracking-wider">{data.title}</h3>
    </div>
    {data.summary && (
      <div className="px-6 py-4 border-b border-icp-grid/20">
        <p className="text-[12px] leading-relaxed text-icp-value">{data.summary}</p>
      </div>
    )}
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-5">
      {data.personas.map((persona, i) => (
        <PersonaBlock key={i} data={persona} />
      ))}
    </div>
  </div>
);

const MessagingArchitectureTab = () => (
  <div>
    {/* Section 1: Primary Organizing Principle */}
    <SectionBar>
      <div className="text-center">Primary Organizing Principle</div>
    </SectionBar>
    <div className="border-x border-b border-icp-grid/30 bg-icp-cell px-5 py-4">
      <p className="text-[12px] leading-relaxed text-icp-value mb-2">
        MSPs do not want another marketing agency running strategy.
      </p>
      <p className="text-[12px] leading-relaxed text-icp-value mb-2">
        They want to keep control of messaging because they understand their clients, services, and positioning better than an outsider.
      </p>
      <p className="text-[12px] leading-relaxed text-icp-value mb-2">
        The breakdown is not direction.
      </p>
      <p className="text-[12px] leading-relaxed text-icp-value mb-2">
        The breakdown is execution.
      </p>
      <p className="text-[12px] leading-relaxed text-icp-value mb-2">
        Marketing slows when one internal person is responsible for planning, design, web updates, content production, and campaign coordination.
      </p>
      <p className="text-[12px] leading-relaxed text-icp-value mb-2">
        <Label>Messaging must lead with:</Label>
      </p>
      <div className="pl-3 mb-2">
        <p className="text-[12px] leading-relaxed text-icp-value">• Execution bottlenecks</p>
        <p className="text-[12px] leading-relaxed text-icp-value">• Competitive digital pressure</p>
        <p className="text-[12px] leading-relaxed text-icp-value">• Sales enablement delays</p>
        <p className="text-[12px] leading-relaxed text-icp-value">• Hiring risk</p>
      </div>
      <p className="text-[12px] leading-relaxed text-icp-value">
        Then position the solution as: <Label>In-house control + consistent production support without adding fixed payroll.</Label>
      </p>
    </div>

    {/* Section 2: Pain × Persona Mapping */}
    <SectionBar>
      <div className="text-center">Pain × Persona Mapping</div>
    </SectionBar>
    <div className="border-x border-b border-icp-grid/30">
      {/* Column headers */}
      <div className="grid grid-cols-[160px_1fr_1fr_1fr_1fr_100px] bg-muted/50 border-b border-icp-grid/20">
        {["Pain", "CEO", "COO", "Marketing", "Sales", "Emotional Lever"].map((h) => (
          <div key={h} className="px-3 py-2 text-[11px] font-bold border-r border-icp-grid/20 last:border-r-0 text-center">
            {h}
          </div>
        ))}
      </div>
      {/* Rows */}
      {painMappings.map((row, i) => (
        <div key={i} className="grid grid-cols-[160px_1fr_1fr_1fr_1fr_100px] border-b border-icp-grid/20 last:border-b-0">
          <div className="px-3 py-2.5 text-[11px] font-bold bg-muted/50 border-r border-icp-grid/20">
            {row.pain}
          </div>
          <div className="px-3 py-2.5 text-[11px] leading-relaxed text-icp-value border-r border-icp-grid/20 bg-icp-cell">
            {row.ceo}
          </div>
          <div className="px-3 py-2.5 text-[11px] leading-relaxed text-icp-value border-r border-icp-grid/20 bg-icp-cell">
            {row.coo}
          </div>
          <div className="px-3 py-2.5 text-[11px] leading-relaxed text-icp-value border-r border-icp-grid/20 bg-icp-cell">
            {row.marketing}
          </div>
          <div className="px-3 py-2.5 text-[11px] leading-relaxed text-icp-value border-r border-icp-grid/20 bg-icp-cell">
            {row.sales}
          </div>
          <div className="px-3 py-2.5 text-[10px] leading-relaxed text-icp-label font-bold bg-muted/50 text-center">
            {row.emotionalLever}
          </div>
        </div>
      ))}
    </div>

    {/* Section 3: Messaging Angles by Pain */}
    <SectionBar>
      <div className="text-center">Messaging Angles by Pain</div>
    </SectionBar>
    <div className="border-x border-b border-icp-grid/30 bg-background">
      <div className="p-4 space-y-10">
        {painCards.map((pain, i) => (
          <PainCard key={i} data={pain} />
        ))}
      </div>
    </div>

    {/* Objection Handling */}
    <SectionBar>
      <div className="text-center">Objection Handling</div>
    </SectionBar>
    <div className="border-x border-b border-icp-grid/30 bg-icp-cell px-5 py-4 space-y-4">
      {objectionHandling.map((item, i) => (
        <div key={i}>
          <p className="text-[12px] font-bold text-icp-label mb-1">{item.objection}</p>
          <p className="text-[11px] leading-relaxed text-icp-value pl-3">{item.response}</p>
        </div>
      ))}
    </div>

    {/* Desired State */}
    <SectionBar>
      <div className="text-center">Desired State</div>
    </SectionBar>
    <div className="border-x border-b border-icp-grid/30 bg-icp-cell px-5 py-4">
      {desireState.map((item, i) => (
        <p key={i} className="text-[12px] leading-relaxed text-icp-value mb-2 last:mb-0">
          <span className="text-icp-label mr-1">•</span>{item}
        </p>
      ))}
    </div>
  </div>
);

export default MessagingArchitectureTab;
