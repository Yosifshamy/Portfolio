const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="section-title-block">
        <span className="section-num">04</span>
        <h2>Let's work together</h2>
      </div>

      <p className="contact-sub">
        I'm actively looking for data analyst roles and freelance projects. If
        you have data that needs making sense of, let's talk.
      </p>

      <div className="contact-links">
        <a href="mailto:yosifshamy716@gmail.com" className="contact-link">
          ✉ yosifshamy716@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/youssef-elshamy-135906276/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          in LinkedIn
        </a>
        <a
          href="https://github.com/Yosifshamy"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          ⌥ GitHub
        </a>
        <a
          href="https://public.tableau.com/app/profile/youssef.elshamy"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          ◈ Tableau Public
        </a>
        <a href="tel:+201155119930" className="contact-link">
          ✆ +20 115 511 9930
        </a>
      </div>
    </section>
  );
};

export default Contact;