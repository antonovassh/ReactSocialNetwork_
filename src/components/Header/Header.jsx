import React from 'react';
import s from './Header.module.css';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return <header className={s.header}>
        <div className='s.HeaderContext'>
            <img src='https://img.freepik.com/premium-vector/cute-hand-drawn-cat-paws-white-background-vector-adorable-animals-silhouette-trendy-style-funny-cute-hygge-illustration-poster-banner-print-decoration-kids-playroom_514409-1359.jpg'
                alt="Cat Paws"
                className={s.logo} />
            <h1>Dog connect</h1>
        </div>
        <NavBar />
    </header>
}

export default Header; 
