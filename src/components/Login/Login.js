import React from "react";
import Popup from "../Popup/Popup";
import PopupLoginForm from "../PopupLoginForm/PopupLoginForm";

const Login = ({ isOpen, onClose, onRegisterPopupOpen, loading, serverError, onLogin }) => {
    const handleLoginSubmit = ({ email, password }) => {
        if (!email || !password) {
            return;
        }
        onLogin(email, password);
    }

    return (
        <Popup name="login" title="Вход" isOpen={isOpen} onClose={onClose} onRegisterPopupOpen={onRegisterPopupOpen}>
            <PopupLoginForm isOpen={isOpen} handleLoginSubmit={handleLoginSubmit} loading={loading} serverError={serverError} />
        </Popup>
    );
}

export default Login;