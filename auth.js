import { postData, saveUser } from "./utils/httpReq.js";
import { setCookie } from "./utils/cookie.js";
import { authHandler } from "./utils/authorization.js";
import { validateForm } from "./utils/validation.js";
import { removeModal } from "./utils/modal.js";

const inputsBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");
const modalButton = document.getElementById("modal-button");
let username = null;
let password = null;
const submitHandler = async (event) => {
  localStorage.setItem("username", inputsBox[0].value);
  localStorage.setItem("password", inputsBox[1].value);
  event.preventDefault();
  username = inputsBox[0].value;
  password = inputsBox[1].value;
  console.log(username, password);

  const validation = validateForm(username, password);
  if (!validation) return;

  const data = {
    username,
    password,
  };
  const response = await postData("auth/login", data);
  location.assign("./index.html");
  saveUser();
  setCookie(response.token);
};

document.addEventListener("DOMContentLoaded", authHandler);
loginButton.addEventListener("click", submitHandler);
if (location.href.includes("dashboard")) {
  console.log("no");
} else {
  modalButton.addEventListener("click", removeModal);
}

export { username, password };
