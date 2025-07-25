import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <div className="pita-icon">
            <img
              className="pita-vibrate"
              src="/images/ustaLogo.png"
              alt="Pita Icon"
            />
          </div>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
          <button
            className="nav-link pulse-link"
            onClick={() => scrollToSection("home")}
          >
            Acasă
          </button>
          <button
            className="nav-link pulse-link"
            onClick={() => scrollToSection("menu")}
          >
            Meniu
          </button>
          <button
            className="nav-link pulse-link"
            onClick={() => scrollToSection("about")}
          >
            Despre Noi
          </button>
          <button
            className="nav-link pulse-link"
            onClick={() => scrollToSection("gallery")}
          >
            Galerie
          </button>
          <button
            className="contact-btn ripple-btn"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
