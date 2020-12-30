// regular stuff goes here
import "../static/sass/main.css";

import video from "../static/img/heading-video.mp4";

import React from 'react'
import Navigation from './Navigation';

const Base = ({
    title = "My Title", //some basic values
    description = "My description",
    className = "", //background, text color, padding
    children //children makes it possible to reuse the components
}) => {
    return (// btrsp classes incoming
        <div>      
            <Navigation/>
            <div>
                <div class="bg-video">
                    <video class="bg-video__content" src={video} type="video/mp4" autoPlay={true} muted>
                    </video>
                </div>
                <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet"></link>
                <div>
                    <h2 class="title">{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>
            <footer>
                <div>
                    <h4>If you got any questions, reach me out at instagram.</h4>
                    {/* <button className = "btn btn-warning btn-lg">Contact Us</button> */}
                    {/* <div className="container">
                    </div> */}
                </div>
            </footer>
        </div>
    );
}

export default Base