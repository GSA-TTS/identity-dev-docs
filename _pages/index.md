---
title: login.gov Dev Docs
permalink: /
---

# Welcome

This documentation is intended for federal agency developers interested in integrating their applications with [login.gov](https://login.gov).

## Technical overview

login.gov is a standard SAML identity provider, adhering to the [Web Browser SSO Profile](https://en.wikipedia.org/wiki/SAML_2.0#Web_Browser_SSO_Profile) with enhancements for [NIST 800-63-3](https://pages.nist.gov/800-63-3/). This documentation uses standard SAML terminology, where the Identity Provider (IdP) is the service that stores the user's actual credentials, login.gov in this case; the Service Provider (SP) refers to your application, which will ask the IdP for authentication information when a user tries to log in.

## Integration checklist

<div markdown="1" class="ul-checklist">

- Determine prerequisites for your application, for example, the Levels of Assurance (LoA) your application needs to support (login.gov supports LoA 1 and 3) and the [user attributes]({{site.baseurl}}/attributes/) your application requires.
- Complete your SAML implementation. Review the minimum requirements for integration (API endpoints, certificates, SLO). Consider choosing a [SAML library]({{site.baseurl}}/saml-libs/) in the language and stack you're using.
- [Configure your Service Provider]({{site.baseurl}}/configuring-your-sp/).
- [Register your Service Provider]({{site.baseurl}}/registering-your-sp/) with login.gov.
- Test in our integration environment.

</div>

## Additional resources

- [SAML libraries]({{site.baseurl}}/saml-libs/)
- [SP reference implementations]({{site.baseurl}}/sp-refs/)
- [Generating self-signed certificates]({{site.baseurl}}/certs/)
