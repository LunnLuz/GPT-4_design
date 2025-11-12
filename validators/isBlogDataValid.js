const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isImageValid = (image) => isObjectHasProps(image, ["src", "alt"]);

const isLinkTextValid = (link) => isObjectHasProps(link, ["text", "href"]);

const isCardValid = (card) => {

  isObjectHasProps(card, ["image", "date", "title", "linkText"]);

  isImageValid(card.image);

  isLinkTextValid(card.linkText);
};

const isBlogDataValid = (data) => {

  isObjectHasProps(data, ["header", "left", "right"]);

  isCardValid(data.left);

  if (!isArrayHasLength(data.right))

    throw new Error("right должен быть непустым массивом");
    
  data.rightCards.forEach(isCardValid);
};

module.exports = isBlogDataValid;