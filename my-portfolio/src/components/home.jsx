import React, { useEffect, useRef } from "react";
import AOS from "aos";
import Typed from "typed.js";

const Home = () => {
  AOS.init();
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Front-End React Developer", "MERN Stack Developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section id="home" className="hero section dark-background">
        <img src="./assets/img/home.jpg" alt="" data-aos="fade-in" />
        <div
          className="container d-flex flex-column align-items-center justify-content-center text-center"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <h2>I AM YOUSSEF ELSHAMY</h2>
          <p>
            <span className="typed" ref={typedRef} />
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
