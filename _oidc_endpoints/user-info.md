---
verb: GET
endpoint: /api/openid_connect/userinfo
order: 4

summary: Returns user attributes
---

## User info

The user info endpoint is used to retrieve [user attributes]({{ site.baseurl }}/attributes/). Clients use the `access_token` from the [token response](#token-response) as a bearer token in the [HTTP Authorization header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization). To request attributes, send an HTTP GET request to the `/api/openid_connect/userinfo` endpoint, for example:

```
GET https://idp.int.identitysandbox.gov/api/openid_connect/userinfo
Authorization: Bearer hhJES3wcgjI55jzjBvZpNQ
```

### User info response

The user info response will be a JSON object containing [user attributes]({{ site.baseurl }}/attributes/). login.gov supports some of the [standard claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) from OpenID Connect 1.0. In addition to the user attributes, the following information will also be present:

* **iss** (string)
  The issuer of the response, which will be the URL of the login.gov IdP, for example: `https://idp.int.identitysandbox.gov`
  - Requires `profile` or `profile:name` scopes.

* **email_verified** (boolean)
  Whether the email has been verified. Currently, login.gov only supports verified emails.
  - Requires the `email` scope.

* **phone_verified** (boolean)
  Whether the phone number has been verified. Currently, login.gov only supports verified phones.
  - Requires the `phone` scope and an IAL2 account.

* **verified_at** (number, null)
  When the user's identity was last verified, as an integer timestamp representing the number of seconds since the Unix Epoch, or `null` if the account has never been verified.
  - Requires the `profile:verified_at` scope.

Here's an example response:

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
  "iss": "https://idp.int.identitysandbox.gov",
  "phone": "+18881112222",
  "phone_verified": true,
  "social_security_number": "111223333",
  "sub": "b2d2d115-1d7e-4579-b9d6-f8e84f4f56ca",
  "verified_at": 1577854800
}
```