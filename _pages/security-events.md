---
title: Security Events
lead: >
  Login.gov supports parts of the OpenID
  <abbr title="Risk and Incident Sharing and Coordination">RISC</abbr>
  Profile using Security Event Token (SET) to receive security-related event notifications in real-time.
sidenav:
  - text: Getting started
    href: "#getting-started"
  - text: Submitting a Security Event Token (SET)
    href: "#submitting-a-security-event-token-set"
    links:
      - text: Auto-discovery
        href: "#auto-discovery"
      - text: Supported incoming events
        href: "#supported-incoming-events"
      - text: Request
        href: "#request"
      - text: Response
        href: "#response"
  - text: Receiving a Security Event Token (SET)
    href: "#receiving-a-security-event-token-set"
    links:
      - text: Configuration
        href: "#configuration"
      - text: Supported outgoing events
        href: "#supported-outgoing-events"
      - text: Request
        href: "#request-1"
      - text: Response
        href: "#response-1"
---

## Getting started

Login.gov allows partners and Relying Parties (RPs) to notify us of various security-related events through our API.

## Submitting a Security Event Token (SET)
 Login.gov supports [Push-Based SET Token Delivery Using HTTP][push-http]. The SETs are signed [JWTs (JSON Web Tokens)](https://jwt.io/), similar to those used in the [OpenID Connect Authorization]({{site.baseurl}}/oidc/) flow.

The [OpenID RISC Profile][openid-risc-events-profile] defines some very specific properties of these JWTs, and Login.gov will validate against them, providing clear error messages where possible.

### Auto-discovery

Login.gov provides a JSON endpoint for OpenID Connect auto-discovery at `/.well-known/risc-configuration`. In our agency integration environment, this is available at <https://idp.int.identitysandbox.gov/.well-known/risc-configuration>

### Supported Incoming Events

Login.gov accepts custom events, based on the [OpenID RISC Event Types][openid-risc-events], but not specific events from that list at this time.

{%- for event in site.data.risc_incoming %}
- [{{ event.friendly_name }}](#{{ event.friendly_name | slugify }})
{%- endfor %}

{% for event in site.data.risc_incoming %}

#### {{ event.friendly_name }}

{{ event.description | markdownify }}

The **event_type** for this is:

```
{{ event.event_type }}
```

{% endfor %}

### Request

To submit a SET, send an HTTP POST request to the `/api/risc/security_events` endpoint. The body of the request is a signed JWT.

JWTs must be signed by the client application's private key using **RS256**, the same one used for the `private_key_jwt` flow for OpenID Connect.

#### HTTP Request

* **Content-Type** (required)
  The request must have a Content-Type of `application/secevent+jwt`

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
  JWT Identifier. This should be a unique identifier for this event, Login.gov will attempt to de-duplicate events by this key.

* **events**

  An object containing an event, keyed by event type. See [Supported Incoming Events](#supported-incoming-events) for possible keys.

  The event (the value) contains:

  * **subject** (required)
      An event should contain a **subject** object, with the following keys:

      * **subject_type**
        Must be **iss-sub**, this indicates the **sub** is the subject provided by the original issuer (Login.gov)

      * **iss**
        This is Login.gov's issuer, the root URL for Login.gov. In the agency integration environment, this is `https://idp.int.identitysandbox.gov`

      * **sub**
        The UUID identifying the user. This is provided as the `sub` inside the `id_token` JWT in the [OpenID Token endpoint]({{ '/oidc/token/#token-response' | prepend: site.baseurl }}).

  * **occurred_at**
    Time at which the security event occurred, an integer timestamp representing the number of seconds since the Unix Epoch. This optional field can be used to back-date reports of events, if they are not detected immediately.


  Example:

  ```json
  {
    "<$EVENT_TYPE>": {
      "subject": {
        "subject_type": "iss-sub",
        "iss": "https://idp.int.identitysandbox.gov",
        "sub": "<$SUB>"
      },
      "occurred_at": 1590000000
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
    "https://schemas.login.gov/secevent/risc/event-type/authorization-fraud-detected": {
      "subject": {
        "subject_type": "iss-sub",
        "iss": "https://idp.int.identitysandbox.gov",
        "sub": "123d4f56-jkl7-891011-t12vw-y13a1415d1617ghi18"
      },
      "occurred_at": 1590000000
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
eyJpc3MiOiJ1cm46Z292OmdzYTpvcGVuaWRjb25uZWN0OnRlc3Q6cmlzYzpzZXRzIiwianRpIjoiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoiLCJpYXQiOjE1OTU1MzIxNzgsImF1ZCI6Imh0dHBzOi8vaWRwLmludC5pZGVudGl0eXNhbmRib3guZ292L2FwaS9yaXNjL3NlY3VyaXR5X2V2ZW50cyIsImV2ZW50cyI6eyJodHRwczovL3NjaGVtYXMubG9naW4uZ292L3NlY2V2ZW50L3Jpc2MvZXZlbnQtdHlwZS9hdXRob3JpemF0aW9uLWZyYXVkLWRldGVjdGVkIjp7InN1YmplY3QiOnsic3ViamVjdF90eXBlIjoiaXNzX3N1YiIsImlzcyI6Imh0dHBzOi8vaWRwLmludC5pZGVudGl0eXNhbmRib3guZ292Iiwic3ViIjoiMTIzZDRmNTYtamtsNy04OTEwMTEtdDEydncteTEzYTE0MTVkMTYxN2doaTE4In0sIm9jY3VycmVkX2F0IjoxNTkwMDAwMDAwfX19
.
O-B3WJwITdMYWaEf0MNErEdy-Hy33DQ6wi7uMYgYHkFgq4hDoIoee4_sgsaYELqEA7zehljn_7FHFVN6sQYKVBQh3OVg281i2aRFUk9SjL8dsnecV_wxz9sYLm4ndO9IOSRjX5sZ7pv6zVTjz1-pTfaYHXx0nuqzRTlm5WZ4NP47XgDXEwsiv6Z1s4VLAqnPl7yuXu_ZNIqj0ww0v6xWA2Zkt_NM8F9grZ0kx5imbVrX2zoXnO7nkBzJThUuZh_CTNRItMolY2IblzHyHYxWRvkEjCLFjtI4vtAvhGN8ZEPk16yUZ2EnY8ptvacI3ZBoG12On-POsIltZekW7JpOqg

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

## Receiving a Security Event Token (SET)

### Configuration

To configure your application to receive notifications from Login.gov, you must supply Login.gov with a URL.

The URL must:
* Be publicly accessible with HTTPS,
* Allow POST requests from Login.gov,
* Use a certificate signed by a trusted certificate authority, and
* Must use port 443 (if specifying a port).

#### Agency integration environment:

- Use the dashboard to register the `push_notification_url` for your application
- Your `push_notification_url` will be automatically added to the integration environment's outbound proxy allowlist by 5PM UTC.

#### Production environment:

- The `push_notification_url` will be deployed as part of the application promotion process. Please specify in the
promotion request that you are including a SET configuration so that we know to add your URL to our outbound proxy allowlist.
- It may require **three weeks** notice to allow the domain for outbound communication.

### Supported Outgoing Events

Login.gov notifies for these events from the [OpenID RISC Event Types][openid-risc-events]:

{% assign outgoing_events = site.data.risc_outgoing | sort: "friendly_name" %}

{%- for event in outgoing_events %}
- [{{ event.friendly_name }}](#{{ event.friendly_name | slugify }})
{%- endfor %}

{% for event in outgoing_events %}

#### {{ event.friendly_name }}

{{ event.description | markdownify }}

{% if event.spec_url %}
For more information, see the [specification for {{ event.friendly_name }}]({{ event.spec_url }}).
{% endif %}

The **event_type** for this is:

```
{{ event.event_type }}
```

The event payload has:

{% include schema.html schema=event.payload_schema %}

Example:

```json
{{ event.example_payload | jsonify | pretty_jsonify }}
```

{% endfor %}

### Request

Login.gov will make a POST request to your app's `push_notification_url`, see [Configuration](#configuration) for more details on setting that up. The JWT will be signed with Login.gov's private key. See the OpenID Connect guide for information on how to get Login.gov's public key from the [Certificates Endpoint](/oidc/certificates/).

If your app had the client ID of `urn:gov:gsa:openidconnect:test:risc:sets` and was configured to receive events at `https://agency.example.gov/events`, and a user freed up `email@example.com` Login.gov would make a request like this.

With a JWT payload:

```json
{
  "iss": "https://idp.int.identitysandbox.gov/",
  "jti": "abcdefghijklmnopqrstuvwxyz",
  "iat": 1595532178,
  "aud": "https://agency.example.gov/events",
  "events": {
    "https://schemas.openid.net/secevent/risc/event-type/identifier-recycled": {
      "subject": {
        "subject_type": "email",
        "email": "email@example.com"
      }
    }
  }
}
```


```
POST /events
Host: agency.example.gov
Content-Type: application/secevent+jwt
Accept: application/json
eyJ0eXAiOiJzZWNldmVudCtqd3QiLCJhbGciOiJSUzI1NiJ9
.
eyJpc3MiOiJodHRwczovL2lkcC5pbnQuaWRlbnRpdHlzYW5kYm94Lmdvdi8iLCJqdGkiOiJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eiIsImlhdCI6MTU5NTUzMjE3OCwiYXVkIjoiaHR0cHM6Ly9hZ2VuY3kuZXhhbXBsZS5nb3YvZXZlbnRzIiwiZXZlbnRzIjp7Imh0dHBzOi8vc2NoZW1hcy5vcGVuaWQubmV0L3NlY2V2ZW50L3Jpc2MvZXZlbnQtdHlwZS9pZGVudGlmaWVyLXJlY3ljbGVkIjp7InN1YmplY3QiOnsic3ViamVjdF90eXBlIjoiZW1haWwiLCJlbWFpbCI6ImVtYWlsQGV4YW1wbGUuY29tIn19fX0
.
s41MmdQzalGuKMX3Hr7Rn5xtnmJiQ5HQ7pcdCh5ZidWvw7VcblStN-rTLEBCUUO14pCfdAzVCs09Wb1WR8KqPwyTkmvYPiRMr2A_zr8VMKF1bfKhzLMhZnUB1N_elqJXJXjpUy9u7YnoT32VFtwp-8xmwb0g6esLYhVP4yPztAj4NxqQcy7vQ3xpEXiYcUBBKAoC6d3BkaeRSQziOQJQZQ93her8sj9XrvvlHCjqOz1QQd1uUnlV3p9rI13WDoyAHAL6tn_Dv3FqgiFgUWmh3wlsiVFHABUMUJy_XK3FeG5ULsmvNitmpQRIBjAmHLldZ3E5uNGatFQJscuxvlrhLA
```

#### HTTP Request

* **Content-Type** (required)
  The request will have a Content-Type of `application/secevent+jwt`

#### JWT Headers

* **alg** (string)
  The JWT will be signed with the **RS256** algorithm.

* **typ** (string)
  The type header will be set to **secevent+jwt**

#### JWT Claims

* **aud** (string)
  The audience for this JWT, which is your application's `push_notification_url`

* **iat** (integer)
  Time at which the JWT was issued, an integer timestamp representing the number of seconds since the Unix Epoch.

* **iss** (string)
  The issuer of this SET, which will be Login.gov's issuer, the root URL for Login.gov. In the agency integration environment, this is `https://idp.int.identitysandbox.gov`

* **jti** (required)
  JWT Identifier. This will be a random, unique identifier for this event, you should be able to de-duplicate based on this.

* **events**
  An object containing an event, keyed by event type. The keys and values depend on the event types, see [Supported Outgoing Events](#supported-outgoing-events) for event types and their payloads.

### Response
Login.gov will interpret any response other than a 200-level status as a failure, and will ignore any response body. Failure requests may be retried.

[openid-risc-events]: https://openid.net/specs/openid-risc-event-types-1_0-ID1.html

[openid-risc-events-profile]: https://openid.net/specs/openid-risc-profile-1_0-ID1.html#rfc.section.5.1

[push-http]: https://tools.ietf.org/html/draft-ietf-secevent-http-push-00

[push-http-response]: https://tools.ietf.org/html/draft-ietf-secevent-http-push-00#section-2.3
