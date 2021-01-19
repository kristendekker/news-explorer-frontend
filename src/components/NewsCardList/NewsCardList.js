import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import './NewsCardList.css';
import { useLocation } from 'react-router-dom';

const NewsCardList = () => {
    const location = useLocation();

    return (
        <section className={location.pathname === '/saved-news' ? "news-cards news-cards_type_saved-news" : "news-cards"} >
            <h2 className={location.pathname === '/saved-news' ? "news-cards__title" : "news-cards__title news-cards__title_active"}>Результаты поиска</h2>
            <ul className="news-cards__list">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </ul>
            <button className={location.pathname === '/saved-news' ? "button news-cards__button" : "button news-cards__button news-cards__button_active"}>Показать еще</button>
        </section>
    )
}

export default NewsCardList;