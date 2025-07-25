import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Shaorma Delicioasă</div>
      <ul className="navbar__menu">
        <li>
          <a href="#acasă">Acasă</a>
        </li>
        <li>
          <a href="#meniu">Meniu</a>
        </li>
        <li>
          <a href="#despre">Despre noi</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
