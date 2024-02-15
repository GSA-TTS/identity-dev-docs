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
    links:
      - text: Configuration
        href: "/saml/getting-started/#configuration"
      - text: Metadata
        href: "/saml/getting-started/#metadata"
      - text: Signing Certificates
        href: "/saml/getting-started/#signing-certificates"
      - text: Annual Certificate Rotation
        href: "/saml/getting-started/#annual-certificate-rotation"
      - text: Example application
        href: "/saml/getting-started/#example-application"
  - text: Authentication
    href: "/saml/authentication/"
  - text: Logout
    href: "/saml/logout/"
---
{% capture nameid %}
The NameID is the unique identifier used to identify a user across multiple sessions. The format is the standard v4 random UUID (Universally Unique Identifier) in compliance with [RFC 4122](https://tools.ietf.org/html/rfc4122){:class="usa-link--external"}. For example:
            `<NameIDFormat>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent</NameIDFormat>`
{% endcapture %}

{% capture login %}
This is the endpoint where authentication requests are sent to Login.gov (aka Single Sign-on Service). For example:
`<SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://idp.int.identitysandbox.gov/api/saml/auth{{ site.data.saml.year.current }}"/>`
{% endcapture %}

{% capture logout %}
  The single logout service URL is used to contact the Single logout profile (aka Single Logout Service). For example:
  `<SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://idp.int.identitysandbox.gov/api/saml/logout{{ site.data.saml.year.current }}" />`
{% endcapture %}

{% capture saml_warning %}
We strongly recommend choosing [OpenID Connect]({{site.baseurl}}/oidc/getting-started/) (OIDC) over SAML due to its modern, API-centric design and support for native mobile applications.
{% endcapture %}
{% include alert.html content=saml_warning alert_class="usa-alert--warning" %}

<div class="grid-row grid-gap">
  <div class="desktop:grid-col-9 mobile:grid-col-full" markdown="1">

## Getting started

SAML is an established standard, but can be a bit complex. We recommend looking for and using a SAML library for your language before developing your own.

### Configuration

Here are values needed to configure your service provider (SP) to work with Login.gov:

<div class="dev-doc-row">
    <div class="grid-row">
        <div class="grid-col-5">
            <h4 class="parameters clearfix">NameID Format</h4>
        </div>
        <div class="grid-col-7 margin-top-neg-2">
            {{ nameid | markdownify }}
        </div>
    </div>
</div>
<div class="dev-doc-row">
    <div class="grid-row">
        <div class="grid-col-5">
            <h4 class="parameters clearfix">Login service URL and Binding</h4>
        </div>
        <div class="grid-col-7 margin-top-neg-2">
            {{ login | markdownify }}
        </div>
    </div>
</div>
<div class="dev-doc-row">
    <div class="grid-row">
        <div class="grid-col-5">
            <h4 class="parameters clearfix">Logout service URL and Binding</h4>
        </div>
        <div class="grid-col-7 margin-top-neg-2">
            {{ logout | markdownify}}
        </div>
    </div>
</div>

### x509 Public Certificate
  The public certificate is used to validate the authenticity of SAML requests received from Login.gov, a minimum of 2048 bits. We publish this public certificate from our [metadata endpoint](#metadata) and below for verification.

### Metadata

Consistent with the [SAML metadata specification](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf){:class="usa-link--external"}, Login.gov's metadata for our sandbox environment is available at [https://idp.int.identitysandbox.gov/api/saml/metadata{{ site.data.saml.year.current }}](https://idp.int.identitysandbox.gov/api/saml/metadata{{ site.data.saml.year.current }}).

### Signing Certificates
Below you can find the X509 certificates used by the Login.gov IdP to sign SAML requests. **Do not enter these certificates in the Dashboard when configuring an application for testing** - you can follow the instructions in our [testing article]({% link _pages/testing.md %}#creating-a-public-certificate) to generate a client certificate.

<div class="usa-accordion--bordered">
  <button class="usa-accordion__button" aria-controls="sandbox-cert-{{ site.data.saml.year.current }}">
  View {{ site.data.saml.year.current }} <strong>sandbox</strong> certificate
  </button>
  <div id="sandbox-cert-{{ site.data.saml.year.current }}" class="usa-accordion__content" markdown="1">
```
-----BEGIN CERTIFICATE-----
MIID7TCCAtWgAwIBAgIUYePi2i1UjRg3fIK0FG15rZaSOvAwDQYJKoZIhvcNAQEL
BQAwgYUxCzAJBgNVBAYTAlVTMR0wGwYDVQQIDBREaXN0cmljdCBvZiBDb2x1bWJp
YTETMBEGA1UEBwwKV2FzaGluZ3RvbjEMMAoGA1UECgwDR1NBMRIwEAYDVQQLDAlM
b2dpbi5nb3YxIDAeBgNVBAMMF2ludC5pZGVudGl0eXNhbmRib3guZ292MB4XDTI0
MDExNjIwMTEyMloXDTI1MDQwMTIwMTEyMlowgYUxCzAJBgNVBAYTAlVTMR0wGwYD
VQQIDBREaXN0cmljdCBvZiBDb2x1bWJpYTETMBEGA1UEBwwKV2FzaGluZ3RvbjEM
MAoGA1UECgwDR1NBMRIwEAYDVQQLDAlMb2dpbi5nb3YxIDAeBgNVBAMMF2ludC5p
ZGVudGl0eXNhbmRib3guZ292MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKC
AQEA0K9gJdCDRwndI+Gd44cugWK3VWKgPV/oZU74KqYxJOomJUgLLYMHskS3RDlO
la+k25SvBLWFlT9Y10RAnWo6ZDquY+/BaedyoTaoLf/5K/JxXz8th00aIll4ym3C
LE/ac9B7s/apACdpH63XwAlaRC3A4Hbq1DWXd2Hcuw0B9pRpMKFd6i/kVvAsNH7t
Nn5gBL9hckiPxR4FD8/VysnVmXpNNFyKNEUQi6iqKVbUhzB+4WZMB/qBnnIEeSuU
pHfQCUJR3SjRYzBLR+iVAXKeNCg7CENZbu02AY32kyO6QStQnGItTi355p4VFumA
4dQS2MZsXYAPo+QP+qe6rguXaQIDAQABo1MwUTAdBgNVHQ4EFgQUGbZYf4tPIbZx
RYwemr7iRXcS8jUwHwYDVR0jBBgwFoAUGbZYf4tPIbZxRYwemr7iRXcS8jUwDwYD
VR0TAQH/BAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAQEAtPlcy1eToYc2B0+zg4Dd
GQDZQA897Z7oLX0nfpf4Bsx1sQzqhEd1iBPh4/g0wO45T4c0aOdH+bdv8UC9NWup
KdIrz9VGY3XD5ef8ydTWAzcN9k+gTZmPQ506SRqI6GlWy8QDuPX+sK7apOkd/TUI
LAeoA9on+v8qg52jU1E4e8La8Kd8PPNWbAbLew2lp/ANRYbtcPmVbJYOlY8nBOZa
dzL3LPwWkPJII78hmSc2eV4UqyTVbJ/k15i+tx+8GALx1LHMri11fvcFhJUx/qfG
U6X7xnI32eZtmOH7Y+Xi9dxh560ohSgP3m4xv2YKsVjm2tPZGfZvpOGNEYTvdaXa
AA==
-----END CERTIFICATE-----
```
  </div>
</div>

<div class="usa-accordion--bordered margin-top-2">
  <button class="usa-accordion__button" aria-controls="production-cert-{{ site.data.saml.year.current }}">
  View {{ site.data.saml.year.current }} <strong>production</strong> certificate
  </button>
  <div id="production-cert-{{ site.data.saml.year.current }}" class="usa-accordion__content" markdown="1">
```
-----BEGIN CERTIFICATE-----
MIIDzzCCAregAwIBAgIUBedAGri4qfIqwYynVBmUJ598viAwDQYJKoZIhvcNAQEL
BQAwdzELMAkGA1UEBhMCVVMxHTAbBgNVBAgMFERpc3RyaWN0IG9mIENvbHVtYmlh
MRMwEQYDVQQHDApXYXNoaW5ndG9uMQwwCgYDVQQKDANHU0ExEjAQBgNVBAsMCUxv
Z2luLmdvdjESMBAGA1UEAwwJbG9naW4uZ292MB4XDTI0MDExNjIwMTE1MloXDTI1
MDQwMTIwMTE1MlowdzELMAkGA1UEBhMCVVMxHTAbBgNVBAgMFERpc3RyaWN0IG9m
IENvbHVtYmlhMRMwEQYDVQQHDApXYXNoaW5ndG9uMQwwCgYDVQQKDANHU0ExEjAQ
BgNVBAsMCUxvZ2luLmdvdjESMBAGA1UEAwwJbG9naW4uZ292MIIBIjANBgkqhkiG
9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuhtUVOX/nhTLLAb3dc2AMuPfUN8TtqxCaXGd
wdDbY76nL1oTkrk3zns95OlC0+gg8EhuRpxii6snxa/JDZPHQuAGWBS5KWcD/pNx
P7TIghrqPtPGPuK2EM3tduYObN3VEMhpfAGtP+wQQ/n16i4wbTeRHm4O5T8vWTUe
ZqxP/l9ja/txexv+LLmeR+zI9k51OfwWzr25HW1j6AkRTB/BQgt9Z29h7QNiGUiY
QNBgXf3E03oOo8UCl7JXRLxygaBT67nOrFK9gxxs4nHVfhbrnA8VoUm+CrDczP46
nAnXKk0HoQWFOlJDKNowbm3fHGt8CkLJBOszI+Hz0b7nQ8sFRQIDAQABo1MwUTAd
BgNVHQ4EFgQUon3wLMwFr2s3AdO9u2vcGnhoH5wwHwYDVR0jBBgwFoAUon3wLMwF
r2s3AdO9u2vcGnhoH5wwDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0BAQsFAAOC
AQEAp6N3nT6GNkjMiEfsvwp66QDF2Fbjaelh6eRMf/QUwEttWawRB9IMnBzL0EOx
ZQ8jm3V1n8mev7fFJbP/bDnqsnhag+0cPGtQjVl5ZAImjmfIu0gvOrvZqoiAKi6W
HDD8UAd/XNr4Eui9DHRKx9QBABajDwyfgWBE7phc5zosEyxep8n+pytxcWDAbR2k
zKVac1+mXPwXSLN4ORh7TI9kzipojBlQWMG0Hx+VU+FjX5+pMqIpME5KAhj1yZdD
k7/ji4apPwsrQ5BBXQd9w1T7I7ONK0+uVCGgJDDBnmA7HfoJjG4LL9lBgb1U/adQ
McTTfASiTYMiQCZX/hZNyfUF1g==
-----END CERTIFICATE-----
```
  </div>
</div>

#### Annual Certificate Rotation

The Login.gov SAML certificate is valid for just over one year. Every spring, Login.gov adds new SAML endpoints with the current year that use a new signing certificate.

  - `/api/saml/auth{{ site.data.saml.year.previous }}` becomes `/api/saml/auth{{ site.data.saml.year.current }}`
  - `/api/saml/logout{{ site.data.saml.year.previous }}` becomes `/api/saml/logout{{ site.data.saml.year.current }}`

The certificates are issued to create an overlap period of about a month, during which all partners using SAML should migrate at their convenience to the new endpoint URLs for the current year.

The {{ site.data.saml.year.previous }} certificates for idp.int.identitysandbox.gov and secure.login.gov each expire on April 1, {{ site.data.saml.year.current }}. So the transition from {{ site.data.saml.year.previous }} to {{ site.data.saml.year.current }} endpoints should take place in February or March {{ site.data.saml.year.current }}.

#### Example application

The Login.gov team has created an example client to speed up your development, all open source in the public domain: [identity-saml-sinatra](https://github.com/18F/identity-saml-sinatra){:class="usa-link--external"}.

[Next step: Authentication]({{ '/saml/authentication/' | prepend: site.baseurl }})

</div>
</div>
