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

Login.gov is a standard SAML identity provider, adhering to the [Web Browser SSO Profile](https://en.wikipedia.org/wiki/SAML_2.0#Web_Browser_SSO_Profile) with enhancements for [NIST 800-63-3](https://pages.nist.gov/800-63-3/). This developer documentation will guide you through integrating your application with the service.

This documentation uses standard SAML terminology, where the Identity Provider (IdP) is the service that stores the user's actual credentials, Login.gov in this case; the Service Provider (SP) refers to your application, which will ask the IdP for authentication information when a user tries to log in.

## Getting started checklist

- Determine the LOA you need to support for the target application. Login.gov provides support for LOA 1 and LOA 3.
- Determine the attributes your application needs. See all [available attributes]({{site.baseurl}}/attributes) provided.
- Review the minimum requirements for integration (API endpoints, certificates, SLO).
- For new applications, [find a SAML library]({{site.baseurl}}/saml_libs) in the language and stack you're using.
- [Configure your SP](#1-configuring-your-sp).
- Provide your [SAML client configuration](#2-configuring-logingov-to-accept-your-sp) to the Login.gov team.
- Test against our sandbox environment ([idp.dev.login.gov](https://idp.dev.login.gov)).

## Integration

Integration is a two-step process, where both your SP and the IdP must be configured to work together.

### 1. Configuring your SP

Our sandbox environment is available for testing integration with your SP. View our [SAML metadata](https://github.com/18F/identity-idp/wiki/SAML-Metadata) for all of the pertinent information. To see an example of how an SP would be configured, check out our [demo SP application's configuration](https://github.com/18F/identity-sp-rails/blob/master/config/initializers/omniauth.rb).

All authentication and logout requests must be signed. We require RSA SHA-256 signatures embedded with the authentication and logout requests. Here's some of the key information you'll need to configure on your side:

**NameID Format** — The NameID is the unique identifier used to identify a user across multiple sessions. The format is the standard v4 random UUID (Universally Unique IDentifier) in compliance with [RFC 4122](https://tools.ietf.org/html/rfc4122). For example:

```xml
<NameIDFormat>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent</NameIDFormat>
```

**Login service URL and Binding** — This is the endpoint where authentication requests are sent to Login.gov (aka Single Sign-on Service). For example:

```xml
<SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://idp.dev.login.gov/api/saml/auth" />
```

**Logout service URL and Binding** — The single logout service URL is used to contact the Single logout profile (aka Single Logout Service). For example:

```xml
<SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://idp.dev.login.gov/api/saml/logout" />
```

**x509 Public Certificate** — The public certificate is used to validate the authenticity of SAML requests received from login.gov. Minimum 2048 bits.

### 2. Configuring Login.gov to accept your SP

In order to successfully integrate, your SP application details must be whitelisted within Login.gov. We require the following details about your SP application:

`*` — Denotes an attribute not found in the SAML WebSSO profile.

| Attribute | Description |
|-----------|-------------|
| `issuer` | The SP entity ID — This is a unique string used to identify your SP with Login.gov. |
| `acs_url` | Assertion consumer sign-on URL — This is your application endpoint which receives authentication assertions. |
| `assertion_consumer_logout_service_url` | Assertion consumer logout service URL — This is the endpoint which receives logout requests and responses. |
| `sp_initiated_login_url` * | This endpoint initializes authentication with Login.gov; it is used to trigger a new authentication request and response at the SP for better usability. |
| `block_encryption` (optional) | This defines what type of encryption your SP supports. Currently, only `aes256-cbc` is supported. |
| `cert` | Public certificate — The public certificate allows Login.gov to verify the authenticity of authentication and logout requests. |
| `agency` * | This is used to group your SP to an agency, as well as inform the user about what agency the SP belongs. |
| `friendly name` * (optional) | This is the user-friendly name for your SP application. |
| `logo` * (optional) | This is your agency or SP's logo. This is used in the header of Login.gov when the user is authenticating to your SP. We recommend a semi-transparent PNG or SVG with a 3:2 width to height ratio at least 150px wide. |
| `return_to_sp_url` * | Return-to SP URL — This is the URL of the SP which Login.gov provides to users when they wish to go directly to the SP site or cancel out of authentication. |
| `attribute_bundle` * (optional) | The preset bundle of attributes your SP requires — We allow you to pre-define what attributes your SP requires, or you may request the attributes at run-time. |

#### Sample configuration required by Login.gov:

```yaml
issuer: 'urn:gov:gsa:SAML:2.0.profiles:sp:sso:gov-agency-20'
acs_url: 'https://serviceprovider.gov/auth/saml/callback'
assertion_consumer_logout_service_url: 'https://serviceprovider.gov/auth/saml/logout'
sp_initiated_login_url: 'https://serviceprovider.gov/login'
block_encryption: 'aes256-cbc'
cert: 'gov_agency_20'
agency: 'USTCBA'
friendly_name: 'United States Taking Care of Business Agency'
logo: 'ustcba.svg'
return_to_sp_url: 'https://serviceprovider.gov'
attribute_bundle:
  - email
  - phone
```

## Resources

- [SAML libraries]({{site.baseurl}}/saml_libs)
- [SP reference implementations]({{site.baseurl}}/sp_refs)
- [Generating self-signed certificates]({{site.baseurl}}/certs)
