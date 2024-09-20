---
title: SAML developer guide
lead: >
  Login.gov is a standard SAML identity provider, adhering to the [Web Browser SSO Profile](https://en.wikipedia.org/wiki/SAML_2.0#Web_browser_SSO_profile){:class="usa-link--external"} with enhancements for [NIST 800-63-3](https://pages.nist.gov/800-63-3/){:class="usa-link--external"}.
redirect_from:
  - /configuring-your-sp/
  - /saml/
sidenav:
  - text: Getting started
    href: "/saml/getting-started/"
  - text: Authentication
    href: "/saml/authentication/"
    links:
        - text: Authentication request
          href: "/saml/authentication/#authentication-request"
        - text: Authentication response
          href: "/saml/authentication/#authentication-response"
  - text: Logout
    href: "/saml/logout/"
---
{% capture aal_values %}
 {% include snippets/auth_content/aal_values.md %}
{% endcapture %}
{% capture service_levels %}
 {% include snippets/auth_content/service_levels.md %}
{% endcapture %}
{% capture loa_values %}
 {% include snippets/auth_content/loa_values.md %}
{% endcapture %}
{% capture saml_request_intro %}
`<samlp:AuthnRequest>:SAML_REQUEST = urlEncode(base64(deflate(payload)))`
{% endcapture %}
{% capture saml_tag %}
The `<saml:AuthnContextClassRef>` tags (nested under `//samlp:AuthnRequest/samlp:RequestedAuthnContext/`) specify the type of identity verification<sup role="doc-noteref"><a href="#fn:1" class="footnote" rel="footnote">&#42;</a></sup>, AAL (Authentication Assurance Level) and attributes requested.
{% endcapture %}
{% capture attributes %}
To request specific attributes, list them (comma-separated) as the query parameter for `http://idmanagement.gov/ns/requested_attributes?ReqAttr=`. See the [user attributes]({{ '/attributes/' | prepend: site.baseurl }}) for the list of attributes that can be requested.

#### Example specifying IAL, AAL, and attributes

A proofed identity request at AAL2, with phishing resistent MFA, for email, phone, first name, last name, and SSN might look like:

```xml
<samlp:AuthnRequest ...>
  <!-- ... -->
  <samlp:RequestedAuthnContext Comparison='exact'>
    <saml:AuthnContextClassRef>http://idmanagement.gov/ns/assurance/ial/2</saml:AuthnContextClassRef>
    <saml:AuthnContextClassRef>http://idmanagement.gov/ns/assurance/aal/2?phishing_resistant=true</saml:AuthnContextClassRef>
    <saml:AuthnContextClassRef>http://idmanagement.gov/ns/requested_attributes?ReqAttr=email,phone,first_name,last_name,ssn</saml:AuthnContextClassRef>
  </samlp:RequestedAuthnContext>
</samlp:AuthnRequest>
```
{% endcapture %}
{% capture decrypted_response %}
```xml
<Assertion xmlns="urn:oasis:names:tc:SAML:2.0:assertion" ID="_b7a3ca0f-25a4-4365-af81-da8f04740564" IssueInstant="2024-09-18T16:20:36Z" Version="2.0">
  <Issuer>https://idp.int.identitysandbox.gov/api/saml</Issuer>
  <ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
    <ds:SignedInfo>
      <ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
      <ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"/>
      <ds:Reference URI="#_b7a3ca0f-25a4-4365-af81-da8f04740564">
        <ds:Transforms>
          <ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
          <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
        </ds:Transforms>
        <ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/>
        <ds:DigestValue>5uICLRmnTHr/Ma7+uphAjCf86rmR+P6QELBf2C53mIc=</ds:DigestValue>
      </ds:Reference>
    </ds:SignedInfo>
    <ds:SignatureValue>XT9CguQWKBvbqVsJ+Khu5/eyl09JVhHkUuyFHa98ViZUBVgL/Hc9gzwUr43CA7OVOO+uMfCc6WvPKeADF9w9kqJaUgsi8LiKC/nfDCY6+UiRoep2zmXyFJRAvrD/HbgVfayx/4Nn3ponRPZ/T/oezhimssFF66m+/UAwJekO9kuob+5n+uaOiFOMuHEycSdASH/iFnTSR1ajdo6AaLomG6YT8zJbuRzcKmesouAKPiQCJFt2cgstEs1zw8dvTgmozy4qd/0aMiZ52eGcXoORD8VZOQiY63HT8F4wkhk5eGU05sFcyfpg7dXNtKOfCddHwyngmgmPhpRN30ew5njg7w==</ds:SignatureValue>
    <ds:KeyInfo>
      <ds:X509Data>
        <ds:X509Certificate>MIID+TCCAuGgAwIBAgIUUS6s9Rb+KY0fT0qKKgqPPJij/HMwDQYJKoZIhvcNAQELBQAwgYsxCzAJBgNVBAYTAlVTMR0wGwYDVQQIDBREaXN0cmljdCBvZiBDb2x1bWJpYTETMBEGA1UEBwwKV2FzaGluZ3RvbjEMMAoGA1UECgwDR1NBMRIwEAYDVQQLDAlMb2dpbi5nb3YxJjAkBgNVBAMMHWxvZ2luLmdvdi5pZGVudGl0eXNhbmRib3guZ292MB4XDTI0MDEyMjIwMTcwN1oXDTI1MDQwMTIwMTcwN1owgYsxCzAJBgNVBAYTAlVTMR0wGwYDVQQIDBREaXN0cmljdCBvZiBDb2x1bWJpYTETMBEGA1UEBwwKV2FzaGluZ3RvbjEMMAoGA1UECgwDR1NBMRIwEAYDVQQLDAlMb2dpbi5nb3YxJjAkBgNVBAMMHWxvZ2luLmdvdi5pZGVudGl0eXNhbmRib3guZ292MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhmcFFn4b56vHlGBQ1Lx6AXz17sqKnCc6sJ+9csP1RtQBI0NpPHB2z9Di1PNk/ElK7V7yh3uMu4FJYw30GZFUl2f/ttsDkNHrwfh/jzbMNjrOSc0P25oem4uOUfeGH9jtMhKa+HZLOaOmcyWFKkYR2mwacEbQJ1CWviHtP8AzHUPSbHklAmusRLuygTjq0+QRJZgSezGqwU1L3ixPq+gMzPtMS+fxsMOVo2eosip440gz4rcqUUogtD2hV8EQi3+GIkGYuMTS81ug/385TCPEhzWMnNmDi3HykOZeRNb4GfCYw0Yx+v+cb7BPD5EdxUHNwliHvSiRAeYqLjBjuNUfKQIDAQABo1MwUTAdBgNVHQ4EFgQUusictYnNM2TbIt5STz2lkYN1sI8wHwYDVR0jBBgwFoAUusictYnNM2TbIt5STz2lkYN1sI8wDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAQEATuLF4kHeP7FY9Wzm3DfF+m/5wUhJEtbsF8J9Wq8duhQ4/gtZVJgMDUKLsnSDLCtWiRlsFXquI8tlo32JsVo5NfZI9WYsub7192iCYpqE+x5G+94tt5vAayoF7GKGPxatyldxAQUz7RUzwqas7NCYXQ0p7wZrMqF8z2yvaUgL55v8TJIb7RP+D8b47Cmzx7IYmx3Co30vZWysQe61Bv880hG11YJsBAc0hmyWlokJYZZVm+xcjKkm6aFyyAbeCe0Kh68QU7f9YkpFv/sW2RIvZ/Z0gvxjJE+YJBwOwPDDHdkb0ZmKOJvlaabi5lkTZvUtTHXb5Hu7DxRRt91dm77MlQ==</ds:X509Certificate>
      </ds:X509Data>
    </ds:KeyInfo>
  </ds:Signature>
  <Subject>
    <NameID Format="urn:oasis:names:tc:SAML:2.0:nameid-format:persistent">34abda40-d5aa-4259-9f17-a3757fd2e094</NameID>
    <SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer">
      <SubjectConfirmationData InResponseTo="_bf054c05-5b2c-4773-a6a9-9ba075a87bc9" NotOnOrAfter="2024-09-18T16:23:36Z" Recipient="https://sp.int.identitysandbox.gov/auth/saml/callback"/>
    </SubjectConfirmation>
  </Subject>
  <Conditions NotBefore="2024-09-18T16:20:31Z" NotOnOrAfter="2024-09-18T17:20:36Z">
    <AudienceRestriction>
      <Audience>urn:gov:gsa:SAML:2.0.profiles:sp:sso:identitysandbox</Audience>
    </AudienceRestriction>
  </Conditions>
  <AttributeStatement>
    <Attribute Name="uuid" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic" FriendlyName="uuid">
      <AttributeValue>34abda40-d5aa-4259-9f17-a3757fd2e094</AttributeValue>
    </Attribute>
    <Attribute Name="email" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic" FriendlyName="email">
      <AttributeValue>vraj@example.com</AttributeValue>
    </Attribute>
    <Attribute Name="aal" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri" FriendlyName="aal">
      <AttributeValue>http://idmanagement.gov/ns/assurance/aal/2</AttributeValue>
    </Attribute>
    <Attribute Name="ial" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri" FriendlyName="ial">
      <AttributeValue>http://idmanagement.gov/ns/assurance/ial/1</AttributeValue>
    </Attribute>
  </AttributeStatement>
  <AuthnStatement AuthnInstant="2024-09-18T16:20:36Z" SessionIndex="_b7a3ca0f-25a4-4365-af81-da8f04740564">
    <AuthnContext>
      <AuthnContextClassRef>http://idmanagement.gov/ns/assurance/aal/2?phishing_resistant=true</AuthnContextClassRef>
    </AuthnContext>
  </AuthnStatement>
</Assertion>
```
{% endcapture %}

<div class="grid-row grid-gap">
    <div class="desktop:grid-col-7 mobile:grid-col-full">
        <h2>Authentication</h2>
        <h3 id="authentication-request">Authentication request</h3>
        <p>To authenticate a user with Login.gov, direct them to our authentication URL with a SAML authentication request as a GET param.</p>
        <p>The `SAMLRequest` parameter is a url-encoded, base64-encoded, deflate-compressed XML payload of a <code class="language-plaintext highlighter-rouge">{{ saml_request_intro | markdownify }}</code></p>
        <p>Note: We strongly encourage you to cryptographically sign authentication requests, unless there are technical limitations on your side that prevent this. In addition to providing increased security, this allows for seamless rotation of your application’s public certificate in the future. All signatures must use RSA SHA-256.</p>
        <div class="dev-doc-row">
            <div class="grid-row">
                <div class="grid-col-5">
                    <h4 class="parameters clearfix">Specifying attributes and assurance levels</h4>
                </div>
                <div class="grid-col-7 margin-top-neg-2">
                    {{ saml_tag | markdownify }}
                </div>
            </div>
            <div class="usa-accordion">
                {% include accordion.html content=service_levels accordion_id="service_level_accordion"  title="Type of Service Level" id="service_level" %}
                {% include accordion.html content=aal_values accordion_id="aal_accordion" title="Authentication Assurance (AAL) Values" id="aal_values" %}
                {% include accordion.html content=attributes accordion_id="attributes_accordion" title="Attributes" id="attributes" %}
                {% include accordion.html content=loa_values accordion_id="loa_accordion" title="Level of Assurance (LOA) Values (Deprecated)" id="loa_values" %}
            </div>
        </div>
        <div class="dev-doc-row">
            <div class="grid-row">
                <div class="grid-col-5">
                    <h4 class="parameters clearfix">RelayState</h4>
                </div>
                <div class="grid-col-7 margin-top-neg-2">
                        <p>If you need to pass any information about the request back to your application after the authentication process is complete (e.g. the path to direct the user to), you can include a RelayState query parameter with up to 80 bytes of information. This will be included in the response back to your application as per section 3.4.3 of the <a class="usa-link" href="https://docs.oasis-open.org/security/saml/v2.0/saml-bindings-2.0-os.pdf">SAML 2.0 bindings spec</a>.</p>
                        <p><code class="language-plaintext highlighter-rouge">https://idp.int.identitysandbox.gov/api/saml/auth2023?SAMLRequest=${SAML_REQUEST}&amp;RelayState=${RELAY_STATE}</code></p>
                </div>
            </div>
        </div>
        <div class="dev-doc-row">
            <div class="grid-row">
                <div class="grid-col-5">
                    <h4 class="parameters clearfix">Language Selection</h4>
                </div>
                <div class="grid-col-7 margin-top-neg-2">
                        <p>If you know that a user would prefer one of our alternative language translations (currently Spanish or French), you can include the <code class="language-plaintext highlighter-rouge">locale</code> parameter to specify the language Login.gov should use (either <code class="language-plaintext highlighter-rouge">es</code> for Spanish or <code class="language-plaintext highlighter-rouge">fr</code> for French), e.g.:</p>
                        <p><code class="language-plaintext highlighter-rouge">https://idp.int.identitysandbox.gov/api/saml/auth2023?SAMLRequest=${SAML_REQUEST}&amp;locale=es</code></p>
                </div>
            </div>
        </div>
    </div>
    <div class="usa-layout-docs__main code-snippet-column desktop:grid-col-5">
        <section class="code-snippet-section margin-top-2 position-relative z-index-1">
            <button id="saml_auth_tab1_button" data-selector="saml_auth" class="code-button code-button__selected margin-left-2">Request</button>
            <button id="saml_auth_tab2_button" data-selector="saml_auth" class="code-button margin-left-2">Example</button>
            <section id="saml_auth_tab1">
                {% include snippets/saml/auth/request.md %}
            </section>
            <section id="saml_auth_tab2" hidden>
                {% include snippets/saml/auth/request_example.md %}
            </section>
        </section>
    </div>
</div>
<div class="grid-row grid-gap">
    <div class="desktop:grid-col-7 mobile:grid-col-full">
        <h2 id="authentication-response">Authentication response</h2>
        <p markdown="1">After the user authenticates, Login.gov will redirect and POST a form back to your registered Assertion Consumer Service URL with a hidden form control named `SAMLResponse`.</p>
        <p markdown="1">`SAMLResponse` contains a base64-encoded XML payload that contains data that is encrypted with the service provider's public key.</p>
        <p markdown="1"> The decrypted `SAMLResponse` contains a `<saml:Assertion>` element, which in turn contains the following elements: </p>
        <dl>
            <dt markdown="1">`Subject`</dt>
            <dd>Contains the NameID, the Recipient of this information and the validity period.</dd>
            <dt markdown="1">`AttributeStatement`</dt>
            <dd>All the requested attributes.</dd>
            <dt markdown="1">`AuthnStatement`</dt>
            <dd>Contains the AAL that was used.</dd>
        </dl>
        <p>For example: {{ decrypted_response | markdownify }}</p>
          <a href="{{ '/saml/logout/' | prepend: site.baseurl }}" class="usa-link margin-top-4 mobile:display-none desktop:display-block">Next step: Logout</a>
    </div>
    <div class="usa-layout-docs__main code-snippet-column desktop:grid-col-5">
        <section class="margin-top-2 position-relative z-index-1">
            <button id="saml_auth_response_tab1_button" data-selector="saml_auth_response" class="code-button code-button__selected margin-left-2">Response</button>
            <button id="saml_auth_response_tab2_button" data-selector="saml_auth_response" class="code-button margin-left-2">Example</button>
            <section id="saml_auth_response_tab1">
                {% include snippets/saml/auth/response.md %}
            </section>
            <section id="saml_auth_response_tab2" hidden>
                {% include snippets/saml/auth/response_example.md %}
            </section>
        </section>
    </div>
    <div class="desktop:grid-col-7 mobile:grid-col-full">
        <p id="fn:1" role="note">&#42;Login.gov continues to work toward achieving certification of compliance with NIST’s IAL2 standard from a third-party assessment organization.</p>
    </div>
    <a href="{{ '/saml/logout/' | prepend: site.baseurl }}" class="usa-link mobile:display-block desktop:display-none margin-top-2">Next step: Logout</a>
</div>


