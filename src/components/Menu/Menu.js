import React, { useState, useEffect, useRef } from "react";
import { menuItems, categories } from "../../data/mockData";
import "./Menu.css";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Toate");
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [visibleItems, setVisibleItems] = useState([]);
  const menuRef = useRef(null);

  useEffect(() => {
    if (selectedCategory === "Toate") {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(
        menuItems.filter((item) => item.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  useEffect(() => {
    setVisibleItems([]);
    filteredItems.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, index]);
      }, index * 200);
    });
  }, [filteredItems]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section id="menu" className="menu-section" ref={menuRef}>
      <div className="menu-container">
        <div className="menu-header">
          <h2 className="menu-title">Meniul Nostru</h2>
          <p className="menu-subtitle">
            Savurează gusturile autentice ale Orientului
          </p>
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
              <div className="category-underline"></div>
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`menu-card ${
                visibleItems.includes(index) ? "visible" : ""
              } ${index % 2 === 0 ? "fly-from-left" : "fly-from-right"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-image-container">
                <img src={item.image} alt={item.name} className="card-image" />
                <div className="image-overlay">
                  <div className="price-badge">{item.price}</div>
                </div>
              </div>

              <div className="card-content">
                <h3 className="card-title">{item.name}</h3>
                <p className="card-description">{item.description}</p>
                <div className="card-footer">
                  <span className="card-category">{item.category}</span>
                </div>
              </div>

              <div className="card-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="floating-ingredients">
        <div className="ingredient ingredient-1">🌶️</div>
        <div className="ingredient ingredient-2">🧄</div>
        <div className="ingredient ingredient-3">🌿</div>
        <div className="ingredient ingredient-4">🧅</div>
      </div>
    </section>
  );
};

export default Menu;
