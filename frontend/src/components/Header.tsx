import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="/assets/images/logo.jpg" alt="SSSALU Logo" />
        </div>
        <nav className={isMenuOpen ? 'active' : ''}>
          <ul>
            <li><Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li className={`dropdown ${activeDropdown === 'about' ? 'active' : ''}`}>
              <a href="#" className="dropdown-toggle" onClick={(e) => { e.preventDefault(); toggleDropdown('about'); }}>About <i className="fas fa-chevron-down"></i></a>
              <ul className="dropdown-menu">
                <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
                <li><Link to="/alumni" onClick={() => setIsMenuOpen(false)}>Alumni</Link></li>
              </ul>
            </li>
            <li className={`dropdown ${activeDropdown === 'activities' ? 'active' : ''}`}>
              <a href="#" className="dropdown-toggle" onClick={(e) => { e.preventDefault(); toggleDropdown('activities'); }}>Activities <i className="fas fa-chevron-down"></i></a>
              <ul className="dropdown-menu">
                <li><Link to="/events" onClick={() => setIsMenuOpen(false)}>Events</Link></li>
                <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
                <li><Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link></li>
              </ul>
            </li>
            <li className={`dropdown ${activeDropdown === 'community' ? 'active' : ''}`}>
              <a href="#" className="dropdown-toggle" onClick={(e) => { e.preventDefault(); toggleDropdown('community'); }}>Community <i className="fas fa-chevron-down"></i></a>
              <ul className="dropdown-menu">
                <li><Link to="/news" onClick={() => setIsMenuOpen(false)}>News & Blog</Link></li>
                <li><Link to="/membership" onClick={() => setIsMenuOpen(false)}>Membership</Link></li>
              </ul>
            </li>
            <li><Link to="/contact" className={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;