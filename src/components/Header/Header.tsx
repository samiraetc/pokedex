import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/pokedex.png'

const Header = () => {
    return (
        <div className="header-container">
            <img src={image} alt="pokedex logo" className='header-image' />
            <ul className="header-menu">
                <li className="header-menu__item">
                    <Link to="/">Home</Link>
                </li>
                <li className="header-menu__item">
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;