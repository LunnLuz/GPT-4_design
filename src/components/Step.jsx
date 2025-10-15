import  { step_into_the_futureData }  from "../mockData/step_into_the_futureData.js";

export const Heading = ({header}) => {
    <h1 className="heading__middle">{header}</h1> 
}

export const Button = ({title}) => {
    <button className="step_into_the_futur btn_itf">{title}</button>
}

export const FutureLogo = ({ step_into_the_future__logoData }) => {
  const { src,alt,href,content_1, content_2 } = step_into_the_future__logoData;
  return (
    <>
        <a href={href} className="logo__link">
            <img className="link__name" src={src} alt={alt}/>
        </a>
        <h5 className="step_into_the_future_address">
            {content_1}
        </h5>
        <h5 className="step_into_the_future_rights">
            {content_2}
        </h5>
    </>
  );
};

export const FutureLink = ({ step_into_the_future_linksData }) => {
  const { header,content_1,content_2,content_3,content_4 } = step_into_the_future_linksData;
  return (
    <>
        <h6 classNameName="links">
            {header}
        </h6>
        <div className="indoor_unit_links">
            <h5 className="overons">
                {content_1}
            </h5>
            <h5 className="social_networks">
                {content_2}
            </h5>
            <h5 className="counters">
                {content_3}
            </h5>
            <h5 className="contacts">
                {content_4}
            </h5>
        </div>
    </>
  );
};

export const FutureCompany = ({ step_into_the_future_companyData }) => {
  const {header, content_1, content_2, content_3} = step_into_the_future_companyData;
  return (
    <>
        <h6 className="company">
            {header}
        </h6>
        <div className="indoor_unit_company">
            <h5 className="use">
                {content_1}
            </h5>
            <h5 className="persian_data">
                {content_2}
            </h5>
            <h5 className="contacts">
                {content_3}
            </h5>
        </div>
    </>
  );
};

export const FutureContact = ({ step_into_the_future_contactsData }) => {
  const {header, content_1, content_2, content_3} = step_into_the_future_contactsData;
  return (
    <>
        <h6 className="contacts">
            {header}
        </h6>
        <div className="indoor_unit_contacts">
            <h5 className="address">
                {content_1}
            </h5>
            <h5 className="telephone">
                {content_2}
            </h5>
            <h5 className="mail">
                {content_3}
            </h5>
        </div>
    </>
  );
};

const Step = () => {
    const {header,  title, step_into_the_future__logoData, step_into_the_future_linksData, step_into_the_future_companyData, step_into_the_future_contactsData} = step_into_the_futureData;

    return (
        <>
        <div class="step_into_the_futur__heading__middle">
            <Heading header={header}/>           
        </div>
        <div class="step_into_the_futur__button__middle">
            <Button title={title}/>
        </div>
        <div class="step_into_the_future__basement">
            <div class="step_into_the_future__logo">
                <FutureLogo  step_into_the_future__logoData={step_into_the_future__logoData}/>
            </div>
            <div class="step_into_the_future_links">
                <FutureLink step_into_the_future_linksData={step_into_the_future_linksData}/>
            </div>
            <div class="step_into_the_future_company">
                <FutureCompany step_into_the_future_companyData={step_into_the_future_companyData}/>
            </div>
            <div class="step_into_the_future_contacts">
                <FutureContact step_into_the_future_contactsData={step_into_the_future_contactsData}/>
            </div>
        </div>
        </>
    )
}


export default Step;
