{% capture response %}
```bash
POST ${ASSERTION_CONSUMER_SERVICE_LOGOUT_URL}
SAMLResponse=${SAML_RESPONSE}
```
{% endcapture %}
<div markdown="1" class="markdown">
    {{ response | markdownify }}
</div>
