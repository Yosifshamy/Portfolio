import { useState, useEffect } from "react";

const Button = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      <button
        className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? "visible" : "hidden"}`}
        onClick={scrollUp}
      >
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </>
  );
};

export default Button;
