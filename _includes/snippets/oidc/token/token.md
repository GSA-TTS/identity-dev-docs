{% capture code %}
```json
{
  "sub": "b2d2d115-1d7e-4579-b9d6-f8e84f4f56ca",
  "iss": "https://idp.int.identitysandbox.gov",
  "acr": "urn:acr.login.gov:auth-only",
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
{% endcapture %}
<div markdown="1" data-example="token" class="markdown">
{{ code | markdownify }}
</div>