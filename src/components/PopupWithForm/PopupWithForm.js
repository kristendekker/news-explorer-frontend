import React from "react";
import './PopupWithForm.css';
import PopupSubmit from "../PopupSubmit/PopupSubmit";

const PopupWithForm = ({ name, children, submit }) => {
    return (
        <form className={`popup__form form_type_${name}`} action="#" name={name} noValidate>
            <div className="popup__cover">
                {children}
            </div>
            <PopupSubmit submit={submit} />
        </form>
    )
}

export default PopupWithForm;