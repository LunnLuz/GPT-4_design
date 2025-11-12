const isExceedingDataValid = require("../validators/isExceedingDataValid");

const {
  getExceedingDataModel,
  postExceedingDataModel,
} = require("../model/files/exceedingDataModel");

const getExceedingData = (req, res, next) => {
  try {
    const data = getExceedingDataModel();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postExceedingData = (req, res, next) => {
  try {
    const data = req.body;
    isExceedingDataValid(data);
    postExceedingDataModel(data);
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getExceedingData, postExceedingData };