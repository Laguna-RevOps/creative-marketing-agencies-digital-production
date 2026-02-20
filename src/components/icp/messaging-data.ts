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
  owner: string;
  marketing: string;
  sales: string;
}

export const painMappings: PainMapping[] = [
  {
    pain: "\"Everything sits in draft\"",
    owner: "Paying money, not seeing consistent output",
    marketing: "Bottlenecked, stuck coordinating",
    sales: "Missing assets at the moment of need",
  },
  {
    pain: "\"Hiring feels like a bad bet\"",
    owner: "Fixed payroll vs variable workload",
    marketing: "Needs help, not a department",
    sales: "Hiring cycles are slower than revenue windows",
  },
  {
    pain: "\"We got burned by marketing companies\"",
    owner: "\"Great at selling to MSPs\" but not delivering to MSP buyers",
    marketing: "Tired of translating the business and fixing generic copy",
    sales: "Generic messaging makes them compete on price",
  },
  {
    pain: "\"When we push, it turns into chaos\"",
    owner: "Every launch becomes a scramble",
    marketing: "Workload spikes break the calendar",
    sales: "Outreach happens before pages and proof exist",
  },
];

export const painCards: PainData[] = [
  {
    title: "PAIN 1: Everything sits in draft",
    summary:
      "Pages, case studies, one-pagers, and web updates pile up because one person cannot do everything. The MSP pays for help but nothing ships consistently.",
    personas: [
      {
        persona: "Owner / CEO",
        angles: [
          { type: "Desired outcome", text: "\"I want to see stuff go live every week, not once in a while.\"" },
          { type: "Reality check", text: "\"One marketing person cannot be design, web, copy, and ops.\"" },
          { type: "Consequence", text: "\"If nothing ships, nothing stacks up. We keep living on referrals.\"" },
          { type: "Control angle", text: "\"We are the voice. We just need extra hands.\"" },
          { type: "Waste angle", text: "\"Paying monthly and still not shipping is the worst spend.\"" },
          { type: "Proof angle", text: "\"Competitors look sharper because they publish proof consistently.\"" },
          { type: "Speed angle", text: "\"When we decide to do something, we should not wait six weeks.\"" },
          { type: "Simple comparison", text: "\"Delivery has process. Marketing needs process too.\"" },
          { type: "What they hate", text: "\"Not another vendor that talks a lot and ships slowly.\"" },
          { type: "Identity", text: "\"We run a serious MSP. Our marketing should look like it.\"" },
        ],
      },
      {
        persona: "Marketing Manager / Fractional CMO",
        angles: [
          { type: "Desired outcome", text: "\"Clear the backlog and keep it from refilling.\"" },
          { type: "Reality check", text: "\"This is a bandwidth problem, not an idea problem.\"" },
          { type: "Consequence", text: "\"When work sits in draft, the quarter disappears.\"" },
          { type: "Control angle", text: "\"I keep direction. I need build support.\"" },
          { type: "Admin tax", text: "\"I'm tired of chasing freelancers and fixing half-done work.\"" },
          { type: "Use case", text: "\"Vertical page, security page, one-pagers, case studies. All stuck.\"" },
          { type: "Speed angle", text: "\"Sales needs assets in days, not weeks.\"" },
          { type: "Quality angle", text: "\"Consistency is the real issue, not talent.\"" },
          { type: "Sanity angle", text: "\"Less coordination, more shipping.\"" },
          { type: "Identity", text: "\"My job is to lead the plan, not be a one-person agency.\"" },
        ],
      },
      {
        persona: "Head of Sales",
        angles: [
          { type: "Desired outcome", text: "\"When I ask for a one-pager, I need it this week.\"" },
          { type: "Timing", text: "\"Follow-up is useless if we send proof two weeks late.\"" },
          { type: "Credibility", text: "\"If the site looks generic, we lose on trust.\"" },
          { type: "Use case", text: "\"Prospect asks for security proof. We need assets ready.\"" },
          { type: "Consequence", text: "\"Missing assets slows deals and kills urgency.\"" },
          { type: "Simple ask", text: "\"Give me pages that match what I'm pitching.\"" },
          { type: "Consistency", text: "\"New reps ramp faster with a clean sales kit.\"" },
          { type: "What they hate", text: "\"Stop sending vendor PDFs that look like everyone else.\"" },
          { type: "Competitive angle", text: "\"Other MSPs look more established because they ship more proof.\"" },
          { type: "Identity", text: "\"Prepared teams win. Scrambling teams lose.\"" },
        ],
      },
    ],
  },
  {
    title: "PAIN 2: Hiring feels like a bad bet",
    summary:
      "The MSP needs more marketing production capacity but hiring a full-time person is risky, slow, and often overkill. Workload is variable, payroll is not.",
    personas: [
      {
        persona: "Owner / CEO",
        angles: [
          { type: "Desired outcome", text: "\"Help without locking in permanent payroll.\"" },
          { type: "Risk", text: "\"One wrong hire is expensive for a long time.\"" },
          { type: "Reality check", text: "\"One hire does not cover all the work anyway.\"" },
          { type: "Control angle", text: "\"We keep voice internal, we just add capacity.\"" },
          { type: "Cost logic", text: "\"Work comes in waves. Payroll does not.\"" },
          { type: "Speed", text: "\"We can't wait 90 days to hire and onboard.\"" },
          { type: "Sanity", text: "\"I don't want to manage another full-time function.\"" },
          { type: "Waste angle", text: "\"Hiring a department to fix a backlog is overkill.\"" },
          { type: "Proof", text: "\"We can scale output first, then decide if headcount makes sense.\"" },
          { type: "Identity", text: "\"Run the business lean, not fragile.\"" },
        ],
      },
      {
        persona: "Marketing Manager / Fractional CMO",
        angles: [
          { type: "Desired outcome", text: "\"A bench I can pull in when the calendar gets slammed.\"" },
          { type: "Reality check", text: "\"I don't need a department. I need reliable support.\"" },
          { type: "Speed", text: "\"Hiring is slower than the work.\"" },
          { type: "Control angle", text: "\"I lead, they build.\"" },
          { type: "Use case", text: "\"Scale up for 6–8 weeks during a vertical push.\"" },
          { type: "Quality", text: "\"Consistent output beats random freelancer roulette.\"" },
          { type: "Stress", text: "\"Stop burning out the one person who owns marketing.\"" },
          { type: "Cost", text: "\"Monthly bucket is easier to justify than payroll.\"" },
          { type: "Operations", text: "\"Clear process means less overhead.\"" },
          { type: "Identity", text: "\"Marketing leadership is direction, not doing everything.\"" },
        ],
      },
      {
        persona: "Head of Sales",
        angles: [
          { type: "Desired outcome", text: "\"If we hire reps, marketing needs to keep pace.\"" },
          { type: "Timing", text: "\"Deals don't wait for HR.\"" },
          { type: "Use case", text: "\"Enablement kit before rep starts outreach.\"" },
          { type: "Control angle", text: "\"Keep the message consistent while we scale.\"" },
          { type: "Consequence", text: "\"No collateral equals longer ramp and longer sales cycles.\"" },
          { type: "Credibility", text: "\"Prospects ask for proof, we need it ready.\"" },
          { type: "Competitive", text: "\"We lose to MSPs that look organized.\"" },
          { type: "Practical", text: "\"I need assets that work, not a headcount org chart.\"" },
          { type: "Waste angle", text: "\"A slow hire is the same as no hire for a quarter.\"" },
          { type: "Identity", text: "\"Sales should not be held back by missing basics.\"" },
        ],
      },
    ],
  },
  {
    title: "PAIN 3: We got burned by marketing companies",
    summary:
      "The MSP has tried agencies or vendors before and was disappointed. They were sold big but received generic output that did not sound like the MSP or resonate with MSP buyers.",
    personas: [
      {
        persona: "Owner / CEO",
        angles: [
          { type: "Reality check", text: "\"They were great at selling to us. Not great at delivering.\"" },
          { type: "Control", text: "\"We are the voice. Outsiders can't fake that.\"" },
          { type: "Consequence", text: "\"After getting burned, we stop marketing and go back to referrals.\"" },
          { type: "Desired outcome", text: "\"Marketing that actually sounds like us.\"" },
          { type: "Waste angle", text: "\"I'm not paying for another template.\"" },
          { type: "Proof", text: "\"Show me output, not meetings.\"" },
          { type: "Speed", text: "\"If you can't ship basics fast, nothing else matters.\"" },
          { type: "Simple boundary", text: "\"We don't need you to run strategy.\"" },
          { type: "Trust", text: "\"We're done gambling.\"" },
          { type: "Identity", text: "\"We know our business. We just need execution help.\"" },
        ],
      },
      {
        persona: "Marketing Manager / Fractional CMO",
        angles: [
          { type: "Reality check", text: "\"Agency makes us translate MSP basics for weeks.\"" },
          { type: "Control", text: "\"I need build support, not someone rewriting direction.\"" },
          { type: "Quality", text: "\"Generic copy makes us sound like every MSP.\"" },
          { type: "Desired outcome", text: "\"Support that follows our style and approvals.\"" },
          { type: "Use case", text: "\"We write the message. You make it real: pages, assets, emails.\"" },
          { type: "Speed", text: "\"Ship changes fast, or we lose momentum.\"" },
          { type: "Consequence", text: "\"Vendor rework creates more backlog.\"" },
          { type: "Trust", text: "\"I need a team I can rely on week to week.\"" },
          { type: "Sanity", text: "\"Less vendor drama.\"" },
          { type: "Identity", text: "\"Keep marketing internal. Add a bench.\"" },
        ],
      },
      {
        persona: "Head of Sales",
        angles: [
          { type: "Reality check", text: "\"Generic language makes us compete on price.\"" },
          { type: "Credibility", text: "\"Prospects smell fluff immediately.\"" },
          { type: "Use case", text: "\"Security offer needs plain, credible language.\"" },
          { type: "Consequence", text: "\"If the website doesn't back the pitch, we lose trust.\"" },
          { type: "Desired outcome", text: "\"Assets that match how we actually deliver.\"" },
          { type: "Speed", text: "\"Follow-up materials must be ready when prospects are engaged.\"" },
          { type: "Proof", text: "\"Case studies and proof points win deals.\"" },
          { type: "Simple boundary", text: "\"No hype. Just clear and specific.\"" },
          { type: "Competitive", text: "\"Sharper MSPs win mindshare.\"" },
          { type: "Identity", text: "\"We want to look like the safe choice.\"" },
        ],
      },
    ],
  },
  {
    title: "PAIN 4: When we push, it turns into chaos",
    summary:
      "When the MSP decides to push — a security launch, vertical entry, event, or rep hire — the marketing workload spikes and everything breaks. Production becomes the bottleneck.",
    personas: [
      {
        persona: "Owner / CEO",
        angles: [
          { type: "Desired outcome", text: "\"When we decide to push, it should move fast and clean.\"" },
          { type: "Consequence", text: "\"Miss the window and the push dies.\"" },
          { type: "Control", text: "\"We keep direction. We just need capacity.\"" },
          { type: "Use case", text: "\"Event coming up. We need an asset bundle done before we go.\"" },
          { type: "Stress", text: "\"I don't want every push to feel like a fire drill.\"" },
          { type: "Speed", text: "\"If it takes weeks to update the site, we lose the moment.\"" },
          { type: "Waste angle", text: "\"Last-minute work means lower quality and rework later.\"" },
          { type: "Practical", text: "\"We need a repeatable way to ship during pushes.\"" },
          { type: "Trust", text: "\"We need a team we can count on during busy months.\"" },
          { type: "Identity", text: "\"Operate like a real business, not scramble.\"" },
        ],
      },
      {
        persona: "Marketing Manager / Fractional CMO",
        angles: [
          { type: "Desired outcome", text: "\"Scale up for 30–60 days without burning out.\"" },
          { type: "Use case", text: "\"Vertical kit, security refresh, event assets. All production heavy.\"" },
          { type: "Control", text: "\"I run priorities. The bench runs production.\"" },
          { type: "Consequence", text: "\"Chaos breaks the rest of the calendar.\"" },
          { type: "Quality", text: "\"Rushed work creates more fixes later.\"" },
          { type: "Speed", text: "\"Work should move in days, not weeks.\"" },
          { type: "Operations", text: "\"Clear requests, clear approvals, no guessing.\"" },
          { type: "Sanity", text: "\"Stop late nights before events.\"" },
          { type: "Trust", text: "\"Reliable production beats freelancer roulette.\"" },
          { type: "Identity", text: "\"My job is direction and coordination, not doing everything.\"" },
        ],
      },
      {
        persona: "Head of Sales",
        angles: [
          { type: "Desired outcome", text: "\"Do not start outreach until assets exist.\"" },
          { type: "Consequence", text: "\"Outreach without proof looks weak.\"" },
          { type: "Use case", text: "\"New offer. Need a page and one-pager first.\"" },
          { type: "Speed", text: "\"If follow-up isn't ready, deals cool off.\"" },
          { type: "Control", text: "\"Keep the message consistent across outreach and site.\"" },
          { type: "Credibility", text: "\"Vertical proof makes outreach land.\"" },
          { type: "Practical", text: "\"Give reps a kit that matches the push.\"" },
          { type: "Competitive", text: "\"Prepared teams win.\"" },
          { type: "Waste angle", text: "\"Scrambling wastes rep time.\"" },
          { type: "Identity", text: "\"We want to look organized and confident.\"" },
        ],
      },
    ],
  },
];

export const objectionHandling = [
  {
    objection: "\"We've tried marketing companies before.\"",
    response:
      "Totally fair. Many MSPs say those companies sell well to MSP owners but don't deliver what was promised. This model is different because you keep control and voice, and we only handle the build work under your direction.",
  },
  {
    objection: "\"I don't want to throw money at ads.\"",
    response:
      "Also fair. This is not \"spend more.\" This is \"ship the basics so everything else can work.\"",
  },
  {
    objection: "\"How do we keep quality consistent?\"",
    response: "You set standards and approvals. We build to your rules.",
  },
  {
    objection: "\"Are you replacing our marketing person?\"",
    response: "No. We are giving them the bench they don't have.",
  },
];

export const desireState = [
  "Marketing feels like it comes from inside the MSP because it does.",
  "The website stays current without drama.",
];
