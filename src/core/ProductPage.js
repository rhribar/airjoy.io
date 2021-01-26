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

const ProductPage = ({
    product,
}) => {
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
    
    var product = "";
    var productName = "Plan de Corones";
    for(var i = 0; i < products.length; i++) {
        if(products[i].name == productName ) {
            product = products[i];
        }
    }
    for(var i = 0; i < products.length; i++) {
        console.log(products[i].prod);
    }
    console.log(products);

    useEffect(loadAllProducts, [] )
    
/*     const cartTitle = product ? product.name : "A photo from pexels"
    const cartDescription = product ? product.description : "Default description"
    const cartPrice = product ? product.price : "Default" */
    return (
        <div>
            <Navigation/>
            
            <div class="product">
                
                <div class="product__header">
                    {/* <span className={locationFonts['flaticon-location']}></span> */}
                    <img src = {product.image} class= "product__image" alt={`${product.name} mountain`} />
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
                            {/* <div class="product__snow">
                                <div class="product__snow--mountain">{product.snow_mountain}</div>
                                <div class="product__snow--valley">{product.snow_valley}</div>
                            </div> */}
                            <div className="product__buttons">
                                <div className="signin__form__button">
                                    <button className="button navigation__buttons--blue button--page product__button--cart">Add To cart</button>
                                </div>
                                <div className="signin__form__button">
                                    <button className="button navigation__buttons--blue button--page product__button--buy">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="product__prices">
                    <h2 className="product__prices--heading">prices per season</h2>
                    <img src={prices} alt="Seasonal prices" className="product__prices--table"></img>
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
                    <h2 className="product__prices--heading">weather</h2>
                    
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




            
            {products.map(product1 =>
                    <Route exact path={`/${product1.name}`} component={Signup} />
            )}  
        </div> 
    )
};

export default ProductPage;