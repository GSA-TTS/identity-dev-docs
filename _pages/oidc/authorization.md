---
title: OpenID Connect
lead: >
  [OpenID Connect](http://openid.net) is a simple identity layer built on top of the OAuth 2.0 protocol. Login.gov supports [version 1.0](http://openid.net/specs/openid-connect-core-1_0.html) of the specification and conforms to the [iGov Profile](https://openid.net/wg/igov).
redirect_from:
  - /openid-connect/
sidenav:
  - text: Getting started
    href: "#getting-started"
  - text: Authorization
    href: "/oidc/oidc_authorization"
    links:
      - text: Authorization response
        href: "#authorization-response"
  - text: Token
    href: "#token"
    links:
      - text: Token response
        href: "#token-response"
  - text: User info
    href: "#user-info"
    links:
      - text: User info response
        href: "#user-info-response"
  - text: Certificates
    href: "#certificates"
  - text: Logout
    href: "#logout"
    links:
      - text: Logout response
        href: "#logout-response"
  - text: Example application
    href: "#example-application"

---

## Authorization

The authorization endpoint handles authentication and authorization of a user. To present the Login.gov authorization page to a user, direct them to the `/openid_connect/authorize`.

<span class="margin-right-2">View an example for…</span><button data-example="private_key_jwt">private_key_jwt</button><button data-example="pkce">PKCE</button>

<div markdown="1" data-example="private_key_jwt">
```bash
https://idp.int.identitysandbox.gov/openid_connect/authorize?
  acr_values=http%3A%2F%2Fidmanagement.gov%2Fns%2Fassurance%2Fial%2F1&
  client_id=${CLIENT_ID}&
  nonce=${NONCE}&
  prompt=select_account&
  redirect_uri=${REDIRECT_URI}&
  response_type=code&
  scope=openid+email&
  state=abcdefghijklmnopabcdefghijklmnop
```
</div>
<div markdown="1" data-example="pkce" hidden="true">
```bash
https://idp.int.identitysandbox.gov/openid_connect/authorize?
  acr_values=http%3A%2F%2Fidmanagement.gov%2Fns%2Fassurance%2Fial%2F1&
  client_id=${CLIENT_ID}&
  code_challenge=${CODE_CHALLENGE}&
  code_challenge_method=S256&
  nonce=${NONCE}&
  prompt=select_account&
  redirect_uri=${REDIRECT_URI}&
  response_type=code&
  scope=openid+email&
  state=abcdefghijklmnopabcdefghijklmnop
```
</div>

### Request Parameters



* **acr_values**
  The Authentication Context Class Reference requests can be used to specify the type of identity verification<sup id="fnref:1" role="doc-noteref"><a href="#fn:1" class="footnote" rel="footnote">1</a></sup> or the AAL (Authentication Assurance Level) for the user. These and the `scope` determine which [user attributes]({{ site.baseurl }}/attributes/) will be available in the [user info response](#user-info-response).

  Multiple values can be joined with a space (before being URI-escaped in the final URL)

  #### Type of Identity Verification<sup id="fnref:1:1" role="doc-noteref"><a href="#fn:1" class="footnote" rel="footnote">1</a></sup> {#ial-values}

  A type of identity verification must be specified.

    - **`http://idmanagement.gov/ns/assurance/ial/1`**
        Basic identity assurance, does not require identity verification (this is the most common value).
    - **`http://idmanagement.gov/ns/assurance/ial/2`**
        Requires that the user has gone through identity verification<sup id="fnref:1:2" role="doc-noteref"><a href="#fn:1" class="footnote" rel="footnote">1</a></sup>

  #### AAL Values
  We default to requiring a user to be authenticated with a second factor:

  - **`urn:gov:gsa:ac:classes:sp:PasswordProtectedTransport:duo`**
      This specifies that a user has been authenticated with a second factor. This value will be returned in the user attributes by default. We do not allow strict AAL 1, because it implies that a user did not authenticate with a second factor. This setting requires users to reauthenticate with a separate second factor (i.e. not a session secret) once every 30 days at a minimum.

  Stricter behavior can be specified by adding one of:

    - **`http://idmanagement.gov/ns/assurance/aal/2`**
        This specifies that a user has been authenticated with a separate second factor. Users must _always_ authenticate with a second factor.
    - **`http://idmanagement.gov/ns/assurance/aal/2?phishing_resistant=true`**
        This specifies that a user has been authenticated with a crytographically secure method, such as WebAuthn or using a PIV/CAC. Users must _always_ authenticate with a second factor.
    - **`http://idmanagement.gov/ns/assurance/aal/2?hspd12=true`**
        This specifies that a user has been authenticated with an HSPD12 credential (requires PIV/CAC). Users must _always_ authenticate with a second factor.

  #### LOA Values
  These are not recommended, and only for legacy compatibility.
    - **`http://idmanagement.gov/ns/assurance/loa/1`**
      Equivalent to IAL1
    - **`http://idmanagement.gov/ns/assurance/loa/3`**
      Equivalent to identity verified account

* **client_id**
  The unique identifier for the client. This will be registered with the Login.gov IdP in advance.

* **code_challenge** — *required for PKCE*
  The [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648) URL-safe Base64 encoding of the SHA256 digest of a random value generated by the client. The original random value is referred to as the `code_verifier` and is later used with the token endpoint. Generating these values in Ruby might look like this, for example:
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

* **code_challenge_method** -- *required for PKCE*
  This must be `S256`, the only PKCE code challenge method supported.

* **response_type**
  This must be `code`.

* **redirect_uri**
  The URI Login.gov will redirect to after a successful authorization.

* **scope**
  A space-separated string of the scopes being requested. The authorization page will display the list of attributes being requested from the user. Applications should aim to request the fewest [user attributes]({{ site.baseurl }}/attributes/) and smallest scope needed. Possible values are:
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

* **state**
  A unique value, at least 22 characters in length, used for maintaining state between the request and the callback. This value will be returned to the client on a successful authorization.

* **nonce**
  A unique value, at least 22 characters in length, used to verify the integrity of the `id_token` and mitigate [replay attacks](https://en.wikipedia.org/wiki/Replay_attack). This value should include per-session state and be unguessable by attackers. This value will be present in the `id_token` of the [token endpoint response](#token-response), where clients will verify that the nonce claim value is equal to the value of the nonce parameter sent in the authentication request. Read more about [nonce implementation](http://openid.net/specs/openid-connect-core-1_0.html#NonceNotes) in the spec.

* **verified_within** -- *optional, for identity verified requests only*
  Specifies how recently the user's information must be verified. For example, if your application requires that the user's data must have been verified within the last year, you can set the value to `verified_within=1y`, and customers whose data is older than that will go through the identity verification process again before continuing back to your application.

  <details markdown="1">
    <summary>Possible values</summary>

  The shortest value allowed for this parameter is 30 days (`30d`) because of the cost of identity verification, as well as the time it takes for backend verification sources to be updated.

  The format for this value is **`xD`**, where **`x`** is an integer number and **`D`** specifies the duration. **`D`** can be:
    * `d` for number of days
      * Example: `45d`
    * `w` for a number of weeks
      * Example: `8w` (equivalent to `56d`)
    * `m` for a number of months (assumed to be 30-day months)
      * Example: `18m` (equivalent to `540d`)
    * `y` for a number of years (assumed to be 365-day years)
      * Example: `2y` (equivalent to `730d`)
  </details>

* **locale** -- *optional*
  If you know that a user would prefer one of our alternative language translations (currently Spanish or French), you can include the `locale` parameter to specify the language Login.gov should use (either `es` for Spanish or `fr` for French).

### Authorization response

After an authorization, Login.gov will redirect to the provided `redirect_uri`.

In a **successful authorization**, the URI will contain the two parameters `code` and `state`:

- **code** — A unique authorization code the client can pass to the [token endpoint](#token).
- **state** — The `state` value originally provided by the client.

For example:

```bash
https://agency.gov/response?
  code=12345&
  state=abcdefghijklmnopabcdefghijklmnop
```

In an **unsuccessful authorization**, the URI will contain the parameters `error` and `state`, and optionally `error_description`:

- **error** — The error type, either:
  - `access_denied` — The user has either cancelled or declined to authorize the client.
  - `invalid_request` — The authorization request was invalid. See the `error_description` parameter for more details.
- **error_description** — A description of the error.
- **state** — The `state` value originally provided by the client.

For example:

```bash
https://agency.gov/response?
  error=access_denied&
  state=abcdefghijklmnopabcdefghijklmnop
```
