import React, { useState } from "react";
import "./Nav.css";
import logo from '../images/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ shrink }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <header className="hero">
      <div className={`hero-actions ${shrink ? 'shrink' : ''}`}>
        <div className="app-logo"><img src={logo} alt="logo" /></div>
        <div className={`combobox ${isFocused ? 'focused' : ''} ${shrink ? 'shrink' : ''}`} style={{ flexGrow: 1 }}>
          <div className="input-group">
            <input 
              type="search" 
              placeholder="Search products"
              onFocus={() => setIsFocused(true)} 
              onBlur={() => setIsFocused(false)} 
            />
            <span className="icon icon-solid-search"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
