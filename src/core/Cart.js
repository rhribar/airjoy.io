import React, {useState, useEffect} from 'react'
import Base from './Base';

import Card from "./Card";
import { loadCart } from './helper/cartHelper';
import PaymentB from "./PaymentB";
import Navigation from './Navigation';
import Footer from './Footer'
import CardBig from "./CardBig";

const Cart = () => {
    const [reload, setReload] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(loadCart());
    }, [reload]);

    const loadAllProducts = (products) => {
        return(
            <div>
                {products.map((product, index) => (
                    <CardBig
                        key= {index}
                        product = {product}
                        removeFromCart={true}
                        addtoCart={false}
                        reload = {reload}
                        setReload={setReload}
                    />
                ))}
            </div>
        );
    };
    
    const loadCheckout = () => {
        return(
            <div>
                <h1>Checkout</h1>
            </div>
        );
    };

return (
  <div>
    <Navigation></Navigation>
      <Base title="Cart page" description="Welcome to checkout!" className="space"></Base>
      <div>
        {products.length > 0 ? (loadAllProducts(products)) : (
          <h4>No products</h4>
        )}
        </div>
          <div className="row text-center">
            {products.length > 0 ? (
                <PaymentB products={products} setReload={setReload} />
              )
              : (
                <h3>Please login or add something in cart</h3>
              )}
              {loadCheckout()}
          </div>
      <Footer></Footer>
    </div>
  );
};

export default  Cart;