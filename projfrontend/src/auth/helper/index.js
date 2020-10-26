/*
import {API} from "../../backend"
import {cartEmpty} from "../../core/helper/cartHelper" 
// I want to reset the cart after user signs out

export const signup = (user) => {
    return fetch(`${API}user/`, { // error
        method:"POST", // we want a post request
        headers: {
            Accept: "application/json", // we are expecting a json
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user), // user will be able to signup
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const signin = (user) => { // passing  in an user
    const formData = new FormData(); 

    for(const name in user) { // we are adding fictional data
        console.log(user[name]);
        formData.append(name, user[name]);
    }
    //Basically the same
    const {email, password} = user;
    const formData = new FormData();
    formData.append('email', email)
    formData.append('apssword', password) 

    for(var key of formData.keys()) {
        console.log("MYKEY: ", key);
    }

    return fetch(`${API}user/login`, {
        method: "POST",
        body: formData,
    })
        .then(response => { // if everything ok, do this
            console.log("SUCCESS", response);
            return response.json();
        })
        .catch(err => console.log(err));

}

export const authenticate = (data, next) => {
    if(typeof windows !== undefined) {
        localStorage.setItem("jwt", JSON.stringify(data)); //custom cookie, key
        next(); //middleware
    }
}

export const isAuthenticated = () =>  {
    if(typeof window == undefined) {
        return false
    }
    if(localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"))
        //TODO: compare JWT with database json token
    } else {
        return false;
    }
};

export const signout = next =>  {
    const userId = isAuthenticated() && isAuthenticated().user.userId

    if(typeof window !== undefined) {
        localStorage.removeItem("jwt")
        cartEmpty(() => {});
        next();
// double check the next line url
        return fetch(`${API}user/logout/${userId}` , { 
            method: "GET"
        })
        .then (response => {
            console.log("Signout success")
            next();
        })
        .catch((err) => console.log(err));
    }
}
*/

import { API } from "../../backend";
import { cartEmpty } from "../../core/helper/cartHelper";

export const signup = (user) => {
  return fetch(`${API}user/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const signin = (user) => {
  const formData = new FormData();

  for (const name in user) {
    console.log(user[name]);
    formData.append(name, user[name]);
  }

  // const {email, password} = user;
  // const formData = new FormData();
  // formData.append('email', email)
  // formData.append('password', password)

  for (var key of formData.keys()) {
    console.log("MYKEY: ", key);
  }

  return fetch(`${API}user/login/`, {
    method: "POST",

    body: formData,
  })
    .then((response) => {
      console.log("SUCCESS", response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const authenticate = (data, next) => {
  if (typeof window !== undefined) {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == undefined) {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
    //TODO: compare JWT with database json token
  } else {
    return false;
  }
};

export const signout = (next) => {
  const userId = isAuthenticated() && isAuthenticated().user.id;

  console.log("USERID: ", userId);

  if (typeof window !== undefined) {
    localStorage.removeItem("jwt");
    cartEmpty(() => {});
    //next();

    return fetch(`${API}user/logout/${userId}`, {
      method: "GET",
    })
      .then((response) => {
        console.log("Signout success");
        next();
      })
      .catch((err) => console.log(err));
  }
};