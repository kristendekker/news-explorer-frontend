import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import './NewsCardList.css';
import { COUNT } from '../../utils/config';

const NewsCardList = ({ articles, getNewsError, loading, loggedIn, isMain, onRegisterPopupOpen, onRemoveCallback, onAddCallback }) => {
    const [count, setCount] = React.useState(3);

    const handleShowResults = () => {
        if (!isMain) {
            return "news-cards news-cards_type_saved-news news-cards_active";
        } else if ((!loading && articles.length) || getNewsError) {
            return "news-cards news-cards_active";
        } else if (!articles.length) {
            return "news-cards";
        }
    }

    const handleAdd = () => {
        (count < articles.length - 1) ? setCount(count + COUNT) : setCount(articles.length - 1);
    };

    return (
        <section className={handleShowResults()}>
            <h2
                className={!isMain ? "news-cards__title" : "news-cards__title news-cards__title_active"}>{(isMain && getNewsError) ? "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз" : "Результаты поиска"}</h2>
            <ul className="news-cards__list">
                {(isMain ? articles.slice(0, count) : articles).map((article, index) => <NewsCard key={index} article={article} loggedIn={loggedIn}
                    isMain={isMain}
                    onRegisterPopupOpen={onRegisterPopupOpen}
                    onRemoveCallback={onRemoveCallback}
                    onAddCallback={onAddCallback} />)}
            </ul>
            <button
                className={(!isMain || count >= articles.length - 1 || articles.length - 1 <= count) ? "button news-cards__button" : "button news-cards__button news-cards__button_active"}
                onClick={handleAdd}>Показать еще
        </button>
        </section>
    )
}

export default NewsCardList;