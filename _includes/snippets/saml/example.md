{% capture example %}
```xml
<samlp:AuthnRequest AssertionConsumerServiceURL='https://sp.int.identitysandbox.gov/auth/saml/callback?utf8=%E2%9C%93&amp;loa=1'
                    Destination='https://idp.int.identitysandbox.gov/api/saml/auth'
                    ID='_6fca7b78-9ab7-49f5-bd62-18c48eac3c68'
                    IssueInstant='2017-02-23T20:36:17Z'
                    Version='2.0'
                    xmlns:saml='urn:oasis:names:tc:SAML:2.0:assertion'
                    xmlns:samlp='urn:oasis:names:tc:SAML:2.0:protocol'>
  <saml:Issuer>urn:gov:gsa:SAML:2.0.profiles:sp:sso:rails-int</saml:Issuer>
  <ds:Signature xmlns:ds='http://www.w3.org/2000/09/xmldsig#'>
    <ds:SignedInfo>
      <ds:CanonicalizationMethod Algorithm='http://www.w3.org/2001/10/xml-exc-c14n#'/>
      <ds:SignatureMethod Algorithm='http://www.w3.org/2001/04/xmldsig-more#rsa-sha256'/>
      <ds:Reference URI='#_6fca7b78-9ab7-49f5-bd62-18c48eac3c68'>
        <ds:Transforms>
          <ds:Transform Algorithm='http://www.w3.org/2000/09/xmldsig#enveloped-signature'/>
          <ds:Transform Algorithm='http://www.w3.org/2001/10/xml-exc-c14n#'>
            <ec:InclusiveNamespaces PrefixList='#default samlp saml ds xs xsi md' xmlns:ec='http://www.w3.org/2001/10/xml-exc-c14n#'/>
          </ds:Transform>
        </ds:Transforms>
        <ds:DigestMethod Algorithm='http://www.w3.org/2001/04/xmlenc#sha256'/>
        <ds:DigestValue>Tkwp/uId8ZLwmvPaq2yuIj+h2kM8gjIQEQer7+kBrQM=</ds:DigestValue>
      </ds:Reference>
    </ds:SignedInfo>
    <ds:SignatureValue>n0PPcU29EfMzKq1O066+UzWwFs/K7IumAuXpve3fGmpHXEWAspMV4/Kkfc9gaRLq/eIMoh0yyv+n0U+7h2N/pYw26Y9LpLfVvK03HRDiGNKib36FeBQOINTWwvIcPZYqCL23IjfP4TO+RFt936f74HQSGZMa3a4ZQ4flY0BPV9BD/WrjBFRvY51V993JOS10S1mXPlZlX/UFCsa1mh9GQz15rZ1nL09iYiy5rNm0OMOcd2HphFYOyJrA7XloIgL7XjRMSKzTYvUTchDn26evRior1u22jBwFGEX26z+aSdc8GWhq1beK1NCDHLUX+TI2bc4U0ENSNRDFDghaH8F/Ig==</ds:SignatureValue>
    <ds:KeyInfo>
      <ds:X509Data>
        <ds:X509Certificate>MIIDejCCAmICCQDxlELhbJBQdzANBgkqhkiG9w0BAQUFADB/MRYwFAYDVQQDDA1TUCBSYWlscyBEZW1vMQwwCgYDVQQKDANHU0ExDDAKBgNVBAsMAzE4ZjETMBEGA1UEBwwKV2FzaGluZ3RvbjELMAkGA1UECAwCREMxCzAJBgNVBAYTAlVTMRowGAYJKoZIhvcNAQkBFgsxOGZAZ3NhLmdvdjAeFw0xNjA4MTgyMDIzMzNaFw0yNjA4MTYyMDIzMzNaMH8xFjAUBgNVBAMMDVNQIFJhaWxzIERlbW8xDDAKBgNVBAoMA0dTQTEMMAoGA1UECwwDMThmMRMwEQYDVQQHDApXYXNoaW5ndG9uMQswCQYDVQQIDAJEQzELMAkGA1UEBhMCVVMxGjAYBgkqhkiG9w0BCQEWCzE4ZkBnc2EuZ292MIIBIjANBgkqhk</ds:X509Certificate>
      </ds:X509Data>
    </ds:KeyInfo>
  </ds:Signature>
  <samlp:NameIDPolicy AllowCreate='true'
                      Format='urn:oasis:names:tc:SAML:1.1:nameid-format:persistent'/>
  <samlp:RequestedAuthnContext Comparison='exact'>
    <saml:AuthnContextClassRef>http://idmanagement.gov/ns/assurance/ial/1</saml:AuthnContextClassRef>
    <saml:AuthnContextClassRef>http://idmanagement.gov/ns/requested_attributes?ReqAttr=email,phone,first_name,last_name,ssn</saml:AuthnContextClassRef>
  </samlp:RequestedAuthnContext>
</samlp:AuthnRequest>
```
{% endcapture %}
<div markdown="1" data-example="example" class="markdown long">
{{ example | markdownify }}
</div>