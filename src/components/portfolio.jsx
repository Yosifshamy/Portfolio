// Client work. Both clients are confidential, so they are described, not named.
const engagements = [
  {
    id: "maturity",
    title: "Organisational Maturity Restoration Strategy",
    sector: "Agri-food",
    client: "Producer and exporter, client confidential",
    year: "2026",
    question:
      "Where is the organisation's maturity breaking down, and in what order should the functions be rebuilt?",
    findings: [
      {
        figure: "10 functions",
        text: "assessed for maturity to set a baseline score. HR was isolated as the keystone gap holding back every other function.",
      },
      {
        figure: "Systems, not people",
        text: "The root cause was system weakness rather than capability weakness. Results depended on the founder and on departing staff instead of documented processes.",
      },
      {
        figure: "40% shorter",
        text: "timeline, achieved by sequencing the sprints by dependency and staggering them.",
      },
    ],
    delivered: [
      "A 36-week, five-sprint recovery programme covering HR, Sales and BD, Sourcing, Quality and Food Safety, and Make-or-Buy.",
      "A repeatable 12-week sprint model (Diagnose, Solution, Implement, Reassess) with gate-based funding, so each sprint is re-scored before the next one is funded.",
      "Measurable gate criteria per sprint: function maturity scores, CRM adoption, receivables days, customer concentration limits and food-safety recall readiness.",
      "Five governance outputs for every sprint (policy, SOPs, Delegation of Authority, KPI control loop, risk register), projected to more than double the governance score.",
      "A utilisation-based make-or-buy decision matrix for support functions, and an execution risk register with controls.",
    ],
  },
  {
    id: "growth",
    title: "Digital Marketing and Growth Strategy 2026–2028",
    sector: "Industrial automation",
    client:
      "Automation and MEP solutions provider in Egypt and Saudi Arabia, client confidential",
    year: "2026",
    question:
      "How does a technically proven firm stop relying on one executive's network for new business?",
    findings: [
      {
        figure: "Situation analysis",
        text: "of internal strengths and gaps and external opportunities and threats, for a firm serving food and beverage manufacturers.",
      },
      {
        figure: "A visibility gap",
        text: "The core problem was the distance between proven technical capability and digital visibility.",
      },
      {
        figure: "One network",
        text: "New business relied on a single executive's personal relationships.",
      },
    ],
    delivered: [
      "A strategy built on three service pillars, moving the firm from relationship-led sales to digital lead generation.",
      "A three-sprint digital roadmap over 30, 90 and 180 days: a specialised website, case-study video content, then targeted LinkedIn campaigns.",
      "A KPI framework across sales, marketing and operations, including a 5x revenue growth target by 2028, monthly content and engagement targets, and 100% on-time delivery.",
      "The final recommendations, including a site-visit call-to-action, educational technical content and a machine-retrofit service package.",
    ],
  },
];

// Self-directed analysis projects: the hands-on side of the same work.
const analyses = [
  {
    id: "amazon",
    title: "Amazon India fashion sales",
    tools: "Excel, MySQL, Tableau",
    scope: "128,976 orders",
    question: "Where does revenue come from, and where is it being lost?",
    findings: [
      { figure: "₹3.5Cr", text: "from Sets, the top category" },
      { figure: "~40%", text: "of revenue from three states" },
      { figure: "14%", text: "of orders cancelled" },
    ],
    link: {
      href: "https://public.tableau.com/views/AmazonIndiaFashionSalesAnalysis/AmazonSalesDashboard",
      label: "Open the Tableau dashboard",
    },
  },
  {
    id: "churn",
    title: "Telecom customer churn",
    tools: "Power BI, DAX, Power Query",
    scope: "7,000+ customer records",
    question: "Which customers are most likely to leave, and why?",
    findings: [
      { figure: "Contract and tenure", text: "mark out the high-risk segments" },
      { figure: "Price and competitors", text: "are the leading churn drivers" },
    ],
    link: {
      href: "https://github.com/Yosifshamy/Telecom-Customer-Churn-PowerBI",
      label: "See the report on GitHub",
    },
  },
  {
    id: "fitbit",
    title: "Fitbit health and fitness trends",
    tools: "Python, Pandas, Seaborn",
    scope: "940 daily activity records",
    question: "What do users actually do day to day?",
    findings: [
      { figure: "32.2%", text: "of days reach the 10K step goal" },
      { figure: "81.3%", text: "of the day spent sedentary" },
      { figure: "−0.60", text: "correlation, sedentary time and sleep" },
    ],
    link: {
      href: "https://github.com/Yosifshamy/fitbit-fitness-analysis",
      label: "Read the analysis on GitHub",
    },
  },
];

// Moves a soft light under the cursor as it crosses a card
const trackPointer = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

const Portfolio = () => {
  return (
    <section id="work" className="work">
      <div className="wrap">
        <header className="section-head reveal">
          <h2>Consulting projects</h2>
          <p>
            Two client engagements from 2026. Each started with a business that
            knew something was wrong, and ended with a diagnosis, a roadmap and
            measurable targets.
          </p>
        </header>

        <div className="briefs">
          {engagements.map((b) => (
            <article
              className="brief reveal"
              key={b.id}
              aria-labelledby={`${b.id}-title`}
              onMouseMove={trackPointer}
            >
              <header className="brief__head">
                <h3 id={`${b.id}-title`}>{b.title}</h3>
                <p className="brief__meta">
                  <span className="pill">{b.sector}</span>
                  <span>{b.client}</span>
                  <span>{b.year}</span>
                </p>
              </header>

              <div className="brief__body">
                <div className="brief__question">
                  <h4>The question</h4>
                  <p>{b.question}</p>
                </div>

                <div className="brief__col">
                  <h4>What the diagnosis showed</h4>
                  <ul className="findings">
                    {b.findings.map((f) => (
                      <li key={f.figure}>
                        <strong className="figure">{f.figure}</strong>
                        <span>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="brief__col">
                  <h4>What I delivered</h4>
                  <ol className="actions">
                    {b.delivered.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </article>
          ))}
        </div>

        <header className="section-head section-head--sub reveal">
          <h2>Data analysis projects</h2>
          <p>
            The hands-on side: three self-directed analyses in SQL, Power BI,
            Tableau and Python.
          </p>
        </header>

        <div className="minis">
          {analyses.map((a) => (
            <article
              className="mini reveal"
              key={a.id}
              aria-labelledby={`${a.id}-title`}
              onMouseMove={trackPointer}
            >
              <p className="mini__tools">{a.tools}</p>
              <h3 id={`${a.id}-title`}>{a.title}</h3>
              <p className="mini__question">{a.question}</p>
              <ul className="mini__findings">
                {a.findings.map((f) => (
                  <li key={f.figure}>
                    <strong className="figure">{f.figure}</strong>
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
              <p className="mini__foot">
                <span>{a.scope}</span>
                <a
                  className="text-link"
                  href={a.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {a.link.label}
                </a>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
