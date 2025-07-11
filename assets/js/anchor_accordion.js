(() => {
  const jumpToAccordion = (_event) => {
    const accordionId = new URL(document.URL).hash;
    if (accordionId) {
      const accordionButton = document.querySelector(
        `${accordionId}.usa-accordion__heading > button`,
      );
      const accordionBody = document.querySelector(`${accordionId}.usa-accordion__heading + dd`);
      if (accordionButton && accordionBody.hidden) {
        accordionButton.click();
      }
    }
  };

  document.addEventListener('DOMContentLoaded', jumpToAccordion);
  window.addEventListener('hashchange', jumpToAccordion);
})();
