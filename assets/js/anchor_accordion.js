(() => {
  const onChange = (_event) => {
    const urlHash = new URL(document.URL).hash;
    const idFromHash = urlHash.match(/^(#[A-Za-z0-9_-]+)$/);
    if (idFromHash) {
      const accordionHeading = document.querySelector(
        `${idFromHash[1]}.usa-accordion__heading > button`,
      );
      if (accordionHeading) {
        accordionHeading.click();
      }
    }
  };
  document.addEventListener('DOMContentLoaded', onChange);
  window.addEventListener('hashchange', onChange);
})();
