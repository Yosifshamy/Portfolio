import "./App.css";
import NavBar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Resume from "./components/resume.jsx";
import Portfolio from "./components/portfolio.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";
import Button from "./components/button.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Scroll reveal
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));

    // Skill bar animation
    const skillBars = document.querySelectorAll(".skill-bar-fill");
    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            barObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    skillBars.forEach((bar) => barObserver.observe(bar));

    return () => {
      observer.disconnect();
      barObserver.disconnect();
    };
  }, []);

  return (
    <>
      <main>
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <Button />
    </>
  );
}

export default App;