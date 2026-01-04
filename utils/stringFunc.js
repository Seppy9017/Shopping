const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join(" ");
};
const shortenDate = (text) => {
  return text.split(".").slice(0, 1).join(" ").split("T").slice(0, 2).join(" ");
};

export { shortenText, shortenDate };
