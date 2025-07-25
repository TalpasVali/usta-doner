import React, { useState } from "react";
import { contactInfo } from "../../data/mockData";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Contactează-ne</h2>
          <p className="contact-subtitle">Suntem aici pentru tine!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <span>📍</span>
              </div>
              <div className="info-details">
                <h3>Adresa</h3>
                <p>{contactInfo.address}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <span>📞</span>
              </div>
              <div className="info-details">
                <h3>Telefon</h3>
                <p>{contactInfo.phone}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <span>📧</span>
              </div>
              <div className="info-details">
                <h3>Email</h3>
                <p>{contactInfo.email}</p>
              </div>
            </div>

            <div className="info-card hours-card">
              <div className="info-icon">
                <span>🕐</span>
              </div>
              <div className="info-details">
                <h3>Program</h3>
                {Object.entries(contactInfo.hours).map(([days, hours]) => (
                  <div key={days} className="hours-row">
                    <span className="days">{days}:</span>
                    <span className="hours">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Nume *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Mesaj *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitted ? "submitted" : ""}`}
                disabled={isSubmitted}
              >
                <span className="btn-text">
                  {isSubmitted ? "Mesaj trimis!" : "Trimite mesajul"}
                </span>
                <div className="btn-ripple"></div>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-background">
        <div className="floating-icon icon-1">💌</div>
        <div className="floating-icon icon-2">📱</div>
        <div className="floating-icon icon-3">🏪</div>
      </div>
    </section>
  );
};

export default Contact;
