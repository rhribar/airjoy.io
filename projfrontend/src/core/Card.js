import React , {useState} from 'react'
import ImageHelper from './helper/ImageHelper';
import {Redirect} from "react-router-dom"
import { addItemToCart, removeItemFromCart } from './helper/cartHelper';
import { isAuthenticated } from '../auth/helper';

import "../static/sass/main.css";

const Card = ({
    product,
    addtoCart = true,
    removeFromCart = false,
    reload = undefined,
    setReload = f => f,

}) => {

    const [redirect, setRedirect] = useState(false);

    const cartTitle = product ? product.name : "A photo from pexels"
    const cartDescription = product ? product.description : "Default description"
    const cartPrice = product ? product.price : "Default"

    const addToCart = () => {
        if(isAuthenticated()) {
            addItemToCart(product, ()=> setRedirect(true))
            console.log("Added to cart");
        } else {
            console.log("Login Please!");
        }
    };

    const getAredirect = redirect => {
        if (redirect) {
            return <Redirect to = "/cart" />;
        }
    }

    const showAddToCart = addToCart => {
        return(
            addtoCart && (
            <button
              onClick={addToCart}
            >
              Add to Cart
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
      <div class="card">
        <div className="card__body">
          {getAredirect(redirect)}
          <ImageHelper product = {product}/>
          <div className="card__header">{cartTitle}</div>
          <p class="card__description">
            {cartDescription}
          </p>
          <p class="card__price">$ {cartPrice}</p>
          <div>
          See details
            {/* <div className="col-12">
              {showAddToCart(addToCart)}
            </div>
            <div className="col-12">
             {showRemoveFromCart(removeFromCart)}
            </div> */}
          </div>
        </div>
      </div>
    );
  };

export default Card;
