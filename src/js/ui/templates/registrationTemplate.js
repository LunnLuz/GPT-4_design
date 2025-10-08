export const createRegistrationTopTemplate = ({ header, content }) => {
  const template = `
        <b href="#" class="left__cta">
            ${content}
        </b>

        <h4 class="top__header">
            ${header}
        </h4>

    `;

  return template;
};

export const createButtonTemplate = ({ title }) => {
  const template = `
    <button class="cta_buttons__signin btn black-btn"}">
      ${title}
    </button>
  `;

  return template;
};


export const registrationTemplate = ({
  registrationTopData,
  registrationCtaButton

}) => {
  const registrationTopTemplate = createRegistrationTopTemplate(registrationTopData);
  const registrationCtaButtonTemplate = createButtonTemplate(registrationCtaButton);


  const resultTemplate = `
        <div class="registration_panel_center">
           ${registrationTopTemplate}
        </div>

        <div class="right__cta_buttons">
          ${registrationCtaButtonTemplate}
        </div>

    `;

  return resultTemplate;
};
