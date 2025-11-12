const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isStepDataValid = (data) => {
    isObjectHasProps(data,[
        "header",
        "button",
        "logoData",
        "linksData",
        "companyData",
        "contactsData",
    ]);

    const {button, logoData, linksData, companyData, contactsData} = data;

    isArrayHasLength(button, logoData, linksData, companyData, contactsData);

    button.forEach((item) => isObjectHasProps(item, ["title", "href"]));
};

module.exports = isStepDataValid;
