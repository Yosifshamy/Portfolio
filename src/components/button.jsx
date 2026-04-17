import { useState, useEffect } from "react";

const Button = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 200);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? "visible" : "hidden"}`}
      onClick={scrollUp}
    >
      <i className="bi bi-arrow-up-short" />
    </button>
  );
};

export default Button;