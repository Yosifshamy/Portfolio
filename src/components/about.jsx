const About = () => {
  return (
    <>
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="row justify-content-between gy-4">
                <div className="col-lg-5">
                  <img
                    src="./assets/img/about.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-lg-7 about-info">
                  <p>
                    <strong>Name: </strong> <span>Youssef Elshamy</span>
                  </p>
                  <p>
                    <strong>Profile: </strong>{" "}
                    <span>Front-end React Developer</span>
                  </p>
                  <p>
                    <strong>Email: </strong>{" "}
                    <span>yosifshamy716@gmail.com</span>
                  </p>
                  <p>
                    <strong>Phone: </strong> <span>+201155119930</span>
                  </p>
                </div>
              </div>
              <div className="skills-content skills-animation">
                <h5>Skills</h5>
                <div className="progress">
                  <span className="skill">
                    <span>HTML</span> <i className="val">95%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    <span>CSS</span> <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    <span>Bootstrap</span> <i className="val">95%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    <span>Javascript</span> <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: "90%" }}>
                      {" "}
                    </div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    <span>React</span> <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" style={{ width: "90%" }}>
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-me">
                <h4>About me</h4>
                <p>
                  Hello there! I'm Youssef, an Undergraduated college student in
                  the third year in the Faculty of Business Technology (
                  Information System ). I am passionate front-end web developer
                  with a love for creating visually stunning and user-friendly
                  websites. With a strong foundation in HTML, CSS, and
                  JavaScript, I bring ideas to life by combining my technical
                  skills with a keen eye for design.
                </p>
                <p>
                  My journey in web development began with a curiosity for how
                  websites are built, and it quickly evolved into a full-fledged
                  career. Over the years, I've honed my skills and expanded my
                  toolkit to include React.js and Bootstrap, allowing me to
                  build dynamic and responsive web applications that engage
                  users across various devices.
                </p>
                <p>
                  In addition to my technical expertise, I have a strong sense
                  of aesthetics and a deep understanding of user experience
                  principles. This enables me to create intuitive interfaces
                  that not only look great but also provide seamless navigation
                  and an enjoyable user journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
