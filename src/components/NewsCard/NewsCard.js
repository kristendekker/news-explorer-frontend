import React from "react";
import './NewsCard.css';
import CardButton from "../CardButton/CardButton";

const NewsCard = ({ article, loggedIn, isMain, onRegisterPopupOpen, onRemoveCallback, onAddCallback }) => {
    const titleHeightRef = React.useRef("");
    const [quantity, setQuantity] = React.useState({});

    React.useEffect(() => {
        const titleHeight = (titleHeightRef.current && titleHeightRef.current.offsetHeight) || 0;

        if (titleHeight >= 72 && titleHeight <= 87) {
            setQuantity({ "--lines": "4" });
        } else if (titleHeight >= 48 && titleHeight <= 58) {
            setQuantity({ "--lines": "5" });
        } else if (titleHeight < 30) {
            setQuantity({ "--lines": "6" });
        }
    }, [titleHeightRef]);

    const handleDate = (date) => {
        const parsedDate = new Date(date.slice(0, 10).split('-'));
        return new Intl.DateTimeFormat('ru', {
            day: "numeric",
            month: "long"
        }).format(parsedDate) + ", " + new Intl.DateTimeFormat('ru', {
            year: "numeric"
        }).format(parsedDate);
    }

    return (
        <li className="news-card">
            <CardButton loggedIn={loggedIn} onRegisterPopupOpen={onRegisterPopupOpen}
                onRemoveCallback={onRemoveCallback}
                onAddCallback={onAddCallback}
                isMain={isMain}
                article={article} />
            <a className="news-card__link" href={article.link} target="_blank" rel="noreferrer">
                <img className="news-card__picture" src={article.image} alt={article.title} />
                <div className="news-card__cover">
                    <span className="news-card__date">{handleDate(article.date)}</span>
                    <h3 ref={titleHeightRef} className="news-card__title">{article.title}</h3>
                    <p className="news-card__paragraph" style={quantity}>{article.text}</p>
                    <span className="news-card__source">{article.source}</span>
                    <span
                        className={isMain ? "news-card__theme" : "news-card__theme news-card__theme_type_saved-news"}>{article.keyword}</span>
                </div>
            </a>
        </li>
    )
};

export default NewsCard;