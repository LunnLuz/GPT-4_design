export const createHeaderTemplate = (header) => {
  return `
    <h4 class="header__right">
      ${header}
    </h4>
  `;
};

export const registrationTemplate = ({
  header,
}) => {
  const headerTemplate = createHeaderTemplate(header);

  const resultTemplate = `
    <div class="exceeding_all_expectations__right">
        ${headerTemplate}  
    </div>
    `;

  return resultTemplate;
};
