const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="portfolio section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
        </div>
        <div className="container">
          <div
            className="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            <div
              className="row gy-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="col-lg-6 col-md-8 portfolio-item isotope-item filter-app">
                <img
                  src="./assets/img/medicio-1.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Medicio</h4>
                  <p>Medical Website Project</p>
                  <a
                    href="/medicio"
                    target="_blank"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
              {/* End Portfolio Item */}
              <div className="col-lg-6 col-md-8 portfolio-item isotope-item filter-product">
                <img
                  src="./assets/img/yummy-1.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Yummy</h4>
                  <p>Restaurant Project</p>
                  <a
                    href="/yummy"
                    target="_blank"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
              {/* End Portfolio Item */}
              <div className="col-lg-6 col-md-8 portfolio-item isotope-item filter-branding">
                <img
                  src="./assets/img/dashboard-1.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Dashboard</h4>
                  <p>Dashboard Project</p>
                  <a
                    href="/dashboard"
                    target="_blank"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
              {/* End Portfolio Item */}
              <div className="col-lg-6 col-md-8 portfolio-item isotope-item filter-books">
                <img
                  src="./assets/img/estate-1.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>EstateAgency</h4>
                  <p>EstateAgency Project</p>
                  <a
                    href="/estateagency"
                    target="_blank"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
              {/* End Portfolio Item */}
            </div>
            {/* End Portfolio Container */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
