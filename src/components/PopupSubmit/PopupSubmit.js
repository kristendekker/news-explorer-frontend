import React from "react";
import './PopupSubmit.css';
import Error from "../Error/Error";

const PopupSubmit = ({ submit, serverError, isValidAll, loading }) => {
    return (
        <div className="popup__submit-cover">
            <Error server={true} serverError={serverError} />
            <input className={isValidAll ? "popup__submit" : "popup__submit popup__submit_type_disabled"} type="submit" value={submit} name="submit" disabled={!isValidAll || loading} />
        </div>
    )
}

export default PopupSubmit;