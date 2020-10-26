

export const addItemToCart = (item, next) => {

    let cart = [] //array cart, empty array
    if (typeof window !== undefined){ // we dont want to lose data, check for it
        if(localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"))
        }
        
        cart.push({
            ...item
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        next(); // enables chaining
    }

}


export const loadCart = () => {
    if(typeof window !== undefined) {
        if(localStorage.getItem("cart")) {
            return JSON.parse(localStorage.getItem("cart")) //returns cart in json format
        }
    }
}

export const removeItemFromCart = productId => {
    let cart = []; // empty cart
    if (typeof windows !== undefined) { // if on browser
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        cart.map((product, i) => {
            if (product._id === productId) {
                cart.splice(i, 1); // on index i, removes one item (1)
            }
        });
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    return cart;
};

export const cartEmpty = next => { //next = redirects the user
    if (typeof windows !== undefined) {
        localStorage.removeItem("cart")
        let cart = [] // an empty cart to avoid error
        localStorage.setItem("cart", JSON.stringify(cart));
        next()
    }
}
