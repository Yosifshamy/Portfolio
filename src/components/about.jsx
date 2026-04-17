const About = () => {
  const analyticsSkills = [
    { label: "SQL", width: "85%", cls: "" },
    { label: "Tableau", width: "75%", cls: "" },
    { label: "Excel", width: "85%", cls: "" },
    { label: "Python", width: "70%", cls: "" },
  ];

  const devSkills = [
    { label: "React", width: "90%", cls: "green" },
    { label: "Node.js", width: "85%", cls: "green" },
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
            I'm a <strong>Data Analyst in training</strong>, Finished
            the Google Data Analytics Professional Certificate (9 of 9 courses
            done). Before pivoting to analytics, I spent years as a{" "}
            <strong>MERN Stack Developer</strong> — building full-stack web
            applications with React, Node.js, and MongoDB.
          </p>
          <p>
            That developer background is not a detour. It's a{" "}
            <strong>superpower</strong>. While most analysts can find insights, I
            can also build the interactive tools that bring those insights to
            life for stakeholders.
          </p>
          <p>
            I'm based in <strong>Cairo, Egypt</strong> and open to remote
            opportunities worldwide. I'm passionate about e-commerce, business
            intelligence, and using data to help companies make smarter
            decisions.
          </p>

          <div className="superpower-box">
            <h4>The analyst + developer edge</h4>
            <p>
              I don't just publish dashboards to Tableau Public — I embed them
              inside custom-built portfolio pages with case study narratives.
              That combination of analytical thinking and technical execution is
              rare, and it shows in my work.
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
                  Professional Certificate · Completed (9/9)
                </div>
              </div>
            </div>
            <div className="cert-item">
              <span className="cert-emoji">🎓</span>
              <div>
                <div className="cert-title">Microsoft Certified</div>
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