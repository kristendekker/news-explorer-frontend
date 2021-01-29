import React from "react";
import './PopupForm.css';
import PopupSubmit from "../PopupSubmit/PopupSubmit";

const PopupForm = ({ name, children, submit, serverError, onSubmit, isValidAll, loading }) => {
    return (
        <form className={`popup__form form_type_${name}`} action="#" name={name} noValidate onSubmit={onSubmit}>
            <div className="popup__cover">
                {children}
            </div>
            <PopupSubmit submit={submit} serverError={serverError} isValidAll={isValidAll} loading={loading} />
        </form>
    )
}

export default PopupForm;