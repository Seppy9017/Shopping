import { getCookie } from "./cookie.js";

const authHandler = () => {
  const cookie = getCookie();
  const url = location.href;
  if (
    (url.includes("auth") && cookie) ||
    (url.includes("dashboard") && !cookie)
  ) {
    location.assign("index.html");
    return false;
  }
};

export { authHandler };
