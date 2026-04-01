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
      - text: x509 Public Certificate
        href: "/saml/getting-started/#x509-public-certificate"
      - text: How your app can access the Login.gov certificate
        href: "/saml/getting-started/#how-your-app-can-access-the-logingov-certificate"
      - text: Signing Certificates
        href: "/saml/getting-started/#signing-certificates"
      - text: Annual Certificate Rotation
        href: "/saml/getting-started/#annual-certificate-rotation"
      - text: Rotating Your Public Certificates
        href: "/saml/getting-started/#rotating-your-public-certificates"
      - text: Example application
        href: "/saml/getting-started/#example-application"
  - text: Authentication
    href: "/saml/authentication/"
  - text: Logout
    href: "/saml/logout/"
---
{% capture nameid %}
The NameID is the unique identifier used to identify a user across multiple sessions. The format is the standard v4 random UUID (Universally Unique Identifier) in compliance with [RFC 4122](https://tools.ietf.org/html/rfc4122){:class="usa-link--external"}. 

For example:
`<NameIDFormat>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent</NameIDFormat>`
{% endcapture %}

{% capture login %}
This is the endpoint where authentication requests are sent to Login.gov (aka Single Sign-on Service). 

For example:
`<SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://idp.int.identitysandbox.gov/api/saml/auth{{ site.data.saml.year.current }}"/>`
{% endcapture %}

{% capture logout %}
The single logout service URL is used to contact the Single logout profile (aka Single Logout Service). 

For example:
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
      <h4>NameID Format</h4>
    </div>
    <div class="grid-col-7">
      {{ nameid | markdownify }}
    </div>
  </div>
</div>
<div class="dev-doc-row">
  <div class="grid-row">
    <div class="grid-col-5">
      <h4>Login service URL and Binding</h4>
    </div>
    <div class="grid-col-7">
      {{ login | markdownify }}
    </div>
  </div>
</div>
<div class="dev-doc-row">
  <div class="grid-row">
    <div class="grid-col-5">
      <h4>Logout service URL and Binding</h4>
    </div>
    <div class="grid-col-7">
      {{ logout | markdownify}}
    </div>
  </div>
</div>

### x509 Public Certificate

For SAML integrations, there are two different public certificates used:

1. The Login.gov certificate that we use to sign our SAML response back to the partner app. This allows the partner app to validate the authenticity of SAML responses received from Login.gov. We update this certificate once a year, as explained in the [Annual Certificate Rotation](#annual-certificate-rotation) section below.

2. Your public certificate that you upload to the Login.gov Partner Portal. This is the certificate that matches the private key on your end that you use to sign your SAML requests to Login.gov. This allows Login.gov to validate the authenticity of your SAML requests.

Your public certificate is also used by Login.gov to encrypt our SAML response back to your app. Your app then uses the corresponding private key to decrypt the response.

You can follow the instructions in our [testing article]({% link _pages/testing.md %}#creating-a-public-certificate) to generate your public/private keypair.

### How your app can access the Login.gov certificate

The easiest and recommended way is via our metadata endpoint. Consistent with the [SAML metadata specification](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf){:class="usa-link--external"}, Login.gov's metadata for our sandbox environment is available at [https://idp.int.identitysandbox.gov/api/saml/metadata{{ site.data.saml.year.current }}](https://idp.int.identitysandbox.gov/api/saml/metadata{{ site.data.saml.year.current }}). Our production metadata endpoint is available at [https://secure.login.gov/api/saml/metadata{{ site.data.saml.year.current }}](https://idp.int.identitysandbox.gov/api/saml/metadata{{ site.data.saml.year.current }}).

This means that you don't have to manually copy our certificate from this page and then upload it to your systems once a year, during our [Annual Certificate Rotation](#annual-certificate-rotation). Instead, you can simply update the year in the metadata URL.

If your systems don't support ingesting the metadata via a URL, there typically is an option to upload a file. In that case, you would visit our metadata endpoint in your browser, then right-click anywhere inside the page, and select "Save As". The default filename will be metadata{{ site.data.saml.year.current }}.xml

If there aren't any metadata options available to you, you will need to manually copy the certificate from the next section, then either paste it on your end, or save it to a file with a .crt extension, then upload it on your end so your app can access it.

### Signing Certificates
Below you can find the X509 certificates used by the Login.gov IdP to sign our SAML **response** back to your app. This allows your app to validate that the response you received did indeed come from Login.gov.

**Do not upload these certificates to your configuration in the Partner Portal**. The Login.gov certificates are meant to be uploaded in your systems so that your app can verify the signature of our SAML response.

{% capture saml_cert_sandbox_title %}
  View {{ site.data.saml.year.current }} <strong>sandbox</strong> certificate
{% endcapture %}
{% capture saml_cert_sandbox_content %}
<div id="sandbox-cert-{{ site.data.saml.year.current }}" markdown="1">
```
{{ site.data.saml.certs.sandbox }}
```
</div>
{% endcapture %}
<dl class="usa-accordion--bordered margin-top-2">
{% include accordion.html id="current-sandbox-saml-cert"
                          accordion_id="current_sandbox_saml_cert"
                          title=saml_cert_sandbox_title
                          content=saml_cert_sandbox_content
%}

{% capture saml_cert_production_title %}
  View {{ site.data.saml.year.current }} <strong>production</strong> certificate
{% endcapture %}
{% capture saml_cert_production_content %}
<div id="production-cert-{{ site.data.saml.year.current }}"  markdown="1">
```
{{ site.data.saml.certs.production }}
```
</div>
{% endcapture %}
{% include accordion.html id="current-production-saml-cert"
                          accordion_id="current_production_saml_cert"
                          title=saml_cert_production_title
                          content=saml_cert_production_content
%}
</dl>

#### Annual Certificate Rotation

The Login.gov SAML certificate is valid for just over one year. Every spring, Login.gov adds new SAML endpoints with the current year that use a new signing certificate.

  - `/api/saml/auth{{ site.data.saml.year.previous }}` becomes `/api/saml/auth{{ site.data.saml.year.current }}`
  - `/api/saml/logout{{ site.data.saml.year.previous }}` becomes `/api/saml/logout{{ site.data.saml.year.current }}`
  - `/api/saml/metadata{{ site.data.saml.year.previous }}` becomes `/api/saml/metadata{{ site.data.saml.year.current }}`

The certificates are issued to create an overlap period of about a month, during which all partners using SAML should migrate at their convenience to the new endpoint URLs for the current year.

The {{ site.data.saml.year.previous }} certificates for idp.int.identitysandbox.gov and secure.login.gov each expire on April 1, {{ site.data.saml.year.current }}. So the transition from {{ site.data.saml.year.previous }} to {{ site.data.saml.year.current }} endpoints should take place in February or March {{ site.data.saml.year.current }}.

### Rotating Your Public Certificates

Note that **your** public certificates (the ones that you use to sign your SAML requests to Login.gov, and that you upload to the Partner Portal) have expiration dates as well, that you set. When it's time for you to change your certificates, there is a specific process to follow in a specific order to avoid downtime. Please make sure to review the [step-by-step instructions for certificate rotation](/production/#certificate-rotation-process) well in advance of your certificate's expiration.

### Example application

The Login.gov team has created an example client to speed up your development, all open source in the public domain: [identity-saml-sinatra](https://github.com/18F/identity-saml-sinatra){:class="usa-link--external"}.

[Next step: Authentication]({{ '/saml/authentication/' | prepend: site.baseurl }})

  </div>
</div>
