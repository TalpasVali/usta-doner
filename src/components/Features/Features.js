import React from "react";
const features = [
  { icon: "⏱️", title: "Rapid și Eficient", desc: "Shaorma gata în 5 minute" },
  {
    icon: "🥗",
    title: "Ingrediente Premium",
    desc: "Carne și legume proaspete",
  },
  {
    icon: "🚚",
    title: "Livrare Rapidă",
    desc: "Direct la ușă în cel mai scurt timp",
  },
];
export default function Features() {
  return (
    <section className="features">
      {features.map((f, i) => (
        <div key={i} className="feature-card">
          <div className="feature-card__icon">{f.icon}</div>
          <h3 className="feature-card__title">{f.title}</h3>
          <p className="feature-card__desc">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
