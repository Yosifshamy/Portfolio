const About = () => {
  const analyticsSkills = [
    { label: "SQL", width: "90%", cls: "" },
    { label: "Tableau", width: "85%", cls: "" },
    { label: "Excel", width: "90%", cls: "" },
    { label: "Python", width: "85%", cls: "" },
    { label: "Power BI", width: "80%", cls: "" },
  ];

  const devSkills = [
    { label: "React", width: "80%", cls: "green" },
    { label: "Node.js", width: "75%", cls: "green" },
    { label: "MongoDB", width: "80%", cls: "green" },
  ];

  return (
    <section id="about" className="about section">
      <div className="section-title-block reveal">
        <span className="section-num">01</span>
        <h2>About me</h2>
      </div>

      <div className="about-grid">
        {/* LEFT — text */}
        <div className="about-text reveal">
          <p>
            I'm a <strong>Data Analyst</strong> with a Google Data Analytics
            Professional Certificate and three end-to-end projects spanning
            e-commerce, fitness tracking, and telecom churn. I work across the
            full analytics pipeline — from raw data cleaning to SQL querying,
            Python EDA, and interactive dashboards in Tableau and Power BI.
          </p>
          <p>
            Before pivoting to analytics, I spent a year as a{" "}
            <strong>Full Stack Developer</strong> building applications with
            React, Node.js, and MongoDB. That background is not a detour — it's
            a <strong>superpower</strong>. I understand data pipelines, can
            build my own portfolio tools, and bring an engineer's precision to
            every analysis.
          </p>
          <p>
            Based in <strong>Cairo, Egypt</strong> and open to remote
            opportunities worldwide. Passionate about e-commerce intelligence,
            business analytics, and translating numbers into decisions that
            actually get made.
          </p>

          <div className="superpower-box">
            <h4>The analyst + developer edge</h4>
            <p>
              I don't just publish dashboards — I embed them inside
              custom-built portfolio pages with full case study narratives. That
              combination of analytical thinking and technical execution is rare,
              and it shows in my work.
            </p>
          </div>
        </div>

        {/* RIGHT — skills */}
        <div className="skills-col reveal">
          <div className="skill-group">
            <h4>Analytics tools</h4>
            <div className="skill-bars">
              {analyticsSkills.map((s) => (
                <div className="skill-bar-row" key={s.label}>
                  <span className="skill-bar-label">{s.label}</span>
                  <div className="skill-bar-track">
                    <div
                      className={`skill-bar-fill ${s.cls}`}
                      style={{ "--target-width": s.width, maxWidth: s.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h4>Development</h4>
            <div className="skill-bars">
              {devSkills.map((s) => (
                <div className="skill-bar-row" key={s.label}>
                  <span className="skill-bar-label">{s.label}</span>
                  <div className="skill-bar-track">
                    <div
                      className={`skill-bar-fill ${s.cls}`}
                      style={{ "--target-width": s.width, maxWidth: s.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h4>Certifications</h4>
            <div className="cert-item">
              <span className="cert-emoji">🎓</span>
              <div>
                <div className="cert-title">Google Data Analytics</div>
                <div className="cert-sub">
                  Professional Certificate · Completed
                </div>
              </div>
            </div>
            <div className="cert-item">
              <span className="cert-emoji">📊</span>
              <div>
                <div className="cert-title">Microsoft PL-300</div>
                <div className="cert-sub">
                  Power BI Data Analyst Associate · In progress
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;