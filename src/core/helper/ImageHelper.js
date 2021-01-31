import React from 'react'

const ImageHelper = ({ product}) => {
    const imageurl = product ? product.image 
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    return (
        <div><img src = {imageurl} alt="" className="card__image"/></div>
    )
}

export default ImageHelper
/* style = {{ maxHeight:"100%", maxWidth: "100%" }} */