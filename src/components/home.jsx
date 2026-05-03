import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Data Analyst", "Business Analyst", "Insight Storyteller"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 40,
      backDelay: 3000,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="hero section">
      {/* LEFT */}
      <div className="hero-left">
        <p className="hero-tag">Available for opportunities · Cairo, Egypt</p>
        <h1 className="hero-name">
          Youssef
          <br />
          <em>Elshamy</em>
        </h1>
        <div className="hero-typed-wrap">
          <span ref={typedRef} />
        </div>
        <p className="hero-desc">
          I turn raw, messy data into <strong>clear business decisions</strong>.
          With a background in web development, I build analytics experiences
          that most analysts simply can't.
        </p>
        <div className="hero-cta">
          <a href="#portfolio" className="btn-primary-custom">
            View my work →
          </a>
          <a
            href="https://drive.google.com/file/d/1CDWBJA9TVZrR2eQfrYKwJqn9JA-XGHQF/view?usp=drive_link"
            className="btn-primary-custom"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my CV →
          </a>
          <a href="#contact" className="btn-outline-custom">
            Get in touch
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <div className="stat-row">
          <div className="stat-card">
            <div className="stat-num cert">135K+</div>
            <div className="stat-label">rows analyzed</div>
          </div>
          <div className="stat-card dark">
            <div className="stat-num cert">Microsoft Certified</div>
            <div className="stat-label">In progress · PL-300</div>
          </div>
        </div>
        <div className="stat-row">
          <div className="stat-card">
            <div className="stat-num cert">3</div>
            <div className="stat-label">end-to-end projects</div>
          </div>
          <div className="stat-card dark">
            <div className="stat-num cert">Google Certified</div>
            <div className="stat-label">
              <a
                className="stat-label"
                href="https://drive.google.com/file/d/1UGjq_Sf2Bgsu3ML5_znR-EddaeTYBpOf/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview →
              </a>
            </div>
          </div>
        </div>
        <div className="tools-card">
          <div className="tools-title">Analytics stack</div>
          <div className="tools-list">
            <span className="tool-chip hi">SQL / MySQL</span>
            <span className="tool-chip hi">Tableau</span>
            <span className="tool-chip hi">Power BI</span>
            <span className="tool-chip hi">Python</span>
            <span className="tool-chip hi">Pandas</span>
            <span className="tool-chip hi">Excel</span>
            <span className="tool-chip hi">Data-driven decision-making</span>
            <span className="tool-chip hi">Data Visualization</span>
            <span className="tool-chip hi">Data Cleaning</span>
            <span className="tool-chip">Web Development</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;