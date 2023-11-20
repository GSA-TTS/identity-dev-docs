{% capture example %}
```xml
<samlp:LogoutRequest Destination='https://idp.int.identitysandbox.gov/api/saml/logout'
                     ID='_7b95749b-362f-4048-900b-b8e5b839c72b'
                     IssueInstant='2017-02-23T20:36:48Z'
                     Version='2.0'
                     xmlns:saml='urn:oasis:names:tc:SAML:2.0:assertion'
                     xmlns:samlp='urn:oasis:names:tc:SAML:2.0:protocol'>
  <saml:Issuer>urn:gov:gsa:SAML:2.0.profiles:sp:sso:rails-int</saml:Issuer>
  <ds:Signature xmlns:ds='http://www.w3.org/2000/09/xmldsig#'>
    <ds:SignedInfo>
      <ds:CanonicalizationMethod Algorithm='http://www.w3.org/2001/10/xml-exc-c14n#'/>
      <ds:SignatureMethod Algorithm='http://www.w3.org/2001/04/xmldsig-more#rsa-sha256'/>
      <ds:Reference URI='#_7b95749b-362f-4048-900b-b8e5b839c72b'>
        <ds:Transforms>
          <ds:Transform Algorithm='http://www.w3.org/2000/09/xmldsig#enveloped-signature'/>
          <ds:Transform Algorithm='http://www.w3.org/2001/10/xml-exc-c14n#'>
            <ec:InclusiveNamespaces PrefixList='#default samlp saml ds xs xsi md' xmlns:ec='http://www.w3.org/2001/10/xml-exc-c14n#'/>
          </ds:Transform>
        </ds:Transforms>
        <ds:DigestMethod Algorithm='http://www.w3.org/2001/04/xmlenc#sha256'/>
        <ds:DigestValue>3uM6/dwG6J2StsI9uFMlvpaLIHs2OqacTW9h7cGXOcE=</ds:DigestValue>
      </ds:Reference>
    </ds:SignedInfo>
    <ds:SignatureValue>zxIZQaHhakrKzV1vISwql0Ua8HKudlPDw3g7mcO18yFt6oDtCR55e7RlcuBOQYRYM5wesbxyAZcglJaxVVheViK9REg87OU1RqCJElyUcXXK6ERdgXpOp0YCb/VorWU4y9UNrloqFzgRIJxKtqVPqLlC6KSpqZqOiABhGluleUaIOuhW9INEwmQyWVobGp6+/ZOBY1m1DnMCaEmB46qW2YhYTCrBy6Uv3ZIs/sZZhlkyU98hndyVfJmzCRPzLmhHuxQunhqFLnbPoB3lCzOn2fV5oNYHOTmkDfb90HZoyd9gj5YOynmd6AQsUebx6utWTtyQ9sYojPixjehos8Yd5w==</ds:SignatureValue>
    <ds:KeyInfo>
      <ds:X509Data>
        <ds:X509Certificate>MIIDejCCAmICCQDxlELhbJBQdzANBgkqhkiG9w0BAQUFADB/MRYwFAYDVQQDDA1TUCBSYWlscyBEZW1vMQwwCgYDVQQKDANHU0ExDDAKBgNVBAsMAzE4ZjETMBEGA1UEBwwKV2FzaGluZ3RvbjELMAkGA1UECAwCREMxCzAJBgNVBAYTAlVTMRowGAYJKoZIhvcNAQkBFgsxOGZAZ3NhLmdvdjAeFw0xNjA4MTgyMDIzMzNaFw0yNjA4MTYyMDIzMzNaMH8xFjAUBgNVBAMMDVNQIFJhaWxzIERlbW8xDDAKBgNVBAoMA0dTQTEMMAoGA1UECwwDMThmMRMwEQYDVQQHDApXYXNoaW5ndG9uMQswCQYDVQQIDAJEQzELMAkGA1UEBhM</ds:X509Certificate>
      </ds:X509Data>
    </ds:KeyInfo>
  </ds:Signature>
  <saml:NameID Format='urn:oasis:names:tc:SAML:1.1:nameid-format:persistent'>4985175e-3ddb-489a-a92c-c981cd15e3ca</saml:NameID>
</samlp:LogoutRequest>
```
{% endcapture %}
<div markdown="1" class="markdown long">
    {{ example | markdownify }}
</div>