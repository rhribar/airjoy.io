/*import {API} from "../../backend";

export const getProducts = () => {
    return fetch(`${API}product`, { method: "GET" })  // dont add a slash
    .then((response) => {
        return response.json();
    })
    .catch((err) => console.log(err));
}; */

import { API } from "../../backend.js";

export const getProducts = () => {
   return fetch(`${API}product`, { method: "GET" })
    .then(response => response.json())
    .catch((err) => console.log(err));
};
