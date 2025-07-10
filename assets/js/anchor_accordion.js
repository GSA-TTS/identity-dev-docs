(() => {
  const jumpToAccordion = (_event) => {
    const urlHash = new URL(document.URL).hash;
    const idFromHash = urlHash.match(/^#([A-Za-z0-9_-]+)$/);
    if (idFromHash) {
      const accordionBody = document.getElementById(idFromHash[1]);
      const accordionHeading = accordionBody.previousElementSibling;
      const accordionButton = accordionHeading.querySelector('.usa-accordion__heading > button');
      if (accordionButton) {
        accordionButton.click();
      }
    }
  };

  document.addEventListener('DOMContentLoaded', jumpToAccordion);
  window.addEventListener('hashchange', jumpToAccordion);
})();
