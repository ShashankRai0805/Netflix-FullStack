import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from '../../firebase';

const Navbar = ({ setSearchQuery }) => {
  const [searchInput, setSearchInput] = useState('');
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput.trim());
  };

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="navbar-right">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for movies"
            className="search-input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit" style={{ display: 'none' }}></button> {/* Allows Enter key to submit */}
        </form>

        <img src={search_icon} alt="Search" className="icons" onClick={handleSearch} />
        <p>Children</p>
        <img src={bell_icon} alt="Notifications" className="icons" />

        <div className="navbar-profile">
          <img src={profile_img} alt="Profile" className="profile" />
          <img src={caret_icon} alt="Caret" />
          <div className="dropdown">
            <p onClick={() => logout()}>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
