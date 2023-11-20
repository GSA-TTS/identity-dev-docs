{% capture example %}
```xml
<LogoutResponse ID="_92312250-dc35-0134-8e60-02727c87f245"
                Version="2.0"
                IssueInstant="2017-02-23T20:35:43Z"
                Destination="https://sp.int.identitysandbox.gov/auth/saml/logout"
                InResponseTo="_7b95749b-362f-4048-900b-b8e5b839c72b"
                xmlns="urn:oasis:names:tc:SAML:2.0:protocol">
  <Issuer xmlns="urn:oasis:names:tc:SAML:2.0:assertion">https://idp.int.identitysandbox.gov/api/saml</Issuer>
  <Status xmlns="urn:oasis:names:tc:SAML:2.0:protocol">
    <StatusCode Value="urn:oasis:names:tc:SAML:2.0:status:Success"/>
  </Status>
</LogoutResponse>
```
{% endcapture %}
<div markdown="1" class="markdown">
    {{ example | markdownify }}
</div>