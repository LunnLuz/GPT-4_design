const { isObjectHasProps } = require("./utils/validators");

const isExceedingDataValid = (data) => {
  isObjectHasProps(data, ["image", "topCta", "header", "content", "bottomCta"]);
  isObjectHasProps(data.image, ["src", "alt"]);
};

module.exports = isExceedingDataValid;