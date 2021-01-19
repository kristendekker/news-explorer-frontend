import React from "react";
import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Information from "../Information/Information";

const SavedNews = ({ isOpen, handleToggleMenuClick, name, onLoginPopupOpen, loggedIn, onClose, handleLogOut, loading }) => {
    return (
        <>
            <Header
                name={name}
                isOpen={isOpen}
                handleToggleMenuClick={handleToggleMenuClick}
                loggedIn={loggedIn}
                onClose={onClose}
                onLoginPopupOpen={onLoginPopupOpen}
                handleLogOut={handleLogOut}
            />
            <SavedNewsHeader name={name} />
            <Information loading={loading} />
            <NewsCardList />
        </>
    )
}

export default SavedNews;