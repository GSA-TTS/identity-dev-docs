{% comment %}
include
- saml_year
{% endcomment %}
{% capture remote_logout %}
Login.gov also offers a remote / back channel logout endpoint if your application needs to log users out without redirecting them back to Login.gov. This is still **not** true Single Logout (SLO), it will only terminate a given user's session with Login.gov. You must still manage the session for your application separately.

For remote logout, you must include a `SessionIndex` element in the SAML request that contains the user's Login.gov UUID. This will allow Login.gov to identify the user that needs to be logged out and terminate their session.

To log a user out using a back channel request, send a **POST** request from your application to the remote logout URL with a `SAMLRequest` parameter:

```bash
https://idp.int.identitysandbox.gov/api/saml/remotelogout{{ saml_year }}?SAMLRequest=${SAML_REQUEST}
```

The `SAMLRequest` parameter is a url-encoded, base64-encoded, deflate-compressed XML payload of a `<samlp:LogoutRequest>`.

All remote logout requests must be signed — we require RSA SHA-256 signatures embedded with logout requests.

An example remote logout request payload, with indentation added for readability.

```xml
<samlp:LogoutRequest Destination='https://idp.int.identitysandbox.gov/api/saml/remotelogout'
                ID='_7b95749b-362f-4048-900b-b8e5b839c72b'
                IssueInstant='2017-02-23T20:36:48Z'
                Version='2.0'
                xmlns:saml='urn:oasis:names:tc:SAML:2.0:assertion'
                xmlns:samlp='urn:oasis:names:tc:SAML:2.0:protocol'>
<saml:Issuer>urn:gov:gsa:SAML:2.0.profiles:sp:sso:rails-int</saml:Issuer>
<saml:SessionIndex>e1e99d8e-c590-4e0d-9530-e4d9611a4509</saml:SessionIndex>
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
<ds:X509Certificate>MIIDejCCAmICCQDxlELhbJBQdzANBgkqhkiG9w0BAQUFADB/MRYwFAYDVQQDDA1TUCBSYWlscyBEZW1vMQwwCgYDVQQKDANHU0ExDDAKBgNVBAsMAzE4ZjETMBEGA1UEBwwKV2FzaGluZ3RvbjELMAkGA1UECAwCREMxCzAJBgNVBAYTAlVTMRowGAYJKoZIhvcNAQkBFgsxOGZAZ3NhLmdvdjAeFw0xNjA4MTgyMDIzMzNaFw0yNjA4MTYyMDIzMzNaMH8xFjAUBgNVBAMMDVNQIFJhaWxzIERlbW8xDDAKBgNVBAoMA0dTQTEMMAoGA1UECwwDMThmMRMwEQYDVQQHDApXYXNoaW5ndG9uMQswCQYDVQQIDAJEQzELMAkGA1UEBhMCVVMxGjAYBgkqhkiG9w0BCQEWCzE4ZkBnc2EuZ292MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA6gWv5EDu88CgWTgo+B8+Rp7ZSjNKKdud2I4U6Bfr0IMerdrh1LVwO6JOli/qRRDqECQz7Jm6m4XnVvf1bUiQd8cn/FheQfD2NuDNfrnAvyIRIHDgGHGSx3vjPZJVYi5BVmEOPFEKYEKHqS/UGnNjkS2XsoAkstRe6gioo4Hd2WLwjuCMqgNA3vgwyVxdgfI5vsrm6q43X15wb/wCP4r2rGKGSUIIshZPeUcPOzBMAmwVqREN4ux79Ee5K/87aXBVRF7Z2tFV1d5KEXO3dCw+T6cspj9MjfY2976cQfBXWnDKGdNWaLdwtFqvpgo9IXRxlAmUQtx8SC8z+zXaSSGB/wIDAQABMA0GCSqGSIb3DQEBBQUAA4IBAQCtc97SZLs5eBx7LrxdaeP5hq2etB7l6uM6+l/eSvXu8LlQfTUT7URxX4hXbKyORs1BLpnMYxofeyJlzb9K0koy1ZFhUtBufvU1R+ouMfZlV3QGOUMIUp00UNS39b74214jpuUYi7oEM0gHBN3BXxVyzUEAzt2HYHp2Im97ERSmTMkvSfiqilx/t03qIuZVxzu+jIU2BQUxS7s6XQ2DpDbvfggmnvToCmNA0VSg9rZkziOLSRHblcUpdMYH8+mzbTCfgg/Of0kTDVqXzgNa/iR0HUq18bDf3iFebS/sugwXN3vCxdCnad64q5tqF+VscZEtc7Okech2OuctnWy0nzFQ</ds:X509Certificate>
</ds:X509Data>
</ds:KeyInfo>
</ds:Signature>
<saml:NameID Format='urn:oasis:names:tc:SAML:1.1:nameid-format:persistent'>4985175e-3ddb-489a-a92c-c981cd15e3ca</saml:NameID>
</samlp:LogoutRequest>
```

In response to a remote logout request Login.gov will render a [logout response](#logout-response).
{% endcapture %}
<div markdown="1">
    {{ remote_logout | markdownify }}
</div>