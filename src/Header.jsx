import React, { useState } from 'react';
import './App.css';

function Header({ onItemClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleItemClick = (item) => {
    onItemClick(item);
    setMenuOpen(false); // Menü öğesine tıklandığında menüyü kapat
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-menu" onClick={toggleMenu}>
            <img height="75px" src="https://i.pinimg.com/originals/d1/88/e9/d188e91653de9eee60cbcd63bc37c2ba.jpg" alt="Logo" className="logo-image-small" />
            <div className={menuOpen ? "menu-toggle open" : "menu-toggle"}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <nav className={menuOpen ? "navbar open" : "navbar"}>
            <ul className="nav-links">
              <li onClick={() => handleItemClick("Hakkımda")}>Hakkımda</li>
              <li onClick={() => handleItemClick("Galeri")}>Galeri</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
