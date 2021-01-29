import React from "react";
import './PopupInput.css';
import Error from "../Error/Error";

const PopupInput = ({ control, name, type, placeholder, minLength, maxLength, required, value, onChange, isValid, validationMessage, loading }) => {
    return (
        <label className="popup__control">{control}
            <input className={`popup__input popup__input_type_${name}`} type={type} name={name}
                placeholder={placeholder} minLength={minLength} maxLength={maxLength} required={required} value={value} onChange={onChange} disabled={loading} />
            <Error isValid={isValid} validationMessage={validationMessage} />
        </label>
    )
}

export default PopupInput;