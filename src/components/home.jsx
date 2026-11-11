const CV_URL = "https://drive.google.com/file/d/1odT4ewQUndlqIJs4qik084XNbhZFKoCa/view?usp=sharing";

const tools = [
  "Gap analysis",
  "SQL",
  "Process mapping",
  "Power BI",
  "KPI definition",
  "Tableau",
  "Requirements elicitation",
  "Excel",
  "Stage-gate planning",
  "Python",
  "SWOT analysis",
  "DAX",
  "Risk registers",
  "Power Query",
];

const Arrow = () => (
  <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Home = () => {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="hero__role">
            <span className="dot" aria-hidden="true" />
            Business Analyst in management consulting, Cairo
          </p>
          <h1 className="hero__title">
            I work out what the business is really asking, then{" "}
            <span className="grad">answer it with data.</span>
          </h1>
          <p className="hero__lede">
            I diagnose organisational and commercial performance gaps, turn
            stakeholder needs into requirements, KPIs and phased roadmaps, and
            back every recommendation with hands-on analysis in SQL, Power BI,
            Tableau, Python and Excel.
          </p>
          <div className="hero__actions">
            <a href="#work" className="btn btn--solid">
              See my projects
              <Arrow />
            </a>
            <a
              href={CV_URL}
              className="btn btn--line"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open my CV
            </a>
          </div>
        </div>

        <figure className="portrait">
          <div className="portrait__frame">
            <img
              src="/assets/img/youssef.png"
              alt="Youssef Elshamy in a navy suit and white shirt"
              width="447"
              height="558"
            />
          </div>
          <figcaption className="chip chip--name">
            <span className="chip__title">Youssef Elshamy</span>
            <span className="chip__sub">Business Analyst, Industry 4.01</span>
          </figcaption>
          <a className="chip chip--cert" href="#certifications">
            <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
              <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.18" />
              <path
                d="M6 10.4l2.6 2.6L14 7.4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              <span className="chip__title">Google certified</span>
              <span className="chip__sub">Advanced Data Analytics</span>
            </span>
          </a>
        </figure>
      </div>

      <div className="wrap">
        <dl className="stats">
          <div>
            <dd>2</dd>
            <dt>client strategy engagements in 2026</dt>
          </div>
          <div>
            <dd>10</dd>
            <dt>business functions assessed in one maturity diagnostic</dt>
          </div>
          <div>
            <dd>36 weeks</dd>
            <dt>recovery programme structured in five sprints</dt>
          </div>
          <div>
            <dd>3</dd>
            <dt>certifications from Google and DEPI</dt>
          </div>
        </dl>
      </div>

      <div className="tools" aria-label="Methods and tools I work with">
        <ul className="tools__track">
          {tools.map((t) => (
            <li key={t}>{t}</li>
          ))}
          {tools.map((t) => (
            <li key={`${t}-copy`} aria-hidden="true">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
