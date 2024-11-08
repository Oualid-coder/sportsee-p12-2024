import React from 'react';
import { Link } from 'react-router-dom';
import logo from './icons/logo-sportsee.png';
import './Navbar.css';

const Navbar = ({ onProfileClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="sport-see logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Accueil</Link></li>
        {/* Appelle la fonction onProfileClick lors du clic sur Profil */}
        <li>  <button onClick={onProfileClick} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
    Profil
  </button></li>
        <li><Link to="/settings">Réglage</Link></li>
        <li><Link to="/community">Communauté</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
