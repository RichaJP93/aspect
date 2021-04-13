import React from 'react';
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">      
    <a className="navbar-item" href='/'>ASPECT</a>      
    <ul className='navbar-links'>        
      <li>
        <a className="navbar-item" href='/about'>About</a>
      </li>
    </ul>
  </nav>
)

export default Navbar;

