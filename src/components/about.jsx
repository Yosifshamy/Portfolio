const About = () => {
  const skills = [
    { name: "HTML", icon: "./assets/img/html-5.png" },
    { name: "CSS", icon: "./assets/img/css-3.png" },
    { name: "JavaScript", icon: "./assets/img/js.png" },
    { name: "Bootstrap", icon: "./assets/img/bootstrap.png" },
    { name: "React", icon: "./assets/img/react.png" },
    { name: "Node.js", icon: "./assets/img/node.png" },
    { name: "Express", icon: "./assets/img/express-js.png" },
    { name: "Git", icon: "./assets/img/git.png" },
    { name: "GitHub", icon: "./assets/img/github.png" },
    { name: "MongoDB", icon: "./assets/img/mongo-db.png" },
    { name: "Redux Toolkit", icon: "./assets/img/redux.png" },
    { name: "Postman", icon: "./assets/img/postman.png" },
  ];

  return (
    <>
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="about-me ">
            <h4>Skills</h4>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="skill-icon">
                    <img src={skill.icon} alt="" />
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
