import React from "react";
import './Footer.css';
import Social from '../Social/Social'
import './Footer.css';
import FooterNavigation from "../FooterNavigation/FooterNavigation";

const Footer = () => {
    return (
        <footer className="footer">
            <span className="footer__copyright">&copy; 2020 Supersite, Powered by News API</span>
            <div className="footer__cover">
                <FooterNavigation />
                <Social />
            </div>
        </footer>
    )
}

export default Footer;