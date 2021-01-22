import React from "react";
import './App.css';
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import { Route, Switch } from 'react-router-dom';
import '../../vendor/fonts/fonts.css';
import Footer from "../Footer/Footer";
import PopupTypeRegister from "../PopupTypeRegister/PopupTypeRegister";
import PopupTypeLogin from "../PopupTypeLogin/PopupTypeLogin";
import PopupTypeSuccess from "../PopupTypeSuccess/PopupTypeSuccess";


function App() {
    const [isMenuOpen, setMenuOpen] = React.useState(false);
    const [isPopupTypeLoginOpen, setPopupTypeLoginOpen] = React.useState(false);
    const [isPopupTypeRegisterOpen, setPopupTypeRegisterOpen] = React.useState(false);
    const [isPopupTypeSuccessOpen, setPopupTypeSuccessOpen] = React.useState(false);
    const [loggedIn, setLoggedIn] = React.useState(true);
    // eslint-disable-next-line
    const [isRegister, setIsRegister] = React.useState(false);
    // eslint-disable-next-line
    const [isLoading, setIsLoading] = React.useState(false);
    const name = "Кристина";

    const handleToggleMenuClick = () => {
        setMenuOpen(!isMenuOpen);
    }

    const handleCloseMenuClick = () => {
        setMenuOpen(false);
    }

    const handleCloseAllClick = () => {
        setPopupTypeLoginOpen(false);
        setPopupTypeRegisterOpen(false);
        setPopupTypeSuccessOpen(false);
    }

    const handlePopupTypeLoginOpen = () => {
        setPopupTypeLoginOpen(true);
    }

    const handlePopupTypeRegisterOpen = () => {
        setPopupTypeRegisterOpen(true);
    }

    const handleLogOut = () => {
        setLoggedIn(false);
    }

    const handlePopupOpenDetector = () => {
        return isPopupTypeLoginOpen || isPopupTypeRegisterOpen || isPopupTypeSuccessOpen;
    }

    return (
        <div className="page">
            <div className="page__cover">
                <Switch>
                    <Route exact path="/">
                        <Main
                            isOpen={isMenuOpen}
                            onLoginPopupOpen={handlePopupTypeLoginOpen}
                            handleToggleMenuClick={handleToggleMenuClick}
                            name={name}
                            loggedIn={loggedIn}
                            onClose={handleCloseMenuClick}
                            handleLogOut={handleLogOut}
                            isPopupOpen={handlePopupOpenDetector}
                            loading={isLoading} />
                        <PopupTypeLogin
                            isOpen={isPopupTypeLoginOpen}
                            onClose={handleCloseAllClick}
                            onRegisterPopupOpen={handlePopupTypeRegisterOpen} />
                        <PopupTypeRegister
                            isOpen={isPopupTypeRegisterOpen}
                            onClose={handleCloseAllClick}
                            onLoginPopupOpen={handlePopupTypeLoginOpen} />
                        <PopupTypeSuccess
                            isOpen={isPopupTypeSuccessOpen}
                            isRegister={isRegister}
                            onClose={handleCloseAllClick}
                            onLoginPopupOpen={handlePopupTypeLoginOpen} />
                    </Route>
                    <Route path="/saved-news">
                        <SavedNews
                            isOpen={isMenuOpen}
                            onLoginPopupOpen={handlePopupTypeLoginOpen}
                            handleToggleMenuClick={handleToggleMenuClick}
                            name={name}
                            loggedIn={loggedIn}
                            onClose={handleCloseMenuClick}
                            handleLogOut={handleLogOut}
                            loading={isLoading} />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </div>
    );
}

export default App;