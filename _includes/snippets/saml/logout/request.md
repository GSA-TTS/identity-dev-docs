{% capture request %}
```bash
https://idp.int.identitysandbox.gov/api/saml/logout{{ page.saml_year }}?SAMLRequest=${SAML_REQUEST}
```
{% endcapture %}
<div markdown="1" class="markdown">
    {{ request | markdownify }}
</div>