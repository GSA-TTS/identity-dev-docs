---
title: SAML developer guide
lead: >
  Login.gov is a standard SAML identity provider, adhering to the [Web Browser SSO Profile](https://en.wikipedia.org/wiki/SAML_2.0#Web_Browser_SSO_Profile) with enhancements for [NIST 800-63-3](https://pages.nist.gov/800-63-3/).
redirect_from:
  - /configuring-your-sp/
sidenav:
  - text: Getting started
    href: "#getting-started"
  - text: Authentication
    href: "#authentication"
    links:
        - text: Authentication request
          href: "#authentication-request"
        - text: Authentication response
          href: "#authentication-response"
  - text: Logout
    href: "#logout"
saml_year: 2023
saml_last_year: 2022

---
{% capture saml_request_intro %}
`<samlp:AuthnRequest>:SAML_REQUEST = urlEncode(base64(deflate(payload)))`
{% endcapture %}
{% capture saml_tag %}
The `<saml:AuthnContextClassRef>` tags (nested under `//samlp:AuthnRequest/samlp:RequestedAuthnContext/`) specify the type of identity verification<sup id="fnref:1" role="doc-noteref"><a href="#fn:1" class="footnote" rel="footnote">1</a></sup>, AAL (Authentication Assurance Level) and attributes requested.
{% endcapture %}
{% capture attributes %}
```xml
<samlp:AuthnRequest ...>
  <!-- ... -->
  <samlp:RequestedAuthnContext Comparison='exact'>
    <saml:AuthnContextClassRef>http://idmanagement.gov/ns/assurance/ial/2</saml:AuthnContextClassRef>
    <saml:AuthnContextClassRef>http://idmanagement.gov/ns/assurance/aal/3</saml:AuthnContextClassRef>
    <saml:AuthnContextClassRef>http://idmanagement.gov/ns/requested_attributes?ReqAttr=email,phone,first_name,last_name,ssn</saml:AuthnContextClassRef>
  </samlp:RequestedAuthnContext>
</samlp:AuthnRequest>
```
{% endcapture %}

<div class="grid-row grid-gap">
    <div class="desktop:grid-col-7 mobile:grid-col-full">
        <h2>Authentication</h2>
        <h3>Authentication request</h3>
        <p>To authenticate a user with Login.gov, direct them to our authentication URL with a SAML authentication request as a GET param.</p>
        <p>The `SAMLRequest` parameter is a url-encoded, base64-encoded, deflate-compressed XML payload of a <code class="language-plaintext highlighter-rouge">{{ saml_request_intro | markdownify }}</code></p>
        <p>Note: We strongly encourage you to cryptographically sign authentication requests, unless there are technical limitations on your side that prevent this. In addition to providing increased security, this allows for seamless rotation of your application’s public certificate in the future. All signatures must use RSA SHA-256.</p>
        <div class="dev-doc-row">
            <div class="grid-row">
                <div class="grid-col-5">
                    <h4 class="parameters clearfix">Specifying attributes and assurance levels</h4>
                </div>
                <div class="grid-col-7 margin-top-neg-2">
                    {{ saml_tag | markdownify }}
                </div>
            </div>
            <div class="usa-accordion--bordered">
                <button class="usa-accordion__button" aria-controls="id-verification" id="id-verification-accordion">
                Type of Identity Verification <sup id="fnref:1:1" role="doc-noteref"><a href="#fn:1" class="footnote" rel="footnote">1</a></sup>
                </button>
                <div id="id-verification" class="usa-accordion__content">
                        <p>To specify one of the supported IAL levels, place one of these values inside a <code class="language-plaintext highlighter-rouge">&lt;saml:AuthnContextClassRef&gt;</code> tag:</p>
                        <ul>
                            <li>
                                <strong><code class="language-plaintext highlighter-rouge">http://idmanagement.gov/ns/assurance/ial/1</code></strong>Basic identity assurance, does not require identity verification (this is the most common value).
                            </li>
                            <li>
                                <strong><code class="language-plaintext highlighter-rouge">http://idmanagement.gov/ns/assurance/ial/2</code></strong>
                                Requires that the user has gone through identity verification<sup id="fnref:1:2" role="doc-noteref"><a href="#fn:1" class="footnote" rel="footnote">1</a></sup>
                            </li>
                        </ul>
                        </div>
            </div>
            <div class="usa-accordion--bordered margin-top-2">
                <button class="usa-accordion__button" aria-controls="aal">
                Authentication Assurance Level (AAL)
                </button>
                <div id="aal" class="usa-accordion__content">
                    <p>We default to requiring a user to be authenticated with a second factor:</p>
                    <ul>
                        <li>
                            <strong><code class="language-plaintext highlighter-rouge">urn:gov:gsa:ac:classes:sp:PasswordProtectedTransport:duo</code></strong>
                            This specifies that a user has been authenticated with a second factor. This value will be returned in the user attributes by default. We do not allow strict AAL 1, because it implies that a user did not authenticate with a second factor. This setting requires users to reauthenticate with a separate second factor (i.e. not a session secret) once every 30 days at a minimum.
                        </li>
                    </ul>
                    <p>To specify more restrictive behavior, add an additional <code class="language-plaintext highlighter-rouge">&lt;saml:AuthnContextClassRef&gt;</code> with one of these values:
                    </p>
                    <ul>
                        <li>
                            <strong><code class="language-plaintext highlighter-rouge">http://idmanagement.gov/ns/assurance/aal/2</code></strong>
                            This specifies that a user has been authenticated with a separate second factor. Users must <em>always</em> authenticate with a second factor.
                        </li>
                        <li>
                            <strong><code class="language-plaintext highlighter-rouge">http://idmanagement.gov/ns/assurance/aal/2?phishing_resistant=true</code></strong>
                            This specifies that a user has been authenticated with a crytographically secure method, such as WebAuthn or using a PIV/CAC. Users must <em>always</em> authenticate with a second factor.
                        </li>
                        <li>
                            <strong><code class="language-plaintext highlighter-rouge">http://idmanagement.gov/ns/assurance/aal/2?hspd12=true</code></strong>
                            This specifies that a user has been authenticated with an HSPD12 credential (requires PIV/CAC). Users must <em>always</em> authenticate with a second factor.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="usa-accordion--bordered margin-top-2">
                <button class="usa-accordion__button" aria-controls="attributes">
                Attributes
                </button>
                <div id="attributes" class="usa-accordion__content">
                    <p>To request specific attributes, list them (comma-separated) as the query parameter for <code class="language-plaintext highlighter-rouge">http://idmanagement.gov/ns/requested_attributes?ReqAttr=</code>. See the <a class="usa-link" href="/attributes/">user attributes</a> for the list of attributes that can be requested.</p>
                    <h4 id="example-specifying-ial-aal-and-attributes">Example specifying IAL, AAL, and attributes</h4>
                    <p>A proofed identity request at AAL3 for email, phone, first name, last name, and SSN might look like:</p>
                    <p>{{ attributes | markdownify }}</p>
                </div>
            </div>
            <div class="usa-accordion--bordered margin-top-2">
                <button class="usa-accordion__button" aria-controls="loa" id="loa-accordion">
                Level of Assurance (LOA) Values (deprecate)
                </button>
                <div id="loa" class="usa-accordion__content">
                        <p>These not recommended, they are for legacy compatibility only.</p>
                        <p>The authentication request can specify LOA levels 1 and 3 with one of these values inside the <code class="language-plaintext highlighter-rouge">&lt;saml:AuthnContextClassRef&gt;</code> tag:</p>
                        <ul>
                            <li>
                                <strong><code class="language-plaintext highlighter-rouge">http://idmanagement.gov/ns/assurance/loa/1</code></strong>
                                Equivalent to IAL1
                            </li>
                            <li>
                                <strong><code class="language-plaintext highlighter-rouge">http://idmanagement.gov/ns/assurance/loa/3</code></strong>
                                Equivalent to identity proofed
                            </li>
                        </ul>
                </div>
            </div>
            <div class="footnotes" role="doc-endnotes">
                <ol>
                    <li id="fn:1" role="doc-endnote">
                    Login.gov continues to work toward achieving certification of compliance with NIST’s IAL2 standard from a third-party assessment organization. <a href="./#fnref:1" class="reversefootnote" aria-label="Back to content 1" role="doc-backlink">&#8617;<sup>1</sup></a> <a href="#fnref:1:1" class="reversefootnote" aria-label="Back to content 2" role="doc-backlink">&#8617;<sup>2</sup></a> <a href="#fnref:1:2" class="reversefootnote" aria-label="Back to content 3" role="doc-backlink">&#8617;<sup>3</sup></a>
                    </li>
                </ol>
            </div>
        </div>
        <div class="dev-doc-row">
            <div class="grid-row">
                <div class="grid-col-5">
                    <h4 class="parameters clearfix">RelayState</h4>
                </div>
                <div class="grid-col-7 margin-top-neg-2">
                        <p>If you need to pass any information about the request back to your application after the authentication process is complete (e.g. the path to direct the user to), you can include a RelayState query parameter with up to 80 bytes of information. This will be included in the response back to your application as per section 3.4.3 of the <a class="usa-link" href="http://docs.oasis-open.org/security/saml/v2.0/saml-bindings-2.0-os.pdf">SAML 2.0 bindings spec</a>.</p>
                        <p><code class="language-plaintext highlighter-rouge">https://idp.int.identitysandbox.gov/api/saml/auth2023?SAMLRequest=${SAML_REQUEST}&amp;RelayState=${RELAY_STATE}</code></p>
                </div>
            </div>
        </div>
        <div class="dev-doc-row">
            <div class="grid-row">
                <div class="grid-col-5">
                    <h4 class="parameters clearfix">Language Selection</h4>
                </div>
                <div class="grid-col-7 margin-top-neg-2">
                        <p>If you know that a user would prefer one of our alternative language translations (currently Spanish or French), you can include the <code class="language-plaintext highlighter-rouge">locale</code> parameter to specify the language Login.gov should use (either <code class="language-plaintext highlighter-rouge">es</code> for Spanish or <code class="language-plaintext highlighter-rouge">fr</code> for French), e.g.:</p>
                        <p><code class="language-plaintext highlighter-rouge">https://idp.int.identitysandbox.gov/api/saml/auth2023?SAMLRequest=${SAML_REQUEST}&amp;locale=es</code></p>
                </div>
            </div>
        </div>
    </div>
    <div class="usa-layout-docs__main code-snippet-column desktop:grid-col-5">
        <section class="code-snippet-section margin-top-2 position-relative z-index-1">
            <button id="saml_auth_tab1_button" data-selector="saml_auth" class="code-button code-button__selected margin-left-2">Request</button>
            <button id="saml_auth_tab2_button" data-selector="saml_auth" class="code-button margin-left-2">Example</button>
            <section id="saml_auth_tab1">
                {% include snippets/saml/request.md %}
            </section>
            <section id="saml_auth_tab2" hidden>
                {% include snippets/saml/example.md %}
            </section>
        </section>
    </div>
</div>
<div class="grid-row grid-gap">
    <div class="desktop:grid-col-7 mobile:grid-col-full">
        <h2>Authentication response</h2>
        <p>After the user authenticates, Login.gov will redirect and POST a form back to your registered Assertion Consumer Service URL:</p>
        <p>The SAMLResponse is a base64-encoded XML payload that contains encrypted data.</p>
    </div>
    <div class="usa-layout-docs__main code-snippet-column desktop:grid-col-5">
        <section class="margin-top-2 position-relative z-index-1">
            <button id="saml_auth_response_tab1_button" data-selector="saml_auth_response" class="code-button code-button__selected margin-left-2">Response</button>
            <button id="saml_auth_response_tab2_button" data-selector="saml_auth_response" class="code-button margin-left-2">Example</button>
            <section id="saml_auth_response_tab1">
                {% include snippets/saml/response.md %}
            </section>
            <section id="saml_auth_response_tab2" hidden>
                {% include snippets/saml/response_example.md %}
            </section>
        </section>
    </div>
</div>


