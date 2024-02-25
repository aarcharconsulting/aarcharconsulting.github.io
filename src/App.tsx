import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";
import NavigationMenu from "./components/NavigationMenu";
import "./App.css";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    console.log('**',process.env.PUBLIC_URL)
    const handleResize = () => {
      setIsMenuOpen(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="flex flex-col min-h-screen">
        <header className="bg-white text-gray-800 p-4 fixed w-full flex justify-between items-center z-10">
          <div className="flex items-center">
            <img  alt="Aarchar Consulting"
              className="h-8 w-auto md:h-20" src={`${process.env.PUBLIC_URL}/images/aarchar.png`} />
          </div>
          <div className="relative">
            <div
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </div>

            <NavigationMenu
              handleLinkClick={handleLinkClick}
              isMenuOpen={isMenuOpen}
            />
          </div>
        </header>
        <main className="pt-28 md:pt-28 sm:pt-32 md: px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </main>
        <footer className="bg-slate-900 text-white p-4 text-center mt-auto">
          <span>{`© ${new Date().getFullYear()} Aarchar consulting. All rights reserved.`}</span>
        </footer>
      </div>
    </Router>
  );
};

export default App;
