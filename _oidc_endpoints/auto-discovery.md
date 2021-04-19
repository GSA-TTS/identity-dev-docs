---
permalink: /oidc/auto-discovery

verb: GET
endpoint: /.well-known/openid-configuration
order: 1

summary: Metadata endpoint that enables minimal configuration
---

{% if page.verb %}**{{ page.verb }}**{% endif %} `{{ page.endpoint }}`

login.gov provides a JSON endpoint for OpenID Connect auto-discovery at `/.well-known/openid-configuration`.

In our agency integration environment, this is available at
<https://idp.int.identitysandbox.gov/.well-known/openid-configuration>

Applications should only need to hardcode this single endpoint in order to integrate with login.gov, all other endpoints can be looked up from its response.

**Note**: It is strongly encourage that applications cache this endpoint's response, it changes infrequently.

## Response

- **acr_values_supported**
- **claims_supported**
- **authorization_endpoint**
- **jwks_uri**

### Example Response

```json
{
  "acr_values_supported": [
    "http://idmanagement.gov/ns/assurance/loa/1",
    "http://idmanagement.gov/ns/assurance/loa/3",
    "http://idmanagement.gov/ns/assurance/ial/1",
    "http://idmanagement.gov/ns/assurance/ial/2",
    "http://idmanagement.gov/ns/assurance/ial/0",
    "http://idmanagement.gov/ns/assurance/ial/2?strict=true",
    "urn:gov:gsa:ac:classes:sp:PasswordProtectedTransport:duo",
    "http://idmanagement.gov/ns/assurance/aal/2",
    "http://idmanagement.gov/ns/assurance/aal/3",
    "http://idmanagement.gov/ns/assurance/aal/3?hspd12=true"
  ],
  "claims_supported": [
    "iss",
    "sub",
    "email",
    "email_verified",
    "address",
    "phone",
    "phone_verified",
    "given_name",
    "family_name",
    "birthdate",
    "verified_at",
    "social_security_number",
    "x509_subject",
    "x509_presented",
    "x509_issuer"
  ],
  "grant_types_supported": [
    "authorization_code"
  ],
  "response_types_supported": [
    "code"
  ],
  "scopes_supported": [
    "address",
    "email",
    "openid",
    "phone",
    "profile",
    "profile:birthdate",
    "profile:name",
    "profile:verified_at",
    "social_security_number",
    "x509",
    "x509:subject",
    "x509:issuer",
    "x509:presented"
  ],
  "subject_types_supported": [
    "pairwise"
  ],
  "authorization_endpoint": "https://idp.int.identitysandbox.gov/openid_connect/authorize",
  "issuer": "https://idp.int.identitysandbox.gov/",
  "jwks_uri": "https://idp.int.identitysandbox.gov/api/openid_connect/certs",
  "service_documentation": "https://developers.login.gov/",
  "token_endpoint": "https://idp.int.identitysandbox.gov/api/openid_connect/token",
  "userinfo_endpoint": "https://idp.int.identitysandbox.gov/api/openid_connect/userinfo",
  "end_session_endpoint": "https://idp.int.identitysandbox.gov/openid_connect/logout",
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "token_endpoint_auth_methods_supported": [
    "private_key_jwt"
  ],
  "token_endpoint_auth_signing_alg_values_supported": [
    "RS256"
  ]
}
```
