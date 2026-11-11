const roles = [
  {
    title: "Business Analyst",
    org: "Industry 4.01, Business Consulting and Training Services",
    place: "Cairo, Egypt",
    dates: "May 2026 to present",
    points: [
      "Gather and translate client requirements into structured analyses, gap assessments and recommendations.",
      "Run current-state and maturity diagnostics across business functions to locate root causes.",
      "Define KPIs, baselines and targets, and turn them into phased roadmaps with clear gate criteria.",
      "Prepare client-ready deliverables: diagnostic reports, process maps, SOP outlines and executive presentations.",
      "Standardise reporting templates and delivery steps to keep quality consistent across engagements.",
    ],
  },
  {
    title: "Digital Banking Intern",
    org: "Export Development Bank of Egypt (EBank)",
    place: "Cairo, Egypt",
    dates: "July to August 2022",
    points: [
      "Tested new e-banking web modules against business requirements and reported defects to developers.",
      "Supported requirement traceability across the SDLC alongside senior engineers.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="wrap">
        <header className="section-head reveal">
          <h2>Experience</h2>
        </header>

        <ol className="roles">
          {roles.map((r) => (
            <li className="role reveal" key={r.title}>
              <div className="role__when">
                <p className="role__dates">{r.dates}</p>
                <p>{r.place}</p>
              </div>
              <div className="role__what">
                <h3>{r.title}</h3>
                <p className="role__org">{r.org}</p>
                <ul>
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
