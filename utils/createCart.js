import { getData } from "./httpReq.js";

const cartList = document.getElementById("cart-list");

const user = JSON.parse(localStorage.getItem("userId"))[0];
const userId = user.id;

// allProducts.forEach((product) => {
//   if (product.id === 10) {
//     console.log(product);
//   }
// });
const getCart = async (carts) => {
  const allProducts = await getData("products");

  let userCart = carts.find((cart) => cart.userId === userId);
  let finalData = [];

  userCart.products.forEach((product) => {
    const PRODUCT = allProducts.find((prc) => prc.id == product.productId);
    finalData.push({
      product: PRODUCT,
      quantity: product.quantity,
    });
  });

  return finalData;
};


export default getCart;
