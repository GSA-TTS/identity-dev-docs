{% capture private_key_jwt %}
```bash
POST https://idp.int.identitysandbox.gov/api/openid_connect/token

client_assertion=${CLIENT_ASSERTION}&
client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&
code=${CODE}&
grant_type=authorization_code
```
{% endcapture %}
<div markdown="1" data-example="private_key_jwt" class="markdown">
{{ private_key_jwt | markdownify }}
</div>