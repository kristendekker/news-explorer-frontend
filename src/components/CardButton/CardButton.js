import React from "react";
import './CardButton.css';
import mainApi from "../../utils/MainApi";

const CardButton = ({ loggedIn, onRegisterPopupOpen, article, isMain, onRemoveCallback, onAddCallback }) => {
    const [saved, setSaved] = React.useState(article.saved)

    const handleArticleSave = (article) => {
        mainApi.createArticle(article)
            .then((savedArticle) => {
                setSaved(true);
                article._id = savedArticle._id;
                article.saved = true;
                if (onAddCallback !== undefined) {
                    onAddCallback(savedArticle);
                }
            })
            .catch((err) => {
                console.log(`${err}`);
            })
    }

    const handleArticleDelete = (userArticle) => {
        mainApi.deleteArticle(userArticle._id)
            .then(() => {
                article.saved = false;
                setSaved(false);
                if (onRemoveCallback !== undefined) {
                    onRemoveCallback(userArticle._id);
                }
            })
            .catch((err) => {
                console.log(`${err}`);
            })
    }

    const handleMessageShow = () => {
        if (isMain && !loggedIn) {
            return "card-button__message";
        } else if (isMain && loggedIn) {
            return "card-button__message card-button__message_disabled";
        } else {
            return "card-button__message card-button__message_type_saved-news";
        }
    }

    const handleAction = (event) => {
        event.preventDefault();
        if (!isMain || (isMain && loggedIn && saved)) {
            return handleArticleDelete(article);
        } else if (isMain && loggedIn) {
            return handleArticleSave(article);
        } else if (isMain && !loggedIn) {
            return onRegisterPopupOpen();
        }
    }

    const handleClassName = () => {
        if (isMain && loggedIn && saved) {
            return "button card-button card-button_clicked";
        } else if (isMain) {
            return "button card-button";
        } else if (!isMain) {
            return "button card-button card-button_type_saved-news";
        }
    }

    return (
        <>
            <button
                className={handleClassName()}
                onClick={handleAction}
            />
            <span
                className={handleMessageShow()}>{isMain ? "Войдите, чтобы сохранять статьи" : "Убрать из сохранённых"}</span>
        </>
    )
}

export default CardButton;