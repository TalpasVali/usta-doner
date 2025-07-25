import React, { useEffect, useRef, useState } from "react";
import { galleryImages } from "../../data/mockData";
import "./gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const createParticles = (e, imageElement) => {
    const rect = imageElement.getBoundingClientRect();
    const particleCount = 6;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "spice-particle";
      particle.textContent = ["🌶️", "🧄", "🌿", "✨", "⭐", "🔥"][
        Math.floor(Math.random() * 6)
      ];

      particle.style.left = `${rect.left + Math.random() * rect.width}px`;
      particle.style.top = `${rect.top + Math.random() * rect.height}px`;
      particle.style.animationDelay = `${i * 0.1}s`;

      document.body.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 2000);
    }
  };

  return (
    <section id="gallery" className="gallery-section" ref={galleryRef}>
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">Galeria Noastră</h2>
          <p className="gallery-subtitle">
            Momentele delicioase ale preparatelor noastre
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleImageClick(image)}
              onMouseEnter={(e) => createParticles(e, e.currentTarget)}
            >
              <div className="image-container">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="gallery-image"
                />
                <div className="image-hover-overlay">
                  <div className="zoom-icon">
                    <span>👁️</span>
                  </div>
                  <div className="image-title">{image.alt}</div>
                </div>
              </div>
              <div className="image-border-glow"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              ×
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="modal-image"
            />
            <div className="modal-caption">
              <h3>{selectedImage.alt}</h3>
            </div>
          </div>
        </div>
      )}

      <div className="gallery-background">
        <div className="floating-utensil utensil-1">🍴</div>
        <div className="floating-utensil utensil-2">🥄</div>
        <div className="floating-utensil utensil-3">🔪</div>
      </div>
    </section>
  );
};

export default Gallery;
