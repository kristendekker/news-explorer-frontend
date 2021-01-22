import React from "react";
import './SearchForm.css';

const SearchForm = ({ isOpen }) => {
    return (
        <section className={isOpen ? "search-form search-form_type_open" : "search-form"}>
            <div className="search-form__container">
                <h1 className="search-form__title">Что творится в мире?</h1>
                <p className="search-form__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном
                кабинете.</p>
                <div className="search-form__cover">
                    <input className="search-form__input" type="text" placeholder="Введите тему новости" />
                    <input className="button search-form__submit" type="submit" value="Искать" />
                </div>
            </div>
        </section>
    )
}

export default SearchForm;