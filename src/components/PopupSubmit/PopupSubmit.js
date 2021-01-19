import React from "react";
import './PopupSubmit.css';
import PopupError from "../PopupError/PopupError";

const PopupSubmit = ({ submit }) => {
    return (
        <div className="popup__submit-cover">
            <PopupError server={true} />
            <input className="popup__submit popup__submit_type_disabled" type="submit" value={submit} name="submit" disabled={true} />
        </div>
    )
}

export default PopupSubmit;