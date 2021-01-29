import React from "react";
import './App.css';
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import { Route, Switch, useHistory } from 'react-router-dom';
import '../../vendor/fonts/fonts.css';
import Footer from "../Footer/Footer";
import PopupTypeSuccess from "../PopupTypeSuccess/PopupTypeSuccess";
import newsApi from "../../utils/NewsApi";
import mainApi from "../../utils/MainApi";
import { getArticlesData, lastDate, nowDate, setArticlesData } from "../../utils/utils";
import { getToken, removeToken, setToken } from "../../utils/token";
import * as auth from '../../auth';
import Login from "../Login/Login";
import Register from "../Register/Register";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const App = () => {
    const [isMenuOpen, setMenuOpen] = React.useState(false);
    const [isPopupTypeLoginOpen, setPopupTypeLoginOpen] = React.useState(false);
    const [isPopupTypeRegisterOpen, setPopupTypeRegisterOpen] = React.useState(false);
    const [isPopupTypeSuccessOpen, setPopupTypeSuccessOpen] = React.useState(false);

    const [loggedIn, setLoggedIn] = React.useState(false);
    const [isRegister, setIsRegister] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const [currentUser, setCurrentUser] = React.useState([]);
    const [searchInputValue, setSearchInputValue] = React.useState("");
    const [searchError, setSearchError] = React.useState("error");
    const [serverError, setServerError] = React.useState("");
    const [newsError, setNewsError] = React.useState("");
    const articlesData = getArticlesData();
    const [articles, setArticles] = React.useState(articlesData ? articlesData : null);
    const history = useHistory();

    const handleContentGetter = (token) => {
        return auth.getContent(token)
            .then(() => {
                setLoggedIn(true);
                history.push('/');
            })
    }

    const tokenCheck = () => {
        const jwt = getToken();
        if (!jwt) {
            return;
        }
        handleContentGetter(jwt)
            .catch((err) => {
                if (err.code === 401) {
                    console.log(err.message)
                }
            });
    }

    React.useEffect(() => {
        tokenCheck();
        // eslint-disable-next-line
    }, []);

    const onLogin = (email, password) => {
        setIsLoading(true);
        auth.authorize(email, password)
            .then((data) => {
                if (!data) {
                    return
                }
                if (data.token) {
                    setToken(data.token);
                    handleContentGetter(data.token);
                }
                handleCloseAllPopups();
            })
            .catch((err) => {
                if (err.code === 400) {
                    setServerError(err.message);
                } else if (err.code === 401) {
                    setServerError(err.message);
                }
            })
            .finally(() => {
                setIsLoading(false);
            })
    };

    const onRegister = (email, password, name) => {
        setIsLoading(true);
        auth.register(email, password, name)
            .then((res) => {
                if (res.status !== 400) {
                    setIsRegister(true);
                    setPopupTypeSuccessOpen(true);
                    setPopupTypeRegisterOpen(false);
                }
            })
            .catch((err) => {
                setIsRegister(false);
                if (err.code === 400) {
                    setServerError(err.message);
                } else if (err.code === 409) {
                    setServerError(err.message);
                }
                console.log(serverError);
            }).finally(() => {
                setIsLoading(false);
            })
    };

    const onSignOut = () => {
        removeToken();
        setLoggedIn(false);
        history.push('/');
    }

    const getAllArticles = (keyword, nowDate, lastDate) => {
        setIsLoading(true);
        newsApi.getNews(keyword, nowDate, lastDate)
            .then((data) => {
                const results = data.articles.map((article) => ({
                    keyword: keyword,
                    title: article.title,
                    text: article.description,
                    date: article.publishedAt,
                    source: article.source.name,
                    link: article.url,
                    image: article.urlToImage,
                    saved: false,
                }));
                if (results) {
                    handleArticlesSaved(results)
                        .then((articles) => {
                            setArticlesData(articles);
                            setArticles(articles);
                        });
                }
            })
            .catch((err) => {
                setNewsError(`${err}`);
                console.log(`${err}`);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const handleSearchInputChange = (event) => {
        setSearchInputValue(event.target.value);
        setSearchError("error");
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (!searchInputValue) {
            setSearchError("error error_type_search error_active");
        } else {
            getAllArticles(searchInputValue, lastDate, nowDate);
            setSearchInputValue('');
        }
    }

    const getUserAndSavedArticles = async () => {
        try {
            const userInfo = await mainApi.getUserInfo();
            setCurrentUser(userInfo);
        } catch (err) {
            console.log(`${err}`);
        }
    };

    const handleArticlesSaved = async (articles) => {
        try {
            const userArticles = await mainApi.getArticles();
            articles.forEach((article) => {
                if (userArticles) {
                    userArticles.forEach((userArticle) => {
                        if (userArticle.title === article.title) {
                            article.saved = true;
                            article._id = userArticle._id;
                        }
                    })
                }
            })
            return articles
        } catch (e) {
            console.log(`${e}`);
        }
    };

    const onUpdate = () => {
        setArticlesData(articles);
    }

    const onRemoveFromSavedNews = (articleId) => {
        articles.forEach((article) => {
            if (article._id === articleId) {
                delete article._id;
                article.saved = false;
            }
        })
        setArticlesData(articles);
        setArticles(articles);
    }

    React.useEffect(() => {
        if (!loggedIn) return;
        getUserAndSavedArticles();
    }, [loggedIn]);


    const handleToggleMenuClick = () => {
        setMenuOpen(!isMenuOpen);
    }

    const handleCloseMenuClick = () => {
        setMenuOpen(false);
    }

    const handleCloseAllPopups = () => {
        setPopupTypeLoginOpen(false);
        setPopupTypeRegisterOpen(false);
        setPopupTypeSuccessOpen(false);
        setServerError('');
    }

    const handlePopupTypeLoginOpen = () => {
        setPopupTypeLoginOpen(true);
    }

    const handlePopupTypeRegisterOpen = () => {
        setPopupTypeRegisterOpen(true);
    }

    const handlePopupOpenDetector = () => {
        return isPopupTypeLoginOpen || isPopupTypeRegisterOpen || isPopupTypeSuccessOpen;
    }

    return (
        <div className="page">
            <div className="page__cover">
                <Switch>
                    <CurrentUserContext.Provider value={currentUser}>
                        <Route exact path="/">
                            <Main
                                isOpen={isMenuOpen}
                                onLoginPopupOpen={handlePopupTypeLoginOpen}
                                onRegisterPopupOpen={handlePopupTypeRegisterOpen}
                                handleToggleMenuClick={handleToggleMenuClick}
                                loggedIn={loggedIn}
                                onClose={handleCloseMenuClick}
                                isPopupOpen={handlePopupOpenDetector}
                                loading={isLoading}
                                articles={articles}
                                handleSearchSubmit={handleSearchSubmit}
                                handleSearchInputChange={handleSearchInputChange}
                                searchInputValue={searchInputValue}
                                searchError={searchError}
                                getNewsError={newsError}
                                onSignOut={onSignOut}
                                onRemoveCallback={onUpdate}
                                onAddCallback={onUpdate}
                            />
                            <Login
                                isOpen={isPopupTypeLoginOpen}
                                onClose={handleCloseAllPopups}
                                onRegisterPopupOpen={handlePopupTypeRegisterOpen}
                                loading={isLoading}
                                serverError={serverError}
                                onLogin={onLogin} />
                            <Register
                                isOpen={isPopupTypeRegisterOpen}
                                onClose={handleCloseAllPopups}
                                onLoginPopupOpen={handlePopupTypeLoginOpen}
                                loading={isLoading}
                                serverError={serverError}
                                onRegister={onRegister} />
                            <PopupTypeSuccess
                                isOpen={isPopupTypeSuccessOpen}
                                isRegister={isRegister}
                                onClose={handleCloseAllPopups}
                                onLoginPopupOpen={handlePopupTypeLoginOpen} />
                        </Route>
                        <ProtectedRoute exact path="/saved-news" loggedIn={loggedIn}>
                            <SavedNews
                                isOpen={isMenuOpen}
                                onLoginPopupOpen={handlePopupTypeLoginOpen}
                                handleToggleMenuClick={handleToggleMenuClick}
                                loggedIn={loggedIn}
                                onClose={handleCloseMenuClick}
                                onSignOut={onSignOut}
                                loading={isLoading}
                                onRemoveCallback={onRemoveFromSavedNews}
                            />
                        </ProtectedRoute>
                    </CurrentUserContext.Provider>
                </Switch>
                <Footer />
            </div>
        </div>
    );
}

export default App;