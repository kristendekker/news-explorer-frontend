import React from "react";
import './Login.css';
import { useLocation } from 'react-router-dom';

const Login = ({ name, loggedIn, onLoginPopupOpen, handleLogOut, onClose }) => {
    const location = useLocation();

    const handleClassName = () => {
        if (location.pathname === '/saved-news') {
            return "button login-button login-button_active login-button_type_saved-news";
        }
        else if (loggedIn && location.pathname === '/') {
            return "button login-button login-button_active login-button_type_main"
        } else {
            return "button login-button login-button_type_main"
        }
    }

    const handleLogin = () => {
        if (loggedIn) {
            onClose();
            handleLogOut();
        } else {
            onClose();
            onLoginPopupOpen();
        }
    }

    return (
        <button
            className={handleClassName()}
            onClick={handleLogin}>{loggedIn ? `${name}` : "Авторизоваться"}</button>
    )
}


export default Login;