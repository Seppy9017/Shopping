import { getData } from "./utils/httpReq.js";
import { shortText } from "./utils/stringFunc.js";
const mainContent = document.getElementById("container");

const showCart = async () => {
  const allCarts = await getData("carts");
  mainContent.innerHTML = "";
  allCarts.forEach((cart) => {
    const jsx = `
     <div id="card">
            <h3>${cart.id}</h3>
            <div>
                <p> User Id :</p>
                <span>${cart.userId}</span>
            </div>
            <div>
                <p>Date :</p>
                <span>${shortText(cart.date)}</span>
            </div>
            
            
        </div>
        `;
    mainContent.innerHTML += jsx;
  });
};

document.addEventListener("DOMContentLoaded", showCart);
