import React from 'react';
import { Link } from 'react-router-dom';
import pokedex from '../../assets/images/pokedex.png'

export const COMPONENT_ID = 'pokedex-header'

const Header = () => {
    return (
        <div className="header-container"  id={COMPONENT_ID}>
            <img src={pokedex} alt="pokedex logo" className='header-image' />
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