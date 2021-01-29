import React from "react";
import './Main.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";
import Information from "../Information/Information";

const Main = ({ isOpen,
    onLoginPopupOpen,
    handleToggleMenuClick,
    loggedIn, onClose,
    isPopupOpen, loading, articles,
    handleSearchInputChange,
    handleSearchSubmit,
    searchInputValue,
    searchError, getNewsError,
    onSignOut, onRegisterPopupOpen, onRemoveCallback, onAddCallback
}) => {
    return (
        <>
            <div className="header-search-wrapper">
                <Header
                    isOpen={isOpen}
                    handleToggleMenuClick={handleToggleMenuClick}
                    loggedIn={loggedIn}
                    onClose={onClose}
                    onLoginPopupOpen={onLoginPopupOpen}
                    isPopupOpen={isPopupOpen}
                    onSignOut={onSignOut}
                    isMain={true}
                />
                <SearchForm
                    isOpen={isOpen}
                    handleSearchInputChange={handleSearchInputChange}
                    handleSearchSubmit={handleSearchSubmit}
                    searchInputValue={searchInputValue}
                    error={searchError}
                    loading={loading}
                />
            </div>
            <main className="main">
                {!loading && articles && articles.length ? <NewsCardList articles={articles} getNewsError={getNewsError} loading={loading} loggedIn={loggedIn} isMain={true} onRegisterPopupOpen={onRegisterPopupOpen} onRemoveCallback={onRemoveCallback} onAddCallback={onAddCallback} /> : <Information articles={articles} isMain={true} loading={loading} />}
                <About />
            </main>
        </>
    )
}

export default Main;