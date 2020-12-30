import React from 'react'

const ImageHelper = ({ product }) => {
    const imageurl = product ? product.image 
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    
    return ( // padding  of 2
        <div class="card__image"> 
            <img 
            src = {imageurl}
            style = {{ maxHeight:"100%", maxWidth: "100%" }}
            className = "mb-3 rounded"
            alt=""
            />
        </div>
    )
}

export default ImageHelper
