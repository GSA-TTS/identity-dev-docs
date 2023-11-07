---
title: OpenID Connect
lead: >
   <a class="usa-link usa-link usa-link--external" href="http://openid.net">OpenID Connect</a> is a simple identity layer built on top of the OAuth 2.0 protocol. Login.gov supports <a class="usa-link usa-link usa-link--external" href="http://openid.net/specs/openid-connect-core-1_0.html">version 1.0</a> of the specification and conforms to the <a class="usa-link usa-link usa-link--external" href="https://openid.net/wg/igov">iGov Profile</a>.
redirect_from:
  - /openid-connect/
sidenav:
  - text: Getting started
    href: "oidc/getting-started/"
  - text: Authorization
    href: "oidc/authorization/"
    links:
      - text: Request parameters
        href: "#request-parameters"
      - text: Authorization response
        href: "#authorization-response"
  - text: Token
    href: "oidc/#token"
  - text: User info
    href: "oidc/#user-info"
  - text: Certificates
    href: "oidc/#certificates"
  - text: Logout
    href: "oidc/#logout"
  - text: Example application
    href: "oidc/#example-application"

---
{% capture type_of_service %}
  A type of service level<sup id="fnref:1:2" role="doc-noteref"><a href="#fn:1" class="footnote" rel="footnote">1</a></sup> must be specified.

- **`http://idmanagement.gov/ns/assurance/ial/1`**
    Basic identity assurance, does not require identity verification (this is the most common value).
- **`http://idmanagement.gov/ns/assurance/ial/2`**
    Requires that the user has gone through identity verification<sup id="fnref:1:3" role="doc-noteref"><a href="#fn:1" class="footnote" rel="footnote">1</a></sup>
{% endcapture %}
{% capture aal_values %}
We default to requiring a user to be authenticated with a second factor:

- **`urn:gov:gsa:ac:classes:sp:PasswordProtectedTransport:duo`**
    This specifies that a user has been authenticated with a second factor. This value will be returned in the user attributes by default. We do not allow strict AAL 1, because it implies that a user did not authenticate with a second factor. This setting requires users to reauthenticate with a separate second factor (i.e. not a session secret) once every 30 days at a minimum.

Stricter behavior can be specified by adding one of:

  - **`http://idmanagement.gov/ns/assurance/aal/2`**
      This is the same as the default behavior except users must reauthenticate with a separate second factor (i.e. not a session secret) once every 12 hours.
  - **`http://idmanagement.gov/ns/assurance/aal/2?phishing_resistant=true`**
      This specifies that a user has been authenticated with a crytographically secure method, such as WebAuthn or using a PIV/CAC. Users must _always_ authenticate with a second factor.
  - **`http://idmanagement.gov/ns/assurance/aal/2?hspd12=true`**
      This specifies that a user has been authenticated with an HSPD12 credential (requires PIV/CAC). Users must _always_ authenticate with a second factor.
{% endcapture %}
{% capture loa_values %}
  These are not recommended, and only for legacy compatibility.
    - **`http://idmanagement.gov/ns/assurance/loa/1`**
      Equivalent to IAL1
    - **`http://idmanagement.gov/ns/assurance/loa/3`**
      Equivalent to identity verified account
{% endcapture %}
{% capture code_challenge %}
Correct Example

```ruby
code_verifier = SecureRandom.hex
=> "5787d673fb784c90f0e309883241803d"
code_challenge = Digest::SHA256.digest(code_verifier) # binary data
url_safe_code_challenge = Base64.urlsafe_encode64(code_challenge)
# RFC 4648 URL-safe Base64 encoding replaces "+" with "-" and "/" with "_" and trims trailing "="
=> "1BUpxy37SoIPmKw96wbd6MDcvayOYm3ptT-zbe6L_zM"
Base64.encode64(code_challenge) # wrong and URL-unsafe encoding
=> "1BUpxy37SoIPmKw96wbd6MDcvayOYm3ptT+zbe6L/zM=" # wrong and URL-unsafe encoding
```

Incorrect Example

