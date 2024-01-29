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
saml_year: 2023
saml_last_year: 2022
---
{% capture nameid %}
The NameID is the unique identifier used to identify a user across multiple sessions. The format is the standard v4 random UUID (Universally Unique Identifier) in compliance with [RFC 4122](https://tools.ietf.org/html/rfc4122){:class="usa-link--external"}. For example:
            `<NameIDFormat>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent</NameIDFormat>`
{% endcapture %}

{% capture login %}
This is the endpoint where authentication requests are sent to Login.gov (aka Single Sign-on Service). For example:
`<SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://idp.int.identitysandbox.gov/api/saml/auth{{ page.saml_year }}"/>`
{% endcapture %}

{% capture logout %}
  The single logout service URL is used to contact the Single logout profile (aka Single Logout Service). For example:
  `<SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://idp.int.identitysandbox.gov/api/saml/logout{{ page.saml_year }}" />`
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

Consistent with the [SAML metadata specification](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf){:class="usa-link--external"}, Login.gov's metadata for our sandbox environment is available at [https://idp.int.identitysandbox.gov/api/saml/metadata{{ page.saml_year }}](https://idp.int.identitysandbox.gov/api/saml/metadata{{ page.saml_year }}).

### Signing Certificates
Below you can find the X509 certificates used by the Login.gov IdP to sign SAML requests. **Do not enter these certificates in the Dashboard when configuring an application for testing** - you can follow the instructions in our [testing article]({% link _pages/testing.md %}#creating-a-public-certificate) to generate a client certificate.

<div class="usa-accordion--bordered">
  <button class="usa-accordion__button" aria-controls="sandbox-cert-{{ page.saml_year }}">
  View {{ page.saml_year }} <strong>sandbox</strong> certificate
  </button>
  <div id="sandbox-cert-{{ page.saml_year }}" class="usa-accordion__content" markdown="1">
```
-----BEGIN CERTIFICATE-----
MIIDiDCCAnACCQCEAEZwjX7ZlzANBgkqhkiG9w0BAQsFADCBhTELMAkGA1UEBhMC
VVMxHTAbBgNVBAgMFERpc3RyaWN0IG9mIENvbHVtYmlhMRMwEQYDVQQHDApXYXNo
aW5ndG9uMQwwCgYDVQQKDANHU0ExEjAQBgNVBAsMCUxvZ2luLmdvdjEgMB4GA1UE
AwwXaW50LmlkZW50aXR5c2FuZGJveC5nb3YwHhcNMjMwMjE4MDAxMzQzWhcNMjQw
NDAyMDAxMzQzWjCBhTELMAkGA1UEBhMCVVMxHTAbBgNVBAgMFERpc3RyaWN0IG9m
IENvbHVtYmlhMRMwEQYDVQQHDApXYXNoaW5ndG9uMQwwCgYDVQQKDANHU0ExEjAQ
BgNVBAsMCUxvZ2luLmdvdjEgMB4GA1UEAwwXaW50LmlkZW50aXR5c2FuZGJveC5n
b3YwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCk/TQMCt+F9wUaxXYV
FJg3g8Vdoe08yu/VzPJ8rWKt8ltzcjaxjmicEsOjnqU9CbAW2Mj/0u0OQ82224Sf
5gqIG+dKYRjhjnBv5tg8FCTSkqYQ9xZStOuT0spN+mGdTszod89TmVorWLGUOuct
vd67tyMEfCzZeQxCNNh/xK0BHOb0uJd3wFRrt+v2H74s71EkcVR2Yib/SX5+5JuV
VPfv9W60doYTURiDTG8verPFTL9Rv/ML2LvlOxo2ZpCSINKq7Q+kjPQkn2M1x9ol
iwOHU87yzc8s4Wehl+VDumqR41HrCy4ptUvSYdWu6+qpT/+MgTp+4c7cpIEtMyFS
LHLfAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAIhammcpqCEaFqxZPGbGGoCdeq8s
jkO0S6jLMpOATFmfejN1UUSd0iHR/wBFppahXivOmklUAT4rukNGipTa6wdeZUv4
DJ74ROl9Rdiz0MrI6DfUdAx65gOMn5X+A9DjQQVB4V2ZJ7Fn/94OIZGPNufD5UIH
GTxLYY1XuUjUvj3XLD04PlrgqovEq4EzokaFX+2Kni8zGTE2C+cItQsQiF69ZwPv
d4/x4mtGK5vuFJYdLxrTAZDPAlHL1DzpLtVJ8rAs6axmQ6yS3juYNH50VwZOD3SN
zA97oWiKbuB80QEg/YJULOUJ/fOtTwVxKucjPJVvn0ZCmVg+/FnnbxnQ/q4=
-----END CERTIFICATE-----
```
  </div>
</div>

<div class="usa-accordion--bordered margin-top-2">
  <button class="usa-accordion__button" aria-controls="staging-cert-{{ page.saml_year }}">
  View {{ page.saml_year }} <strong>staging</strong> certificate
  </button>
  <div id="staging-cert-{{ page.saml_year }}" class="usa-accordion__content" markdown="1">
```
-----BEGIN CERTIFICATE-----
MIIDejCCAmICCQCdkPOCkWevyjANBgkqhkiG9w0BAQsFADB/MQswCQYDVQQGEwJV
UzEdMBsGA1UECAwURGlzdHJpY3Qgb2YgQ29sdW1iaWExEzARBgNVBAcMCldhc2hp
bmd0b24xDDAKBgNVBAoMA0dTQTESMBAGA1UECwwJTG9naW4uZ292MRowGAYDVQQD
DBFzdGFnaW5nLmxvZ2luLmdvdjAeFw0yMzAyMTgwMDE0NTRaFw0yNDA0MDIwMDE0
NTRaMH8xCzAJBgNVBAYTAlVTMR0wGwYDVQQIDBREaXN0cmljdCBvZiBDb2x1bWJp
YTETMBEGA1UEBwwKV2FzaGluZ3RvbjEMMAoGA1UECgwDR1NBMRIwEAYDVQQLDAlM
b2dpbi5nb3YxGjAYBgNVBAMMEXN0YWdpbmcubG9naW4uZ292MIIBIjANBgkqhkiG
9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtdei4jauIqXz3DM5hf0858vp95VrFtdZuqXi
d9jTsoC9uXg17YnR6x4uBt+uzpRejrXmo85ljUxC8ORKAx6P9+sEK9re2LVSdjTn
jshJjlZHyCPtiv/oJoeGmT9yEROlxUsli6z5ZSzVN2hvZH26Vega++dB/slFAy55
yp/NQhubE3HcGSqnH+Z/PjWDv+MHMXQkXk+3xWkhHIh1fOmNjw0gVKKZrPP9V12p
F4Arm2euOM1j9EJK3p3oe42jo61mAjYAPjjEpkjLyl8Ks8yuKO4KzeL50gr8T1pC
d7Jd5uw4htvOnf0ifE6whkiFUZxD4HDy4rQME/FQ24QHZ0LvvwIDAQABMA0GCSqG
SIb3DQEBCwUAA4IBAQARXG1GJZ2UsheaJMIjUm2K1KCHPmQRovkX0eSxdnBIYAjJ
kxYks7i4N2To+tKrwOqL5S0FNTBaiKV1eqtscAHfmADRSmez9esH3OSGp8G7n95c
E82mcVqd/wF+eq+5O4qu/XpQbmv8M1dyHaZBqX6Byn0mBwS9Q+kdZV046s8DPP+5
ZQcVC6H9Y8NhP9QIams+CNFVL6Gfy3dwZds1QVJo6mxLyijvpbb122ut3sTwLewb
8Sa0jBmHebHx5s/j5fN43T/BvziZIWcejGojr/PepZyMNUp2qOXSMDdwFenzz40v
hYEvusK0PRSZ03bXvjVUPsrmZ1CJ8u1HUvVf9Vht
-----END CERTIFICATE-----
```
  </div>
</div>

<div class="usa-accordion--bordered margin-top-2">
  <button class="usa-accordion__button" aria-controls="production-cert-{{ page.saml_year }}">
  View {{ page.saml_year }} <strong>production</strong> certificate
  </button>
  <div id="production-cert-{{ page.saml_year }}" class="usa-accordion__content" markdown="1">
```
-----BEGIN CERTIFICATE-----
MIIDajCCAlICCQCke2qXieYxejANBgkqhkiG9w0BAQsFADB3MQswCQYDVQQGEwJV
UzEdMBsGA1UECAwURGlzdHJpY3Qgb2YgQ29sdW1iaWExEzARBgNVBAcMCldhc2hp
bmd0b24xDDAKBgNVBAoMA0dTQTESMBAGA1UECwwJTG9naW4uZ292MRIwEAYDVQQD
DAlsb2dpbi5nb3YwHhcNMjMwMjE4MDAxMzU5WhcNMjQwNDAyMDAxMzU5WjB3MQsw
CQYDVQQGEwJVUzEdMBsGA1UECAwURGlzdHJpY3Qgb2YgQ29sdW1iaWExEzARBgNV
BAcMCldhc2hpbmd0b24xDDAKBgNVBAoMA0dTQTESMBAGA1UECwwJTG9naW4uZ292
MRIwEAYDVQQDDAlsb2dpbi5nb3YwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEK
AoIBAQC+dal398ddWhPiZ6DfnH49xP5DRLyoKTBgOgqiz5HDLJPZA4K/GnEJy8h7
qJYBw12Ls3wpEWO6/skCh13vz2pJmrtNFFHZrfA5mlXihwHEjk+dsyInAFGYrujU
OeRp8WuSp/wCZpEL1HcmMHUj/IRoJP/YouG4C+QNu8hW6XWpJriRJWIH8WuxLY8+
UW81Kdu2WMQDPoHNxHwgvk4bJyxLkg6jzp0x1bhmqNeXHLalzS217qhD3h87mcTn
z0NClHIViqHsCpGxty9MaaysCXFiQkshFR+OrLNk+pKLh7R2VW5b3ConN99+qDHf
7sW7eXGUhyioT7DR9uSw0GY9ODY/AgMBAAEwDQYJKoZIhvcNAQELBQADggEBADQd
7cbonjzbAC72jMQ5tbpw8tNhoPpW8TqT+GQ7+RmMedtWu4CD7MgqjsxBWXJOg9vu
qgq3qmQPkCQhnsFZk0yu/2SPxQlANv8mBP5iAAVIXAcvC6/C/0ckOHcyQa1cg720
teZW235Pcip0n3j+p6BoX5C+7ycmr3KGPJgeMswvSk96xrxdfKtw4f+PIL9V20Gu
Z3kL2fWrK+GEYOt4AwNLURnjblW2KkMAfx/MhQ8Olw6YyTneIBcXsuGB4691exbn
Z+02hLe6p5Ml9cR6i++6kxypSRr7vYct4vNZkKM4RG/YoB373o0jQk9RwksJMRci
M990/eKm//HBwtKLDdI=
-----END CERTIFICATE-----
```
  </div>
</div>

#### Annual Certificate Rotation

The Login.gov SAML certificate is valid for just over one year. Every spring, Login.gov adds new SAML endpoints with the current year that use a new signing certificate.

  - `/api/saml/auth{{ page.saml_last_year }}` becomes `/api/saml/auth{{ page.saml_year }}`
  - `/api/saml/logout{{ page.saml_last_year }}` becomes `/api/saml/logout{{ page.saml_year }}`

The certificates are issued to create an overlap period of about a month, during which all partners using SAML should migrate at their convenience to the new endpoint URLs for the current year.

The {{ page.saml_last_year }} certificates for idp.int.identitysandbox.gov and secure.login.gov each expire on April 1, {{ page.saml_year }}. So the transition from {{ page.saml_last_year }} to {{ page.saml_year }} endpoints should take place in February or March {{ page.saml_year }}.

#### Example application

The Login.gov team has created an example client to speed up your development, all open source in the public domain: [identity-saml-sinatra](https://github.com/18F/identity-saml-sinatra){:class="usa-link--external"}.

[Next step: Authentication]({{ '/saml/authentication/' | prepend: site.baseurl }})

</div>
</div>
