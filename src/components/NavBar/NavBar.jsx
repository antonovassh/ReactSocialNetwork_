import React from 'react';
import './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return <nav className='nav'>
    <Link to="/profile">Profile</Link>
    <Link to="/dialogs">Messages</Link>
  </nav>

}

export default NavBar;