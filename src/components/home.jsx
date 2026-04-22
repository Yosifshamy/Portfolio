import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Data Analyst", "Insight Storyteller", "Full Stack Developer"],
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
          Data
          <br />
          <em>Analyst</em>
          <br />
          &amp; Developer
        </h1>
        <div className="hero-typed-wrap">
          <span ref={typedRef} />
        </div>
        <p className="hero-desc">
          I turn raw, messy data into <strong>clear business decisions</strong>.
          With a background in MERN stack development, I build analytics
          experiences that most analysts simply can't.
        </p>
        <div className="hero-cta">
          <a href="#portfolio" className="btn-primary-custom">
            View my work →
          </a>
          <a
            href="https://drive.google.com/file/d/1CDWBJA9TVZrR2eQfrYKwJqn9JA-XGHQF/view?usp=drive_link"
            className="btn-primary-custom"
            target="_blank"
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
            <div className="stat-num">128K</div>
            <div className="stat-label">rows analyzed</div>
          </div>
          <div className="stat-card dark">
            <div className="stat-num cert">Microsoft Certified</div>
            <div className="stat-label">In progress</div>
          </div>
        </div>
        <div className="stat-row">
          <div className="stat-card">
            <div className="stat-num">6</div>
            <div className="stat-label">tools mastered</div>
          </div>
          <div className="stat-card dark">
            <div className="stat-num cert">Google Certified</div>
            <div className="stat-label">
              <a
                className="stat-label"
                href="https://drive.google.com/file/d/1UGjq_Sf2Bgsu3ML5_znR-EddaeTYBpOf/view?usp=drive_link"
                target="_blank"
              >
                Preview →
              </a>
            </div>
          </div>
        </div>
        <div className="tools-card">
          <div className="tools-title">Current stack</div>
          <div className="tools-list">
            <span className="tool-chip hi">Python</span>
            <span className="tool-chip hi">SQL / MySQL</span>
            <span className="tool-chip hi">Tableau</span>
            <span className="tool-chip hi">Excel</span>
            <span className="tool-chip hi">Pandas</span>
            <span className="tool-chip hi">Power BI</span>
            <span className="tool-chip">React</span>
            <span className="tool-chip">Node.js</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
