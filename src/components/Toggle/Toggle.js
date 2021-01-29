import React from "react";
import './Toggle.css';

const Toggle = ({ isOpen, handleToggleMenuClick, isPopupOpen, isMain }) => {
    const handleToggleClassNameClick = () => {
        if (!isMain && isOpen) {
            return "toggle toggle_type_saved-news toggle_active";
        } else if (!isMain) {
            return "toggle toggle_type_saved-news";
        } else if (isMain && isOpen) {
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