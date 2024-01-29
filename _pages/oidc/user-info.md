---
title: OpenID Connect
lead: >
    [OpenID Connect](https://openid.net){:class="usa-link--external"} (OIDC) is a simple identity layer built on top of the OAuth 2.0 protocol. Login.gov supports [version 1.0](https://openid.net/specs/openid-connect-core-1_0.html){:class="usa-link--external"} of the specification and conforms to the [iGov Profile](https://openid.net/wg/igov){:class="usa-link--external"}.
sidenav:
  - text: Getting started
    href: "oidc/getting-started/"
  - text: Authorization
    href: "oidc/authorization/"
  - text: Token
    href: "oidc/token/"
  - text: User info
    href: "oidc/user-info/"
    links:
      - text: User info response
        href: "#user-info-response"
  - text: Certificates
    href: "oidc/certificates/"
  - text: Logout
    href: "oidc/logout/"

---
{% capture front_matter %}
## User info

The user info endpoint is used to retrieve [user attributes]({{ site.baseurl }}/attributes/). Clients use the `access_token` from the [token response]({{ site.baseurl }}/oidc/token/#token-response) as a bearer token in the [HTTP Authorization header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization){:class="usa-link--external"}. To request attributes, send an HTTP GET request to the `/api/openid_connect/userinfo` endpoint. View an example request and response in the side panel.

### User info response

The user info response will be a JSON object containing [user attributes]({{ site.baseurl }}/attributes/). Login.gov supports some of the [standard claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims){:class="usa-link--external"} from OIDC 1.0. In addition to the user attributes, the following information will also be present:
{% endcapture %}

<div class="grid-row grid-gap">
  <div class="desktop:grid-col-8 mobile:grid-col-full">
    {{ front_matter | markdownify }}
        <div class="dev-doc-row grid-row">
            <div class="grid-col-5">
                <h4 class="parameters">iss <span class="text-normal">(string)</span></h4>
            </div>
            <div class="grid-col-7">
                The issuer of the response, which will be the URL of the Login.gov IdP, for example: <code class="language-plaintext highlighter-rouge">https://idp.int.identitysandbox.gov</code>
                <ul>
                    <li>Requires <code class="language-plaintext highlighter-rouge">profile</code> or <code class="language-plaintext highlighter-rouge">profile:name</code> scopes</li>
                </ul> 
            </div>
        </div>
        <div class="dev-doc-row grid-row">
            <div class="grid-col-5">
                <h4 class="parameters">email_verified <span class="text-normal">(boolean)</span></h4>
            </div>
            <div class="grid-col-7">
                Whether the email has been verified. Currently, Login.gov only supports verified emails.
                <ul>
                    <li>Requires <code class="language-plaintext highlighter-rouge">email</code> scope</li>
                </ul> 
            </div>
        </div>
        <div class="dev-doc-row grid-row">
            <div class="grid-col-5">
                <h4 class="parameters">phone_verified <span class="text-normal">(boolean)</span></h4>
            </div>
            <div class="grid-col-7">
                Whether the phone number has been verified. Currently, Login.gov only supports verified phones.
                <ul>
                    <li>Requires the <code class="language-plaintext highlighter-rouge">phone</code> scope and an identity verified account</li>
                </ul> 
            </div>
        </div>
        <div class="dev-doc-row grid-row">
            <div class="grid-col-5">
                <h4 class="parameters">verified_at <span class="text-normal">(number, null)</span></h4>
            </div>
            <div class="grid-col-7">
                When the user's identity was last verified, as an integer timestamp representing the number of seconds since the Unix Epoch, or <code class="language-plaintext highlighter-rouge">null</code> if the account has never been verified.
                <ul>
                    <li>Requires the <code class="language-plaintext highlighter-rouge">profile:verified_at</code> scope</li>
                </ul> 
            </div>
        </div>
        <a href="{{ '/oidc/certificates/' | prepend: site.baseurl }}" class="usa-link margin-top-4 mobile:display-none desktop:display-block">Next step: Certificates</a>
    </div>
    <div class="usa-layout-docs__main code-snippet-column desktop:grid-col-4">
        <section class="code-snippet-section margin-top-2 position-relative z-index-1">
        <button id="oidc_user-info_tab1_button" data-selector="oidc_user-info" class="code-button code-button__selected margin-left-2">Request</button>
        <button id="oidc_user-info_tab2_button" data-selector="oidc_user-info" class="code-button margin-left-2">Response</button>
        <section id="oidc_user-info_tab1">
            {% include snippets/oidc/user-info/request.md %}
        </section>
        <section id="oidc_user-info_tab2" hidden>
            {% include snippets/oidc/user-info/response.md %}
        </section>
        </section>
    </div>
    <a href="{{ '/oidc/certificates/' | prepend: site.baseurl }}" class="usa-link mobile:display-block desktop:display-none margin-top-2">Next step: Certificates</a>
</div>

