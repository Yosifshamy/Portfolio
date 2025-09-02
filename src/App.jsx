import "./App.css";
import NavBar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Resume from "./components/resume.jsx";
import Service from "./components/service.jsx";
import Portfolio from "./components/portfolio.jsx";
import Contact from "./components/contact.jsx";
import Button from "./components/button.jsx";
import Footer from "./components/footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    duration: 200,
    easing: "ease-in-out",
    once: false,
    mirror: false,
  });

  return (
    <>
      <main className="main">
        <NavBar />
        <Home />
        <About />
        <Resume />
        <Service />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <Button />
    </>
  );
}

export default App;
