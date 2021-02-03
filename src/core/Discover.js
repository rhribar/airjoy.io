import React, {useState, useEffect} from 'react';
import Search from "./Search";
import "../static/sass/main.css"
import Footer from "./Footer.js"
import Navigation from "./Navigation"
import CardBig from "./CardBig"
import {getProducts} from "./helper/coreapicalls";
import { API } from "../backend.js";
import axios from 'axios'

export default function Discover() {

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

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(`${API}product/search/?search=${searchTerm}`,
          );
          setSearchResults(result.data);
          console.log(result.data)
        };
        fetchData();
    }, [searchTerm]);

    return (
        <div className = "discover">
        <Navigation></Navigation>
        <h1 className="title__secondary">Discover new resorts, experiences and more!</h1>

        <Search value={searchTerm} onChange={handleChange}/>
        <ul>
          {searchResults.map(product => {
            return(
                  <div>
                    <CardBig product = {product}/> 
                  </div>
                );
          })}
        </ul>
        <Footer></Footer>
        </div>
    );
}