import React from "react";
import './PopupError.css';

const PopupError = ({ server }) => {
    return (
        <span
            className={server ? "popup__error popup__error_type_server" : "popup__error popup__error_type_active"}>{server ? "Такой пользователь уже существует" : "Неправильно"}</span>
    )
}

export default PopupError;