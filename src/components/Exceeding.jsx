import  {exceedingData}  from "../mockData/exceedingData.js";


export const Header = ({header}) => {
  <h2 className="header__right">{header}</h2>
};

export const Description = ({description}) => (
  <p className="container__right">{description}</p>
);

export const Illustration = ({ illustration: { alt, src } }) => (
  <img src={src} alt={alt} />
);

const Exceeding = () => {
  const {header , description, illustration} = exceedingData;

  return ( 
    <>
    <div className="exceeding_all_expectations__left">
        <Illustration illustration={illustration} />
    </div>
    <div className="exceeding_all_expectations__right">
        <p className="container__right">Запросить ранний доступ</p>
        <Header header={header} />
        <Description description={description} />
        <a href="#" className="cta__right">Запросить ранний доступ</a>
    </div>
    </>
  );
};

export default Exceeding;
