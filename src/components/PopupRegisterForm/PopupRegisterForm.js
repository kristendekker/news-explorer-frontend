import React from "react";
import PopupForm from "../PopupForm/PopupForm";
import PopupInput from "../PopupInput/PopupInput";
import useValidation from "../../hooks/useValidation";

const PopupRegisterForm = ({ isOpen, loading, serverError, handleRegisterSubmit }) => {
    const fields = ['email', 'password', 'name'];

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
        handleRegisterSubmit({
            email: inputValue.email,
            password: inputValue.password,
            name: inputValue.name,
        });
    }

    return (
        <PopupForm name="register" submit={loading ? "Регистрация..." : "Зарегистрироваться"}
            serverError={serverError} onSubmit={onSubmit}
            isValidAll={isValid.email && isValid.password && isValid.name} loading={loading}>
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
            <PopupInput control="Имя" name="name"
                type="text" placeholder="Введите своё имя"
                minLength="2" maxLength="30" required={true}
                value={inputValue.name}
                onChange={handleInputChange} isValid={isValid.name}
                validationMessage={validationMessage.name} loading={loading} />
        </PopupForm>
    )
}

export default PopupRegisterForm;