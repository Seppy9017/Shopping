import createCard from "./utils/createCart.js";
import { getData, saveUser } from "./utils/httpReq.js";
import { shortText } from "./utils/stringFunc.js";

const mainContent = document.getElementById("container");
const body = document.querySelector("body");
const cartList = document.getElementById("cart-list");

const showCart = async () => {
  const allCarts = await getData("carts");
  mainContent.innerHTML = "";
  mainContent.innerHTML += `   
   <section id="cart">
      <h3>Cart</h3>
      <section id="cart-list"><h5>Empty</h5></section>
    </section>`;

  createCard(allCarts);
};

document.addEventListener("DOMContentLoaded", showCart);
