---
title: SAML developer guide
lead: >
  login.gov is a standard SAML identity provider, adhering to the <a href="https://en.wikipedia.org/wiki/SAML_2.0#Web_Browser_SSO_Profile">Web Browser SSO Profile</a> with enhancements for <a href="https://pages.nist.gov/800-63-3/">NIST 800-63-3</a>.
redirect_from:
  - /configuring-your-sp/
sidenav:
  - text: Getting started
    href: "#getting-started"
    links:
      - text: Configuration
        href: "#configuration"
      - text: Metadata
        href: "#metadata"
  - text: Auth
    href: "#auth"
    links:
      - text: Auth request
        href: "#auth-request"
      - text: Auth response
        href: "#auth-response"
  - text: Logout
    href: "#logout"
    links:
      - text: Logout request
        href: "#logout-request"
      - text: Logout response
        href: "#logout-response"
  - text: SAML libraries
    href: "#saml-libraries"
  - text: Example apps
    href: "#example-apps"
---

<div class="usa-alert usa-alert-warning">
  <div class="usa-alert-body">We strongly recommend choosing <a href="{{ site.baseurl }}/oidc">OpenID Connect</a> over SAML due to its modern, API-centric design and support for native mobile applications.
  </div>
</div>

# Getting started

SAML is an established standard, but can be a bit complex. We recommend looking for and using a [SAML library for your language](#saml-libraries) before developing your own.

## Configuration

Here are values needed to configure your service provider (SP) to work with login.gov:

- **NameID Format**
  The NameID is the unique identifier used to identify a user across multiple sessions. The format is the standard v4 random UUID (Universally Unique IDentifier) in compliance with [RFC 4122](https://tools.ietf.org/html/rfc4122). For example:

  ```xml
  <NameIDFormat>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent</NameIDFormat>
  ```

- **Login service URL and Binding**
  This is the endpoint where authentication requests are sent to login.gov (aka Single Sign-on Service). For example:

  ```xml
  <SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://idp.int.identitysandbox.gov/api/saml/auth2019" />
  ```

- **Logout service URL and Binding**
  The single logout service URL is used to contact the Single logout profile (aka Single Logout Service). For example:

  ```xml
  <SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://idp.int.identitysandbox.gov/api/saml/logout2019" />
  ```

- **x509 Public Certificate**
  The public certificate is used to validate the authenticity of SAML requests received from login.gov, a minimum of 2048 bits. We publish this public certificate from in our [Metadata endpoint](#metadata).

## Metadata

Consistent with the [SAML metadata specification](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf), login.gov's metadata is available at [https://idp.int.identitysandbox.gov/api/saml/metadata2019](https://idp.int.identitysandbox.gov/api/saml/metadata2019)

## Annual Certificate Rotation

The Login.gov SAML certificate is valid for just over one year. Every spring, Login.gov adds new SAML endpoints with the current year that use a new signing certificate. (So `/api/saml/metadata2019` becomes `/api/saml/metadata2020`.)

The certificates are issued to create an overlap period of about a month, during which all partners using SAML should migrate at their convenience to the new endpoint URLs for the current year.

The 2019 certificates for idp.int.identitysandbox.gov and secure.login.gov each expire on April 1, 2020. So the transition from 2019 to 2020 endpoints should take place in February or March 2020.

# Auth

## Auth request

To authenticate a user with login.gov, direct them to our authentication URL with a SAML authentication request as a GET param.

```bash
https://idp.int.identitysandbox.gov/api/saml/auth2019?SAMLRequest=${SAML_REQUEST}
```

The `SAMLRequest` parameter is a base64-encoded, deflate-compressed XML payload of a `<samlp:AuthnRequest>`:

```
SAML_REQUEST = base64(deflate(payload))
```

<div class="usa-accordion-bordered">
<button class="usa-accordion-button" aria-controls="authn-request-example">
View example authentication request
</button>
<div id="authn-request-example" class="usa-accordion-content" markdown="1">
An example authentication request, with indentation added for readability.

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
        <ds:X509Certificate>MIIDejCCAmICCQDxlELhbJBQdzANBgkqhkiG9w0BAQUFADB/MRYwFAYDVQQDDA1TUCBSYWlscyBEZW1vMQwwCgYDVQQKDANHU0ExDDAKBgNVBAsMAzE4ZjETMBEGA1UEBwwKV2FzaGluZ3RvbjELMAkGA1UECAwCREMxCzAJBgNVBAYTAlVTMRowGAYJKoZIhvcNAQkBFgsxOGZAZ3NhLmdvdjAeFw0xNjA4MTgyMDIzMzNaFw0yNjA4MTYyMDIzMzNaMH8xFjAUBgNVBAMMDVNQIFJhaWxzIERlbW8xDDAKBgNVBAoMA0dTQTEMMAoGA1UECwwDMThmMRMwEQYDVQQHDApXYXNoaW5ndG9uMQswCQYDVQQIDAJEQzELMAkGA1UEBhMCVVMxGjAYBgkqhkiG9w0BCQEWCzE4ZkBnc2EuZ292MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA6gWv5EDu88CgWTgo+B8+Rp7ZSjNKKdud2I4U6Bfr0IMerdrh1LVwO6JOli/qRRDqECQz7Jm6m4XnVvf1bUiQd8cn/FheQfD2NuDNfrnAvyIRIHDgGHGSx3vjPZJVYi5BVmEOPFEKYEKHqS/UGnNjkS2XsoAkstRe6gioo4Hd2WLwjuCMqgNA3vgwyVxdgfI5vsrm6q43X15wb/wCP4r2rGKGSUIIshZPeUcPOzBMAmwVqREN4ux79Ee5K/87aXBVRF7Z2tFV1d5KEXO3dCw+T6cspj9MjfY2976cQfBXWnDKGdNWaLdwtFqvpgo9IXRxlAmUQtx8SC8z+zXaSSGB/wIDAQABMA0GCSqGSIb3DQEBBQUAA4IBAQCtc97SZLs5eBx7LrxdaeP5hq2etB7l6uM6+l/eSvXu8LlQfTUT7URxX4hXbKyORs1BLpnMYxofeyJlzb9K0koy1ZFhUtBufvU1R+ouMfZlV3QGOUMIUp00UNS39b74214jpuUYi7oEM0gHBN3BXxVyzUEAzt2HYHp2Im97ERSmTMkvSfiqilx/t03qIuZVxzu+jIU2BQUxS7s6XQ2DpDbvfggmnvToCmNA0VSg9rZkziOLSRHblcUpdMYH8+mzbTCfgg/Of0kTDVqXzgNa/iR0HUq18bDf3iFebS/sugwXN3vCxdCnad64q5tqF+VscZEtc7Okech2OuctnWy0nzFQ</ds:X509Certificate>
      </ds:X509Data>
    </ds:KeyInfo>
  </ds:Signature>
  <samlp:NameIDPolicy AllowCreate='true'
                      Format='urn:oasis:names:tc:SAML:1.1:nameid-format:persistent'/>
  <samlp:RequestedAuthnContext Comparison='exact'>
    <saml:AuthnContextClassRef>http://idmanagement.gov/ns/assurance/loa/1</saml:AuthnContextClassRef>
    <saml:AuthnContextClassRef>http://idmanagement.gov/ns/requested_attributes?ReqAttr=email,phone,first_name,last_name,ssn</saml:AuthnContextClassRef>
  </samlp:RequestedAuthnContext>
</samlp:AuthnRequest>
```

</div>
</div>

### Specifying attributes and LOA

The `<saml:AuthnContextClassRef>` tags (nested under `//samlp:AuthnRequest/samlp:RequestedAuthnContext/`) specify the LOA level and attributes requested.

The supported LOA levels area, place one of these values inside a `<saml:AuthnContextClassRef>` tag:
  - `http://idmanagement.gov/ns/assurance/loa/1`
  - `http://idmanagement.gov/ns/assurance/loa/3`

To request specific attributes, list them (comma-separated) as the query parameter for `http://idmanagement.gov/ns/requested_attributes?ReqAttr=`. See the [user attributes]({{ site.baseurl }}/attributes) for the list of attributes that can be requested.

An LOA3 request for email, phone, first name, last name, and SSN might look like:

```xml
<samlp:AuthnRequest ...>
  <!-- ... -->
  <samlp:RequestedAuthnContext Comparison='exact'>
    <saml:AuthnContextClassRef>http://idmanagement.gov/ns/assurance/loa/3</saml:AuthnContextClassRef>
    <saml:AuthnContextClassRef>http://idmanagement.gov/ns/requested_attributes?ReqAttr=email,phone,first_name,last_name,ssn</saml:AuthnContextClassRef>
  </samlp:RequestedAuthnContext>
</samlp:AuthnRequest>

```

## Auth response

After the user authenticates, login.gov will redirect and POST a form back to your registered Assertion Consumer Service URL:

```bash
POST ${ASSERTION_CONSUMER_SERVICE_URL}
SAMLResponse=${SAML_RESPONSE}
```

The SAMLResponse is a base64-encoded XML payload that contains encrypted data.

<div class="usa-accordion-bordered">
<button class="usa-accordion-button" aria-controls="authn-response-example">
View example authentication response
</button>
<div id="authn-response-example" class="usa-accordion-content" markdown="1">
An example authentication response, after it has been base64 decoded, with indentation added for readability.

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
      <CipherValue>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</CipherValue>
      </CipherData>
    </EncryptedData>
  </EncryptedAssertion>
</samlp:Response>
```

</div>
</div>

# Logout

## Logout request

A log out link on your site should also log out the user from the login.gov site. The Single Logout Service mechanism at login.gov will initiate the log out process for the user from all active Service Providers.

To log a user out, direct them to the logout URL with a `SAMLRequest`:

```bash
https://idp.int.identitysandbox.gov/api/saml/logout2019?SAMLRequest=${SAML_REQUEST}
```

The `SAMLRequest` parameter is a base64-encoded, deflate-compressed XML payload of a `<samlp:LogoutRequest>`.

All logout requests must be signed — we require RSA SHA-256 signatures embedded with logout requests.

<div class="usa-accordion-bordered">
<button class="usa-accordion-button" aria-controls="logout-request-example">
View example logout request
</button>
<div id="logout-request-example" class="usa-accordion-content" markdown="1">
An example logout request payload, with indentation added for readability.

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
        <ds:X509Certificate>MIIDejCCAmICCQDxlELhbJBQdzANBgkqhkiG9w0BAQUFADB/MRYwFAYDVQQDDA1TUCBSYWlscyBEZW1vMQwwCgYDVQQKDANHU0ExDDAKBgNVBAsMAzE4ZjETMBEGA1UEBwwKV2FzaGluZ3RvbjELMAkGA1UECAwCREMxCzAJBgNVBAYTAlVTMRowGAYJKoZIhvcNAQkBFgsxOGZAZ3NhLmdvdjAeFw0xNjA4MTgyMDIzMzNaFw0yNjA4MTYyMDIzMzNaMH8xFjAUBgNVBAMMDVNQIFJhaWxzIERlbW8xDDAKBgNVBAoMA0dTQTEMMAoGA1UECwwDMThmMRMwEQYDVQQHDApXYXNoaW5ndG9uMQswCQYDVQQIDAJEQzELMAkGA1UEBhMCVVMxGjAYBgkqhkiG9w0BCQEWCzE4ZkBnc2EuZ292MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA6gWv5EDu88CgWTgo+B8+Rp7ZSjNKKdud2I4U6Bfr0IMerdrh1LVwO6JOli/qRRDqECQz7Jm6m4XnVvf1bUiQd8cn/FheQfD2NuDNfrnAvyIRIHDgGHGSx3vjPZJVYi5BVmEOPFEKYEKHqS/UGnNjkS2XsoAkstRe6gioo4Hd2WLwjuCMqgNA3vgwyVxdgfI5vsrm6q43X15wb/wCP4r2rGKGSUIIshZPeUcPOzBMAmwVqREN4ux79Ee5K/87aXBVRF7Z2tFV1d5KEXO3dCw+T6cspj9MjfY2976cQfBXWnDKGdNWaLdwtFqvpgo9IXRxlAmUQtx8SC8z+zXaSSGB/wIDAQABMA0GCSqGSIb3DQEBBQUAA4IBAQCtc97SZLs5eBx7LrxdaeP5hq2etB7l6uM6+l/eSvXu8LlQfTUT7URxX4hXbKyORs1BLpnMYxofeyJlzb9K0koy1ZFhUtBufvU1R+ouMfZlV3QGOUMIUp00UNS39b74214jpuUYi7oEM0gHBN3BXxVyzUEAzt2HYHp2Im97ERSmTMkvSfiqilx/t03qIuZVxzu+jIU2BQUxS7s6XQ2DpDbvfggmnvToCmNA0VSg9rZkziOLSRHblcUpdMYH8+mzbTCfgg/Of0kTDVqXzgNa/iR0HUq18bDf3iFebS/sugwXN3vCxdCnad64q5tqF+VscZEtc7Okech2OuctnWy0nzFQ</ds:X509Certificate>
      </ds:X509Data>
    </ds:KeyInfo>
  </ds:Signature>
  <saml:NameID Format='urn:oasis:names:tc:SAML:1.1:nameid-format:persistent'>4985175e-3ddb-489a-a92c-c981cd15e3ca</saml:NameID>
</samlp:LogoutRequest>
```

</div>
</div>

## Logout response

After, login.gov will redirect and POST a form back to your registered Assertion Consumer Service Logout URL:

```bash
POST ${ASSERTION_CONSUMER_SERVICE_LOGOUT_URL}
SAMLResponse=${SAML_RESPONSE}
```

The SAMLResponse is a base64-encoded XML payload that contains encrypted data.

<div class="usa-accordion-bordered">
<button class="usa-accordion-button" aria-controls="logout-response-example">
View example logout response
</button>
<div id="logout-response-example" class="usa-accordion-content" markdown="1">
An example decoded logout response, with indentation added for readability.

```xml
<LogoutResponse ID="_92312250-dc35-0134-8e60-02727c87f245"
                Version="2.0"
                IssueInstant="2017-02-23T20:35:43Z"
                Destination="https://sp.int.identitysandbox.gov/auth/saml/logout"
                InResponseTo="_7b95749b-362f-4048-900b-b8e5b839c72b"
                xmlns="urn:oasis:names:tc:SAML:2.0:protocol">
  <Issuer xmlns="urn:oasis:names:tc:SAML:2.0:assertion">https://idp.int.identitysandbox.gov/api/saml</Issuer>
  <ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
    <ds:SignedInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
      <ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"></ds:CanonicalizationMethod>
      <ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"></ds:SignatureMethod>
      <ds:Reference URI="#_92312df0-dc35-0134-8e60-02727c87f245">
        <ds:Transforms>
          <ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"></ds:Transform>
          <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"></ds:Transform>
        </ds:Transforms>
        <ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"></ds:DigestMethod>
        <ds:DigestValue>d41d4a431d6f2f889a8451bcd660264a11d43516616ffe2eef2e9cab87095369</ds:DigestValue>
      </ds:Reference>
    </ds:SignedInfo>
    <ds:SignatureValue>uE0iTMAfI2BZGgliuyPXu6Ddup/IwTfW3NqlsLJXjjpjxey0U1CYqzQa0O/MaDkn32XXSCmZkLkYTdhDlfmUZ4taZohWIO7y6wwLRAlRBPZPxOPXSZ8wC37A9LPQvW/EtpnPySv8BzuphsROKC1+PnnxbbSJI6EuifxohAGHe9QTECCAM2nBPJAs5D0zTlFLIHluCwsBTkrY6Kfc1VJBZWClKPkLGVXMy6+tqZqp/9h1ii40e43Y0bB/x+9mJvJ5RfIO+b+gj6Aw2Fm2KNX3kdRTZ6tKaLXqlneCUy4C7syrW/CxoCeWkNwuTnaS9szJ3z9Qg68pDAUhCC5BP2RKXA==</ds:SignatureValue>
    <KeyInfo xmlns="http://www.w3.org/2000/09/xmldsig#">
      <ds:X509Data>
        <ds:X509Certificate>MIIDjDCCAnQCCQDnXYBYvsXpXzANBgkqhkiG9w0BAQsFADCBhzEeMBwGA1UEAwwVaWRwLXNhbmRib3gubG9naW4uZ292MQwwCgYDVQQKDANHU0ExDDAKBgNVBAsMAzE4ZjETMBEGA1UEBwwKV2FzaGluZ3RvbjELMAkGA1UECAwCREMxCzAJBgNVBAYTAlVTMRowGAYJKoZIhvcNAQkBFgsxOGZAZ3NhLmdvdjAeFw0xNjA2MDYwMTU5MDVaFw0xNzA2MDYwMTU5MDVaMIGHMR4wHAYDVQQDDBVpZHAtc2FuZGJveC5sb2dpbi5nb3YxDDAKBgNVBAoMA0dTQTEMMAoGA1UECwwDMThmMRMwEQYDVQQHDApXYXNoaW5ndG9uMQswCQYDVQQIDAJEQzELMAkGA1UEBhMCVVMxGjAYBgkqhkiG9w0BCQEWCzE4ZkBnc2EuZ292MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5gG/kitp7qarrggpjq5psf3/6NE7/F5nSpeyJMcQBZmaxOfKaGW87+ynEcuz9XhbnByYX/zHExPGW77g92O5eY8f2Hl1N1vVomaaa359mR3Lljs7PXj0Og+nYnP8TVU31CEaqq0nSx6fuKpVzOeUEE7f0IPGzDHNc3V+UFjcJcn1Hwqf4Rw6KT3yIYwEBWWFrtQgCJTv2WjhUBw5vJ38mG2GidiNleI7azHEI6bcYa8B1WitJbiLxSiO56bFcNpwdzNmWOc6KO3HoZKVpVv9em6EDry7gVMy2/iBoa92nQr0cb/1F5tx7LJXoFOwyRNAaeeXhiC848HsOejHMxmMXwIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQCWDURUw+ujzp59Cbm+sTCwfZldRp49nM3rS/zfNJUo+HNkr3EEtI3EYRfiedTcvl+kN6lli1xqQIYy8K2T/5iCGVWHSwLPgACXJaH2/w0a+HLP+caI7XZk/NpngyoZfnKJ8AlzSPyYCvCGPkFawnp1Gr110oP+s2JEvONEMrLHVDF8V5d/oU8x8Tf7e/aSDvjkjJJzuDwCzR5ehifPuuS+7idgHDOzQXqcWItiXzDGKDZ+lwFdKfnzxYQOTU1kFFb5eolUjU6yL6VTZSypwKuNQoA63AC0m/h75svOH1rAqHMQLXif1+QVl1B/E9HtcUy8ql1apkiaq2O91EpNr9JY</ds:X509Certificate>
      </ds:X509Data>
    </KeyInfo>
  </ds:Signature>
  <Status xmlns="urn:oasis:names:tc:SAML:2.0:protocol">
    <StatusCode Value="urn:oasis:names:tc:SAML:2.0:status:Success"/>
  </Status>
</LogoutResponse>
```

</div>
</div>

# SAML libraries

Here's a list of open-source libraries to help speed up your SAML development.

Java
  - [OneLogin's SAML Java Toolkit](https://github.com/onelogin/java-saml)
  - [OpenSAML](https://wiki.shibboleth.net/confluence/display/OS30/Home)
  - [OpenAM](https://forgerock.org/openam/)
  - [Spring Security SAML](http://projects.spring.io/spring-security-saml/)

PHP
  - [OneLogin's SAML PHP Toolkit](https://github.com/onelogin/php-saml)

Drupal
  - [OneLogin SAML plugin for Drupal](https://github.com/onelogin/drupal-saml)

Joomla
  - [Joomla SAML Authentication plugin](https://github.com/onelogin/joomla-saml), based on OneLogin PHP SAML Toolkit

Python
  - [OneLogin's SAML Python Toolkit](https://github.com/onelogin/python-saml)
  - [OneLogin's SAML Python Toolkit](https://github.com/onelogin/python3-saml) (compatible with Python3)
  - [pysaml2 integration for Django](https://pypi.python.org/pypi/djangosaml2)

Ruby
  - [Ruby SAML](https://github.com/onelogin/ruby-saml)
  - [OmniAuth SAML](https://github.com/omniauth/omniauth-saml)
  - [libsaml](https://github.com/digidentity/libsaml)

Node.js
  - [SAML 2.0 authentication with Passport](https://github.com/bergie/passport-saml)
  - [SAML 2.0 Node.js helpers](https://www.npmjs.com/package/saml2-js)

# Example apps

The login.gov team has created example clients to speed up your development, all open source in the public domain.

- [Java / Spring](https://github.com/18F/identity-saml-java)
- [Ruby / Sinatra](https://github.com/18F/identity-saml-sinatra)
- [Ruby / Rails](https://github.com/18F/identity-saml-rails)
- [Python / Flask](https://github.com/18F/identity-saml-python)
