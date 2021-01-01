import React, {useState, useEffect} from 'react'; //
import Base from './Base';

import {getProducts} from "./helper/coreapicalls";

import Card from './Card';
import Search from "./Search";

import "../static/sass/main.css"
import video from "../static/img/heading-video.mp4";


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


    useEffect(loadAllProducts, [] )



    // looping through products
    return (
      <div className = "main">
      <Base title = "Enjoy your day. We provide the fun!" description = "" class="title">
      <div class="bg-video">
        <video class="bg-video__content" src={video} type="video/mp4" autoPlay={true} muted></video>
      </div>
        <Search></Search>
        <div class="section-discover">
          <h1 class="heading-primary">Discover</h1>
          <div class = "row">   
            {products.map((product, index) => {
              return(
                <div key = {index} className = "col-1-of-3">
                  <Card product = {product} />
                </div>
              );
            })} 
          </div>
          </div>
      </Base>
      </div>
    );
}