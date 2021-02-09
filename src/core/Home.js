import React, {useState, useEffect} from 'react'; //
import Base from './Base';

import {getProducts} from "./helper/coreapicalls";
import {Redirect} from "react-router-dom"
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
    const [searchTerm, setSearchTerm] = useState();
    const [redirect, setRedirect] = useState(false);

    /* let search = ""; */
    let search;

    let handleChange = event => {
      /* event.preventDefault(); */
      /* e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation(); */
      /* event.nativeEvent.stopImmediatePropagation() */
      /* setSearchTerm(event.target.value); */
      /* let search = event.target.value; */
      /* console.log(event.target.value); */
      /* setRedirect(true); */
      setSearchTerm(event.target.value)
      /* search = event.target.value;
      console.log(search); */
      console.log(searchTerm)

    };
    

    /* console.log(searchTerm); */
    
    let handleSubmit = (e) => {
      e.preventDefault();
      /* handleChange(e); */
      /* console.log(search + "!"); */
      /* console.log("1"); */
      setRedirect(true);
    };




    //onsubmit

    const getAredirect = (redirect) => {
      if (redirect) {
        /* console.log(redirect); */
          /* return <Redirect to=`/${product}` />; */
          /* console.log(`/$`) */
          return <Redirect to={{
            pathname: `/discover`,
            state: {id: searchTerm }
            }} />
      }
      /* console.log(`/${product.product_url}`) */
    }

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
      <div className="section-header"> 
      <div className="section-header--image">
      {/* <Base title = "Enjoy your day. We provide the fun!" description = "" className="title"></Base> */}
      <div className="title">Enjoy your day. We provide the fun!</div>
      <div className="section-header--search">
      {/* <Search></Search> */}
      <Search value={searchTerm} onChange={handleChange} onSubmit={handleSubmit}/>
      {getAredirect(redirect)}
      </div>
      
      </div>
      </div>
        

          <div className="section-discover">
            <h1 className="heading-primary">Discover</h1>
            <h2 className="heading-secondary">Discover new resorts, experiences and more!</h2>
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
      <Footer></Footer>
      </div>
    );
}