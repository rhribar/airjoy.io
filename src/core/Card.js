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
    console.log(product)
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

    const getAredirect = (redirect) => {
        if (redirect) {
          console.log(redirect);
            /* return <Redirect to=`/${product}` />; */
            console.log(`/${product.product_url}`)
            return <Redirect to={`/${product.product_url}`} />
        }
        /* console.log(`/${product.product_url}`) */
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

    const reactIsHard = () =>  {console.log("2")}


    return (
      <div class="card" >
        <div className="card__container">
          {getAredirect(redirect)}
          <ImageHelper product = {product}/>
          <div className="card__header">{cartTitle}</div>
          <p className="card__description">
            {cartDescription}
          </p>
          <p className="card__price">$ {cartPrice}</p>
          <div className="card__button" onClick={() => setRedirect(true)}>
          {/* onClick={reactIsHard} */}
            See Details</div>
            {/* <div className="col-12">
              {showAddToCart(addToCart)}
            </div>
            <div className="col-12">
             {showRemoveFromCart(removeFromCart)}
            </div> */}
        </div>
      </div>
    );
  };

export default Card;
