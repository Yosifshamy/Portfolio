import { useEffect } from "react";

const NavBar = () => {
  useEffect(() => {
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

    function mobileNavToggle() {
      document.querySelector("body").classList.toggle("mobile-nav-active");
      mobileNavToggleBtn.classList.toggle("bi-list");
      mobileNavToggleBtn.classList.toggle("bi-x");
    }

    mobileNavToggleBtn.addEventListener("click", mobileNavToggle);

    document.querySelectorAll("#navmenu a").forEach((link) => {
      link.addEventListener("click", () => {
        if (document.querySelector(".mobile-nav-active")) mobileNavToggle();
      });
    });

    return () => {
      mobileNavToggleBtn.removeEventListener("click", mobileNavToggle);
    };
  }, []);

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="#home" className="logo d-flex align-items-center text-decoration-none">
          <h1 className="sitename">
            youssef<span>.</span>elshamy
          </h1>
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#resume">Approach</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </div>
    </header>
  );
};

export default NavBar;