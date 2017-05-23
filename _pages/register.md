---
title: Register your service provider
permalink: /register/
redirect_from:
  - /registering-your-sp/
---

# Register your service provider

Once you have a working SP implementation, the next step is to provide us with the following details about your application.

<!-- MarkdownTOC depth="4" autolink="true" bracket="round" -->

- [Core Attributes](#core-attributes)
- [Additional Attributes](#additional-attributes)
  - [SAML](#saml)
  - [OpenID Connect](#openid-connect)

<!-- /MarkdownTOC -->

## Core Attributes

These attributes are required for all applications.

\*Denotes an attribute not found in the SAML WebSSO profile.

- <span id="friendly-name" data-anchor>**Friendly name**\*</span>
  The name for your SP that will be displayed to users.

- <span id="issuer" data-anchor>**Issuer** *required*</span>
  The SP entity ID, a unique string used to identify your SP with login.gov.
  Example:
  ```
  urn:gov:gsa:SAML:2.0.profiles:sp:sso:DEPT-AGENCY:APP-ENV
  ```

- <span id="agency" data-anchor>**Agency**\* *required*</span>
  The department and agency your SP belongs to. See the list of all [U.S. Government Departments and Agencies](https://www.usa.gov/federal-agencies).

- <span id="block-encryption" data-anchor>**Block encryption** *required*</span>
  Defines the type of encryption your SP supports. Currently, only `aes256-cbc` is supported.

- <span id="public-certificate" data-anchor>**Public certificate** *required*</span>
  The public certificate, PEM encoded, allowing login.gov to verify the authenticity of authentication and logout requests. Learn how to [generate a self-signed certificate]({{site.baseurl}}/certs/).

## Additional Attributes

### SAML

These attributes are only needed for SAML implementations.

- <span id="acs-url" data-anchor>**Assertion consumer service URL** *required*</span>
  Your application endpoint which receives authentication assertions.
  Example:
  ```
  https://app.agency.gov/auth/saml/sso
  ```

- <span id="acl-url" data-anchor>**Assertion consumer logout service URL** *required*</span>
  The endpoint which receives logout requests and responses.
  Example:
  ```
  https://app.agency.gov/auth/saml/logout
  ```

- <span id="sp-initiated-login-url" data-anchor>**SP initiated login URL**\* *required*</span>
  The endpoint which initializes authentication with login.gov. This is used to trigger a new authentication request and response at the SP for better usability.
  Example:

  ```
  https://app.agency.gov/users/auth/saml/login
  ```

- <span id="return-to-sp-url" data-anchor>**Return to SP URL**\* *required*</span>
  The URL of the SP which login.gov provides to users when they wish to go directly to the SP site or cancel out of authentication.
  Example:
  ```
  https://app.agency.gov
  ```

- <span id="attribute-bundle" data-anchor>**Attribute bundle**\*</span>
  The preset bundle of attributes your SP requires. login.gov allows you to either pre-define what attributes your SP receives or request them at run time. [See the list of available attributes.]({{site.baseurl}}/attributes/)

### OpenID Connect

This is only needed for OpenID Connect clients.

- <span id="redirect-uri" data-anchor>**Redirect URI** *required*</span>
  The URI that login.gov should redirect to after authorization. This can be a custom scheme to support native applications.
  Example:
  ```
  x-example-app:/result
  ```
