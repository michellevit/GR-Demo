import React, { useState } from "react";
import "./Nav.css";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Nav = ({ shrink }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      window.location.href = `/discover?query=${encodeURIComponent(searchQuery)}`;
    }
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <header className="hero">
      <div className={`hero-actions ${shrink ? "shrink" : ""}`}>
        <div className="app-logo">
          <Link to={`discover`}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div
          className={`combobox ${isFocused ? "focused" : ""} ${
            shrink ? "shrink" : ""
          }`}
          style={{ flexGrow: 1 }}
        >
          <div className="input-group">
            <input
              type="search"
              placeholder="Search products"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <span className="icon icon-solid-search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
