import { getCookie } from "./utils/cookie.js";
import { getData } from "./utils/httpReq.js";
import { shortenText } from "./utils/stringFunc.js";
let allProducts = null;
let category = null;
let search = "";

const loginButton = document.getElementById("login-button");
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const dashboardButton = document.getElementById("dashboard-button");
const productContainer = document.getElementById("products");
const listItems = document.querySelectorAll("li");

const cookie = getCookie();
const renderProducts = (products) => {
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const jsx = `
        <div>
            <img src= ${product.image} alt=${product.title}/>
            <h4>${shortenText(product.title)}</h4>
            <div id="price">
                <p>$ ${product.price}</p>
                <button>
                Buy
                <i class="fa-solid fa-cart-shopping"></i>
                </button>
                </div>
            <div id="rate">
                <i class="fa-solid fa-star"></i>
                <span>${product.rating.rate}</span>
            </div>
            <div id="count">
                <i class="fa-solid fa-user"></i>
                <span>${product.rating.count}</span>
            </div>
        </div>
    
    `;
    productContainer.innerHTML += jsx;
  });
};

const init = async () => {
  if (cookie) {
    loginButton.style.display = "none";
  } else if (!cookie) {
    dashboardButton.style.display = "none";
  }
  allProducts = await getData("products");
  renderProducts(allProducts);
};

const filterProducts = () => {
  const filterProducts = allProducts.filter((product) => {
    if (category === "all") {
      return product.title.toLowerCase().includes(search);
    } else {
      return (
        product.title.toLowerCase().includes(search) &&
        product.category.toLowerCase() === category
      );
    }
  });
  renderProducts(filterProducts);
};
const searchHandler = async () => {
  search = searchInput.value.trim().toLowerCase();
  filterProducts();
};

const filterHandler = (event) => {
  category = event.target.innerText.toLowerCase();
  listItems.forEach((li) => {
    if (li.innerText.toLowerCase() === category) {
      li.className = "selected";
    } else {
      li.className = "";
    }
  });
  filterProducts();
};
listItems.forEach((li) => li.addEventListener("click", filterHandler));

if (location.href.includes("index")) {
  searchButton.addEventListener("click", searchHandler);
}
document.addEventListener("DOMContentLoaded", init);
export { allProducts };
