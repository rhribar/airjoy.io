import React, {Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";
import { signout , isAuthenticated } from '../auth/helper';



const currentTab = (history, path) => {
    if(history.location.pathname === path) {
        return {color: "#00EDF9"};
    } else {
        return { color: "#000000"};
    }
}

const Menu = ({history, path}) => {
    return (
        <div>
            <ul className ="nav nav-tabs bg-light">
                <li className ="nav-item">
                    <Link 
                        style={currentTab(history, "/")} 
                        className ="nav-link" 
                        to  = "/"
                    >
                        Home
                    </Link>
                </li>
                <li className ="nav-item">
                    <Link 
                        style={currentTab(history, "/discover")} 
                        className ="nav-link" 
                        to  = "/discover"
                    >
                        Discover
                    </Link>
                </li>
                <li className ="nav-item">
                    <Link 
                        style={currentTab(history, "/winter")} 
                        className ="nav-link" 
                        to  = "/winter"
                    >
                        Winter
                    </Link>
                </li>
                <li className ="nav-item">
                    <Link 
                        style={currentTab(history, "/summer")} 
                        className ="nav-link" 
                        to  = "/summer"
                    >
                        Summer
                    </Link>
                </li>
                <li className ="nav-item">
                    <Link 
                        style={currentTab(history, "/sell")} 
                        className ="nav-link" 
                        to  = "/sell"
                    >
                        Sell
                    </Link>
                </li>
                <li className ="nav-item">
                    <Link 
                        style={currentTab(history, "/support")} 
                        className ="nav-link" 
                        to  = "/support"
                    >
                        Support
                    </Link>
                </li>
                <li className ="nav-item">
                    <Link 
                        style={currentTab(history, "/cart")} 
                        className ="nav-link" 
                        to  = "/cart"
                    >
                        Cart
                    </Link>
                </li>
                {isAuthenticated() && (
                    <li className ="nav-item">
                    <Link 
                        style={currentTab(history, "/user/dasboard")} 
                        className ="nav-link" 
                        to  = "/user/dasboard"
                    >
                        Dashboard
                    </Link>
                </li>
                )}
                
                {!isAuthenticated() && (
                    <Fragment>
                            <li className ="nav-item">
                        <Link 
                            style={currentTab(history, "/signin")} 
                            className ="nav-link" 
                            to  = "/signin"
                        >
                            <button type="button" class="btn btn-primary">Login</button>
                        </Link>
                    </li>
                    <li className ="nav-item">
                        <Link 
                            style={currentTab(history, "/signup")} 
                            className ="nav-link" 
                            to  = "/signup"
                        >
                            <button type="button" class="btn btn-primary">Signup</button>
                        </Link>
                    </li>
                    </Fragment>
                )}
                {isAuthenticated() && (
                    <li className ="nav-item">
                        <span 
                        onClick= {() => {
                            signout(() => {
                                history.push("/");
                            })
                        }}
                        className = "nav-link text-warning">
                            Signout
                        </span>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default withRouter(Menu); //adaptable menus