(() => {
  const jumpToAccordion = (_event) => {
    const urlHash = new URL(document.URL).hash;
    const idFromHash = urlHash.match(/^#([A-Za-z0-9_-]+)$/);
    if (idFromHash) {
      const accordionHeading = document.getElementById(idFromHash[1]).previousElementSibling.querySelector('.usa-accordion__heading > button');
      if (accordionHeading) {
        accordionHeading.click();
      }
    }
  };

  const addAccordionLinks = (_event) => {
    const accordions = Array.from(document.querySelectorAll('.usa-accordion__content'));
    const accordion_id_list = accordions.slice(1).reduce((a, v) => a?`${a}, #${v.id}`:`#${v.id}`, null);
    anchors.add(accordion_id_list);
  };

  document.addEventListener('DOMContentLoaded', jumpToAccordion);
  document.addEventListener('DOMContentLoaded', addAccordionLinks);
  window.addEventListener('hashchange', jumpToAccordion);
})();
