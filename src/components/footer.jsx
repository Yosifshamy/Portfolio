const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer accent-background">
        <div className="container">
          <div className="copyright text-center ">
            <p>
              © <span>Copyright All Rights Reserved</span>
            </p>
          </div>
          <div className="social-links d-flex justify-content-center">
            <a href="https://www.facebook.com/yosifmmdo7" target="_blank">
              <i className="bi bi-facebook" />
            </a>
            <a href="https://www.instagram.com/yosif_mmdoh/" target="_blank">
              <i className="bi bi-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/youssef-elshamy-135906276/"
              target="_blank"
            >
              <i className="bi bi-linkedin" />
            </a>
            <a href="https://github.com/Yosifshamy" target="_blank">
              <i className="bi bi-github" />
            </a>
            <a href="https://x.com/yosif_elshamy" target="_blank">
              <i className="bi bi-twitter" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
