---
title: OpenID Connect
permalink: /openid-connect/
---

<div class="usa-alert usa-alert-warning">
  <div class="usa-alert-body">
    <h3 class="usa-alert-heading">Warning!</h3>
    <p class="usa-alert-text">This site is a work in progress and things might be wrong.</p>
  </div>
</div>

# OpenID Connect 1.0 developer guide

login.gov supports [OpenID Connect 1.0][openid-connect], an extension of Oauth 2.0, conforming to the [iGov Profile][igov-profile].

[openid-connect]: https://openid.net/specs/openid-connect-core-1_0.html
[igov-profile]: https://openid.net/wg/igov/

In this guide:

<!-- MarkdownTOC depth="4" autolink="true" bracket="round" -->

- [Getting started](#getting-started)
  - [Pick an authentication method](#pick-an-authentication-method)
  - [Developer portal](#developer-portal)
- [Auto-discovery](#auto-discovery)
- [Authorize](#authorize)
  - [Authorization request](#authorization-request)
  - [Authorization response](#authorization-response)
- [Token](#token)
  - [Token request](#token-request)
  - [Token response](#token-response)
- [User info](#user-info)
  - [User info request](#user-info-request)
  - [User info response](#user-info-response)
- [Certs](#certs)

<!-- /MarkdownTOC -->

## Getting started

### Pick an authentication method

login.gov supports two ways to authenticate clients:

1. PKCE

    [Proof Key for Code Exchange by OAuth Public Clients][pkce], or PKCE for short (pronounced "pixy"). In this method, clients send a public identifier, as well as a hashed random value generated on the client. This is the preferred authentication method for native mobile clients.

2. private_key_jwt

    Clients send a [JWT][jwt] signed with a private key when requesting access tokens. The corresponding public key is registered ahead of time in the developer portal, similar to SAML. This is the preferred authentication method for web apps.

[pkce]: https://tools.ietf.org/html/rfc7636

### Developer portal

[Register your application]({{site.baseurl}}/register/) The issuer will be the `client_id`, and make sure to register a `redirect_uri` for your application and a client cert if using private_key_jwt.

## Auto-discovery

Per the spec, login.gov provides a JSON endpoint with data for OpenID Connect auto-discovery at:

```
https://idp.int.login.gov/.well-known/openid-configuration
```

## Authorize

Users need to authorize OpenID Connect 1.0 clients individually. To present the authorize page for your application to a user, direct them to this URL in a browser with the correctly-configured URL parameters.

### Authorization request

View example as <button data-example="pkce">PKCE</button><button data-example="private_key_jwt">private_key_jwt</button>

<div markdown="1" data-example="pkce">
```bash
https://idp.int.login.gov/openid_connect/authorize?
  acr_values=http%3A%2F%2Fidmanagement.gov%2Fns%2Fassurance%2Floa%2F1&
  client_id=${CLIENT_ID}&
  code_challenge=${CODE_CHALLENGE}&
  code_challenge_method=S256&
  nonce=${NONCE}&
  prompt=select_account&
  redirect_uri=${REDIRECT_URI}&
  response_type=code&
  scope=openid+email&
  state=${STATE}
```
</div>
<div markdown="1" data-example="private_key_jwt" hidden="true">
```bash
https://idp.int.login.gov/openid_connect/authorize?
  acr_values=http%3A%2F%2Fidmanagement.gov%2Fns%2Fassurance%2Floa%2F1&
  client_id=${CLIENT_ID}&
  nonce=${NONCE}&
  prompt=select_account&
  redirect_uri=${REDIRECT_URI}&
  response_type=code&
  scope=openid+email&
  state=${STATE}
```
</div>

* **acr_values** *required*

  Space-separated Authentication Context Class Reference values, used to specify the LOA (level of authentication) of an account. Two LOA levels supported, 1 and 3. This and the `scope` determine what values will be available in the [User Info Response](#user-info-response).

  Possible values:
    - `http://idmanagement.gov/ns/assurance/loa/1`
    - `http://idmanagement.gov/ns/assurance/loa/3`

* **client_id** *required*
  Unique identifier from the client. It must be registered in advance in the [developer portal](#developer-portal).

* **code_challenge** *required for PKCE*
  The URL-safe base64 encoding of the SHA-256 digest of a random value generated on the client. The original value is referred to as the `code_verifier`.

* **code_challenge_method** *required for PKCE*
  Must be `S256`, the only PKCE code challenge method we support.

* **prompt** *required*
  Must be `select_account`.

* **response_type** *required*
  Must be `code`.

* **redirect_uri** *required*
  URI that login.gov will redirect to and pass a result as parameters. It must be registered in advance in the [developer portal](#developer-portal).

* **scope** *required*
  Example: `openid email`

  Space-separated string of scopes to request permission for. The authorization page will display a list of the attributes being requested. Applications should request the minumum attributes and scopes needed.

  Possible values:
   - `openid`
   - `address`
   - `email`
   - `phone`
   - `profile:birthdate`
   - `profile:name`
   - `profile`
   - `social_security_number`


* **state** *required*
  Unique value, will be returned in a successful authorization. It must be at least **32** characters long.

* **nonce** *required*
  Unique value that will be embedded into the `id_token`. It must be at least **32** characters long.

### Authorization response

After the user authorizes the app, login.gov will redirect to the provided `redirect_uri` and add two URL parameters:

- **code**
  Unique authorization code that the client can pass to the [token endpoint](#getting-a-token)
- **state**
  The `state` value originally provided by the client

For example, if the client registered a `redirect_uri` of `https://example.com/response`, login.gov would redirect to a URL similar to:

```
https://example.com/response?code=12345&state=abcdef
```

## Token

Clients use the token endpoint to exchange the authorization `code` for an `id_token` as well as an `access_token`.

### Token request

View example as <button data-example="pkce">PKCE</button><button data-example="private_key_jwt">private_key_jwt</button>

<div markdown="1" data-example="pkce">
```bash
POST https://idp.int.login.gov/api/openid_connect/token

code=${CODE}&
code_verifier=${CODE_VERIFIER}&
grant_type=authorization_code
```
</div>
<div markdown="1" data-example="private_key_jwt" hidden="true">
```bash
POST https://idp.int.login.gov/api/openid_connect/token

client_assertion=${CLIENT_ASSERTION}&
client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&
code=${CODE}&
grant_type=authorization_code
```
</div>

* **client_assertion** *required for private_key_jwt*
  A signed [JWT][jwt].

  <div class="usa-accordion">
  <button class="usa-accordion-button" aria-controls="client-assertion">
  View JWT details
  </button>
  <div id="client-assertion" class="usa-accordion-content" markdown="1">
  The JWT should have the following claims, and must be signed with the client's private key.

    * **iss**
      Issuer, the client's `client_id`.

    * **sub**
      Subject, the client's `client_id`.

    * **aud**
      Audience, the URL of the token endpoint. Should be `https://idp.int.login.gov/api/openid_connect/token`.

    * **jti**
      An unguessable, random string generated by the client.

    * **exp**
      An integer timestamp of the expiration of this token (number of seconds since the Unix Epoch), should be a short period of time in the future (such as 5 minutes from now).

  </div>
  </div>

* **client_assertion_type** *required for private_key_jwt*
  When using private_key_jwt, must be `urn:ietf:params:oauth:client-assertion-type:jwt-bearer`

* **code** *required*
  The URL parameter value from the `redirect_uri` in the Authorization step.

* **code_verifier** *required for PKCE*
  The original value (before the SHA256) generated for the Authorization request for PKCE.

* **grant_type** *required*
  Must be `authorization_code`

### Token response

```json
{
  "access_token": "hhJES3wcgjI55jzjBvZpNQ",
  "token_type": "Bearer",
  "expires_in": 3600,
  "id_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJiMmQyZDExNS0xZDdlLTQ1NzktYjlkNi1mOGU4NGY0ZjU2Y2EiLCJpc3MiOiJodHRwczovL2lkcC5pbnQubG9naW4uZ292IiwiYWNyIjoiaHR0cDovL2lkbWFuYWdlbWVudC5nb3YvbnMvYXNzdXJhbmNlL2xvYS8xIiwibm9uY2UiOiJhYWQwYWE5NjljMTU2YjJkZmE2ODVmODg1ZmFjNzA4MyIsImF1ZCI6InVybjpnb3Y6Z3NhOm9wZW5pZGNvbm5lY3Q6ZGV2ZWxvcG1lbnQiLCJqdGkiOiJqQzdOblU4ZE5OVjVsaXNRQm0xanRBIiwiYXRfaGFzaCI6InRsTmJpcXIxTHIyWWNOUkdqendsSWciLCJjX2hhc2giOiJoWGpxN2tPcnRRS196YV82dE9OeGN3IiwiZXhwIjoxNDg5Njk0MTk2LCJpYXQiOjE0ODk2OTQxOTgsIm5iZiI6MTQ4OTY5NDE5OH0.pVbPF-2LJSG1fE9thn27PwmDlNdlc3mEm7fFxb8ZADdRvYmDMnDPuZ3TGHl0ttK78H8NH7rBpH85LZzRNtCcWjS7QcycXHMn00Cuq_Bpbn7NRdf3ktxkBrpqyzIArLezVJJVXn2EeykXMvzlO-fJ7CaDUaJMqkDhKOK6caRYePBLbZJFl0Ri25bqXugguAYTyX9HACaxMNFtQOwmUCVVr6WYL1AMV5WmaswZtdE8POxYdhzwj777rkgSg555GoBDZy3MetapbT0csSWqVJ13skWTXBRrOiQQ70wzHAu_3ktBDXNoLx4kG1fr1BiMEbHjKsHs14X8LCBcIMdt49hIZg"
}
```

 * **access_token**
    An opaque token used to authenticate to the [User Information](#user-information) endpoint

 * **token_type**
    Describes the kind of access token. Will always be `Bearer`.

 * **expires_in**
    The number of seconds that the access token will expire in.

 * **id_token**
    A signed [JWT][jwt] that contains basic attributes about the user such as user ID for this client (encoded as the `sub` claim) as well as the claims requested as part of the `scope` in the authorization request. See the [User Info Response](#user-info-response) section for details on the claims. The public key to verify this JWT is available from the [certs](#certs) endpoint.

    Here is the above example `id_token`, decoded:

    ```json
    {
      "sub": "b2d2d115-1d7e-4579-b9d6-f8e84f4f56ca",
      "iss": "https://idp.int.login.gov",
      "acr": "http://idmanagement.gov/ns/assurance/loa/1",
      "nonce": "aad0aa969c156b2dfa685f885fac7083",
      "aud": "urn:gov:gsa:openidconnect:development",
      "jti": "jC7NnU8dNNV5lisQBm1jtA",
      "at_hash": "tlNbiqr1Lr2YcNRGjzwlIg",
      "c_hash": "hXjq7kOrtQK_za_6tONxcw",
      "exp": 1489694196,
      "iat": 1489694198,
      "nbf": 1489694198
    }
    ```

    <div class="usa-accordion">
    <button class="usa-accordion-button" aria-controls="id-token-details">
    View JWT claim details
    </button>
    <div id="id-token-details" class="usa-accordion-content" markdown="1">
    The decoded `id_token` contains a few claims:

    * **acr**
      Authentication Context Class Reference value or LOA (level of authentication) of the returned claims, from the original [authorization request](#authorization-request).

    * **at_hash**
      Access token hash, a url-safe base-64 encoding of the left 128 bits of the SHA256 of the `access_token` value. Provided so the client can verify the `access_token` value.

    * **aud**
      Audience, the client ID.

    * **c_hash**
      Code hash, a url-safe base-64 encoding of the left 128 bits of the SHA256 of the authorization `code` value. Provided so the client verify the `code` value.

    * **exp**
      Expiration, an integer timestamp of the expiration of this token (number of seconds since the Unix Epoch).

    * **iat**
      Issued at, an integer timestamp of when the token was created (number of seconds since the Unix Epoch).

    * **iss**
      Issuer, will be `https://idp.int.login.gov`.

    * **jti**
      An random string generated to ensure uniqueness.

    * **nbf**
      "Not before", an integer timestamp of when the token will start to be valid (number of seconds since the Unix Epoch).

    * **nonce**
      The nonce provided by the client in the [authorization request](#authorization-request)

    * **sub**
      Subject, unique ID for this user. This ID is unique per client.
    </div>
    </div>


[jwt]: https://jwt.io/

## User info

The userinfo endpoint renders attributes about the user.

### User info request

Clients use the `access_token` from the [token response](#token-response) as a bearer token in the HTTP Authorization header.

```
GET https://idp.int.login.gov/api/openid_connect/userinfo
Authorization: Bearer hhJES3wcgjI55jzjBvZpNQ
```

### User info response

login.gov supports some of the [standard claims from OpenID Connect 1.0][standard-claims].

[standard-claims]: https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
[address-claim]: https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim

**Example**
```json
{
  "address": {
    "formatted": "123 Main St Apt 123\nWashington, DC 20001",
    "street_address": "123 Main St Apt 123",
    "locality": "Washington",
    "region": "DC",
    "postal_code": "20001"
  },
  "birthdate": "1970-01-01",
  "email": "test@example.com",
  "email_verified": true,
  "family_name": "Smith",
  "given_name": "John",
  "iss": "https://idp.int.login.gov",
  "phone": "+1 (555) 555-5555",
  "phone_verified": true,
  "social_security_number": "111223333",
  "sub": "b2d2d115-1d7e-4579-b9d6-f8e84f4f56ca"
}
```

 * **address** *requires the `address` scope and an LOA 3 account*
   A JSON object, per the OpenID Connect 1.0 spec [Address Claim][address-claim]

 * **birthdate** *requires `profile` or `profile:birthdate` scopes and an LOA 3 account*
   Birthdate, formatted as ISO 8601:2004 `YYYY-MM-DD`.

 * **email** *requires the `email` scope*
   User's email.

 * **email_verified** *requires the `email` scope*
   Boolean, whether or not the `email` has been verified. Currently login.gov only supports verified emails.

 * **family_name** *requires `profile` or `profile:name` scopes and an LOA 3 account*
   User's last (family) name.

 * **given_name** *requires `profile` or `profile:name` scopes and an LOA 3 account*
   User's first (given) name.

 * **iss**
   Issuer, will be `https://idp.int.login.gov`.

 * **phone** *requires the `phone` scope and an LOA 3 account*
   User's phone number, formatted as E.164.
   Example: `+1 (555) 555-5555`

 * **phone_verified** *requires the `phone` scope and an LOA 3 account*
   Boolean, whether or not the `phone` has been verified. Currently login.gov only supports verified phones.

 * **social\_security\_number** *requres the `social_security_number` scope and an LOA 3 account*
   User's social security number.

 * **sub**
   Subject, unique ID for this user. This ID is unique per client.

## Certs

The public key to verify signed JWTs from login.gov (such as the `id_token`) is available in [JWK][jwk] format at the certs endpoint:

```
https://idp.int.login.gov/api/openid_connect/certs
```

[jwk]: https://tools.ietf.org/html/rfc7517

<script type="text/javascript">
  function showExamples(type) {
    Array.prototype.slice.call(document.querySelectorAll('button[data-example]')).forEach(function(button) {
      var show = button.getAttribute('data-example') == type;

      button.className = show ? 'usa-button-active' : '';
    });


    Array.prototype.slice.call(document.querySelectorAll('div[data-example]')).forEach(function(example) {
      var show = example.getAttribute('data-example') == type;

      if (show) {
        example.removeAttribute('hidden');
      } else {
        example.setAttribute('hidden', 'true');
      }
    });
  }

  Array.prototype.slice.call(document.querySelectorAll('button[data-example]')).forEach(function(button) {
    button.onclick = function() {
      showExamples(this.getAttribute('data-example'));
    };
  });

  showExamples('pkce');
</script>
