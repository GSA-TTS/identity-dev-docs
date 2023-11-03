{% capture code %}
```bash
POST https://idp.int.identitysandbox.gov/api/openid_connect/token

code=${CODE}&
code_verifier=${CODE_VERIFIER}&
grant_type=authorization_code
```
{% endcapture %}
<div markdown="1" data-example="pkce" class="markdown">
{{ code | markdownify }}
</div>