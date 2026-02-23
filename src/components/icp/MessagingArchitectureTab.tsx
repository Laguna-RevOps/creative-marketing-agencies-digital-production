import { SectionBar, Label, Value } from "./ICPPrimitives";
import { painMappings, painCards, objectionHandling, desireState } from "./messaging-data";
import type { PainData } from "./messaging-data";

/* Build a matrix: collect all unique angle types across personas, then map each persona's text by type */
const buildAngleMatrix = (pain: PainData) => {
  const personaOrder = ["CEO", "Marketing", "COO", "Sales"];
  // Collect all unique angle types in order of first appearance
  const typeOrder: string[] = [];
  const typeSet = new Set<string>();
  for (const persona of pain.personas) {
    for (const angle of persona.angles) {
      const normalized = angle.type.charAt(0).toUpperCase() + angle.type.slice(1);
      if (!typeSet.has(normalized)) {
        typeSet.add(normalized);
        typeOrder.push(normalized);
      }
    }
  }
  // Build lookup: persona -> type -> text
  const lookup: Record<string, Record<string, string>> = {};
  for (const persona of pain.personas) {
    lookup[persona.persona] = {};
    for (const angle of persona.angles) {
      const normalized = angle.type.charAt(0).toUpperCase() + angle.type.slice(1);
      lookup[persona.persona][normalized] = angle.text;
    }
  }
  return { typeOrder, personaOrder, lookup };
};

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
    <div className="border-x border-b border-icp-grid/30">
      {painCards.map((pain, i) => {
        const { typeOrder, personaOrder, lookup } = buildAngleMatrix(pain);
        return (
          <div key={i} className={i > 0 ? "mt-10" : ""}>
            {/* Pain header bar */}
            <div className="bg-icp-bar text-icp-bar-fg px-4 py-2">
              <h3 className="text-[12px] font-bold uppercase tracking-wider">{pain.title}</h3>
            </div>
            {/* Table header */}
            <div className="grid grid-cols-[140px_1fr_1fr_1fr_1fr] bg-muted/50 border-b border-icp-grid/20">
              {["Angle Type", "CEO", "Marketing", "COO", "Sales"].map((h) => (
                <div key={h} className="px-3 py-2 text-[11px] font-bold border-r border-icp-grid/20 last:border-r-0 text-center">
                  {h}
                </div>
              ))}
            </div>
            {/* Angle rows */}
            {typeOrder.map((angleType, j) => (
              <div key={j} className="grid grid-cols-[140px_1fr_1fr_1fr_1fr] border-b border-icp-grid/20 last:border-b-0">
                <div className="px-3 py-2.5 text-[11px] font-bold bg-muted/50 border-r border-icp-grid/20">
                  {angleType}
                </div>
                {personaOrder.map((persona) => (
                  <div key={persona} className="px-3 py-2.5 text-[11px] leading-relaxed text-icp-value border-r border-icp-grid/20 last:border-r-0 bg-icp-cell">
                    {lookup[persona]?.[angleType] || ""}
                  </div>
                ))}
              </div>
            ))}
          </div>
        );
      })}
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
