import React from "react";
import './CardButton.css';
import { useLocation } from 'react-router-dom';

const CardButton = () => {
    const location = useLocation();

    return (
        <>
            <button className={location.pathname === '/' ? "button card-button card-button_active" : "button card-button card-button_active card-button_type_saved-news"} />
            <span
                className={location.pathname === '/' ? "card-button__message" : "card-button__message card-button__message_type_saved-news"}>{location.pathname === '/' ? "Войдите, чтобы сохранять статьи" : "Убрать из сохранённых"}</span>
        </>
    )
}

export default CardButton;