import React from 'react'
import logo from '../static/img/logo-1x.png';
import {Link, withRouter} from "react-router-dom";

const Footer = () => {
    return (// btrsp classes incoming
        <div className="footer">
            <div className="footer__container">     
            <Link to  = "/">
            <img src={logo} alt="Logo" className="footer__logo"/>
            </Link>
                <ul className="footer__list">
                    <li className="footer__list--heading">
                        <Link to  = "/">Company</Link>
                    </li>
                    <li className="footer__list--item">
                        <Link to  = "/">About</Link>
                    </li>
                    <li className="footer__list--item">
                        <Link to  = "/">Newsroom</Link>
                    </li>
                    <li className="footer__list--item">
                        <Link to  = "/">Contact</Link>
                    </li>
                </ul>

                <ul className="footer__list">
                    <li className="footer__list--heading">
                        <Link to  = "/">Programs</Link>
                    </li>
                    <li className="footer__list--item">
                        <Link to  = "/">Advertise on Airjoy</Link>
                    </li>
                    <li className="footer__list--item">
                        <Link to  = "/">Airjoy Winter Events</Link>
                    </li>
                    <li className="footer__list--item">
                        <Link to  = "/">Airjoy Summer Events</Link>
                    </li>
                </ul>

                <ul className="footer__list">
                    <li className="footer__list--heading">
                        <Link to  = "/">Support</Link>
                    </li>
                    <li className="footer__list--item">
                        <Link to  = "/">Help Center</Link>
                    </li>
                    <li className="footer__list--item">
                        <Link to  = "/">Community Guidelines</Link>
                    </li>
                    <li className="footer__list--item">
                        <Link to  = "/">Transparency</Link>
                    </li>
                </ul>

                <ul className="footer__list">
                    <li className="footer__list--heading">
                        <Link to  = "/">Legal</Link>
                    </li>
                    <li className="footer__list--item">
                        <Link to  = "/">Cookies Policy</Link>
                    </li>
                    <li className="footer__list--item">
                        <Link to  = "/">IP Policy</Link>
                    </li>
                    <li className="footer__list--item">
                        <Link to  = "/">Terms of Service</Link>
                    </li>
                </ul>
                </div> 
        </div>
    );
}

export default Footer;