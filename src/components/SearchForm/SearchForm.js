import React from "react";
import './SearchForm.css';

const SearchForm = ({ isOpen, searchInputValue, handleSearchInputChange, handleSearchSubmit, error, loading }) => {
    return (
        <section className={isOpen ? "search-form search-form_type_open" : "search-form"}>
            <div className="search-form__container">
                <h1 className="search-form__title">Что творится в мире?</h1>
                <p className="search-form__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном
            кабинете.</p>
                <form className="search-form__cover"
                    noValidate
                    onSubmit={handleSearchSubmit}>
                    <input className="search-form__input"
                        type="text"
                        name="search"
                        placeholder="Введите тему новости"
                        required={true}
                        onChange={handleSearchInputChange}
                        value={searchInputValue} disabled={loading} />
                    <span className={error}>Нужно ввести ключевое слово</span>
                    <input className="button search-form__submit" type="submit" value="Искать" disabled={loading} />
                </form>
            </div>
        </section>
    )
}

export default SearchForm;