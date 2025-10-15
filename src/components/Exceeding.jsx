import  exceedingData  from "../mockData/exceedingData.js";


export const createHeaderTemplate = (header) => {
  return (
    <p className="container__right">Запросить ранний доступ</p>
    <h2 className="header__right">${header}</h2>
  );
};

export default initExceeding;
