
export const createIllustrationTemplate = ({ src, alt }) => {
  return `
    <img src="${src}" alt="${alt}" />
  `;
};

export const exceedingTemplate = ({
  illustration,

}) => {
  const illustrationTemplate = createIllustrationTemplate(illustration);

  const resultTemplate = `
    <div class="hero_section__right">
        ${illustrationTemplate}
    </div>
    `;

  return resultTemplate;
};
