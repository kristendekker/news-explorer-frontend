import React from "react";
import Popup from "../Popup/Popup";
import './PopupTypeRegister.css';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import PopupInput from "../PopupInput/PopupInput";

const PopupTypeRegister = ({ isOpen, onClose, onLoginPopupOpen }) => {
    return (
        <Popup name="register" title="Регистрация" isOpen={isOpen} onClose={onClose} onLoginPopupOpen={onLoginPopupOpen}>
            <PopupWithForm name="register" submit="Зарегистрироваться">
                <PopupInput control="Email" name="email" type="email" placeholder="Введите почту" required={true} />
                <PopupInput control="Пароль" name="password" type="password" placeholder="Введите пароль" required={true} />
                <PopupInput control="Имя" name="name" type="text" placeholder="Введите своё имя" minLength="2" maxLength="30" required={true} />
            </PopupWithForm>
        </Popup>
    )
}

export default PopupTypeRegister;