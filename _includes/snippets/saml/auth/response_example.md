{% capture example %}
```xml
<samlp:Response xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol" ID="_7f3d8cd9-d3f8-4b47-a571-5272810d5073" Version="2.0" IssueInstant="2024-09-18T16:20:36Z" Destination="https://sp.int.identitysandbox.gov/auth/saml/callback" Consent="urn:oasis:names:tc:SAML:2.0:consent:unspecified" InResponseTo="_bf054c05-5b2c-4773-a6a9-9ba075a87bc9">
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
            <ds:X509Data>
              <ds:X509Certificate>
MIIDgDCCAmgCCQCwpieA9CKuDDANBgkqhkiG9w0BAQUFADCBgTEYMBYGA1UEAwwP
U1AgU2luYXRyYSBEZW1vMQwwCgYDVQQKDANHU0ExDDAKBgNVBAsMAzE4ZjETMBEG
<!-- X509Certificate abridged -->
IYOalU+bIBpQt6EGN/mWBu7yZtgxKULZamJUUpd5xpcPcGKwf59etPVMTSxgeeQY
MFjibtIlMmAweHgIqDyF2s8Etz8hlcKrXIUAK5CoMvgUn41V

</ds:X509Certificate>
            </ds:X509Data>
          </ds:KeyInfo>
          <CipherData>
            <CipherValue>DUs/UGjZTIioxWuRdUs8dWK4sLZ3zmAoTxX/mxliznXJfKn7JGQ6u9ccAG+o
NbdunEQd0552Y6jdLGTulpuPxgC79gWsgxjV4sZzlALeLKu/VI/gUN7YNaoy
QHQeO0XsH51pu5P4H0fjee2sJ++jnrY4auOMIYE3jWFScmRGrDXnvde6N1MW
QThl1uSu2fDsQZdE9SOzg8rm8c85NcaBorJnHTTt7ywgLSt3weXkztUeujsc
6ifawqRIdfcvL8eZxqKBUHSRu9gIXbmp13VQVZuKHO+MLrO2eTNMS6wRpGjl
Lykqm6G3d8d7gn7oC08WI6YDrB5Kzo6hF/eaveOjtw==
</CipherValue>
          </CipherData>
          <ReferenceList>
            <DataReference URI="ED"/>
          </ReferenceList>
        </EncryptedKey>
      </ds:KeyInfo>
      <CipherData>
        <CipherValue>cIGCpOu5tXI1RuBj32Sas6saN5brvkYea2QYgIAFNi6NgHngIs4JAkcTGxRg
U9Vyfb2F3kndo5hBJaLmnKjLlwZRCBwoVfYfiaKUumH+igiPeyfcOGi617bN
dpylxgT3Exg/g8qX5V02nIibCvlgO9tm9mPL5Rx0EZ32HMOc+Q62TF7F3e6X
<!-- CipherValue abridged -->
2SWxCSIh0QLjt0Sos4ixK58eYc0p+8wbJnks14GzDGA07qJenT4NKxIIU2wW
y+0Uv+X9Bk3S+y/6ba+v
</CipherValue>
      </CipherData>
    </EncryptedData>
  </EncryptedAssertion>
</samlp:Response>
```
{% endcapture %}
<div markdown="1" data-example="example" class="markdown long">
{{ example | markdownify }}
</div>
