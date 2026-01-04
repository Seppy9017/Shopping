import createCard from "./utils/createCart.js";
import { getData, saveUser } from "./utils/httpReq.js";
import { shortText } from "./utils/stringFunc.js";

const mainContent = document.getElementById("container");
const body = document.querySelector("body");
const cartList = document.getElementById("cart-list");

const showCart = async () => {
  const allCarts = await getData("carts");
  mainContent.innerHTML = "";
  // body.innerHTML += `` 
    

    createCard(allCarts);
};

document.addEventListener("DOMContentLoaded", showCart);
