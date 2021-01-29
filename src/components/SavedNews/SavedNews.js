import React from "react";
import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Information from "../Information/Information";
import mainApi from "../../utils/MainApi";

const SavedNews = ({
    isOpen,
    handleToggleMenuClick,
    onLoginPopupOpen,
    loggedIn,
    onClose,
    onSignOut,
    loading,
    onRemoveCallback
}) => {
    const [userArticles, setUserArticles] = React.useState([]);

    const onRemove = (articleId) => {
        const articlesAfterDelete = userArticles.filter((a) => a._id !== articleId);
        setUserArticles(articlesAfterDelete)
        if (onRemoveCallback !== undefined) {
            onRemoveCallback(articleId)
        }
    }

    React.useEffect(() => {
        mainApi.getArticles()
            .then((articles) => {
                setUserArticles(articles)
            })
            .catch((err) => {
                console.log(`${err}`);
            });
    }, []);


    return (
        <>
            <Header
                isOpen={isOpen}
                handleToggleMenuClick={handleToggleMenuClick}
                loggedIn={loggedIn}
                onClose={onClose}
                onLoginPopupOpen={onLoginPopupOpen}
                onSignOut={onSignOut}
                isMain={false}
            />
            <SavedNewsHeader userArticles={userArticles} />
            {!userArticles.length ? <Information loading={loading} isMain={false} userArticles={userArticles} /> :
                <NewsCardList articles={userArticles} onRemoveCallback={onRemove} isMain={false} />}
        </>
    )
}

export default SavedNews;