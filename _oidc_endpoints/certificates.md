---
verb: GET
endpoint: /api/openid_connect/certs
order: 6

summary: Contains the IDP's public keys
---

Login.gov's public key, used to verify signed JWTs (such as the `id_token`), is available in [JWK](https://tools.ietf.org/html/rfc7517) format at the `/api/openid_connect/certs` endpoint. For example, the URL in the agency integration environment is at [https://idp.int.identitysandbox.gov/api/openid_connect/certs](https://idp.int.identitysandbox.gov/api/openid_connect/certs)

This public key is rotated periodically (on at least an annual basis). It is important to assume the `/api/openid_connect/certs` endpoint could contain multiple JWKs when rotating application signing keys. Be sure to use the JWK endpoint dynamically through [auto-discovery](#auto-discovery) rather than hardcoding the public key. This ensures that your application will not require manual intervention when the login.gov public key is rotated.
