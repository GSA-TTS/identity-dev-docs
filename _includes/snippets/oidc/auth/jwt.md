{% capture code %}
```bash
https://idp.int.identitysandbox.gov/openid_connect/authorize?
  acr_values=http%3A%2F%2Fidmanagement.gov%2Fns%2Fassurance%2Fial%2F1&
  client_id=${CLIENT_ID}&
  nonce=${NONCE}&
  prompt=select_account&
  redirect_uri=${REDIRECT_URI}&
  response_type=code&
  scope=openid+email&
  state=abcdefghijklmnopabcdefghijklmnop
```
{% endcapture %}


<div markdown="1" data-example="private_key_jwt" class="markdown">
{{ code | markdownify }}
</div>
