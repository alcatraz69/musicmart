import axios from "axios";

const API = axios.create({ baseURL: "https://musicmart.herokuapp.com" });

const config = () => {
  return {
    headers: {
      authorization:
        "Bearer " + JSON.parse(localStorage.getItem("MusicmartLogin"))?.token,
    },
  };
};

export const fetchProducts = () => API.get("/products");
export const register = ({ name, email, password, cpassword }) =>
  API.post("/register", {
    name,
    email,
    password,
    cpassword,
  });

export const login = ({ email, password }) =>
  API.post("/login", {
    email,
    password,
  });

export const getWishlist = () => API.get("/getwishlist", config());

export const getCart = () => API.get("/getcart", config());

export const addToWishlist = (product) =>
  API.post("/addtowishlist", { product: { product: product._id } }, config());

export const removeFromWishlist = (product) =>
  API.post(
    "/removeitemfromwishlist",
    { product: { product: product._id } },
    config()
  );

export const addToCart = (product) =>
  API.post("/addtocart", { product: { product: product._id } }, config());

export const removeFromCart = (product) =>
  API.post(
    "/removeitemfromcart",
    { product: { product: product._id } },
    config()
  );

export const incrementQuantity = (cartId) =>
  API.put("/incrementquantity", { cartId }, config());

export const decrementQuantity = (cartId) =>
  API.put("/decrementquantity", { cartId }, config());
