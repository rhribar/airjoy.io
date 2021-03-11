import React, {useState, useEffect} from 'react'; //
import Base from './Base';

import {getProducts} from "./helper/coreapicalls";
import {Redirect} from "react-router-dom"
import Card from './Card';
import Search from "./Search";

import "../static/sass/main.css"
/* import video from "../static/img/heading-video.mp4"; */
import img1 from "../static/img/winter_img.png";
import img2 from "../static/img/summer_img.png";
import img3 from "../static/img/teambuilding.png";

import Footer from "./Footer.js"

import Navigation from "./Navigation"


export default function Home() {
//set products managed by use state, not specified separatedly
    const [products, setProducts] = useState([]); 
    const [error, setError] = useState(false);
    const [searchTerm, setSearchTerm] = useState();
    const [redirect, setRedirect] = useState(false);

    /* let search = ""; */

    let handleChange = event => {
      setSearchTerm(event.target.value)
      console.log(searchTerm)

    };
    

    /* console.log(searchTerm); */
    
    let handleSubmit = (e) => {
      e.preventDefault();
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

    const customRedirect = (path) => {
        /* console.log(redirect); */
          /* return <Redirect to=`/${product}` />; */
          /* console.log(`/$`) */
          console.log(1);
          console.log(`/${path}`)
      return <Redirect to={{
        pathname: `/discover`,
        }} />
      /* console.log(`/${product.product_url}`) */
    }


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
      {/* Find relevant information about your favorite ski resort! */}
      <div className="section-header--search">
      {/* <Search></Search> */}
      <Search value={searchTerm} onChange={handleChange} onSubmit={handleSubmit}/>
      {getAredirect(redirect)}
      </div>
      
      </div>
      </div>
        

          
          <div className="section-activities">
            <h1 className="heading-primary">Activites</h1>
            <h2 className="heading-secondary">Check out our collection of activities!</h2>
            <div class="smallcards-container">
            <div class="smallcard">
                <img src={img1} alt="winter" class="smallcard__image" onClick= {event =>  window.location.href='/winter'}/>
                <div class="smallcard__text">Winter Activites</div>
              </div>
              <div class="smallcard">
                <img src={img2} alt="summer" class="smallcard__image" onClick= {event =>  window.location.href='/summer'}/>
                <div class="smallcard__text">Summer Activites</div>
              </div>
              <div class="smallcard">
                <img src={img3} alt="teambuilding" class="smallcard__image" onClick= {event =>  window.location.href='/discover'}/>
                <div class="smallcard__text">Teambuildings</div>
              </div>
            </div>
          </div>
          <div className="section-discover">
            <h1 className="heading-primary">Discover</h1>
            {/* <h2 className="heading-secondary">Find relevant information about your favorite ski resort!</h2> */}
            <h2 className="heading-secondary">Discover new resorts, experiences and more!</h2>
            <div className = "card-wrapper">   
              {products.map((product, index) => {
                return(
                  <div key = {index}>
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