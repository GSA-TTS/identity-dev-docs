---
title: OpenID Connect
---

<div class="usa-alert usa-alert-warning">
  <div class="usa-alert-body">
    <h3 class="usa-alert-heading">Warning!</h3>
    <p class="usa-alert-text">This site is a work in progress and things might be wrong.</p>
  </div>
</div>

# OpenID Connect 1.0 Developer Guide

login.gov supports OpenID Connect 1.0, an extension of Oauth 2.0, conforming to the [iGov Profile][igov-profile].

[igov-profile]: http://openid.net/wg/igov/

In this guide:

<!-- MarkdownTOC depth="4" autolink="true" bracket="round" -->

- [Developer Portal](#developer-portal)
- [Auto-Discovery](#auto-discovery)
- [Authorization](#authorization)
  - [Authorization Request](#authorization-request)
  - [Authorization Response](#authorization-response)
- [Getting a Token](#getting-a-token)
  - [Token Request](#token-request)
  - [Token Response](#token-response)
- [User Information](#user-information)
  - [User Info Request](#user-info-request)
  - [User Info Response](#user-info-response)

<!-- /MarkdownTOC -->

## Developer Portal

Visit $DASHBOARD_URL to register as a login.gov developer and to create `client_id` and register a `redirect_uri` for your application.

## Auto-Discovery

Per the spec, login.gov serves a JSON provides an auto-discovery endpoint for OpenID Connect at:

```
https://login.gov/.well-known/openid-configuration
```

## Authorization

Users need to authorize OpenID Connect 1.0 clients individually. To present the authorize page for your application to a user, direct them to this URL in a browser with the correctly-configured URL parameters.

### Authorization Request

```
https://login.gov/openid_connect/authorize?
  acr_values=http%3A%2F%2Fidmanagement.gov%2Fns%2Fassurance%2Floa%2F1&
  client_id=$CLIENT_ID&
  code_challenge=$CODE_CHALLENGE&
  code_challenge_method=S256&
  prompt=select_account&
  redirect_uri=$REDIRECT_URI&
  response_type=code&
  scope=openid+email&
  state=$STATE
```

* **acr_values** *required*

  Space-separated Authentication Context Class Reference values, used to specify the LOA (level of authentication) of an account. Two LOA levels supported, 1 and 3. This and the `scope` determine what values will be available in the [User Info Response](#user-info-response).

  Possible values:
    - `http://idmanagement.gov/ns/assurance/loa/1`
    - `http://idmanagement.gov/ns/assurance/loa/3`

* **client_id** *required*
  Unique identifier from the client. It must be registered in advance in the [developer portal](#developer-portal).

* **code_challenge** *required*
  The URL-safe, base64 encoding of the SHA-256 of a random value generated on the client. The original value is referred to as the `code_verifier`.

* **code_challenge_method** *required*
  Must be `S256`, the only PKCE code challenge method we support.

* **prompt** *required*
  Must be `select_account`.

* **response_type** *required*
  Must be `code`.

* **redirect_uri** *required*
  URI that login.gov will redirect to and pass a result as parameters. It must be registered in advance in the [developer portal](#developer-portal).

* **scope** *required*
  Example: `openid email`

  Space-separated string of scopes to request permission for.
  Possible values:
   - `openid`
   - `address`
   - `email`
   - `phone`
   - `profile`


* **state** *required*
  Unique value, will be returned in a successful authorization.

* **nonce** *optional*
  Unique value that will be embedded into the `id_token` if present.

### Authorization Response

After the user authorizes the app, login.gov will redirect to the provided `redirect_uri` and add two URL parameters:

- **code**
  Unique authorization code that the client can pass to the [token endpoint](#getting-a-token)
- **state**
  The `state` value originally provided by the client

For example, if the client registered a `redirect_uri` of `https://example.com/response`, login.gov would redirect to a URL similar to:

```
https://example.com/response?code=12345&state=abcdef
```

## Getting a Token

Clients use the token endpoint to exchange the authorization `code` for an `id_token` as well as an `access_token`.

### Token Request

```
POST https://login.gov/openid_connect/token

code=$CODE&
code_verifier=$CODE_VERIFIER&
grant_type=authorization_code
```

* **code** *required*
  The URL parameter value from the `redirect_uri` in the Authorization step.

* **code_verifier** *required*
  The original value (before the SHA256) generated for the Authorization request for PKCE.

* **grant_type** *required*
  Must be `authorization_code`

### Token Response

```json
{
  "access_token": "abcdef",
  "token_type": "Bearer",
  "expires_in": 3600,
  "id_token": ""
}
```

 * **access_token**
    An opaque token used to authenticate to the [User Information](#user-information) endpoint

 * **token_type**
    Describes the kind of access token. Will always be `Bearer`.

 * **expires_in**
    The number of seconds that the access token will expire in.

 * **id_token**
    A signed [JWT][jwt] that contains some basic attributes about the user, including the user ID for this client (encoded as the `sub` claim).

[jwt]: https://jwt.io/

## User Information

The userinfo endpoint renders attributes about the user.

### User Info Request

```
GET https://login.gov/openid_connect/userinfo
Authorization: Bearer abcdef
```

### User Info Response

login.gov supports some of the [standard claims from OpenID Connect 1.0][standard-claims]:

[standard-claims]: http://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
[address-claim]: http://openid.net/specs/openid-connect-core-1_0.html#AddressClaim

**Example**
```json
{
  "iss": "https://login.gov",
  "sub": "abcdef12345678",
  "email": "foo@example.com",
  "email_verified": true
}
```

 * **address** *requires the `address` scope and an LOA 3 account*

   A JSON object, per the OpenID Connect 1.0 spec [Address Claim][address-claim]

   ```json
   {
     "formatted": "123 Main St. Apt 123\nWashington, DC 20001",
     "street_address": "123 Main St. Apt 123",
     "locality": "Washington",
     "region": "DC",
     "postal_code": "20001"
   }
   ```

 * **birthdate** *requires the `profile` scope and an LOA 3 account*

   Birthdate, formatted as ISO 8601:2004 `YYYY-MM-DD`.

 * **email** *requires the `email` scope*

   User's email.

 * **email_verified** *requires the `email` scope*

   Boolean, whether or not the `email` has been verified. Currently `login.gov` only supports verified emails.

 * **family_name** *requires the `profile` scope and an LOA 3 account*

 * **given_name** *requires the `profile` scope and an LOA 3 account*

 * **iss**

   Issuer, will be `https://login.gov`

 * **middle_name** *requires the `profile` scope and an LOA 3 account*

 * **phone** *requires the `phone` scope and an LOA 3 account*

 * **phone_verified** *requires the `phone` scope and an LOA 3 account*

   Boolean, whether or not the `phone` has been verified. Currently `login.gov` only supports verified phones.

 * **sub**

   Unique ID for this user. This ID is unique per client.
