import getCart from "./utils/createCart.js";
import { getData, postData, saveUser } from "./utils/httpReq.js";
import { shortenText } from "./utils/stringFunc.js";

const mainContent = document.getElementById("container");
const body = document.querySelector("body");
const logoutButton = document.getElementById("logout");
const Cart = document.getElementById("cart");
const cartList = document.getElementById("cart-list");

const newData = {
  id: 11,
  username: "john_doe",
  email: "john@example.com",
  password: "pass123",
};

const showCart = async () => {
  const newUser = await postData("users", newData);

  const getNewUser = await getData("users/11");
  console.log({ getNewUser, newUser });

  mainContent.innerHTML = "";
  const allCarts = await getData("carts");
  Cart.style.display = "flex";
  const cart = await getCart(allCarts);

  cart.forEach((pro) => {
    const { product, quantity } = pro;

    const qty = quantity;

    cartList.innerHTML = "";
    const jsx = `   
     <div>
       <img src=${product.image} alt=hello />
       <div id="cart-info">
       <h4>${shortenText(product.title)}</h4>
       <p>$ ${product.price}</p>
       </div> 
       <div id="cart-control">
       <span>Quantity : ${qty}</span>
       </div>  
     </div>
     `;
    Cart.innerHTML += jsx;
  });
};

const increase = (qty) => {
  qty += 1;

  showCart();
};
const decrease = (id) => {
  qty -= 1;

  showCart();
};
// const remove = (id) => {
//   const newProduct = allProducts.filter((p) => p.id !== +id);
//   allProducts = newProduct;
//   this.price.innerText = "0";
// };
const controlHandler = (event) => {
  const tagName = event.target.tagName;
  const id = event.target.dataset.id;
  const type = event.target.innerText;
  if (tagName !== "BUTTON") return;
  switch (type) {
    case "+":
      increase(id);
      break;

    case "-":
      decrease(id);
      break;
    //   case "Remove":
    //     remove(id);
    //     break;
  }
  console.log(type, tagName, id);
};
const logoutHandler = () => {
  document.cookie = "token=; max-age=0";
  location.assign("index.html");
};
logoutButton.addEventListener("click", logoutHandler);
document.addEventListener("DOMContentLoaded", showCart);

Cart.addEventListener("click", controlHandler);
