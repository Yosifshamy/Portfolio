import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useEffect } from 'react';

const NavBar = () => {

  useEffect(() => {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    function mobileNavToggle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }

    mobileNavToggleBtn.addEventListener('click', mobileNavToggle);

    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToggle();
        }
      });
    });

    function toggleScrolled() {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader) return;
      if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    return () => {
      mobileNavToggleBtn.removeEventListener('click', mobileNavToggle);
      document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.removeEventListener('click', () => {
          if (document.querySelector('.mobile-nav-active')) {
            mobileNavToggle();
          }
        });
      });
      document.removeEventListener('scroll', toggleScrolled);
      window.removeEventListener('load', toggleScrolled);
    };
  }, []);

  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center sticky-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <Navbar.Brand href="/" className="logo d-flex align-items-center">
            <h1 className="sitename">YOUSSEF</h1>
          </Navbar.Brand>
          <Nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Nav.Link href="/#home">Home</Nav.Link>
              </li>
              <li>
                <Nav.Link href="/#about">About</Nav.Link>
              </li>
              <li>
                <Nav.Link href="/#services">Services</Nav.Link>
              </li>
              <li>
                <Nav.Link href="/#portfolio">Portfolio</Nav.Link>
              </li>
              <li>
                <Nav.Link href="/#contact">Contact</Nav.Link>
              </li>
            </ul>
          </Nav>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </div>
      </header>
    </>
  );
};
export default NavBar;
