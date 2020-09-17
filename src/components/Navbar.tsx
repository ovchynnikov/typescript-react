import React from 'react';
import { NavLink } from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => (
    <nav>
    <div className="nav-wrapper teal accent-3 px1">
      <a href="/" className="brand-logo">React + TypeScript</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/">Todo List</NavLink></li>
        <li><NavLink to="/about">About me</NavLink></li>
      </ul>
    </div>
  </nav> 
)