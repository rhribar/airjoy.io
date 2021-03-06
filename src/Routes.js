import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import Cart from "./core/Cart";

import Home from "./core/Home";
import ProductPage from "./core/ProductPage";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import UserDashboard from "./user/UserDashboard";
import Discover from "./core/Discover";
import Winter from "./core/Winter";
import Summer from "./core/Summer";

//delete this
import {useState, useEffect} from 'react';


import {getProducts} from "./core/helper/coreapicalls";


const Routes = (
    product,
) => {


    const [products, setProducts] = useState([]); 
    const [error, setError] = useState(false);

    const loadAllProducts = () => {
        getProducts()
          .then((data) => {
            if(data.error) {
              setError(data.error); //box filled with data error
              console.log(error); // message "error"
            } else {
              setProducts(data); // box filled with data product
            }
          });
    };
    //console.log(products);

    useEffect(loadAllProducts, [] );


    /* Creating the product routes dynamically. */
    return(
        <Router>
            <Switch>
                <Route path = "/" exact component= {Home} />
                <Route path = "/signup" exact component= {Signup} />  
                <Route path = "/signin" exact component= {Signin} />

                {products.map(product =>
                    <Route exact path={`/${product.product_url}`} component={ProductPage} />
                )}  

                {/* <Route path = "/discover" exact component = {Discover} /> */}
                <Route path = "/discover" render={(props) => <Discover {...props}/>} />
                <Route path = "/winter" exact component = {Winter} />
                <Route path = "/summer" exact component = {Summer} />

                <Route path = "/cart" exact component= {Cart} />
                <PrivateRoutes path = "/user/dashboard" exact component ={UserDashboard}/>
            </Switch>
        </Router>
    );
};

export default Routes;