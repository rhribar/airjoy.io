// regular stuff goes here
import "../static/sass/main.css";



import React from 'react'


const Base = ({
    title = "My Title", //some basic values
    description = "My description",
    className = "", //background, text color, padding
    children //children makes it possible to reuse the components
}) => {
    return (// btrsp classes incoming
        <div>      
            <div>
                <div>
                    <h2 class="title">{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>
        </div>
    );
}

export default Base