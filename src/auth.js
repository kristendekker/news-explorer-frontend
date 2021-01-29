import { setToken } from "./utils/token";

export const BASE_URL = 'https://api.dekker-news.students.nomoredomains.rocks';

export const register = async (email, password, name) => {
    const res = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name })
    })
    const json = await res.json();
    if (!res.ok) {
        return Promise.reject({ code: res.status, message: json.message })
    }
    return res;
}

export const authorize = async (email, password) => {
    const res = await fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })
    const json = await res.json();
    if (!res.ok) {
        return Promise.reject({ code: res.status, message: json.message })
    }
    if (json.token) {
        setToken(json.token);
        return json;
    }
};

export const getContent = async (token) => {
    const res = await fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    const json = await res.json();
    if (!res.ok) {
        return Promise.reject({ code: res.status, message: json.message })
    }
};