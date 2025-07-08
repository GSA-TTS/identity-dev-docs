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

  const addAccordionLinks = (_event) => {
    const accordions = Array.from(document.querySelectorAll('.usa-accordion__content'));
    const aList = accordions.slice(1);
    const accordionIdList = aList.reduce((a, v) => (a ? `${a}, #${v.id}` : `#${v.id}`), null);
    window.anchors.add(accordionIdList);
  };

  document.addEventListener('DOMContentLoaded', jumpToAccordion);
  document.addEventListener('DOMContentLoaded', addAccordionLinks);
  window.addEventListener('hashchange', jumpToAccordion);
})();
