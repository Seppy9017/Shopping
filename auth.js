import { postData } from "./utils/httpReq.js";
import { setCookie } from "./utils/cookie.js";
import { authHandler } from "./utils/authorization.js";
import { validateForm } from "./utils/validation.js";
import { removeModal}  from "./utils/modal.js";

const inputsBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");
const modalButton = document.getElementById("modal-button");

const submitHandler = async (event) => {
  event.preventDefault();
  const username = inputsBox[0].value;
  const password = inputsBox[1].value;
  const validation = validateForm(username, password);
  if (!validation) return;

  const data = {
    username,
    password,
  };
  const response = await postData("auth/login", data);
  location.assign("./index.html");

  setCookie(response.token);
};

document.addEventListener("DOMContentLoaded", authHandler);
loginButton.addEventListener("click", submitHandler);
modalButton.addEventListener("click" , removeModal)