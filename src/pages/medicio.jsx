import "../App.css";
import Carousel from "react-bootstrap/Carousel";
import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
const Medicio = () => {
  AOS.init({
    duration: 600,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
  return (
    <>
      <NavBar />
      <div className="page-title" data-aos="fade">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Medicio</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="current">Medicio</li>
            </ol>
          </nav>
        </div>
      </div>
      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos="fade-up">
          <Carousel className="portfolio-details-slider swiper init-swiper">
            <Carousel.Item interval={1500} className="swiper-slide">
              <img src="./assets/img/medicio-1.png" alt="" />
            </Carousel.Item>
            <Carousel.Item interval={1500} className="swiper-slide">
              <img src="./assets/img/medicio-2.png" alt="" />
            </Carousel.Item>
            <Carousel.Item interval={1500} className="swiper-slide">
              <img src="./assets/img/medicio-3.png" alt="" />
            </Carousel.Item>
            <Carousel.Item interval={1500} className="swiper-slide">
              <img src="./assets/img/medicio-4.png" alt="" />
            </Carousel.Item>
          </Carousel>
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8" data-aos="fade-up">
              <div className="portfolio-description">
                <h2>Medicio</h2>
              </div>
            </div>
            <div className="col-lg-3" data-aos="fade-up" data-aos-delay={100}>
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong> Web design
                  </li>
                  <li>
                    <strong>Project date</strong> 01 March, 2023
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Medicio;
