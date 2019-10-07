import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a20907ec9bdb889981d502747b937ebbe9f2602a06f440392c58478257d5cdaa"
  }
});
//Metodo propio de Axios, para armar lo "fijo" aca y no repetir. Cada componente especificara otros datos que necesite.
