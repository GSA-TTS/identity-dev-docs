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
    links:
      - text: Authorization Fraud Detected
        href: "#authorization-fraud-detected"
      - text: Identity Fraud Detected
        href: "#identity-fraud-detected"
  - text: Submitting a Security Event Token (SET)
    href: "#submitting-a-security-event-token-set"
    links:
      - text: Request
        href: "#request"
      - text: Response
        href: "#response"
---

## Getting started

login.gov allows partners and Relying Parties (RPs) to notify us of various security-related events through our API.

### Auto-discovery

login.gov provides a JSON endpoint for OpenID Connect auto-discovery at `/.well-known/risc-configuration`. In our agency integration environment, this is available at <https://idp.int.identitysandbox.gov/.well-known/risc-configuration>

## Supported Events

login.gov custom events, based on the [OpenID RISC Event Types][openid-risc-events], but not specific ones from that list at this time.

### Authorization Fraud Detected

RPs should submit this event when they believe a user's credentials have been compromised, that somebody who is not the user
was able to sign in to a user's account. login.gov may force the reset of user's password when we receive this event.

The **event_type** for this is:

```
https://schemas.openid.net/secevent/risc/event-type/login-gov/authorization-fraud-detected
```

### Identity Fraud Detected

RPs should submit this event when they believe a verified identity may be fraudulent. login.gov may reset the user's profile and verified attributes data when we receive this event.

The **event_type** for this is:

```
https://schemas.openid.net/secevent/risc/event-type/login-gov/identity-fraud-detected
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

  An object containing an event, keyed by event type. See [Supported Events](#supported-events) for possible keys.

  The event (the value) contains:

  * **subject** (required)
      An event should contain a **subject** object, with the following keys:

      * **subject_type**
        Must be **iss_sub**, this indicates the **sub** is the subject provided by the original issuer (login.gov)

      * **iss**
        This is login.gov's issuer, the root URL for login.gov. In the agency integration environment, this is `https://idp.int.identitysandbox.gov`

      * **sub**
        The UUID identifying the user. This is provided as the `sub` inside the `id_token` JWT in the [OpenID Token endpoint]({{site.baseurl}}/#token-response).

  * **event_at**
    Time at which the security event occurred, an integer timestamp representing the number of seconds since the Unix Epoch. This optional field can be used to back-date reports of events, if they are not detected immediately.


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
          },
          "event_at": 1590000000
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
  "aud": "https://idp.int.identitysandbox.gov/api/risc/security_events",
  "events": {
    "https://schemas.openid.net/secevent/risc/event-type/login-gov/authorization-fraud-detected": {
      "subject": {
        "subject_type": "iss_sub",
        "iss": "https://idp.int.identitysandbox.gov",
        "sub": "123d4f56-jkl7-891011-t12vw-y13a1415d1617ghi18"
      },
      "event_at": 1590000000
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
eyJpc3MiOiJ1cm46Z292OmdzYTpvcGVuaWRjb25uZWN0OnRlc3Q6cmlzYzpzZXRzIiwianRpIjoiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoiLCJpYXQiOjE1OTU1MzIxNzgsImF1ZCI6Imh0dHBzOi8vaWRwLmludC5pZGVudGl0eXNhbmRib3guZ292L2FwaS9yaXNjL3NlY3VyaXR5X2V2ZW50cyIsImV2ZW50cyI6eyJodHRwczovL3NjaGVtYXMub3BlbmlkLm5ldC9zZWNldmVudC9yaXNjL2V2ZW50LXR5cGUvbG9naW4tZ292L2F1dGhvcml6YXRpb24tZnJhdWQtZGV0ZWN0ZWQiOnsic3ViamVjdCI6eyJzdWJqZWN0X3R5cGUiOiJpc3Nfc3ViIiwiaXNzIjoiaHR0cHM6Ly9pZHAuaW50LmlkZW50aXR5c2FuZGJveC5nb3YiLCJzdWIiOiIxMjNkNGY1Ni1qa2w3LTg5MTAxMS10MTJ2dy15MTNhMTQxNWQxNjE3Z2hpMTgifSwiZXZlbnRfYXQiOjE1OTAwMDAwMDB9fX0
.
CwUa-4JUaEnYipEupEV_Gxkwf6V1Ofo4C7RJ_yC113VgFT1vs6xEQHVrZFU8DkILC68r_B2x-FpE_9EAPeGL45mP6lpN7moEylor5F9ftYHx2kRoFzgjtubWoOEF9BrP6H9uYFubYNIOpQCfBOy8s2682snWkj165RtqR0OyGaxy-myEdZXzH0j4dqVw12JY8b1_C_qU8WGPTzlUDAiXiUH01X6JHXT7yhA0PNtjucwXicOMNxATO4KNH-lCLb3c0FCzWT26o9lDiw7eamxDgt53kE2_pgc-9gPOsSV8B2scNr4R07__eMoFazIXkQIZNLyNa4SQPf57-Q1YfQSi1Q
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
