const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <p>© {new Date().getFullYear()} Youssef Elshamy. Business Analyst, Cairo.</p>
        <ul>
          <li>
            <a
              href="https://x.com/yosif_elshamy"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/yosifmmdo7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
