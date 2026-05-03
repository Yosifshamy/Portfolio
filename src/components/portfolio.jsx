import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Portfolio = () => {
  const mernProjects = [
    {
      id: 1,
      name: "Tripolar",
      description: "Event Management Website",
      category: "MERN Stack",
      date: "15 October, 2025",
      images: [
        "./assets/img/tripolar-1.png",
        "./assets/img/tripolar-2.png",
        "./assets/img/tripolar-3.png",
        "./assets/img/tripolar-4.png",
        "./assets/img/tripolar-5.png",
        "./assets/img/tripolar-6.png",
      ],
      live: "https://tripolar.netlify.app/",
    },
    {
      id: 2,
      name: "CineMirage",
      description: "Movie Recommendation App",
      category: "MERN Stack",
      date: "16 May, 2025",
      images: [
        "./assets/img/CineMirage-1.png",
        "./assets/img/CineMirage-2.png",
        "./assets/img/CineMirage-3.png",
      ],
      live: "https://mahmoudsaad1307.github.io/DEPI-MoviesApp/",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="section-title-block reveal">
        <span className="section-num">02</span>
        <h2>Projects</h2>
      </div>

      {/* ── ANALYTICS PROJECTS ── */}
      <div className="projects-grid">

        {/* Project 001 - Amazon India — FEATURED */}
        <div className="project-card featured reveal">
          <div>
            <div className="project-num">001 · FEATURED PROJECT</div>
            <h3 className="project-title">
              Amazon India Fashion Sales Analysis
            </h3>
            <p className="project-desc">
              End-to-end analysis of 128,976 orders from a real Indian fashion
              e-commerce brand. Cleaned raw data in Excel, wrote 5 optimized
              SQL queries in MySQL, and built an interactive 5-page Tableau
              dashboard — revealing ₹7Cr+ in revenue patterns across products,
              states, and cancellation trends.
            </p>
            <div className="project-tags">
              <span className="tag">Excel</span>
              <span className="tag">MySQL</span>
              <span className="tag">Tableau</span>
              <span className="tag">E-commerce</span>
              <span className="tag">128K rows</span>
            </div>
            <a
              href="https://public.tableau.com/views/AmazonIndiaFashionSalesAnalysis/AmazonSalesDashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View live dashboard →
            </a>
          </div>
          <div className="project-findings">
            <div className="finding">
              <div className="finding-num">INSIGHT 01</div>
              <p>
                Sets dominate revenue at ₹3.5Cr with the highest avg order
                value of ₹854 — nearly double Kurtas
              </p>
            </div>
            <div className="finding">
              <div className="finding-num">INSIGHT 02</div>
              <p>
                Maharashtra, Karnataka &amp; Telangana account for ~40% of
                total revenue — prime markets for focused investment
              </p>
            </div>
            <div className="finding">
              <div className="finding-num">INSIGHT 03</div>
              <p>
                14% cancellation rate across all categories signals a systemic
                sizing or delivery issue worth investigating
              </p>
            </div>
          </div>
        </div>

        {/* Project 002 - Fitbit */}
        <div className="project-card reveal">
          <div className="project-num">002 · COMPLETED PROJECT</div>
          <h3 className="project-title">
            Fitbit Health &amp; Fitness Trends Analysis
          </h3>
          <p className="project-desc">
            Python EDA on 940 daily activity and 410 sleep records from 30
            Fitbit users. Cleaned data, engineered features, and produced 6
            charts uncovering activity patterns, sleep behavior, and step goal
            achievement — with actionable recommendations for fitness app
            product decisions.
          </p>
          <div className="project-tags">
            <span className="tag">Python</span>
            <span className="tag">Pandas</span>
            <span className="tag">Seaborn</span>
            <span className="tag">Jupyter</span>
            <span className="tag">940 rows</span>
          </div>
          <div className="project-findings-sm">
            <div className="finding-sm">
              Only <strong>32.2%</strong> of days users hit the 10K step goal
            </div>
            <div className="finding-sm">
              Users spend <strong>81.3%</strong> of their day sedentary
            </div>
            <div className="finding-sm">
              Sedentary time &amp; sleep: strong <strong>-0.60</strong>{" "}
              correlation
            </div>
          </div>
          <a
            href="https://github.com/Yosifshamy/fitbit-fitness-analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub →
          </a>
        </div>

        {/* Project 003 - Telecom Churn */}
        <div className="project-card reveal">
          <div className="project-num">003 · COMPLETED PROJECT</div>
          <h3 className="project-title">
            Telecom Customer Churn Analysis
          </h3>
          <p className="project-desc">
            End-to-end Power BI dashboard analyzing 7K+ telecom customer
            records. Cleaned and transformed data in Power Query, built core
            DAX measures for churn KPIs, and designed an interactive report
            surfacing the highest-risk customer segments and the leading drivers
            behind churn.
          </p>
          <div className="project-tags">
            <span className="tag">Power BI</span>
            <span className="tag">DAX</span>
            <span className="tag">Power Query</span>
            <span className="tag">Churn Analysis</span>
            <span className="tag">7K rows</span>
          </div>
          <div className="project-findings-sm">
            <div className="finding-sm">
              Churn rate tracked via{" "}
              <strong>Churned Customers / Total Customers</strong>
            </div>
            <div className="finding-sm">
              Highlighted high-risk segments by <strong>Contract</strong> and{" "}
              <strong>Tenure Band</strong>
            </div>
            <div className="finding-sm">
              Exposed top churn drivers: <strong>Price</strong> and{" "}
              <strong>Competitor</strong>
            </div>
          </div>
          <a
            href="https://github.com/Yosifshamy/Telecom-Customer-Churn-PowerBI"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub →
          </a>
        </div>
      </div>

      {/* ── MERN PROJECTS ── */}
      <div className="mern-section reveal">
        <div className="mern-label">Previous work · Full Stack Development</div>
        <div className="mern-grid">
          {mernProjects.map((project) => (
            <div
              key={project.id}
              className="mern-card"
              onClick={() => openModal(project)}
            >
              <img src={project.images[0]} alt={project.name} />
              <div className="mern-overlay">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MODAL ── */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="bi bi-x" />
            </button>
            <div className="modal-body">
              <div className="row justify-content-between gy-4">
                <div className="col-lg-8">
                  <Carousel className="portfolio-details-slider">
                    {selectedProject.images.map((img, i) => (
                      <Carousel.Item key={i} interval={3000}>
                        <img
                          src={img}
                          alt={`${selectedProject.name} ${i + 1}`}
                          className="d-block w-100"
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <div className="mt-4">
                    <h2 className="modal-project-title">
                      {selectedProject.name}
                    </h2>
                    <p className="modal-project-desc">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="portfolio-info">
                    <h3>Project info</h3>
                    <ul>
                      <li>
                        <strong>Category</strong>
                        {selectedProject.category}
                      </li>
                      <li>
                        <strong>Date</strong>
                        {selectedProject.date}
                      </li>
                      <li>
                        <strong>Live demo</strong>
                        <a
                          href={selectedProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open project →
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;