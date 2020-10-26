import React, {useState, useEffect} from 'react'; //
import Base from './Base';

import {getProducts} from "./helper/coreapicalls";

import"../styles.css";
import Card from './Card';

export default function Home() {
//set products managed by use state, not specified separatedly
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
/*
    useEffect(() => {
    
      loadAllProducts();
   }, []); */

    useEffect(loadAllProducts, [] )



    //looping through products
    return (
      <Base title = "Home Page" description = "Welcome to T-shirt store">
          <h1>Home Component</h1>
          <div className = "row">
            {products.map( (product, index) => {
              return(
                <div key = {index} className = "col-4 mb-4">
                  <Card product = {product} />
                </div>
              );
            })} 
        </div>
      </Base>
    );
}

/*
import React, { useState, useEffect } from "react";

import { getProducts } from "./helper/coreapicalls";



export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts()
      .then((data) => {
        if (data.error) {
          setError(data.error);
          console.log(error);
        } else {
          setProducts(data);
        }
      });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <div className="row">
      <h1>Home component</h1>
        {products.map((product, index) => {
          return (
            <div key={index} className="col-4 mb-4">
            </div>
          );
        })}
      </div>
  );
}

*/

    /*const loadAllProducts = () => {
        getProducts()
          .then((data) => {
            if (data.error) {
              setError(data.error);
              console.log(error);
            } else {
              setProducts(data);
            }
          });
      };*/
/*
    useEffect(() => {
        loadAllProducts(); // loads the products
    }, []);
*/