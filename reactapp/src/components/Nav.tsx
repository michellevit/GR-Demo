import React, { useState } from "react";
import "./Nav.css";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Nav: React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false); // Specified boolean type for isFocused state
  const [searchQuery, setSearchQuery] = useState<string>(""); // Specified string type for searchQuery state
  const navigate = useNavigate();

  // Specified the event type for handleSearchChange
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="hero">
      <div className="hero-actions">
        <div className="app-logo">
          <Link to={`discover`}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div
          className={`combobox ${isFocused ? "focused" : ""}`}
          style={{ flexGrow: 1 }}
        >
          <div className="input-group">
            <input
              type="search"
              placeholder="Search products"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => { // Specified the event type for onKeyDown
                if (e.key === 'Enter') {
                  e.preventDefault();
                  navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
                }
              }}
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
