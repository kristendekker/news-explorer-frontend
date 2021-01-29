import {DAYS} from './config';

/*export const API_KEY = '933e121e7cc34cc3aa7e80a6123a62e0';*/

// расчёт текущей и предыдущей дат для поискового запроса
const dateNow = new Date();
const dateLast = new Date();
dateLast.setDate(dateNow.getDate() - DAYS);
export const nowDate = dateNow.getFullYear().toString() + "-" + (dateNow.getMonth() + "1").toString() + "-" + ((dateNow.getDate().toString() > 10) ? dateNow.getDate().toString() : ("0" + dateNow.getDate().toString()));
export const lastDate = (dateLast.getFullYear()).toString() + "-" + ((dateLast.getMonth() + "1").toString()) + "-" + ((dateLast.getDate() > 10) ? dateLast.getDate() : ("0" + dateLast.getDate()));

// localStorage для данных
const ARTICLES_DATA = 'data';

export const setArticlesData = (data) => localStorage.setItem(ARTICLES_DATA, JSON.stringify(data));

export const getArticlesData = () => JSON.parse(localStorage.getItem(ARTICLES_DATA));

export const removeArticlesData = () => localStorage.removeItem(ARTICLES_DATA);