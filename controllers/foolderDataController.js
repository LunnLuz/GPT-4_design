const isFoolderDataValid = require("../validators/isFoolderDataValid");

const {
  getFoolderDataModel,
  postFoolderDataModel,
} = require("../model/files/foolderDataModel");

const getFoolderData = (req, res, next) => {
  try {
    const data = getFoolderDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postFoolderData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isFoolderDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postFoolderDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getFoolderData, postFoolderData };
