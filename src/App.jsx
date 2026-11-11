import "./App.css";
import NavBar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Experience from "./components/experience.jsx";
import Resume from "./components/resume.jsx";
import Portfolio from "./components/portfolio.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";
import Button from "./components/button.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Sections ease in once as they enter the viewport. The hidden state only
    // applies after this runs, so the page is fully readable without JS.
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("js-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#work">
        Skip to projects
      </a>
      <NavBar />
      <main>
        <Home />
        <Portfolio />
        <Experience />
        <About />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <Button />
    </>
  );
}

export default App;