```ruby
=> "1BUpxy37SoIPmKw96wbd6MDcvayOYm3ptT-zbe6L_zM"
Base64.encode64(code_challenge) # wrong and URL-unsafe encoding
=> "1BUpxy37SoIPmKw96wbd6MDcvayOYm3ptT+zbe6L/zM=" # wrong and URL-unsafe encoding
```
{% endcapture %}
{% capture code_challenge_incorrect %}
```ruby
=> "1BUpxy37SoIPmKw96wbd6MDcvayOYm3ptT-zbe6L_zM"
Base64.encode64(code_challenge) # wrong and URL-unsafe encoding
=> "1BUpxy37SoIPmKw96wbd6MDcvayOYm3ptT+zbe6L/zM=" # wrong and URL-unsafe encoding
```
{% endcapture %}
{% capture scope_possible_values %}
Possible values are:
   - `openid`
   - `address`
   - `email`
   - `all_emails`
   - `phone`
   - `profile:birthdate`
   - `profile:name`
   - `profile:verified_at`
   - `profile`
   - `social_security_number`
   - `x509`
   - `x509:issuer`
   - `x509:presented`
   - `x509:subject`
{% endcapture %}
{% capture verified_possible_values %}
  The shortest value allowed for this parameter is 30 days (`30d`) because of the cost of identity verification, as well as the time it takes for backend verification sources to be updated.

  The format for this value is **`nD`**, where **`n`** is an integer number and **`D`** specifies the duration. **`D`** can be:
    * `d` for number of days
      * Example: `45d`
    * `w` for a number of weeks
      * Example: `8w` (equivalent to `56d`)
    * `m` for a number of months (assumed to be 30-day months)
      * Example: `18m` (equivalent to `540d`)
    * `y` for a number of years (assumed to be 365-day years)
      * Example: `2y` (equivalent to `730d`)
{% endcapture %}
{% capture authorization_response %}
### Authorization response

After an authorization, Login.gov will redirect to the provided `redirect_uri`.

In a **successful authorization**, the URI will contain the two parameters `code` and `state`:

