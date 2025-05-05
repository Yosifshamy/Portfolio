const Contact = () => {
  return (
    <>
      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Get in touch</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="info-wrap" data-aos="fade-up" data-aos-delay={200}>
            <div className="row gy-5">
              <div className="col-lg-4">
                <div className="info-item d-flex align-items-center">
                  <i className="bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h3>Address</h3>
                    <p>Nasr City , Cairo , Egypt</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="info-item d-flex align-items-center">
                  <i className="bi bi-telephone flex-shrink-0" />
                  <div>
                    <h3>Call</h3>
                    <p>+201155119930</p>
                  </div>
                </div>
              </div>
              {/* End Info Item */}
              <div className="col-lg-4">
                <div className="info-item d-flex align-items-center">
                  <i className="bi bi-envelope flex-shrink-0" />
                  <div>
                    <h3>Email</h3>
                    <p>yosifshamy716@gmail.com</p>
                  </div>
                </div>
              </div>
              {/* End Info Item */}
            </div>
          </div>
          <form
            action="forms/contact.php"
            method="post"
            className="php-email-form"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="row gy-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-md-6 ">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="col-md-12">
                <textarea
                  className="form-control"
                  name="message"
                  rows={6}
                  placeholder="Message"
                  required
                  defaultValue={""}
                />
              </div>
              <div className="col-md-12 text-center">
                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
          {/* End Contact Form */}
        </div>
      </section>
    </>
  );
};

export default Contact;
