import { getToken } from "./token";
import { BASE_URL } from '../auth';

class MainApi {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    getHeaders() {
        const token = getToken();

        return {
            ...this.headers,
            'Authorization': `Bearer ${token}`
        }
    }

    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.getHeaders(),
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    getArticles() {
        return fetch(`${this.baseUrl}/articles`, {
            headers: this.getHeaders(),
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    createArticle(newArticle) {
        return fetch(`${this.baseUrl}/articles`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify({
                keyword: newArticle.keyword,
                title: newArticle.title,
                text: newArticle.text,
                date: newArticle.date,
                source: newArticle.source,
                link: newArticle.link,
                image: newArticle.image
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    deleteArticle(articleId) {
        return fetch(`${this.baseUrl}/articles/${articleId}`, {
            method: 'DELETE',
            headers: this.getHeaders(),
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }
}

const mainApi = new MainApi({
    baseUrl: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default mainApi;