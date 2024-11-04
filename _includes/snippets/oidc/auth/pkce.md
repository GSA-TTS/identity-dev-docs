{% capture pkce %}
```bash
https://idp.int.identitysandbox.gov/openid_connect/authorize?
  acr_values=urn:acr.login.gov:auth-only&
  client_id=${CLIENT_ID}&
  code_challenge=${CODE_CHALLENGE}&
  code_challenge_method=S256&
  nonce=${NONCE}&
  prompt=select_account&
  redirect_uri=${REDIRECT_URI}&
  response_type=code&
  scope=openid+email&
  state=abcdefghijklmnopabcdefghijklmnop
```
{% endcapture %}


<div markdown="1" data-example="pkce" class="markdown">
  {{ pkce | markdownify }}
</div>
