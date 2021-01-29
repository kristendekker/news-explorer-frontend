import React from "react";
import './Popup.css';

const Popup = ({ name, isOpen, onClose, title, children, onLoginPopupOpen, onRegisterPopupOpen }) => {
    const handleEscapeClose = (event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    React.useEffect(() => {
        document.addEventListener("keydown", handleEscapeClose, false);

        return () => {
            document.removeEventListener("keydown", handleEscapeClose, false);
        };
        // eslint-disable-next-line
    }, [isOpen]);

    const handleOverlayClose = (event) => {
        if (event.target === event.currentTarget && isOpen) {
            onClose();
        }
    };

    const handleRedirectionPath = () => {
        if (name !== "login") {
            onClose();
            onLoginPopupOpen();
        } else {
            onClose();
            onRegisterPopupOpen();
        }
    }

    return (
        <section
            className={isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`}
            onMouseUp={handleOverlayClose}>
            <div className={name === "success" ? "popup__container popup__container_type_success" : "popup__container"}>
                <button className="hover-effect popup__close" type="button" onClick={onClose} />
                <h2 className={name === "success" ? "popup__title popup__title_type_success" : "popup__title"}>{title}</h2>
                {children}
                <span
                    className={name === "success" ? "popup__redirection popup__redirection_type_success" : "popup__redirection"}>{name === "success" ? "" : "или "}
                    <span className="popup__redirection-path"
                        onClick={handleRedirectionPath}>{(name !== "login") ? "Войти" : "Зарегистрироваться"}</span>
                </span>
            </div>
        </section>
    );
}

export default Popup;