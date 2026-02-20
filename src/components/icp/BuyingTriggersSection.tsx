import { SectionBar, Label, Value } from "./ICPPrimitives";

const triggers = [
  "Referral volume slows or becomes unpredictable.",
  "New security offer or \"security refresh\" needs credible pages and proof.",
  "Hiring a sales rep (they need materials to ramp).",
  "Entering a vertical (they need vertical pages and proof).",
  "Event/conference coming up (they need an asset bundle).",
  "\"We need a website\" moment or a website overhaul after years of delaying it.",
];

const BuyingTriggersSection = () => (
  <div>
    <SectionBar>
      <div className="text-center">Buying Triggers Events</div>
    </SectionBar>
    <div className="border-x border-b border-icp-grid/30 bg-icp-cell px-3 py-3">
      {triggers.map((t, i) => (
        <p key={i} className="text-[11px] leading-relaxed mb-2 text-icp-value last:mb-0">
          <span className="text-icp-label mr-1">•</span>{t}
        </p>
      ))}
    </div>
  </div>
);

export default BuyingTriggersSection;
