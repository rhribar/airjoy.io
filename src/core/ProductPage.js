import React from 'react';
import {useState, useEffect} from 'react';
/* import Base from "../core/Base"; */
import ImageHelper from './helper/ImageHelper';
/* import {Link} from "react-router-dom"; */
import Navigation from './Navigation';
/* import Card from './Card'; */
import {getProducts} from "./helper/coreapicalls";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Signup from "../user/Signup";
import "../static/sass/main.css";
import locationFonts from '../static/icons/font/flaticon.css';
import prices from '../static/img/kronplatz-prices.png';
import soon from '../static/img/coming-soon.png'
import Footer from './Footer'

import { addItemToCart, removeItemFromCart } from './helper/cartHelper';
import { isAuthenticated } from '../auth/helper';
import {Redirect} from "react-router-dom"
import Weather from './Weather'

const ProductPage = ({
    product,
    addtoCart = true,
    removeFromCart = false,
    reload = undefined,
    setReload = f => f,
}) => {
    // loading all the products from api into state
    const [products, setProducts] = useState([]); 
    const [error, setError] = useState(false);
    const [redirect, setRedirect] = useState(false);
    
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

    var product = "";
    var productUrl = "";
    var pageUrl = window.location.pathname;
    for(var i = 0; i < products.length; i++) {
        var productUrl = `/${products[i].product_url}`;
        /* console.log(productUrl); */
        if(productUrl == pageUrl) {
            product = products[i];
        }
    }

    useEffect(loadAllProducts, [] )


    const addToCart = () => {
        if(isAuthenticated()) {
            addItemToCart(product, ()=> setRedirect(false))
            console.log("Added to cart");
        } else {
            console.log("Login Please!");
        }
    };

    const addToCartBuy = () => {
        if(isAuthenticated()) {
            addItemToCart(product, ()=> setRedirect(true))
            console.log("Added to cart");
        } else {
            console.log("Login Please!");
        }
    };



    const getAredirect = (redirect) => {
        if (redirect) {
          console.log(redirect);
            /* return <Redirect to=`/${product}` />; */
            /* console.log(`/${product.product_url}`) */
            return <Redirect to={`/cart`} />
        }
        /* console.log(`/${product.product_url}`) */
    }

    const showAddToCart = addToCart => {
        return(
            addtoCart && (
            <button
              onClick={addToCart}
              className="button navigation__buttons--blue button--page product__button--cart"
            >
              Add to Cart
            </button>
            )
        )
    }

    const showBuyNow = addToCartBuy => {
        return(
            addtoCart && (
            <button
              onClick={addToCartBuy}
              className="button navigation__buttons--blue button--page product__button--buy"
            >
              Buy Now
            </button>
            )
        )
    }



    const showRemoveFromCart = removeFromCart => {
        return(
            removeFromCart && (
            <button
              onClick={() => {
                  //TODO: handle this toos
                  removeItemFromCart(product._id);
                  setReload(!reload)
                  console.log("Product removed from cart");
              }}
              className="btn btn-block btn-outline-danger mt-2 mb-2"
            >
              Remove from cart
            </button>
            )
        )
    }



    return (
        <div>
            <Navigation/>
            <div class="product">
                <div class="product__header">
                    {/* {console.log(product)} */}
                    <img src = {product.image} class= "product__image" alt={`${product.name} mountain`} />
                    {/* {getAredirect(redirect)} */}
                    <div class="product__info">
                        <div class="product__heading">
                            <div class="product__heading--name">{product.name}</div>
                        </div>
                        <div class="product__basic">
                            <div class="product__heading--location"><i class="flaticon-location"></i>{product.country}, {product.mountains}</div>
                            <div class="product__heading--peak"><i class="flaticon-mountain"></i>{product.peak_altitude} m</div>
                            <div class="product__heading--load"><i class="flaticon-attachment"></i>Download your map!</div>
                            
                        </div>
                        <div class="product__slopes">
                            <div class="product__slopes--easy">Easy – {product.slopes_easy} km</div>
                            <div class="product__slopes--medium">Medium –   {product.slopes_medium} km</div>
                            <div class="product__slopes--hard">Hard –   {product.slopes_hard} km</div>
                            <div class="product__slopes--total">ALL –  {product.slopes_total} km</div>
                        </div>
                        <div className="product__title">RATINGS</div>
                        <div class="product__ratings">
                            <div class="product__ratings--resort"><div class="product__ratings--rating">{product.rating_resort}</div>RESORT</div>
                            <div class="product__ratings--family"><div class="product__ratings--rating">{product.rating_family}</div>FAMILY FRIENDLY</div>
                            <div class="product__ratings--scenery"><div class="product__ratings--rating">{product.rating_scenery}</div>SCENERY</div>
                        </div>
                        <div class="product__text">{product.description_long}</div>
                        <div className="product__buy">
                            <div class="product__price">{product.price} EUR</div>
                            
                                {/* {showAddToCart(addToCart)}
                                {showRemoveFromCart(removeFromCart)} */}
                                
                            {/* <div class="product__snow">
                                <div class="product__snow--mountain">{product.snow_mountain}</div>
                                <div class="product__snow--valley">{product.snow_valley}</div>
                            </div> */}
                            {/* <div className="product__buttons">
                                <div className="signin__form__button">
                                    <button className="button navigation__buttons--blue button--page product__button--cart">Add To cart</button>
                                </div>
                                <div className="signin__form__button">
                                    <button className="button navigation__buttons--blue button--page product__button--buy">Buy Now</button>
                                </div>
                            </div> */}

                            
                        </div>
                    </div>
                </div>
                <div className="product__buttons">
                    <div className="signin__form__button">
                        {showAddToCart(addToCart)} 
                    </div>
                    <div className="signin__form__button">
                        {showBuyNow(addToCartBuy)}
                        {getAredirect(redirect)}
                    </div>
                    {/* <div className="signin__form__button">
                        {showRemoveFromCart(removeFromCart)}
                    </div> */}
                </div>
                
                <div className="product__prices">
                    <h2 className="product__prices--heading">prices per season</h2>
                    <img src={prices} alt="Seasonal prices" className="product__prices--table"></img>
                    {/* <div className="row">
                        <div className="col-12">
                            {showAddToCart(addToCart)} 
                        </div>
                        <div className="col-12">
                            {showBuyNow(addToCart)}
                            {getAredirect(redirect)}
                        </div>
                        <div className="col-12">
                            {showRemoveFromCart(removeFromCart)}
                        </div>
                    </div> */}
                </div>

                <div className="product__description">
                    <h2 className="product__description--heading">description</h2>
                    <div className="product__description--block">
                        <div className="product__description--title">Accessbility</div>
                        <div className="product__description--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                    </div>
                    <div className="product__description--block">
                        <div className="product__description--title">Food / Drink</div>
                        <div className="product__description--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                    </div>
                    <div className="product__description--block">
                        <div className="product__description--title">Offpiste</div>
                        <div className="product__description--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
                    </div>                     
                </div>

                <div className="product__prices">
                    <h2 className="product__prices--heading">Weather</h2>
                    <div className="product__weather">
                        <div>
                        <Weather location = {product.location} ></Weather>
                        {console.log(product.location)}
                        </div>
                    </div> 
                </div>

                <div className="product__description">
                    <h2 className="product__description--heading">cameras</h2>
                    <div className="product__description--block">
                        <img src={soon} alt="Cameras" className="product__description--soon"></img>
                        <img src={soon} alt="Cameras" className="product__description--soon"></img>
                        <img src={soon} alt="Cameras" className="product__description--soon"></img>
                    </div>
                    
                </div>

                <div className="product__prices">
                    <h2 className="product__prices--heading">community</h2>
                    <p>Add a comment about your experience!</p>
                    <p>This feature will be enabled soon!</p>
                </div>

            </div>
            <Footer></Footer>
         
            {products.map(product1 => <Route exact path={`/${product1.name}`}/> )}  
        </div> 
    )
};

export default ProductPage;