import  registrationData  from "../mockData/registrationData";

export const RegistrationTop = ({ registrationTopData }) => {
  const { header, content } = registrationTopData;
  return (
    <>
      <b href="#" className="left__cta">{content}</b>
      <h4 className="top__header">{header}</h4>
    </>
  );
};

export const Button = ({ registrationCtaButton }) => {
  const { title } = registrationCtaButton;
  return (
    <>
    <button className="cta_buttons__signin btn black-btn">{title}</button>
    </>
  );
};


const Registration = () => {
  const {registrationTopData, registrationCtaButton } = registrationData;

  return(
    <>
    <div className="registration_panel_center">
      <RegistrationTop registrationTopData={registrationTopData} />
    </div>
    <div className="right__cta_buttons">
      <Button registrationCtaButton={registrationCtaButton} />
    </div>
    </>
  )
};

export default Registration;
