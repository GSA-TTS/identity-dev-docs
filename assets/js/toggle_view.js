

// function toggleViewCode(show, hide) {

// }

jwt_nav = document.getElementById("jwt-nav")
pkce_nav = document.getElementById("pkce-nav")

jwt_nav.addEventListener("click", togglePKCEView)
pkce_nav.addEventListener("click", togglePKCEView)

function togglePKCEView(evt) {
    // hide everything with class "pkce-only"
    elements = document.getElementsByClassName("pkce-only")
    jwt_nav = document.getElementById("jwt-nav")
    pkce_nav = document.getElementById("pkce-nav")
    jwt_div = document.getElementById("jwt")
    pkce_div = document.getElementById("pkce")
    if(evt.currentTarget.id == "pkce-nav"){
        for(i=0; i < elements.length; i++){
            elements[i].classList.remove("display-none")
        }
        pkce_nav.classList.add("code-button__selected")
        jwt_nav.classList.remove("code-button__selected")
        jwt_div.classList.add("display-none")
        pkce_div.classList.remove("display-none")

    } else {
        for(i=0; i < elements.length; i++){
            elements[i].classList.add("display-none")
        }
        pkce_nav.classList.remove("code-button__selected")
        jwt_nav.classList.add("code-button__selected")
        jwt_div.classList.remove("display-none")
        pkce_div.classList.add("display-none")
    }
}
