import React from "react";
import Popup from "../Popup/Popup";
import './PopupTypeLogin.css';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import PopupInput from "../PopupInput/PopupInput";

const PopupTypeLogin = ({ isOpen, onClose, onRegisterPopupOpen }) => {
    return (
        <Popup name="login" title="Вход" isOpen={isOpen} onClose={onClose} onRegisterPopupOpen={onRegisterPopupOpen}>
            <PopupWithForm name="login" submit="Войти">
                <PopupInput control="Email" name="email" type="email" placeholder="Введите почту" required={true} />
                <PopupInput control="Пароль" name="password" type="password" placeholder="Введите пароль" required={true} />
            </PopupWithForm>
        </Popup>
    )
}

export default PopupTypeLogin;