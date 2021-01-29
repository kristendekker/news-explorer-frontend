import React from "react";
import Popup from "../Popup/Popup";
import PopupRegisterForm from "../PopupRegisterForm/PopupRegisterForm";

const Register = ({ isOpen, onClose, onLoginPopupOpen, loading, serverError, onRegister }) => {
    const handleRegisterSubmit = ({ email, password, name }) => {
        if (!email || !password || !name) {
            return;
        }
        onRegister(email, password, name);
    }

    return (
        <Popup name="register" title="Регистрация" isOpen={isOpen} onClose={onClose} onLoginPopupOpen={onLoginPopupOpen}>
            <PopupRegisterForm isOpen={isOpen} handleRegisterSubmit={handleRegisterSubmit} loading={loading} serverError={serverError} />
        </Popup>
    )
}

export default Register;