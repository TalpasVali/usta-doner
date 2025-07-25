import React from "react";
const testimonials = [
  { name: "Alexandru M.", stars: 5, text: "Cea mai bună shaorma din oraș!" },
  { name: "Maria P.", stars: 5, text: "Livrare rapidă și mâncare caldă." },
  { name: "Radu I.", stars: 5, text: "Porții generoase și personal amabil." },
];
export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials__title">Ce Spun Clienții</h2>
      <div className="testimonials-list">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <h4 className="testimonial-card__name">{t.name}</h4>
            <div className="testimonial-card__stars">{"★".repeat(t.stars)}</div>
            <p className="testimonial-card__text">"{t.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
