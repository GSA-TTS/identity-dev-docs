{% capture request %}
```bash
https://idp.int.identitysandbox.gov/api/saml/auth{{ page.saml_year }}?SAMLRequest=${SAML_REQUEST}
```
{% endcapture %}
<div markdown="1" data-example="request" class="markdown">
{{ request | markdownify }}
</div>