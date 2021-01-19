import React from "react";
import './NewsCard.css';
import image from '../../images/image_08.jpg'
import CardButton from "../CardButton/CardButton";
import { useLocation } from 'react-router-dom';

const NewsCard = React.memo(() => {
    const location = useLocation();
    const titleHeightRef = React.useRef("");

    const titleHeight = ((titleHeightRef.current && titleHeightRef.current.offsetHeight) || 0)

    const handleLines = () => {
        if (titleHeight <= 58) {
            return { "--lines": "5" };
        } else if (titleHeight >= 59 && titleHeight <= 87) {
            return { "--lines": "4" };
        }
    }

    return (
        <li className="news-card">
            <CardButton />
            <img className="news-card__picture" src={image} alt="Иллюстрация к новости" />
            <div className="news-card__cover">
                <span className="news-card__date">2 августа, 2019</span>
                <h3 ref={titleHeightRef} className="news-card__title">Национальное достояние – парки</h3>
                <p className="news-card__paragraph" style={handleLines()}>В 2016 году Америка отмечала важный юбилей: сто лет
                назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый
                может приобщиться к природе.</p>
                <span className="news-card__source">Медуза</span>
                <span
                    className={location.pathname === '/' ? "news-card__theme" : "news-card__theme news-card__theme_type_saved-news"}>Природа</span>
            </div>
        </li>
    )
});

export default NewsCard;