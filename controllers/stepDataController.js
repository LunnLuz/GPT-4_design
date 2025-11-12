const isStepDataValid = require("../validators/isStepDataValid");

const {
  getStepDataModel,
  postStepDataModel,
} = require("../model/files/stepDataModel");

const getStepData = (req, res, next) => {
  try {
    const data = getStepDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postStepData = (req, res, next) => {
  try {
    const data = req.body;
    isStepDataValid(data);
    postStepDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getStepData, postStepData };
