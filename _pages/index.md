---
title: Login.gov Dev Docs
permalink: /
---

<div class="usa-alert usa-alert-warning">
  <div class="usa-alert-body">
    <h3 class="usa-alert-heading">Warning!</h3>
    <p class="usa-alert-text">This site is a work in progress and things might be wrong.</p>
  </div>
</div>

# Welcome

Login.gov is a standard SAML identity provider, adhering to the [Web Browser SSO Profile](https://en.wikipedia.org/wiki/SAML_2.0#Web_Browser_SSO_Profile) with enhancements for [NIST 800-63-3](https://pages.nist.gov/800-63-3/). This developer documentation will help you learn about Login.gov and steps needed to integrate your application with the service.

## Getting started checklist

- Determine the LOA you need to support for the target application. Login.gov provides support for LOA 1 and LOA 3.
- Determine the attributes your application needs. See all [available attributes]({{site.baseurl}}/attributes) provided.
- Review the minimum requirements for integration (API endpoints, certificates, SLO).
- For new applications, [find a SAML library]({{site.baseurl}}/saml_libs) in the language and stack you're using.
- Configure your [SAML client parameters]({{site.baseurl}}/params).
- Test against our sandbox environment ([idp.dev.login.gov](https://idp.dev.login.gov)).

## Configuration

Our sandbox environment is available for testing your service provider application. View our [metadata endpoint](https://idp.dev.login.gov/api/saml/metadata) for all the pertinent information.

All authentication and logout requests must be signed. We require RSA SHA-256 signatures embedded with the authentication and logout requests. Here's some of the key information you'll need:

```xml
<!-- NameID Format: v4 UUID https://tools.ietf.org/html/rfc4122 -->
<NameIDFormat>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent</NameIDFormat>

<SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://idp.dev.login.gov/api/saml/auth" />

<SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://idp.dev.login.gov/api/saml/logout" />

<KeyInfo xmlns="http://www.w3.org/2000/09/xmldsig#">
  <ds:X509Data>
    <ds:X509Certificate>
      <!-- Get the latest certificate from the Metadata endpoint -->
    </ds:X509Certificate>
  </ds:X509Data>
</KeyInfo>
```

In order to successfully authenticate, we will need to whitelist your application. We'll collect the following details about your service provider application:

- `acs_url`
- `assertion_consumer_logout_service_url`, if supported
- `sp_initiated_login_url`
- `block_encryption`
- `cert`
- `agency`
- `friendly name`, optionally
- `logo (optional)`
- Return to service provider application URL callback
- `default attributes`, optionally

## Resources

- [SAML libraries]({{site.baseurl}}/saml_libs)
- [Service provider reference implementations]({{site.baseurl}}/sp_refs)
- [Generating self-signed certificates]({{site.baseurl}}/certs)
