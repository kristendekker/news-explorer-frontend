import React from "react";
import './Logo.css';
import { useLocation, Link } from 'react-router-dom';

const Logo = () => {
    const location = useLocation();

    return (
        <Link className="hover-effect logo__link" to="/">
            <div className={location.pathname === '/saved-news' ? "logo logo_type_saved-news" : "logo logo_type_main"} />
        </Link>
    )
}

export default Logo;