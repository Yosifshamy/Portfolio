const CERT_URL =
  "https://drive.google.com/file/d/1UGjq_Sf2Bgsu3ML5_znR-EddaeTYBpOf/view?usp=drive_link";

const competencies = [
  {
    area: "Business analysis",
    items:
      "Requirements elicitation and documentation, gap analysis, current-state assessment, maturity diagnostics, process mapping, SOP design, stakeholder management",
  },
  {
    area: "Strategy and planning",
    items:
      "SWOT analysis, KPI and target definition, sprint roadmaps, stage-gate planning, go-to-market strategy, risk registers, make-or-buy analysis",
  },
  {
    area: "Data and BI",
    items:
      "SQL (MySQL), Power BI (DAX, Power Query), Tableau, Excel, Python (Pandas, NumPy, Matplotlib, Seaborn), KPI dashboards",
  },
  {
    area: "Tools and delivery",
    items:
      "Executive presentations, requirements documentation, Google Sheets, Jupyter Notebook, Git and GitHub",
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="wrap about__grid">
        <div className="about__text reveal">
          <h2>About me</h2>
          <p>
            I'm a business analyst in management consulting at Industry 4.01 in
            Cairo, with a degree in Business Information Systems and two Google
            Data Analytics certificates.
          </p>
          <p>
            My work is diagnosing organisational and commercial performance
            gaps, translating stakeholder needs into requirements, KPIs and
            phased roadmaps, and producing client-ready strategy deliverables.
            So far that has been for clients in agri-food and industrial
            automation.
          </p>
          <p>
            I back recommendations with hands-on analysis in SQL, Power BI,
            Tableau, Python and Excel.
          </p>

          <h3>Education</h3>
          <ul className="certs">
            <li>
              <span className="certs__main">
                Bachelor of Business Information Systems
                <small>
                  Modern Academy, Cairo. CGPA 3.43 / 4.0 (Excellent)
                </small>
              </span>
              <span className="certs__tag">2021 to 2025</span>
            </li>
          </ul>

          <h3>Languages</h3>
          <ul className="certs">
            <li>
              <span className="certs__main">Arabic</span>
              <span className="certs__tag">Native</span>
            </li>
            <li>
              <span className="certs__main">English</span>
              <span className="certs__tag">Professional</span>
            </li>
          </ul>
        </div>

        <div className="about__side reveal">
          <h3>Core competencies</h3>
          <dl className="strengths">
            {competencies.map((c) => (
              <div key={c.area}>
                <dt>{c.area}</dt>
                <dd>{c.items}</dd>
              </div>
            ))}
          </dl>

          <h3 id="certifications">Certifications</h3>
          <ul className="certs">
            <li>
              <span className="certs__main">
                Google Data Analytics Advanced Certificate
                <small>
                  Advanced statistics, advanced Python, machine learning,
                  interactive data visualisation (7 courses)
                </small>
              </span>
              <span className="certs__tag">Jul 2026</span>
            </li>
            <li>
              <span className="certs__main">
                <a href={CERT_URL} target="_blank" rel="noopener noreferrer">
                  Google Data Analytics Professional Certificate
                </a>
                <small>
                  Data cleaning, SQL, Python, Tableau, spreadsheets,
                  data-driven decision making (9 courses)
                </small>
              </span>
              <span className="certs__tag">Apr 2026</span>
            </li>
            <li>
              <span className="certs__main">
                Full Stack Web Development Certificate
                <small>Digital Egyptians Pioneer Initiative (DEPI)</small>
              </span>
              <span className="certs__tag">Oct 2024</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
