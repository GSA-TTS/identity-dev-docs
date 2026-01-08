---
title: OpenID Connect
lead: >
    [OpenID Connect](https://openid.net){:class="usa-link--external"} (OIDC) is a simple identity layer built on top of the OAuth 2.0 protocol. Login.gov supports [version 1.0](https://openid.net/specs/openid-connect-core-1_0.html){:class="usa-link--external"} of the specification and conforms to the [iGov Profile](https://openid.net/wg/igov){:class="usa-link--external"}.
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
    href: "oidc/token/"
  - text: User info
    href: "oidc/user-info/"
  - text: Certificates
    href: "oidc/certificates/"
  - text: Logout
    href: "oidc/logout/"

---
{% capture aal_values %}
  {% include snippets/auth_content/aal_values.md %}
{% endcapture %}
{% capture service_levels %}
  {% include snippets/auth_content/service_levels.md %}
{% endcapture %}
{% capture deprecated_values %}
 {% include snippets/auth_content/deprecated_values.md %}
{% endcapture %}

{% capture scope_possible_values %}
Possible values are:
   - `openid` (required)
   - `address`
   - `email`
   - `all_emails`
   - `locale`
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

- **code** — A unique authorization code the client can pass to the [token endpoint](/oidc/token/).
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
    <h2 id="authorization" class="margin-top-neg-1">Authorization</h2>
    <p>
      The authorization endpoint handles authentication and authorization of a user.
      To present the Login.gov authorization page to a user, direct them to the
      <code class="language-plaintext highlighter-rouge">/openid_connect/authorize</code>. View an example for <strong>private_key_jwt</strong> or <strong>PKCE</strong> in the side panel.
    </p>
    <h3 class="margin-top-4" id="request-parameters">Request Parameters</h3>
    <ul class="doc-sub-nav">
      <li id="jwt-nav" class="doc-sub-nav-item code-button__selected margin-left-neg-3">
        <a href="{% link _pages/oidc/authorization.md %}#authorization">JWT</a>
      </li>
      <li id="pkce-nav" class="doc-sub-nav-item margin-left-3">
        <a href="{% link _pages/oidc/authorization/pkce.md %}#authorization">PKCE</a>
      </li>
    </ul>
    <div class="grid-row dev-doc-row">
      <div class="grid-col-5">
        <h4 id="acr_values">acr_values</h4>
      </div>
      <div class="grid-col-7">
        <p>
          The Authentication Context Class Reference requests can be used to specify the type of service level or the AAL (Authentication Assurance Level) for the user. These and the <code class="language-plaintext highlighter-rouge">scope</code> determine which <a class="usa-link" href="{{ '/attributes/' | prepend: site.baseurl }}">user attributes</a> will be available in the <a class="usa-link" href="{{ '/oidc/user-info/#user-info-response' | prepend: site.baseurl }}">user info response</a>.
        </p>
        <p>
          Multiple values can be joined with a space (before being URI-escaped in the final URL).
        </p>
      </div>
    </div>
    <div class="grid-row dev-doc-row">
      <dl class="usa-accordion">
        {% include accordion.html content=service_levels accordion_id="service_level_accordion"  title="Type of Service Level" id="service_level" %}
        {% include accordion.html content=aal_values accordion_id="aal_accordion" title="Authentication Assurance (AAL) Values" id="aal_values" %}
        {% include accordion.html content=deprecated_values accordion_id="deprecated_accordion" title="Deprecated Service Values" id="deprecated_values" %}
      </dl>
    </div>
    <div class="grid-row dev-doc-row">
      <div class="grid-col-5">
        <h4>client_id</h4>
      </div>
      <div class="grid-col-7">
        <p>Also known as the issuer, this is the unique identifier for the client. This will be registered with the Login.gov IdP in advance.</p>
      </div>
    </div>
    <div class="grid-row dev-doc-row">
      <div class="grid-col-5">
        <h4 id="prompt">prompt</h4>
      </div>
      <div class="grid-col-7">
        <p>This must be <code class="language-plaintext highlighter-rouge">select_account</code></p>
      </div>
    </div>
    <div class="grid-row dev-doc-row">
      <div class="grid-col-5">
        <h4 class="clearfix">response_type</h4>
      </div>
      <div class="grid-col-7">
        <p>This must be <code class="language-plaintext highlighter-rouge">code</code></p>
      </div>
    </div>
    <div class="grid-row dev-doc-row">
      <div class="grid-col-5">
        <h4 class="clearfix">redirect_uri</h4>
      </div>
      <div class="grid-col-7">
        <p>The URI Login.gov will redirect to after a successful authorization.</p>
      </div>
    </div>
    <div class="dev-doc-row">
      <div class="grid-row">
        <div class="grid-col-5">
          <h4 class="clearfix">scope</h4>
        </div>
        <div class="grid-col-7">
          <p>A space-separated string of the scopes being requested. (Keep in mind the blank space “ “ should be encoded with “+”.) The authorization page will display the list of attributes being requested from the user. Applications should aim to request the fewest <a class="usa-link" href="{{ '/attributes/' | prepend: site.baseurl }}">user attributes</a> and smallest scope needed.</p>
          <p>OIDC requests MUST contain the <code>openid</code> scope value.</p>          
        </div>
      </div>
      <div class="grid-row">
        <dl class="usa-accordion padding-top-2">
          {% include accordion.html content=scope_possible_values accordion_id="scope_accordion" id="scope_possible_values" title="Possible Values" %}
        </dl>
      </div>
    </div>
    <div class="dev-doc-row">
      <div class="grid-row">
        <div class="grid-col-5">
          <h4 class="clearfix">state</h4>
        </div>
        <div class="grid-col-7">
          <p>A unique value, at least 22 characters in length, used for maintaining state between the request and the callback. This value will be returned to the client on a successful authorization.</p>
        </div>
      </div>
    </div>
    <div class="dev-doc-row">
      <div class="grid-row">
        <div class="grid-col-5">
          <h4 class="clearfix">nonce</h4>
        </div>
        <div class="grid-col-7">
          <p>A unique value, at least 22 characters in length, used to verify the integrity
          of the <code class="language-plaintext highlighter-rouge">id_token</code> and mitigate
          <a class="usa-link usa-link usa-link--external" href="https://en.wikipedia.org/wiki/Replay_attack">replay attacks</a>.</p>
          <p>This value should include per-session state and be unguessable by attackers. This value will be present in the
          <code class="language-plaintext highlighter-rouge">id_token</code> of the <a class="usa-link" href="{{ '/oidc/token/#token-response' | prepend: site.baseurl }}">token endpoint response</a>,
          where clients will verify that the nonce claim value is equal to the value of the nonce parameter sent in the authentication request.</p>
          <p> Read more about <a class="usa-link usa-link--external" href="https://openid.net/specs/openid-connect-core-1_0.html#NonceNotes">nonce implementation</a> in the spec.</p>
        </div>
      </div>
    </div>
    <div class="dev-doc-row">
      <div class="grid-row">
        <div class="grid-col-5">
          <h4 class="clearfix">locale</h4><span class="float-left text-italic">optional</span>
        </div>
        <div class="grid-col-7">
          <p>If you know that a user would prefer one of our alternative language translations (currently Spanish or French), you can include the <code class="language-plaintext highlighter-rouge">locale</code> parameter to specify the language Login.gov should use (either <code class="text-lowercase">ES</code> for Spanish or <code class="text-lowercase">FR</code> for French).</p>
        </div>
      </div>
    </div>
  </div>
  <div class="usa-layout-docs__main code-snippet-column desktop:grid-col-3">
    <section id="jwt" class="code-snippet-section">
      <span class="code-button code-button__selected margin-left-2">JWT Request</span>
      {% include snippets/oidc/auth/jwt.md %}
    </section>
  </div>
</div>

<div class="grid-row grid-gap">
  <div class="desktop:grid-col-9 mobile:grid-col-full">
    {{ authorization_response | markdownify }}
    <a href="{{ '/oidc/token/' | prepend: site.baseurl }}" class="usa-link margin-top-4 mobile:display-none desktop:display-block">Next step: Token</a>
  </div>
  <div class="usa-layout-docs__main code-snippet-column desktop:grid-col-3">
    <div class="margin-top-2 position-relative z-index-1">
      <button id="oidc_auth_tab1_button" data-selector="oidc_auth" class="code-button code-button__selected margin-left-2">Success</button>
      <button id="oidc_auth_tab2_button" data-selector="oidc_auth" class="code-button margin-left-2">Error</button>
      <section id="oidc_auth_tab1">
        {% include snippets/oidc/auth/success.md %}
      </section>
      <section id="oidc_auth_tab2" hidden>
        {% include snippets/oidc/auth/failure.md %}
      </section>
    </div>
  </div>
  <a href="{{ '/oidc/token/' | prepend: site.baseurl }}" class="usa-link mobile:display-block desktop:display-none margin-top-2">Next step: Token</a>
</div>
