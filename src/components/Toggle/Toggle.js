import React from "react";
import './Toggle.css';
import { useLocation } from 'react-router-dom';

const Toggle = ({ isOpen, handleToggleMenuClick, isPopupOpen }) => {
    const location = useLocation();

    const handleToggleClassNameClick = () => {
        if (location.pathname === '/saved-news' && isOpen) {
            return "toggle toggle_type_saved-news toggle_active";
        } else if (location.pathname === '/saved-news') {
            return "toggle toggle_type_saved-news";
        } else if (location.pathname === '/' && isOpen) {
            return "toggle toggle_active";
        } else if (isPopupOpen()) {
            return "toggle toggle_hide";
        } else {
            return "toggle";
        }
    }

    return (
        <button className={handleToggleClassNameClick()} onClick={handleToggleMenuClick} />
    )
}

export default Toggle;