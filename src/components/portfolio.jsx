import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "Famdo",
      description: "To-do List Website Project",
      category: "MERN Stack Project",
      date: "23 August, 2023",
      images: [
        "./assets/img/Famdo-1.png",
        "./assets/img/Famdo-2.png",
        "./assets/img/Famdo-3.png",
        "./assets/img/Famdo-4.png",
      ],
      live: "https://famdo.netlify.app/",
    },
    {
      id: 2,
      name: "CineMirage",
      description: "Movie Recommendation Project",
      category: "Mern Stack Project",
      date: "16 May, 2025",
      images: [
        "./assets/img/CineMirage-1.png",
        "./assets/img/CineMirage-2.png",
        "./assets/img/CineMirage-3.png",
      ],
      live: "https://mahmoudsaad1307.github.io/DEPI-MoviesApp/",
    },
    {
      id: 3,
      name: "halweyat-mama",
      description: "Dashboard Project",
      category: "Web design",
      date: "09 April, 2023",
      images: [
        "./assets/img/halweyat-mama-1.png",
        "./assets/img/halweyat-mama-2.png",
        "./assets/img/halweyat-mama-3.png",
      ],
      live: "https://halweyat-mama.netlify.app/",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="portfolio" className="portfolio section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
        </div>
        <div className="container">
          {/* Portfolio Grid */}
          <div className="row gy-4" data-aos="fade-up" data-aos-delay={200}>
            {projects.map((project) => (
              <div
                key={project.id}
                className="col-lg-6 col-md-6 portfolio-item"
              >
                <div
                  className="portfolio-card"
                  onClick={() => openModal(project)}
                >
                  <img
                    src={project.images[0]}
                    className="img-fluid"
                    alt={project.name}
                  />
                  <div className="portfolio-overlay">
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <i className="bi bi-x"></i>
              </button>

              <div className="modal-body">
                <div className="row justify-content-between gy-4">
                  <div className="col-lg-8">
                    <Carousel className="portfolio-details-slider">
                      {selectedProject.images.map((image, index) => (
                        <Carousel.Item key={index} interval={3000}>
                          <img
                            src={image}
                            alt={`${selectedProject.name} ${index + 1}`}
                            className="d-block w-100"
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                    <div className="portfolio-description mt-4">
                      <h2>{selectedProject.name}</h2>
                      <p>{selectedProject.description}</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="portfolio-info">
                      <h3>Project Information</h3>
                      <ul>
                        <li>
                          <strong>Category:</strong> {selectedProject.category}
                        </li>
                        <li>
                          <strong>Project Date:</strong> {selectedProject.date}
                        </li>
                        <li>
                          <strong>Project Name:</strong> {selectedProject.name}
                        </li>
                        <li>
                          <strong>Live Demo:</strong>{" "}
                          <a
                            href={selectedProject.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Click here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Portfolio;
