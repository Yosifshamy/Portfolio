const steps = [
  {
    stage: "Elicit",
    title: "Gather the requirements",
    desc: "I sit with the client's stakeholders and translate what they need into structured, documented requirements.",
  },
  {
    stage: "Diagnose",
    title: "Find the root cause",
    desc: "Current-state and maturity diagnostics across business functions show where the real gap is, not just the symptom.",
  },
  {
    stage: "Define",
    title: "Set KPIs and targets",
    desc: "Every recommendation gets a KPI, a baseline and a target, so progress can be measured rather than argued.",
  },
  {
    stage: "Plan",
    title: "Phase the roadmap",
    desc: "The work is sequenced into sprints with clear gate criteria, so each phase is checked before the next begins.",
  },
  {
    stage: "Deliver",
    title: "Hand over client-ready work",
    desc: "Diagnostic reports, process maps, SOP outlines and executive presentations, built on standard templates for consistent quality.",
  },
];

const Resume = () => {
  return (
    <section id="method" className="method">
      <div className="wrap">
        <header className="section-head reveal">
          <h2>How I work</h2>
          <p>The same five steps on every engagement, whatever the sector.</p>
        </header>

        <ol className="flow reveal">
          {steps.map((s, i) => (
            <li key={s.stage}>
              <span className="flow__node" aria-hidden="true">
                {i + 1}
              </span>
              <p className="flow__stage">{s.stage}</p>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Resume;
