import React, {useState, useEffect} from 'react'; //
import Base from './Base';

import {getProducts} from "./helper/coreapicalls";

import Card from './Card';
import Search from "./Search";

import "../static/sass/main.css"
/* import video from "../static/img/heading-video.mp4"; */
/* import img from "../static/img/homepage.jpg"; */
import Footer from "./Footer.js"

import Navigation from "./Navigation"


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
      <Navigation></Navigation>
      {/* <div className="image">
        <img className="image__content" src={img}></img>
      </div> */}
      <div className="header-img">
      <Base title = "Enjoy your day. We provide the fun!" description = "" className="title"></Base>
      {/* <div className="image">
        <img className="image__content" src={img}></img>
      </div> */}
      {/* <div className="bg-video">
        <video className="bg-video__content" src={video} type="video/mp4" autoPlay={true} muted></video>
      </div> */}

        <Search></Search>
        </div>

          <div className="section-discover">
            <h1 className="heading-primary">Discover</h1>
            <div className = "row card-wrapper">   
              {products.map((product, index) => {
                return(
                  <div key = {index} className = "col-1-of-3">
                    <Card product = {product}/>
                  </div>
                );
              })} 
            </div>
          </div>
      {/* <Footer/> */}
      </div>
    );
}