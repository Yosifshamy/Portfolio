const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="contact__inner reveal">
        <h2>Got a business problem that needs untangling?</h2>
        <p>
          Whether it is a role, a project or a question about my work, email is
          the fastest way to reach me.
        </p>

        <a className="contact__email" href="mailto:yosifshamy716@gmail.com">
          yosifshamy716@gmail.com
        </a>

        <ul className="contact__links">
          <li>
            <a
              href="https://www.linkedin.com/in/youssef-elshamy-135906276/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://public.tableau.com/app/profile/youssef.elshamy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tableau Public
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Yosifshamy"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="tel:+201155119930">+20 115 511 9930</a>
          </li>
        </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
