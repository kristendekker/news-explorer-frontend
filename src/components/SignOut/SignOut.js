import React from "react";
import './SignOut.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SignOut = ({ loggedIn, onLoginPopupOpen, onClose, onSignOut, isMain }) => {
    const currentUser = React.useContext(CurrentUserContext);
    const handleClassName = () => {
        if (!isMain) {
            return "button sign-out-button sign-out-button_active sign-out-button_type_saved-news";
        }
        else if (loggedIn && isMain) {
            return "button sign-out-button sign-out-button_active sign-out-button_type_main"
        } else {
            return "button sign-out-button sign-out-button_type_main"
        }
    }

    const handleLogin = () => {
        if (loggedIn) {
            onClose();
            onSignOut();
        } else {
            onClose();
            onLoginPopupOpen();
        }
    }

    return (
        <button
            className={handleClassName()}
            onClick={handleLogin}>{loggedIn ? `${currentUser.name}` : "Авторизоваться"}</button>
    )
}


export default SignOut;