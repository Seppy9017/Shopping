import { getData } from "./httpReq.js";

const cartList = document.getElementById("cart-list");

const user = JSON.parse(localStorage.getItem("userId"))[0];
const userId = user.id;

// allProducts.forEach((product) => {
//   if (product.id === 10) {
//     console.log(product);
//   }
// });
const createCard = async (data) => {
  const allProducts = await getData("products");
  data.filter((cart) => {
    const isTrue = cart.userId === userId;
    if (isTrue) {
      cartList.innerHTML = "";
      const jsx = `   

      <div>
        <img  src=https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png />
        <div id="cart-info">
          <h4>${"name"}</h4>
          <p>${"price"}</p>
        </div> 
        <div id="cart-control">
            <div>
                <button data-id=${cart.products[0].productId}>-</button>
                <span>${cart.products[0].quantity}</span>
                <button data-id=${cart.products[0].productId}>+</button>
            </div>  
            <button data-id=${cart.products[0].productId}>Remove</button>
        </div>  
      </div>
      `;
      cartList.innerHTML += jsx;
      // console.log(cart);
    }
  });
};

export default createCard;
