import React from "react";
import "./loader.css";

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="pita-loader">
          <div className="pita-base"></div>
          <div className="burning-effect"></div>
          <div className="burning-effect burning-2"></div>
          <div className="burning-effect burning-3"></div>
        </div>
        <p className="loader-text">Se încarcă...</p>
      </div>
    </div>
  );
};

export default Loader;
