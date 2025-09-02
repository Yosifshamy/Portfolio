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
                    I am a MERN Stack Web Developer with proven experience in
                    designing, developing, and deploying full-stack web
                    applications using React.js, Node.js, Express.js, and
                    MongoDB. Skilled in building responsive UIs, implementing
                    RESTful APIs, and managing authentication, data security,
                    and API integration. Adept at applying Agile methodologies,
                    version control with Git/GitHub, and deploying applications
                    to cloud platforms. Strong problem-solving and collaboration
                    skills, with a track record of delivering high- performance,
                    user-friendly solutions on time.
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
                <h4>business information systems</h4>
                <h5>2021 - 2025</h5>
                <p>
                  <em>Modern Academy</em>
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Web Development</h4>
                <h5>2023 - Present</h5>
                <p>
                  <em>Freelancing</em>
                </p>
                <ul>
                  <li>
                    Delivered 10+ responsive websites and web apps for diverse
                    industries using React, Node.js, and MongoDB.
                  </li>
                  <li>
                    Designed and deployed optimized landing pages, reducing load
                    times by 30%.
                  </li>
                  <li>
                    Built user interfaces tailored to different target
                    audiences, increasing engagement and usability.
                  </li>
                  <li>
                    Managed multiple projects simultaneously, meeting tight
                    deadlines without compromising quality.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Digital Banking Intern</h4>
                <h5>Jul 2022 - Aug 2022</h5>
                <p>
                  <em>Export Development Bank of Egypt (EBank)</em>
                </p>
                <ul>
                  <li>
                    Assisted in developing and testing banking web modules.
                  </li>
                  <li>
                    Learned and applied secure development practices in a
                    professional environment.
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
