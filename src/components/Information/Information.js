import React from "react";
import './Information.css'
import { useLocation } from "react-router-dom";

const Information = ({ loading, articles, userArticles }) => {
    const location = useLocation();
    const handleType = () => {
        if (loading) {
            return "information__preloader";
        } else if (!loading && articles && articles.length === 0) {
            return "information__no-results";
        } else if (location.pathname === '/saved-news' && !loading && !userArticles.length) {
            return "information__no-results information__no-results_type_saved-news";
        }
    }

    const handleTitle = () => {
        if (loading || (location.pathname === '/saved-news' && !loading && !userArticles.length)) {
            return "information__title information__title_type_loading";
        } else if (!loading && articles && articles.length === 0) {
            return "information__title";
        }
    }

    const handleText = () => {
        if (loading) {
            return "Идет поиск новостей...";
        } else if (!loading && articles && articles.length === 0) {
            return "К сожалению по вашему запросу ничего не найдено.";
        }
    }

    return (
        <section className={(loading || (!loading && articles && articles.length === 0) || (location.pathname === '/saved-news' && !loading && !userArticles.length)) ? "information information_active" : "information"}>
            <div className={handleType()} />
            <span className={handleTitle()}>Ничего не найдено</span>
            <span className="information__subtitle">{handleText()}</span>
        </section>
    )
}

export default Information;