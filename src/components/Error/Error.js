import React from "react";
import './Error.css';

const Error = ({ serverError, isValid, validationMessage }) => {
    const handleErrorClass = () => {
        if (serverError) {
            return "error error_active error_type_server";
        } else if (!isValid) {
            return "error error_active"
        } else {
            return "error";
        }
    }
    return (
        <span
            className={handleErrorClass()}>{serverError ? serverError : validationMessage}</span>
    )
}

export default Error;