- **code** — A unique authorization code the client can pass to the [token endpoint](oidc/#token).
- **state** — The `state` value originally provided by the client. Validate that the value is the same.


In an **unsuccessful authorization**, the URI will contain the parameters `error` and `state`, and optionally `error_description`:

- **error** — The error type, either:
  - `access_denied` — The user has either cancelled or declined to authorize the client.
  - `invalid_request` — The authorization request was invalid. The `error_description` parameter will provide a description.
- **error_description** — A description of the error.
- **state** — The `state` value originally provided by the client.
{% endcapture %}

<div class="grid-row grid-gap">
  <div class="desktop:grid-col-9 mobile:grid-col-full">
    <h2 class="margin-top-neg-1">Authorization</h2>
      <p>The authorization endpoint handles authentication and authorization of a user. 
      To present the Login.gov authorization page to a user, direct them to the 
      <code class="language-plaintext highlighter-rouge">/openid_connect/authorize</code>. View an example for <strong>private_key_jwt</strong> or <strong>PKCE</strong> in the side panel.</p>
  <h3 class="margin-top-4" id="request-parameters">Request Parameters</h3>
  <ul class="doc-sub-nav">
    <li id="jwt-nav" class="doc-sub-nav-item code-button__selected margin-left-neg-3">JWT</li>
    <li id="pkce-nav" class="doc-sub-nav-item margin-left-3">PKCE</li>
  </ul>
  <div class="grid-row margin-top-4">
    <div class="grid-col-5">
      <h4 class="parameters">acr_values</h4>
    </div>
    <div class="grid-col-7">
        The Authentication Context Class Reference requests can be used to specify the type of service level<sup id="fnref:1" role="doc-noteref"><a href="#fn:1" class="footnote" rel="footnote">1</a></sup> or the AAL (Authentication Assurance Level) for the user. These and the <code class="language-plaintext highlighter-rouge">scope</code> determine which <a class="usa-link" href="/attributes/">user attributes</a> will be available in the <a class="usa-link" href="oidc/#user-info-response">user info response</a>.
      <p>
        Multiple values can be joined with a space (before being URI-escaped in the final URL).
      </p>
    </div>
  </div>
  <div class="grid-row dev-doc-row">
      <div class="usa-accordion">
        {% include accordion.html content=type_of_service accordion_id="service_level_accordion"  title="Type of Service Level" id="service_level" %}
        {% include accordion.html content=aal_values accordion_id="aal_accordion" title="Authentication Assurance (AAL) Values" id="aal_values" %}
        {% include accordion.html content=loa_values accordion_id="loa_accordion" title="Level of Assurance (LOA) Values (Deprecated)" id="loa_values" %}
      </div>
      <p id="fn:1">
        1. Login.gov continues to work toward achieving certification of compliance with NIST’s IAL2 standard from a third-party assessment organization. 
        <a href="#fnref:1">↩</a>1 <a href="#fnref:1:2">↩</a>2 <a href="#fnref:1:3">↩</a>3
      </p>
    </div>
    <div class="grid-row dev-doc-row">
      <div class="grid-col-5">
        <h4 class="parameters">client_id</h4>
      </div>
      <div class="grid-col-7">
        The unique identifier for the client. This will be registered with the Login.gov IdP in advance.
      </div>
    </div>
    <div class="dev-doc-row pkce-only" hidden>
      <div class="grid-row">
        <div class="grid-col-5">
          <h4 class="parameters clearfix">code_challenge</h4><span class="float-left text-italic">required for PKCE</span>
        </div>
        <div class="grid-col-7 padding-bottom-2">
            The <a class="usa-link" href="https://datatracker.ietf.org/doc/html/rfc4648">RFC 4648</a> URL-safe Base64 encoding of the SHA256 digest of a random value generated by the client. The original random value is referred to as the <code class="language-plaintext highlighter-rouge">code_verifier</code> and is later used with the token endpoint. Generating these values in Ruby might look like this, for example:
        </div>
      </div>
      <div class="grid-row">
        <div class="usa-accordion padding-top-2">
            {% include accordion.html content=code_challenge accordion_id="code_challenge_accordion" title="Code Challenge Example" id="code_challenge" %}  
        </div>
      </div>
    </div>
    <div class="dev-doc-row pkce-only" hidden>
      <div class="grid-row">
        <div class="grid-col-5">
          <h4 class="parameters clearfix">code_challenge_method</h4><span class="float-left text-italic">required for PKCE</span>
        </div>
        <div class="grid-col-7">
            This must be <code class="language-plaintext highlighter-rouge">S256</code>, the only PKCE code challenge method supported.
        </div>
      </div>
    </div>
    <div class="grid-row dev-doc-row">
      <div class="grid-col-5">
        <h4 class="parameters clearfix">response_type</h4>
      </div>
      <div class="grid-col-7">
          This must be <code class="language-plaintext highlighter-rouge">code</code>
      </div>
    </div>
    <div class="grid-row dev-doc-row">
      <div class="grid-col-5">
        <h4 class="parameters clearfix">redirect_uri</h4>
      </div>
      <div class="grid-col-7">
        The URI Login.gov will redirect to after a successful authorization.
      </div>
    </div>
    <div class="dev-doc-row">
      <div class="grid-row">
        <div class="grid-col-5">
          <h4 class="parameters clearfix">scope</h4>
        </div>
        <div class="grid-col-7">
            A space-separated string of the scopes being requested. (Keep in mind the blank space “ “ should be encoded with “+”.) The authorization page will display the list of attributes being requested from the user. Applications should aim to request the fewest <a class="usa-link" href="/attributes/">user attributes</a> and smallest scope needed.
        </div>
      </div>
      <div class="grid-row">
        <div class="usa-accordion padding-top-2">
          {% include accordion.html content=scope_possible_values accordion_id="scope_accordion" id="scope_possible_values" title="Possible Values" %}
        </div>
      </div>
    </div>
    <div class="dev-doc-row">
      <div class="grid-row">
        <div class="grid-col-5">
          <h4 class="parameters clearfix">state</h4>
        </div>
        <div class="grid-col-7">
            A unique value, at least 22 characters in length, used for maintaining state between the request and the callback. This value will be returned to the client on a successful authorization.
        </div>
      </div>
    </div>
    <div class="dev-doc-row">
      <div class="grid-row">
        <div class="grid-col-5">
          <h4 class="parameters clearfix">nonce</h4>
        </div>
        <div class="grid-col-7">
          A unique value, at least 22 characters in length, used to verify the integrity 
          of the <code class="language-plaintext highlighter-rouge">id_token</code> and mitigate 
          <a class="usa-link usa-link usa-link--external" href="https://en.wikipedia.org/wiki/Replay_attack">replay attacks</a>. 
          This value should include per-session state and be unguessable by attackers. This value will be present in the 
          <code class="language-plaintext highlighter-rouge">id_token</code> of the <a class="usa-link" href="oidc/#token-response">token endpoint response</a>, 
          where clients will verify that the nonce claim value is equal to the value of the nonce parameter sent in the authentication request. 
          Read more about <a class="usa-link usa-link--external" href="http://openid.net/specs/openid-connect-core-1_0.html#NonceNotes">nonce implementation</a> in the spec.
        </div>
      </div>
    </div>
    <div class="dev-doc-row">
      <div class="grid-row">
        <div class="grid-col-5">
          <h4 class="parameters clearfix" id="verified_within">verified_within</h4>
          <span class="text-italic clearfix">optional, for identity verified</span>
          <span class="text-italic">requests only</span>
        </div>
        <div class="grid-col-7">
          Specifies how recently the user’s information must be verified. For example, if your application requires that the user’s data must have been verified within the last year, you can set the value to <code class="language-plaintext highlighter-rouge">verified_within=1y</code>, and customers whose data is older than that will go through the identity verification process again before continuing back to your application.
        </div>
      </div>
      <div class="grid-row">
        <div class="usa-accordion padding-top-2">
          {% include accordion.html content=verified_possible_values accordion_id="verified_accordion" id="verified_possible_values" title="Possible Values" %}
        </div>
      </div>
    </div>
    <div class="dev-doc-row">
      <div class="grid-row">
        <div class="grid-col-5">
          <h4 class="parameters clearfix">locale</h4><span class="float-left text-italic">optional</span>
        </div>
        <div class="grid-col-7">
          If you know that a user would prefer one of our alternative language translations (currently Spanish or French), you can include the <code class="language-plaintext highlighter-rouge">locale</code> parameter to specify the language Login.gov should use (either <code class="language-plaintext highlighter-rouge">es</code> for Spanish or <code class="language-plaintext highlighter-rouge">fr</code> for French).
        </div>
      </div>
    </div>
  </div>
  <div class="usa-layout-docs__main code-snippet-column desktop:grid-col-3">
      <section id="pkce" class="code-snippet-section" hidden>
        <span class="code-button code-button__selected margin-left-2">PKCE Request</span>
          {% include snippets/oidc/auth/pkce.md %}
      </section>
      <section id="jwt" class="code-snippet-section">
        <span class="code-button code-button__selected margin-left-2">JWT Request</span>
          {% include snippets/oidc/auth/jwt.md %}
      </section>
  </div>
</div>
<div class="grid-row grid-gap">
  <div class="desktop:grid-col-9 mobile:grid-col-full">
    {{ authorization_response | markdownify }}
    <a href="{{ site.baseurl }}/oidc/#token" class="usa-link margin-top-4 mobile:display-none desktop:display-block">Next step: Token</a>
  </div>
  <div class="usa-layout-docs__main code-snippet-column desktop:grid-col-3">
    <div class="margin-top-2 position-relative z-index-1">
      <button id="oidc_auth_success_button" data-selector="oidc_auth" class="code-button code-button__selected margin-left-2">Success</button>
      <button id="oidc_auth_error_button" data-selector="oidc_auth" class="code-button margin-left-2">Error</button>
      <section id="oidc_auth_success" class="code-snippet-section">
        {% include snippets/oidc/auth/success.md %}
      </section>
      <section id="oidc_auth_error" class="code-snippet-section" hidden>
        {% include snippets/oidc/auth/failure.md %}
      </section>
    </div>
  </div>
  <a href="{{ site.baseurl }}/oidc/#token" class="usa-link mobile:display-block desktop:display-none margin-top-2">Next step: Token</a>
</div>
