class NewsApi {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    getNews(keyword, nowDate, lastDate) {
        return fetch(`${this.baseUrl}?q=${keyword}&language=ru&from=${lastDate}&to=${nowDate}&sortBy=publishedAt&pageSize=100&apiKey=933e121e7cc34cc3aa7e80a6123a62e0`, {
            headers: this.headers,
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }
}

const newsApi = new NewsApi({
    baseUrl: 'https://nomoreparties.co/news/v2/everything',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default newsApi;