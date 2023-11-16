// Elements for Listeners
const jwtNav = document.getElementById('jwt-nav');
const pkceNav = document.getElementById('pkce-nav');
const oidcAuthTab1Button = document.getElementById('oidc_auth_tab1_button');
const oidcAuthTab2Button = document.getElementById('oidc_auth_tab2_button');
const oidcTokenTab1Button = document.getElementById('oidc_token_tab1_button');
const oidcTokenTab2Button = document.getElementById('oidc_token_tab2_button');
const oidcUserInfoTab1Button = document.getElementById('oidc_user-info_tab1_button');
const oidcUserInfoTab2Button = document.getElementById('oidc_user-info_tab2_button');
const oidcLogoutTab1Button = document.getElementById('oidc_logout_tab1_button');
const oidcLogoutTab2Button = document.getElementById('oidc_logout_tab2_button');
const samlAuthTab1Button = document.getElementById('saml_auth_tab1_button');
const samlAuthTab2Button = document.getElementById('saml_auth_tab2_button');
const samlAuthResponseTab1Button = document.getElementById('saml_auth_response_tab1_button');
const samlAuthResponseTab2Button = document.getElementById('saml_auth_response_tab2_button');
const samlLogoutTab1Button = document.getElementById('saml_logout_tab1_button');
const samlLogoutTab2Button = document.getElementById('saml_logout_tab2_button');
const samlLogoutResponseTab1Button = document.getElementById('saml_logout_response_tab1_button');
const samlLogoutResponseTab2Button = document.getElementById('saml_logout_response_tab2_button');

function hideTabTwoCode(evt) {
  const errorButton = document.getElementById(`${evt.currentTarget.dataset.selector}_tab2_button`);
  errorButton.classList.remove('code-button__selected');
  const codeSnippet = document.getElementById(`${evt.currentTarget.dataset.selector}_tab2`);
  codeSnippet.hidden = true;
}

function hideTabOneCode(evt) {
  const successButton = document.getElementById(
    `${evt.currentTarget.dataset.selector}_tab1_button`,
  );
  successButton.classList.remove('code-button__selected');
  const codeSnippet = document.getElementById(`${evt.currentTarget.dataset.selector}_tab1`);
  codeSnippet.hidden = true;
}

function showTabOneCode(evt) {
  evt.currentTarget.classList.add('code-button__selected');
  const codeSnippet = document.getElementById(`${evt.currentTarget.dataset.selector}_tab1`);
  codeSnippet.hidden = false;
  hideTabTwoCode(evt);
}

function showTabTwoCode(evt) {
  evt.currentTarget.classList.add('code-button__selected');
  const codeSnippet = document.getElementById(`${evt.currentTarget.dataset.selector}_tab2`);
  codeSnippet.hidden = false;
  hideTabOneCode(evt);
}

// Unique toggle for OIDC Authorization/Token pages between PKCE and JWT parameters
function togglePKCEView(evt) {
  const pkceElements = document.getElementsByClassName('pkce-only');
  const jwtElements = document.getElementsByClassName('jwt-only');
  const jwtDiv = document.getElementById('jwt');
  const pkceDiv = document.getElementById('pkce');
  if (evt.currentTarget.id === 'pkce-nav') {
    for (let i = 0; i < pkceElements.length; i++) {
      pkceElements[i].hidden = false;
    }
    for (let i = 0; i < jwtElements.length; i++) {
      jwtElements[i].hidden = true;
    }
    pkceNav.classList.add('code-button__selected');
    jwtNav.classList.remove('code-button__selected');
    jwtDiv.hidden = true;
    pkceDiv.hidden = false;
  } else {
    // hide everything in parameters table pertaining to PKCE
    for (let i = 0; i < pkceElements.length; i++) {
      pkceElements[i].hidden = true;
    }
    for (let i = 0; i < jwtElements.length; i++) {
      jwtElements[i].hidden = false;
    }
    pkceNav.classList.remove('code-button__selected');
    jwtNav.classList.add('code-button__selected');
    jwtDiv.hidden = false;
    pkceDiv.hidden = true;
  }
}

// Event Listeners
if (oidcAuthTab1Button) {
  oidcAuthTab1Button.addEventListener('click', showTabOneCode);
  oidcAuthTab2Button.addEventListener('click', showTabTwoCode);
  jwtNav.addEventListener('click', togglePKCEView);
  pkceNav.addEventListener('click', togglePKCEView);
}
if (oidcTokenTab1Button) {
  oidcTokenTab1Button.addEventListener('click', showTabOneCode);
  oidcTokenTab2Button.addEventListener('click', showTabTwoCode);
  jwtNav.addEventListener('click', togglePKCEView);
  pkceNav.addEventListener('click', togglePKCEView);
}
if (oidcUserInfoTab1Button) {
  oidcUserInfoTab1Button.addEventListener('click', showTabOneCode);
  oidcUserInfoTab2Button.addEventListener('click', showTabTwoCode);
}
if (oidcLogoutTab1Button) {
  oidcLogoutTab1Button.addEventListener('click', showTabOneCode);
  oidcLogoutTab2Button.addEventListener('click', showTabTwoCode);
}
if (samlAuthTab1Button) {
  samlAuthTab1Button.addEventListener('click', showTabOneCode);
  samlAuthTab2Button.addEventListener('click', showTabTwoCode);
  samlAuthResponseTab1Button.addEventListener('click', showTabOneCode);
  samlAuthResponseTab2Button.addEventListener('click', showTabTwoCode);
}
if (samlLogoutTab1Button) {
  samlLogoutTab1Button.addEventListener('click', showTabOneCode);
  samlLogoutTab2Button.addEventListener('click', showTabTwoCode);
  samlLogoutResponseTab1Button.addEventListener('click', showTabOneCode);
  samlLogoutResponseTab2Button.addEventListener('click', showTabTwoCode);
}

