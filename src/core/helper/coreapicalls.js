import { API } from "../../backend.js";

export const getProducts = () => {
   return fetch(`${API}product`, { method: "GET" }) // dont add a slash
    .then(response => response.json())
    .catch((err) => console.log(err));
};
