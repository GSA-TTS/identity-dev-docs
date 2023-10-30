

// Elements for Listeners
jwt_nav = document.getElementById("jwt-nav")
pkce_nav = document.getElementById("pkce-nav")
oidc_auth_success_button = document.getElementById("oidc_auth_success_button")
oidc_auth_error_button = document.getElementById("oidc_auth_error_button")

// Selectors
oidc_auth_success_button.selector = "oidc_auth"
oidc_auth_error_button.selector = "oidc_auth"


// Event Listeners
oidc_auth_success_button.addEventListener("click", showSuccessCode)
oidc_auth_error_button.addEventListener("click", showErrorCode)
jwt_nav.addEventListener("click", togglePKCEView)
pkce_nav.addEventListener("click", togglePKCEView)


function showSuccessCode(evt) {
    evt.currentTarget.classList.add("code-button__selected")
    code_snippet = document.getElementById(evt.currentTarget.selector + "_success")
    code_snippet.hidden = false
    hideErrorCode(evt)
}

function showErrorCode(evt) {
    evt.currentTarget.classList.add("code-button__selected")
    code_snippet = document.getElementById(evt.currentTarget.selector + "_error")
    code_snippet.hidden = false
    hideSuccessCode(evt)
}

function hideErrorCode(evt) {
    let error_button = document.getElementById(evt.currentTarget.selector + "_error_button")
    error_button.classList.remove("code-button__selected")
    code_snippet = document.getElementById(evt.currentTarget.selector + "_error")
    code_snippet.hidden = true;
}

function hideSuccessCode(evt) {
    let success_button = document.getElementById(evt.currentTarget.selector + "_success_button")
    success_button.classList.remove("code-button__selected")
    code_snippet = document.getElementById(evt.currentTarget.selector + "_success")
    code_snippet.hidden = true;
}


// Unique toggle for OIDC Authorization page
function togglePKCEView(evt) {
    pkce_elements = document.getElementsByClassName("pkce-only")
    jwt_div = document.getElementById("jwt")
    pkce_div = document.getElementById("pkce")
    if(evt.currentTarget.id == "pkce-nav"){
        for(i=0; i < pkce_elements.length; i++){
            pkce_elements[i].hidden = false
        }
        pkce_nav.classList.add("code-button__selected")
        jwt_nav.classList.remove("code-button__selected")
        jwt_div.hidden = true
        pkce_div.hidden = false

    } else {
        // hide everything in parameters table pertaining to PKCE
        for(i=0; i < pkce_elements.length; i++){
            pkce_elements[i].hidden = true
        }
        pkce_nav.classList.remove("code-button__selected")
        jwt_nav.classList.add("code-button__selected")
        jwt_div.hidden = false
        pkce_div.hidden = true
    }
}

function toggleCodeSnippet() {

}