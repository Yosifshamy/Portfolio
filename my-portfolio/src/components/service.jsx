const Service = () => {
  return (
    <>
      <section id="services" className="services section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="service-item  position-relative">
                <div className="icon">
                  <i className="bi bi-file" />
                </div>
                <h3>Landing Page</h3>
                <p>A responsive landing page to your business.</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-building" />
                </div>
                <h3>E-commerce</h3>
                <p>
                  a responsive e-commerce platform that you can list your
                  products in.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-brush" />
                </div>
                <h3>Website Redesign</h3>
                <p>
                  Redesigning to your exicting website and make it look better
                  and responsive.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-camera" />
                </div>
                <h3>Portfolio</h3>
                <p>
                  A portfolio website to make the people(clients) see the skills
                  you have and how talent are you.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-code-slash" />
                </div>
                <h3>Website Development</h3>
                <p>
                  Develope and improve your exciting website to meet your
                  expectations.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-cup-hot" />
                </div>
                <h3>Restaurant</h3>
                <p>
                  A website for your restaurant or cafe to make customers feel
                  more comfortable and to increase your profit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
