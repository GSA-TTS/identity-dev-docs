{% capture code %}
```bash
https://idp.int.identitysandbox.gov/openid_connect/logout?
client_id=${CLIENT_ID}&
post_logout_redirect_uri=${REDIRECT_URI}&
state=abcdefghijklmnopabcdefghijklmnop
```
{% endcapture %}

<div markdown="1" data-example="request" class="markdown">
{{ code | markdownify }}
</div>