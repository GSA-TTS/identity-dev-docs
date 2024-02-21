---
title: SAML developer guide
lead: >
  Login.gov is a standard SAML identity provider, adhering to the [Web Browser SSO Profile](https://en.wikipedia.org/wiki/SAML_2.0#Web_browser_SSO_profile){:class="usa-link--external"} with enhancements for [NIST 800-63-3](https://pages.nist.gov/800-63-3/){:class="usa-link--external"}.
redirect_from:
  - /configuring-your-sp/
sidenav:
  - text: Getting started
    href: "/saml/getting-started/"
  - text: Authentication
    href: "/saml/authentication/"
  - text: Logout
    href: "/saml/logout/"
    links:
      - text: Logout request
        href: "/saml/logout/#logout-request"
      - text: Logout response
        href: "/saml/logout/#logout-response"
---
<div class="grid-row grid-gap">
    <div class="desktop:grid-col-7 mobile:grid-col-full" markdown="1">

## Logout

### Logout request

Login.gov does not support Single Logout (SLO). The logout action will terminate the user's session at Login.gov but will not end any other potentially active sessions within service provider applications. For example, if a user signs in to applications A and B through Login.gov, a logout request from A will end their Login.gov session, but will not affect the session in application B.

To log a user out, direct them to the logout URL with a `SAMLRequest`:

The `SAMLRequest` parameter is a base64-encoded, deflate-compressed XML payload of a `<samlp:LogoutRequest>`.

All logout requests must be signed — we require RSA SHA-256 signatures embedded with logout requests.
</div>
    <div class="usa-layout-docs__main code-snippet-column desktop:grid-col-5">
        <section class="code-snippet-section margin-top-2 position-relative z-index-1">
            <button id="saml_logout_tab1_button" data-selector="saml_logout" class="code-button code-button__selected margin-left-2">Request</button>
            <button id="saml_logout_tab2_button" data-selector="saml_logout" class="code-button margin-left-2">Example</button>
            <section id="saml_logout_tab1">
                {% include snippets/saml/logout/request.md %}
            </section>
            <section id="saml_logout_tab2" hidden>
                {% include snippets/saml/logout/request_example.md %}
            </section>
        </section>
    </div>
</div>
<div class="grid-row grid-gap">
    <div class="desktop:grid-col-7 mobile:grid-col-full" markdown="1">

### Logout response

After, Login.gov will redirect and POST a form back to your registered Assertion Consumer Service Logout URL:

Note: the SAMLResponse does not contain a signature since it's simply acknowledging the logout request.


  <div class="usa-accordion--bordered margin-top-2">
    <button class="usa-accordion__button" aria-controls="attributes">
    Remote logout (deprecated)
    </button>
    <div id="attributes" class="usa-accordion__content">
        {% include snippets/saml/logout/remote_logout.md %}
    </div>
  </div>
</div>
 <div class="usa-layout-docs__main code-snippet-column desktop:grid-col-5">
        <section class="code-snippet-section margin-top-2 position-relative z-index-1">
            <button id="saml_logout_response_tab1_button" data-selector="saml_logout_response" class="code-button code-button__selected margin-left-2">Request</button>
            <button id="saml_logout_response_tab2_button" data-selector="saml_logout_response" class="code-button margin-left-2">Example</button>
            <section id="saml_logout_response_tab1">
                {% include snippets/saml/logout/response.md %}
            </section>
            <section id="saml_logout_response_tab2" hidden>
                {% include snippets/saml/logout/response_example.md %}
            </section>
        </section>
    </div>
