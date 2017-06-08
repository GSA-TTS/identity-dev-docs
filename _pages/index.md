---
title: Developer Documentation
permalink: /
---

# Welcome

This documentation is intended for federal agency developers interested in integrating their applications with [login.gov](https://login.gov).

login.gov is an identity provider that supports both the SAML (adhering to the [Web Browser SSO Profile](https://en.wikipedia.org/wiki/SAML_2.0#Web_Browser_SSO_Profile)) and OpenID Connect (conforming to the [iGov WG Profile](https://openid.net/wg/igov/)), with enhancements for [NIST 800-63-3](https://pages.nist.gov/800-63-3/). This documentation uses standard identity provider terminology, where the Identity Provider (IdP) is the service that stores the user's actual credentials, login.gov in this case; the Service Provider (SP) refers to your application, which will ask the IdP for authentication information when a user tries to log in.

## Integration checklist

<div markdown="1" class="ul-checklist">

- **Determine prerequisites**<br />
  Decide the Levels of Assurance (LOA) your application needs to support (login.gov supports LOA 1 and 3) and the [user attributes]({{site.baseurl}}/attributes/) your application requires.

- **Build and configure your application**<br />
  Choose a protocol and develop your application.
  - [SAML Guide]({{site.baseurl}}/saml/)
  - [OpenID Connect Guide]({{site.baseurl}}/openid-connect/). OpenID Connect is required for mobile clients.

- **Register and test application**<br />
  [Register your application]({{site.baseurl}}/register/) so that we can authorize it.

</div>

## Additional resources

- [Generating self-signed certificates]({{site.baseurl}}/certs/)
