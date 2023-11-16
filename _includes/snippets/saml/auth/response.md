{% capture response %}
```bash
POST ${ASSERTION_CONSUMER_SERVICE_URL}
SAMLResponse=${SAML_RESPONSE}
```
{% endcapture %}
<div markdown="1" data-example="response" class="markdown">
{{ response | markdownify }}
</div>