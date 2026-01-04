import { showModal } from "./modal.js";

const BASE_URL = "https://fakestoreapi.com";
const postData = async (path, data) => {
  try {
    const res = await fetch(`${BASE_URL}/${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const json = await res.json();
    return json;
  } catch (error) {
    showModal("An error occured!");
  }
};
const getData = async (path) => {
  try {
    const res = await fetch(`${BASE_URL}/${path}`);
    const json = await res.json();
    return json;
  } catch (error) {
    showModal("An error occured!");
  }
};
 
const saveUser = async () => {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  const Users = await getData("users");
  const spacificUser = Users.filter(
    (user) => user.username === username && user.password === password
  );
  localStorage.setItem("userId", JSON.stringify(spacificUser));
};
export { postData, getData, saveUser };
