import React from "react";
import './PopupInput.css';
import PopupError from "../PopupError/PopupError";

const PopupInput = ({ control, name, type, placeholder, minLength, maxLength, required }) => {
    return (
        <label className="popup__control">{control}
            <input className={`popup__input popup__input_type_${name}`} type={type} name={name}
                placeholder={placeholder} minLength={minLength} maxLength={maxLength} required={required} />
            <PopupError />
        </label>
    )
}

export default PopupInput;