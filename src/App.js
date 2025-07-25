import React, { useState, useEffect } from "react";

import Loader from "./components/loader";
import Header from "./components/Header";
import Gallery from "./components/gallery";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="home-container">
      <Loader isLoading={isLoading} />

      {!isLoading && (
        <>
          <Header />
          <main className="main-content">
            <Hero />
            <Menu />
            <About />
            <Gallery />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
