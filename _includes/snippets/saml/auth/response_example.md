{% capture example %}
```xml
<samlp:Response ID="_b28d50c0-dc35-0134-96f3-06d8bac14e9d"
                Version="2.0"
                IssueInstant="2017-02-23T20:36:37Z"
                Destination="https://sp.int.identitysandbox.gov/auth/saml/callback"
                Consent="urn:oasis:names:tc:SAML:2.0:consent:unspecified"
                InResponseTo="_6fca7b78-9ab7-49f5-bd62-18c48eac3c68"
                xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol">
  <Issuer xmlns="urn:oasis:names:tc:SAML:2.0:assertion">https://idp.int.identitysandbox.gov/api/saml</Issuer>
  <samlp:Status>
    <samlp:StatusCode Value="urn:oasis:names:tc:SAML:2.0:status:Success"/>
  </samlp:Status>
  <EncryptedAssertion xmlns="urn:oasis:names:tc:SAML:2.0:assertion">
    <EncryptedData xmlns="http://www.w3.org/2001/04/xmlenc#" Id="ED" Type="http://www.w3.org/2001/04/xmlenc#Element">
    <EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#aes256-cbc"/>
    <ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
      <EncryptedKey xmlns="http://www.w3.org/2001/04/xmlenc#" Id="EK">
        <EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p"/>
        <ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
          <ds:KeyName/>
          <ds:X509Data>
            <ds:X509Certificate>MIIDejCCAmICCQDxlELhbJBQdzANBgkqhkiG9w0BAQUFADB/MRYwFAYDVQQDDA1TUCBSYWlscyBEZW1vMQwwCgYDVQQKDANHU0ExDDAKBgNVBAsMAzE4ZjETMBEGA1UEBwwKV2FzaGluZ3RvbjELMAkGA1UECAwCREMxCzAJBgNVBAYTAlVTMRowGAYJKoZIhvcNAQkBFgsxOGZAZ3NhLmdvdjAeFw0xNjA4MTgyMDIzMzNaFw0yNjA4MTYyMDIzMzNaMH8xFjAUBgNVBAMMDVNQIFJhaWxzIERlbW8xDDAKBgNVBAoMA0dTQTEMMAoGA1UECwwDMThmMRMwEQYDVQQHDApXYXNoaW5ndG9uMQswCQYDVQQIDAJEQzELMAkGA1UEBhMCVVMxGjAYBgkqhkiG9w0BCQEWCzE4ZkBnc2EuZ292MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA6gWv5EDu88CgWTgo+B8+Rp7ZSjNKKdud2I4U6Bfr0IMerdrh1LVwO6JOli/qRRDqECQz7Jm6m4XnVvf1bUiQd8cn/FheQfD2NuDNfrnAvyIRIHDgGHGSx3vjPZJVYi5BVmEOPFEKYEKHqS/UGnNjkS2XsoAkstRe6gioo4Hd2WLwjuCMqgNA3vgwyVxdgfI5vsrm6q43X15wb/wCP4r2rGKGSUIIshZPeUcPOzBMAmwVqREN4ux79Ee5K/87aXBVRF7Z2tFV1d5KEXO3dCw+T6cspj9MjfY2976cQfBXWnDKGdNWaLdwtFqvpgo9IXRxlAmUQtx8SC8z+zXaSSGB/wIDAQABMA0GCSqGSIb3DQEBBQUAA4IBAQCtc97SZLs5eBx7LrxdaeP5hq2etB7l6uM6+l/eSvXu8LlQfTUT7URxX4hXbKyORs1BLpnMYxofeyJlzb9K0koy1ZFhUtBufvU1R+ouMfZlV3QGOUMIUp00UNS39b74214jpuUYi7oEM0gHBN3BXxVyzUEAzt2HYHp2Im97ERSmTMkvSfiqilx/t03qIuZVxzu+jIU2BQUxS7s6XQ2DpDbvfggmnvToCmNA0VSg9rZkziOLSRHblcUpdMYH8+mzbTCfgg/Of0kTDVqXzgNa/iR0HUq18bDf3iFebS/sugwXN3vCxdCnad64q5tqF+VscZEtc7Okech2OuctnWy0nzFQ</ds:X509Certificate>
          </ds:X509Data>
        </ds:KeyInfo>
        <CipherData>
          <CipherValue>yaI+Z9oWcrP2WL02UdN7wdeoloWSBuz4nrFKh+vuyHitlk3A3/ATy4rtHerREue6uEYJ2sr7RoJbF/pqsr1j2ZWGJRL9FS++i0biE9iv3NwrW1MDvzGAaMiI9q+tmDqhorftiD+0byrtftZU2Emmwz34/bZJQKFszDeWlDrTVIXGDz+jF0Q+AvFxtaMrXXw6VmLlQlM/Hc9GiGCY+yalGmlteAJD+xk9aqUqfO9+qbwqufLQTpLyM8UdjHuwN9V4ZEo09er34SZD3ZhGq7IdWvROpcPeagU2+r6pivCmhY3x1t01uDtKe0jDt8LTGA1/P8atB3zQHkNnbGO1CiBKpg==</CipherValue>
        </CipherData>
        <ReferenceList>
          <DataReference URI="ED"/>
        </ReferenceList>
      </EncryptedKey>
    </ds:KeyInfo>
    <CipherData>
      <CipherValue>vy4Ohper0Oq24kU9GBTr0L8dHSBLkRpeu/iNr790cOQrAKphfPRCtLR7RHFI0mTCiko+Wy/oQqX4gu0LVtOOkcjJIicDyuWhIF6guUHvHz1PP4cv3pG++EhAJ73dbCPFSFkrDCzyMM5KZaY0xj6GpcYAVhOjez2ooOqwyTRYVpgozyuIreuooNFV8K++6GixLfBjw9T47eokKqLiROcRjEpV1dBoIkr34KtA7+TCrms1tLwAv4mdzCpUa7j</CipherValue>
      </CipherData>
    </EncryptedData>
  </EncryptedAssertion>
</samlp:Response>
```
{% endcapture %}
<div markdown="1" data-example="example" class="markdown long">
{{ example | markdownify }}
</div>