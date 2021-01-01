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
                <img src = {product.image} class= "product__image" alt={`${product.name} mountain`} />
                <div class="product__info">
                    <div class="product__heading">
                        <div class="product__heading--name">{product.name}</div>
                        <div class="product__heading--location"><i class="fas fa-map-marker-alt"></i>{product.country}, {product.mountains}</div>
                        <div class="product__heading--peak"><i class="fas fa-mountain"></i>{product.peak_altitude} m</div>
                    </div>
                    <div class="product__ratings">
                        <div class="product__ratings--resort">Resort Rating {product.rating_resort}</div>
                        <div class="product__ratings--family">Family Friendly Rating {product.rating_family}</div>
                        <div class="product__ratings--scenery">Scenery Rating {product.rating_scenery}</div>
                    </div>
                    <div class="product__slopes">
                        <div class="product__slopes--easy"><i class="fas fa-circle"></i>{product.slopes_easy} km</div>
                        <div class="product__slopes--medium"><i class="fas fa-circle"></i>{product.slopes_medium} km</div>
                        <div class="product__slopes--hard"><i class="fas fa-circle"></i>{product.slopes_hard} km</div>
                        <div class="product__slopes--total">ALL {product.slopes_total} km</div>
                    </div>
                    <div class="product__snow">
                        <div class="product__snow--mountain">{product.snow_mountain}</div>
                        <div class="product__snow--valley">{product.snow_valley}</div>
                    </div>
                    <div class="product__description">{product.description_long}</div>
                    <div class="product__price">{product.price}</div>
                </div>
            </div>
            
            
            {products.map(product1 =>
                    <Route exact path={`/${product1.name}`} component={Signup} />
            )}  
        </div> 
    )
};

export default ProductPage;