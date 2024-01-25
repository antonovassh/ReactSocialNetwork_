import React from 'react';
import './NavBar.module.css';

const NavBar = () =>
{
    return <nav className='nav'>
    <div className='item'>
     <a href='/profile'>Profile</a>
    </div>
    <div className='item'>
    <a href='/dialogs'>Messages</a>
    </div>
    <div className='item'>
    <a>News</a>
    </div>
    <div className='item'>
    <a>Music</a>
    </div>
    <div className='item'>
    <a>Settings</a>
    </div>
  </nav>

}

export default NavBar;