import React from "react";
import './Information.css'

const Information = ({ loading }) => {
    return (
        <section className="information">
            <div className={loading ? "information__preloader" : "information__no-results"} />
            <span className={loading ? "information__title information__title_type_loading" : "information__title"}>Ничего не найдено</span>
            <span className="information__subtitle">{loading ? "Идет поиск новостей..." : "К сожалению по вашему запросу ничего не найдено."}</span>
        </section>
    )
}

export default Information;