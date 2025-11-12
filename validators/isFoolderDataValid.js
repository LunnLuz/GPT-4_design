const { isObjectHasProps } = require("./utils/validators");

const isFoolderDataValid = (data) => {
    isObjectHasProps(data, "header");
};

module.exports = isFoolderDataValid;