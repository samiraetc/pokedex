import React from 'react';
import { Link } from 'react-router-dom';
import pokedex from '../../assets/images/pokedex.png'
import { HeaderMessages } from './HeaderMessages';

export const COMPONENT_ID = 'pokedex-header'

const Header = () => {
    const wordings = HeaderMessages;
    return (
        <div className="header-container"  id={COMPONENT_ID}>
            <img src={pokedex} alt="pokedex logo" className='header-image' />
            <ul className="header-menu">
                <li className="header-menu__item">
                    <Link to="/">{wordings.HEADER_HOME_TITLE}</Link>
                </li>
                <li className="header-menu__item">
                    <Link to="/favorites">{wordings.HEADER_FAVORITES_TITLE}</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;