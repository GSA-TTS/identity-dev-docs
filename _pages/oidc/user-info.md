---
title: OpenID Connect
lead: >
    [OpenID Connect](http://openid.net){:class="usa-link--external"} is a simple identity layer built on top of the OAuth 2.0 protocol. Login.gov supports [version 1.0](http://openid.net/specs/openid-connect-core-1_0.html){:class="usa-link--external"} of the specification and conforms to the [iGov Profile](https://openid.net/wg/igov){:class="usa-link--external"}.
redirect_from:
  - /openid-connect/
sidenav:
  - text: Getting started
    href: "oidc/#getting-started"
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
    href: "oidc/#certificates"
  - text: Logout
    href: "oidc/#logout"
  - text: Example application
    href: "oidc/#example-application"

---
## User info

The user info endpoint is used to retrieve [user attributes]({{ site.baseurl }}/attributes/). Clients use the `access_token` from the [token response](#token-response) as a bearer token in the [HTTP Authorization header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization). To request attributes, send an HTTP GET request to the `/api/openid_connect/userinfo` endpoint, for example:

### User info response

The user info response will be a JSON object containing [user attributes]({{ site.baseurl }}/attributes/). Login.gov supports some of the [standard claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) from OpenID Connect 1.0. In addition to the user attributes, the following information will also be present:


<div class="dev-doc-row grid-row">
    <div class="grid-col-5">
        <h4 class="parameters">iss <span class="text-normal">(string)</span></h4>
    </div>
    <div class="grid-col-7">
        The issuer of the response, which will be the URL of the Login.gov IdP, for example: <code class="language-plaintext highlighter-rouge">https://idp.int.identitysandbox.gov</code>
        <ul>
            <li>Requires <code class="language-plaintext highlighter-rouge">profile</code> or <code class="language-plaintext highlighter-rouge">profile:name</code> scopes.</li>
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
            <li>Requires the <code class="language-plaintext highlighter-rouge">profile:verified_at</code> scope.</li>
        </ul> 
    </div>
</div>

