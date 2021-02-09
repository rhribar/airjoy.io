import React from 'react';

const WeatherAPI = {
    key: "b3cddb8bf681836ecaa6f56b672d056b",
    base: "api.openweathermap.org/data/2.5/"
}

const Weather = ({
    location

}) => {

    /* let res = "0"; */
    /* const search = () => {
        return fetch(`${WeatherAPI.base}weather?q=${location}&appid=${WeatherAPI.key}`)
        .then(res => {res.json();console.log(res.body)})
        
        .catch((err) => console.log(err));
       
    }
    search(); */


    fetch(`${WeatherAPI.base}weather?q=${location}&appid=${WeatherAPI.key}`)
            .then(res => res.json())
            .then(result => console.log("result, result"));


    /* const search = () => {
        const fetchedData = fetch(`${WeatherAPI.base}weather?q=${location}&appid=${WeatherAPI.key}`)
            .then(res => {res.json(); console.log(res)})
            .then(result => {console.log(result); return result});
        
        return fetchedData;
        
        } */
    
    
    
    /* search(); */

    return (
        <div>
            {/* {console.log(`${WeatherAPI.base}weather?q=${query}&units=metric&APPID=${WeatherAPI.key}`)} */}
            {/* {console.log(search())} */}
        </div>
    )
}

export default Weather;