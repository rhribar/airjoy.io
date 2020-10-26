import React, { Component } from 'react';
import {Route, Redirect} from "react-router-dom";

import { isAuthenticated } from "./index";

const PrivateRoutes = ({component: Component, ...rest }) => {
    return (
        <Route
          {...rest}
          render= { props =>
            isAuthenticated() ? (
              <Component {...props} /> //writing as a children, not a separate component
            ) : (
              <Redirect
                to={{
                  pathname: "/signin",
                  state: { from: props.location }, //because I havent destructured the prop properly, need to say prop.smth, actually this is false
                }}
              />
            )
          }
        />
    );
};

export default PrivateRoutes;
