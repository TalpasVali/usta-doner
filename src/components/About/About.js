import React, { useEffect, useRef, useState } from "react";
import { aboutInfo } from "../../data/mockData";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="about-container">
        <div className="about-content">
          <div className={`about-text ${isVisible ? "slide-in-left" : ""}`}>
            <h2 className="about-title">{aboutInfo.title}</h2>
            <h3 className="about-subtitle">{aboutInfo.subtitle}</h3>
            <p className="about-description">{aboutInfo.description}</p>

            <div className="features-list">
              {aboutInfo.features.map((feature, index) => (
                <div
                  key={index}
                  className={`feature-item ${isVisible ? "pop-in" : ""}`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="feature-icon">
                    <div className="check-mark"></div>
                  </div>
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`about-images ${isVisible ? "slide-in-right" : ""}`}>
            <div className="image-stack">
              <div className="main-image">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                  alt="Restaurant interior"
                  className="restaurant-image"
                />
                <div className="image-overlay">
                  <div className="experience-badge">
                    <span className="years">15+</span>
                    <span className="years-text">Ani de experiență</span>
                  </div>
                </div>
              </div>

              <div className="side-image">
                <img
                  src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0"
                  alt="Our kitchen"
                  className="kitchen-image"
                />
                <div className="floating-badge">
                  <span>100% Natural</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="background-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </section>
  );
};

export default About;
