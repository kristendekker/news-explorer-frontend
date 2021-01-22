import React from "react";
import './SavedNewsHeader.css';

const SavedNewsHeader = ({ name }) => {
    return (
        <section className="saved-news__header">
            <span className="saved-news__subtitle">Сохранённые статьи</span>
            <h2 className="saved-news__title">{name}, у вас 6 сохранённых статей</h2>
            <span className="saved-news__keywords">По ключевым словам: <b>Природа,</b> <b>Тайга</b> и <b>4-м другим</b></span>
        </section>
    )
}

export default SavedNewsHeader;