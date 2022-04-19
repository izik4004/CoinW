import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="container">
        <h1>
          C<span className="primary">W</span>
        </h1>
        <div className={click ? "nav-menu active" : "nav-menu"}>
          <NavLink
          className='nav-menu'
          to='/'
          >
            Home
          </NavLink>
          
          <NavLink
          className='nav-menu'
          to='/more'
          >
            More
          </NavLink>
          {/* <li>
            <a href="/">Featured</a>
          </li>
          <li>
            <a href="/">Earn</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li> */}
        </div>
        <div className="btn-group">
          <button className="btn">Link Wallet</button>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
