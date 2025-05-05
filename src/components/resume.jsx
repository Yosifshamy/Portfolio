const Resume = () => {
  return (
    <>
      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Youssef Elshamy</h4>
                <p>
                  <em>
                    I am a passionate Front-end Web Developer that completely
                    understands that my duty is to make a responsive and
                    user-friendly websites that engage the clients and meet
                    their expectations . I also have ambition to be a MERN Stack
                    and I am currently working on because my skills will help me
                    reach this title soon.
                  </em>
                </p>
                <ul>
                  <li>Makaram Ebeid , Cairo , Egypt</li>
                  <li>+201155119930</li>
                  <li>yosifshamy716@gmail.com</li>
                </ul>
              </div>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>business technology</h4>
                <h5>2021 - 2025</h5>
                <p>
                  <em>Modern Academy</em>
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>front-end react developer</h4>
                <h5>2023 - Present</h5>
                <p>
                  <em>Freelancing</em>
                </p>
                <ul>
                  <li>
                    Managed my own schedule and workload, allowing for a healthy
                    work-life balance.
                  </li>
                  <li>
                    Worked on projects across various industries, such as
                    e-commerce, healthcare,and education.
                  </li>
                  <li>
                    Developed websites, landing pages, and web applications for
                    clients with different business models.
                  </li>
                  <li>
                    Gained experience in designing responsive and user-friendly
                    interfaces for different target audiences.
                  </li>
                  <li>
                    Actively listened to client feedback and incorporated
                    changes to ensure client satisfaction.
                  </li>
                  <li>
                    Overcame technical challenges, such as optimizing website
                    performance and resolving cross-browser compatibility
                    issues.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
