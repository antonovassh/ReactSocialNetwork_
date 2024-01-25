import React from 'react';
import s from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <Link to="/profile" className={s.navLink}>
        Profile
      </Link>
      <Link to="/dialogs" className={s.navLink}>
        Messages
      </Link>
      <Link to="/notifications" className={s.navLink}>
        Notifications
      </Link>
      <Link to="/dialogs" className={s.navLink}>
        Music
      </Link>
      <Link to="/music" className={s.navLink}>
        Messages
      </Link>
      <Link to="/photos" className={s.navLink}>
        Photos
      </Link>
    </nav>
  );
};



export default NavBar;