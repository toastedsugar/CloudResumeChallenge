import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavbarMenu = () => (
    <div className="nav-menu-container">
      <div className="nav-menu-side-header">Cloud Resume Challenge</div>
      <div>
        <a href="#Resume" className="nav-menu-item">
          Home
        </a>
        <a href="#about" className="nav-menu-item">
          About
        </a>
        <a href="#Blog" className="nav-menu-item">
          Contact
        </a>
      </div>
    </div>
  );

  return (
    <nav className="nav-navbar">
      <button className="nav-start-button" onClick={toggleMenu}>
        S T A R T
      </button>
      {isMenuOpen && NavbarMenu()}
    </nav>
  );
}
