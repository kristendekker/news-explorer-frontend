import React from "react";
import './SavedNewsHeader.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SavedNewsHeader = ({ userArticles }) => {
    const currentUser = React.useContext(CurrentUserContext);
    const keywords = userArticles ? Array.from(userArticles, ({ keyword }) => keyword) : [];

    const keywordsCount = {};
    let keywordsUniq = [];
    for (let length = keywords.length, i = length; --i >= 0;) {
        if (!keywordsUniq.includes(keywords[i])) {
            keywordsUniq.push(keywords[i]);
        }
        if (keywordsCount[keywords[i]]) {
            keywordsCount[keywords[i]] += 1;
        } else {
            keywordsCount[keywords[i]] = 1;
        }
    }

    keywordsUniq.sort((a, b) => {
        return keywordsCount[b] - keywordsCount[a];
    });

    const isMoreThanThree = Object.keys(keywordsUniq).length > 3;
    const allCount = keywordsUniq.length;
    if (isMoreThanThree) {
        keywordsUniq = keywordsUniq.slice(0, 2);
    }

    keywordsUniq = keywordsUniq.map((k) => k[0].toUpperCase() + k.slice(1, k.length));

    return (
        <section className="saved-news__header">
            <span className="saved-news__subtitle">Сохранённые статьи</span>
            <h2 className="saved-news__title">{currentUser.name}, у
        вас {userArticles.length ? userArticles.length : "пока нет"} сохранённых статей</h2>
            <span
                className="saved-news__keywords">По ключевым словам: <b>{isMoreThanThree ? keywordsUniq.join(", ") : (allCount === 3 ? `${keywordsUniq[0]}, ${keywordsUniq[1]} и ${keywordsUniq[2]}` : (allCount > 0 ? keywordsUniq.join(", ") : " ничего не найдено"))}</b> {isMoreThanThree ? ` и ` : ""}
                <b>{isMoreThanThree ? `${allCount - 2}-м другим` : ""}</b>
            </span>
        </section>
    )
}


export default SavedNewsHeader;