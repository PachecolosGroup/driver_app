import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { FiInstagram, FiFacebook } from "react-icons/fi";

import { Link, Element as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [slide, setSlide] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setSlide(!slide);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className={slide ? "logo slide-right" : "logo"}>
          <h3>Racing.</h3>
        </div>
        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/">
              <li>
                <Link to="power" smooth={true} duration={500}>
                  Power
                </Link>
              </li>
            </a>
          </li>
          <li>
            <a href="/">
              <li>
                <Link to="speed" smooth={true} duration={500}>
                  Speed
                </Link>
              </li>
            </a>
          </li>
          <li>
            <a href="/">
              <li>
                <Link to="handling" smooth={true} duration={500}>
                  Handling
                </Link>
              </li>
            </a>
          </li>

          <li>
            <a href="/">
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </a>
          </li>

          <div className="mobile-menu">
            <button>Shop</button>
            <button>Account</button>
            <div className="social-icons">
              <GiCarWheel className="icon" />
              <FiInstagram className="icon" />
              <FiFacebook className="icon" />
            </div>
          </div>
        </ul>

        <ul className="nav-menu hide">
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">Account</a>
          </li>
        </ul>

        <div className="hamburger" onClick={handleNav}>
          {nav ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
