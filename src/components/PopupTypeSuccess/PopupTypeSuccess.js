import React from "react";
import Popup from "../Popup/Popup";
import './PopupTypeSuccess.css';

const PopupTypeSuccess = ({ isOpen, onClose, onLoginPopupOpen }) => {
    return (
        <Popup
            isOpen={isOpen}
            name="success"
            title="Пользователь успешно зарегистрирован!"
            onClose={onClose}
            onLoginPopupOpen={onLoginPopupOpen} />
    )
}

export default PopupTypeSuccess;