---
title: Security Events
lead: >
  login.gov supports parts of the OpenID
  <abbr title="Risk and Incident Sharing and Coordination">RISC</abbr>
  Profile using Security Event Token (SET) to receive security-related event notifications in real-time.
sidenav:
  - text: Getting started
    href: "#getting-started"
  - text: Supported events
    href: "#supported-events"
  - text: Submitting a Security Event Token (SET)
    href: "#submitting-a-security-event-token-set"
    links:
      - text: Request
        href: "#request"
      - text: Response
        href: "#response"
---

## Getting started

login.gov allows partners to notify us of various security-related events through our API.

### Auto-discovery

login.gov provides a JSON endpoint for OpenID Connect auto-discovery at `/.well-known/risc-configuration`. In our agency integration environment, this is available at <https://idp.int.identitysandbox.gov/.well-known/risc-configuration>

## Supported Events

login.gov supports a subset of the [OpenID RISC Event Types][openid-risc-events]:


### Account Credential Change Required

Submit this event to login.gov if the user should change their credential (usually, reset their password).

The **event_type** for this is:

```
https://schemas.openid.net/secevent/risc/event-type/account-credential-change-required
```

## Submitting a Security Event Token (SET)

login.gov supports [Push-Based SET Token Delivery Using HTTP][push-http]. The SETs are signed [JWTs (JSON Web Tokens)](https://jwt.io/), similar to those used in the [OpenID Connect Authorization]({{site.baseurl}}/oidc/) flow.

The [OpenID RISC Profile][openid-risc-events-profile] defines some very specific properties of these JWTs, and login.gov will validate against them, providing clear error messages where possible.

### Request

To submit a SET, send an HTTP POST request to the `/api/risc/security_events` endpoint. The body of the request is a signed JWT.

JWTs must be signed by the client application's private key using **RS256**, the same one used for the `private_key_jwt` flow for OpenID Connect.

#### HTTP Request

* **Content-Type** (required)
  The request must have an Content-Type of `application/secevent+jwt`

#### JWT Headers

* **alg** (required)
  The JWT must be signed with the **RS256** algorithm.

* **typ** (required)
  The type header must be set to **secevent+jwt**

#### JWT Claims

* **aud** (required)
  The audience for this JWT, which is the full URL for the `/api/risc/security_events` endpoint. In the agency integration environment, this is `https://idp.int.identitysandbox.gov/api/risc/security_events`

* **iat**
  Time at which the JWT was issued, an integer timestamp representing the number of seconds since the Unix Epoch.

* **iss** (required)
  The issuer of this SET, which should be your client application's client ID. For example: `urn:gov:gsa:openidconnect:test:risc:sets`

* **jti** (required)
  JWT Identifier. This should be a unique identifier for this event, login.gov will attempt to de-duplicate events by this key.

* **events**

  An object containing an event, keyed by event type. See [Supported Events](#supported-events) for possible keys. An event should contain a **subject** object, with the following keys:

  * **subject_type**
    Must be **iss_sub**, this indicates the **sub** is the subject provided by the original issuer (login.gov)

  * **iss**
    This is login.gov's issuer, the root URL for login.gov. In the agency integration environment, this is `https://idp.int.identitysandbox.gov`

  * **sub**
    The UUID identifying the user. This is provided as the `sub` inside the `id_token` JWT in the [OpenID Token endpoint]({{site.baseurl}}/#token-response).

  Example:

  ```json
  {
    "...": "...",
    "events": {
       "<$EVENT_TYPE>": {
          "subject": {
            "subject_type": "iss_sub",
            "iss": "https://idp.int.identitysandbox.gov",
            "sub": "<$SUB>"
          }
       }
    }
  }
  ```

#### Example request

For a Security Event like this:

```json
{
  "iss": "urn:gov:gsa:openidconnect:test:risc:sets",
  "jti": "abcdefghijklmnopqrstuvwxyz",
  "iat": 1595532178,
  "aud": "a",
  "events": {
    "https://schemas.openid.net/secevent/risc/event-type/account-credential-change-required": {
      "subject": {
        "subject_type": "iss_sub",
        "iss": "https://idp.int.identitysandbox.gov",
        "sub": "123d4f56-jkl7-891011-t12vw-y13a1415d1617ghi18"
      }
    }
  }
}
```

With the JWT headers of:

```js
{
  "typ": "secevent+jwt",
  "alg": "RS256"
}
```

After being encoded as a JWT and signed with a private key, the entire request would look like:

```
POST /api/risc/security_events
Content-Type: application/secevent+jwt
Accept: application/json
eyJ0eXAiOiJzZWNldmVudCtqd3QiLCJhbGciOiJSUzI1NiJ9
.
eyJpc3MiOiJ1cm46Z292OmdzYTpvcGVuaWRjb25uZWN0OnRlc3Q6cmlzYzpzZXRzIiwianRpIjoiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoiLCJpYXQiOjE1OTU1MzIxNzgsImF1ZCI6Imh0dHBzOi8vaWRwLmludC5pZGVudGl0eXNhbmRib3guZ292L2FwaS9zZWN1cml0eV9ldmVudHMiLCJldmVudHMiOnsiaHR0cHM6Ly9zY2hlbWFzLm9wZW5pZC5uZXQvc2VjZXZlbnQvcmlzYy9ldmVudC10eXBlL2FjY291bnQtY3JlZGVudGlhbC1jaGFuZ2UtcmVxdWlyZWQiOnsic3ViamVjdCI6eyJzdWJqZWN0X3R5cGUiOiJpc3Nfc3ViIiwiaXNzIjoiaHR0cHM6Ly9pZHAuaW50LmlkZW50aXR5c2FuZGJveC5nb3YiLCJzdWIiOiIxMjNkNGY1Ni1qa2w3LTg5MTAxMS10MTJ2dy15MTNhMTQxNWQxNjE3Z2hpMTgifX19fQ
.
uN5dzVUnJvjFoFuh3F9yYwNDKie2kWkUOMpG7BEyVsObmsCPec1OFfshzBnnbdeUAyGMfhNyid11UsGraOumH5gFleXzwi6VrriGaHGblkUKwwlizUPSgmBVxqT237K7kmT_gHX-qXVGyLsqT_qUHP8of0JsKUkan2yAZHrnByFJjTLF5wy1K2sAMKN8TeMSxyFLRAppd_g3DYmE8jZWSk9tYfTP2sfaJE8P00BXCAAKzEhedneZbY8a7B9SruzWhSUy19zhc4Hd0f1aV_v9ckNnMa4IbQ573-qbSjCK0o1434XAJrZZj3psdjb2Spw44YkA1RQlPUngq1m0rOWVzA
```

### Response

#### Successful response

A successful SET submission will receive an empty response body with a 202 "Accepted" status.

```
HTTP/1.1 202 Accepted
```

#### Error response

An unsuccessful SET submission will receive a 400 "Bad Request", with a JSON body containing error information.

* **err** (string)
  An error code defined by [Security Event HTTP Push][push-http-response] spec.

* **description** (string)
  A more human-readable description of the error.

```
HTTP/1.1 400 Bad Request
Content-Type: application/json
{
  "err":"jwtHdr",
  "description":"typ header must be secevent+jwt"
}
```

[openid-risc-events]: https://openid.net/specs/openid-risc-event-types-1_0-ID1.html

[openid-risc-events-profile]: https://openid.net/specs/openid-risc-profile-1_0-ID1.html#rfc.section.5.1

[push-http]: https://tools.ietf.org/html/draft-ietf-secevent-http-push-00

[push-http-response]: https://tools.ietf.org/html/draft-ietf-secevent-http-push-00#section-2.3
