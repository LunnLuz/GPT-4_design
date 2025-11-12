const { isObjectHasProps } = require("./utils/validators");

const isExceedingDataValid = (data) => {
  isObjectHasProps(data, ["image",  
    "header", 
    "description", 
  ]);

  const { illustration } = data;
  isObjectHasProps(illustration, ["alt", "src"]);
};

module.exports = isExceedingDataValid;