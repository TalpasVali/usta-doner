import React, { useEffect, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const shaormaRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (shaormaRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const x = (clientX / innerWidth) * 20 - 10;
        const y = (clientY / innerHeight) * 20 - 10;

        shaormaRef.current.style.transform = `
          translateX(${x}px) 
          translateY(${y}px) 
          rotateY(${x * 2}deg) 
          rotateX(${-y}deg)
        `;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Trigger text animation
    if (textRef.current) {
      const text = "#shaorma din altă ligă!";
      const textElement = textRef.current;
      textElement.innerHTML = "";

      [...text].forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.animationDelay = `${index * 0.1}s`;
        span.className = "char-animate";
        textElement.appendChild(span);
      });
    }
  }, []);

  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="parallax-layer layer-1"></div>
        <div className="parallax-layer layer-2"></div>
        <div className="parallax-layer layer-3"></div>
      </div>

      <div className="floating-shaorma" ref={shaormaRef}>
        <div className="shaorma-3d">
          <img
            src="https://images.unsplash.com/photo-1662116765994-1e4200c43589"
            alt="Shaorma 3D"
            className="shaorma-image"
          />
          <div className="glow-effect"></div>
        </div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title" ref={textRef}></h1>
        <p className="hero-subtitle fade-in-up">
          Gustul autentic al Orientului în inima Timisoarei
        </p>

        <button className="cta-button pulse-button" onClick={scrollToMenu}>
          <span className="button-text">Vezi meniul</span>
          <div className="light-bubble bubble-1"></div>
          <div className="light-bubble bubble-2"></div>
          <div className="light-bubble bubble-3"></div>
          <div className="light-bubble bubble-4"></div>
        </button>
      </div>

      <div className="floating-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>
    </section>
  );
};

export default Hero;
