import React, {Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";
import { signout , isAuthenticated } from '../auth/helper';
import logo from '../static/img/logo-1x.png';

const currentTab = (history, path) => {
    if(history.location.pathname === path) {
        return {color: "#00EDF9"};
    } else {
        return { color: "#000000"};
    }
}

const Navigation = ({history, path}) => {
    return (
        <div className="navigation">
            <div class="navigation__logo-box">
                <Link 
                    style={currentTab(history, "/")}   
                    to  = "/"
                >
                <img src={logo} alt="Logo" className="navigation__logo"/>
                </Link>
            </div>
            <ul class="navigation__list">
                <li class="navigation__item">
                    <Link 
                        style={currentTab(history, "/")} 
                        class="navigation__link"  
                        to  = "/"
                    >
                        Home
                    </Link>
                </li>
                <li class="navigation__item">
                    <Link 
                        style={currentTab(history, "/discover")} 
                        className="navigation__link" 
                        to  = "/"
                    >
                        Discover
                    </Link>
                </li>
                <li class="navigation__item">
                    <Link 
                        style={currentTab(history, "/winter")} 
                        class="navigation__link" 
                        to  = "/"
                    >
                        Winter
                    </Link>
                </li>
                <li class="navigation__item">
                    <Link 
                        style={currentTab(history, "/summer")} 
                        class="navigation__link" 
                        to  = "/"
                    >
                        Summer
                    </Link>
                </li>
            </ul>
            <div class="navigation__buttons">
                <li class="navigation__item">
                    <Link 
                        style={currentTab(history, "/cart")} 
                        class="navigation__link" 
                        to  = "/cart"
                    >
                        <i class="fas fa-shopping-cart navigation__cart"></i>
                    </Link>
                </li>
                    {!isAuthenticated() && (
                        <Fragment>
                        <li>
                            <Link 
                                class="navigation__link navigation__buttons--white" 
                                to  = "/signin"
                            >
                            Login
                            </Link>
                        </li>
                        <li>
                            <Link 
                                class="navigation__link navigation__buttons--blue" 
                                to  = "/signup"
                            >
                            Signup
                            </Link>
                        </li>
                        </Fragment>
                    )}
                    {isAuthenticated() && (
                        <li class="button button--blue">
                            <span 
                            onClick= {() => {
                                signout(() => {
                                    history.push("/");
                                })
                            }}
                            class = "button--blue">
                                Signout
                            </span>
                        </li>
                    )}
                </div>
        </div>
    );
};

export default withRouter(Navigation); //adaptable menus