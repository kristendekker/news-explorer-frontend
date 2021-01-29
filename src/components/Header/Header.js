import React from "react";
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import SignOut from '../SignOut/SignOut';
import Toggle from "../Toggle/Toggle";

const Header = ({ isOpen, handleToggleMenuClick, loggedIn, onClose, isMain, onLoginPopupOpen, isPopupOpen, onSignOut }) => {
    const handleHeaderClassNameClick = () => {
        if (!isMain) {
            return "header header_type_saved-news";
        } else if (!isMain && isOpen) {
            return "header header_type_overlay header_type_saved-news";
        } else if (isMain && isOpen) {
            return "header header_type_overlay header_type_main";
        } else {
            return "header header_type_main";
        }
    }

    const handleContainerClassNameClick = () => {
        if (!isMain || (!isMain && isOpen)) {
            return "header__container header__container_type_saved-news";
        } else if (isMain && isOpen) {
            return "header__container header__container_type_main";
        } else {
            return "header__container";
        }
    }

    const handleCoverClassNameClick = () => {
        if (!isMain && isOpen) {
            return "header__cover header__cover_type_saved-news";
        } else if (isMain && isOpen) {
            return "header__cover header__cover_type_main";
        } else {
            return "header__cover";
        }
    }

    return (
        <header className={handleHeaderClassNameClick()}>
            <div className={handleContainerClassNameClick()}>
                <div className="header__unite">
                    <Logo isMain={isMain} />
                    <Toggle isOpen={isOpen} handleToggleMenuClick={handleToggleMenuClick} isPopupOpen={isPopupOpen} isMain={isMain} />
                </div>
                <div className={handleCoverClassNameClick()}>
                    <Navigation loggedIn={loggedIn} onClose={onClose} isMain={isMain} />
                    <SignOut loggedIn={loggedIn} onLoginPopupOpen={onLoginPopupOpen} onClose={onClose} onSignOut={onSignOut} isMain={isMain} />
                </div>
            </div>
        </header>
    )
}

export default Header;