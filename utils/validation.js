import { showModal } from "./modal.js";

const validateUsername = (username) => {
  const regex = /^[a-zA-Z\d_]{4,16}$/;
  const res = regex.test(username);
  return res;
};
const validatePassword = (password) => {
  const regex = /^.{4,20}$/;
  const res = regex.test(password);
  return res;
};

const validateForm = (username, password) => {
  const usernameResult = validateUsername(username);
  const passwordResult = validatePassword(password);
  if (usernameResult && passwordResult) {
    return true;
  } else if (!usernameResult) {
    showModal("Username is not valid!");
  } else if (!passwordResult) {
    showModal("Password must be between 4 and 20 characters!");
  }
};
export { validateForm };
