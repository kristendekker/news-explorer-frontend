import React from "react";
import PopupForm from "../PopupForm/PopupForm";
import PopupInput from "../PopupInput/PopupInput";
import useValidation from "../../hooks/useValidation";

const PopupLoginForm = ({ isOpen, loading, serverError, handleLoginSubmit }) => {
    const fields = ['email', 'password'];

    const {
        isValid, setIsValid,
        inputValue, setInputValue,
        validationMessage, setValidationMessage,
        handleInputChange, fieldsEnumeration
    } = useValidation(fields);

    React.useEffect(() => {
        setInputValue(fieldsEnumeration(''));
        setIsValid(fieldsEnumeration(false));
        setValidationMessage(fieldsEnumeration(''));
        // eslint-disable-next-line
    }, [isOpen, setInputValue, setIsValid, setValidationMessage]);

    const onSubmit = (event) => {
        event.preventDefault();
        handleLoginSubmit({
            email: inputValue.email,
            password: inputValue.password,
        });
    }

    return (
        <PopupForm name="login" submit={loading ? "Выполняется вход..." : "Войти"}
            serverError={serverError} onSubmit={onSubmit}
            isValidAll={isValid.email && isValid.password} loading={loading}>
            <PopupInput control="Email" name="email"
                type="email" placeholder="Введите почту"
                required={true} value={inputValue.email}
                onChange={handleInputChange} isValid={isValid.email}
                validationMessage={validationMessage.email} loading={loading} />
            <PopupInput control="Пароль" name="password"
                type="password" placeholder="Введите пароль"
                required={true} value={inputValue.password}
                onChange={handleInputChange} isValid={isValid.password}
                validationMessage={validationMessage.password} loading={loading} />
        </PopupForm>
    )
}

export default PopupLoginForm;