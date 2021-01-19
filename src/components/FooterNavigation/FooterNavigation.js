import React from "react";
import { NavLink } from "react-router-dom";
import './FooterNavigation.css';

const FooterNavigation = () => {
    return (
        <nav className="footer-navigation">
            <ul className="footer-navigation__list">
                <li className="footer-navigation__item">
                    <NavLink className="hover-effect footer-navigation__link" to="/">Главная</NavLink>
                </li>
                <li className="footer-navigation__item">
                    <a className="hover-effect footer-navigation__link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                </li>
            </ul>
        </nav>
    )
}

export default FooterNavigation;