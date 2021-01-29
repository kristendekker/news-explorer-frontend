import React from "react";
import './Navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = ({ loggedIn, onClose, isMain }) => {
    return (
        <nav className="navigation">
            <div className="navigation__item navigation__item_active" onClick={onClose}>
                <NavLink className={!isMain ? "navigation__link navigation__link_color_black" : "navigation__link navigation__link_underline_white"} to="/">Главная</NavLink>
            </div>
            <div className={loggedIn ? "navigation__item navigation__item_active" : "navigation__item"} onClick={onClose}>
                <NavLink className={!isMain ? "navigation__link navigation__link_color_black navigation__link_underline_black" : "navigation__link navigation__link_type_main"} to="/saved-news">Сохранённые статьи</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;