const { isObjectHasProps } = require("./utils/validators");

const isRegistrationDataValid = (data) => {
  isObjectHasProps(data, [
    "registrationTopData",
    "registrationCtaButton",
  ]);

  const { registrationTopData, registrationCtaButton } = data;

  isObjectHasProps(registrationTopData, ["header", "content", "href"]);

  isObjectHasProps(registrationCtaButton, ["title"]);

};

module.exports = isRegistrationDataValid;
