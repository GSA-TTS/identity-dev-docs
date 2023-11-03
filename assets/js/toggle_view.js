// Elements for Listeners
const jwtNav = document.getElementById('jwt-nav');
const pkceNav = document.getElementById('pkce-nav');
const oidcAuthSuccessButton = document.getElementById('oidc_auth_success_button');
const oidcAuthErrorButton = document.getElementById('oidc_auth_error_button');

function hideErrorCode(evt) {
  const errorButton = document.getElementById(`${evt.currentTarget.dataset.selector}_error_button`);
  errorButton.classList.remove('code-button__selected');
  const codeSnippet = document.getElementById(`${evt.currentTarget.dataset.selector}_error`);
  codeSnippet.hidden = true;
}

function hideSuccessCode(evt) {
  const successButton = document.getElementById(
    `${evt.currentTarget.dataset.selector}_success_button`,
  );
  successButton.classList.remove('code-button__selected');
  const codeSnippet = document.getElementById(`${evt.currentTarget.dataset.selector}_success`);
  codeSnippet.hidden = true;
}

function showSuccessCode(evt) {
  evt.currentTarget.classList.add('code-button__selected');
  const codeSnippet = document.getElementById(`${evt.currentTarget.dataset.selector}_success`);
  codeSnippet.hidden = false;
  hideErrorCode(evt);
}

function showErrorCode(evt) {
  evt.currentTarget.classList.add('code-button__selected');
  const codeSnippet = document.getElementById(`${evt.currentTarget.dataset.selector}_error`);
  codeSnippet.hidden = false;
  hideSuccessCode(evt);
}

// Unique toggle for OIDC Authorization/Token pages between PKCE and JWT parameters
function togglePKCEView(evt) {
  const pkceElements = document.getElementsByClassName('pkce-only');
  const jwtDiv = document.getElementById('jwt');
  const pkceDiv = document.getElementById('pkce');
  if (evt.currentTarget.id === 'pkce-nav') {
    for (let i = 0; i < pkceElements.length; i++) {
      pkceElements[i].hidden = false;
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
    pkceNav.classList.remove('code-button__selected');
    jwtNav.classList.add('code-button__selected');
    jwtDiv.hidden = false;
    pkceDiv.hidden = true;
  }
}

// Event Listeners
oidcAuthSuccessButton.addEventListener('click', showSuccessCode);
oidcAuthErrorButton.addEventListener('click', showErrorCode);
jwtNav.addEventListener('click', togglePKCEView);
pkceNav.addEventListener('click', togglePKCEView);