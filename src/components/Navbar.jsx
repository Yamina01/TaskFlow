import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // closes mobile menu
  };

  return (
    <nav className="navbar">
      <h2 className="logo">TaskFlow</h2>

      {/* Desktop Links */}
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#cta" className="nav-btn desktop-btn">Get Started</a></li>
      </ul>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <p onClick={handleLinkClick}><a href="#hero">Home</a></p>
          <p onClick={handleLinkClick}><a href="#features">Features</a></p>
          <p onClick={handleLinkClick}><a href="#how-it-works">How It Works</a></p>
          <p onClick={handleLinkClick}><a href="#pricing">Pricing</a></p>
          <p onClick={handleLinkClick}><a href="#testimonials">Testimonials</a></p>
          <p onClick={handleLinkClick}><a href="#cta">Get Started</a></p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

