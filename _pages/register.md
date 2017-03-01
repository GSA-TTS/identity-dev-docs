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

- **Friendly name**\*
  The name for your SP that will be displayed to users.

- **Issuer** *required*
  The SP entity ID, a unique string used to identify your SP with login.gov.
  Example:
  ```
  urn:gov:gsa:SAML:2.0.profiles:sp:sso:DEPT-AGENCY:APP-ENV
  ```

- **Agency**\* *required*
  The department and agency your SP belongs to. See the list of all [U.S. Government Departments and Agencies](https://www.usa.gov/federal-agencies).

- **Block encryption** *required*
  Defines the type of encryption your SP supports. Currently, only `aes256-cbc` is supported.

- **Public certificate** *required*
  The public certificate, PEM encoded, allowing login.gov to verify the authenticity of authentication and logout requests. Learn how to [generate a self-signed certificate]({{site.baseurl}}/certs/).

## Additional Attributes

### SAML

These attributes are only needed for SAML implementations.

- **Assertion consumer service URL** *required*
  Your application endpoint which receives authentication assertions.
  Example:
  ```
  https://app.agency.gov/auth/saml/sso
  ```

- **Assertion consumer logout service URL** *required*
  The endpoint which receives logout requests and responses.
  Example:
  ```
  https://app.agency.gov/auth/saml/logout
  ```

- **SP initiated login URL**\* *required*
  The endpoint which initializes authentication with login.gov. This is used to trigger a new authentication request and response at the SP for better usability.
  Example:

  ```
  https://app.agency.gov/users/auth/saml/login
  ```

- **Return to SP URL**\* *required*
  The URL of the SP which login.gov provides to users when they wish to go directly to the SP site or cancel out of authentication.
  Example:
  ```
  https://app.agency.gov
  ```

- **Attribute bundle** * — The preset bundle of attributes your SP requires. login.gov allows you to either pre-define what attributes your SP receives or request them at run time. [See the list of available attributes.]({{site.baseurl}}/attributes/)

### OpenID Connect

This is only needed for OpenID Connect clients.

- **Redirect URI** *required*
  The URI that login.gov should redirect to after authorization. This can be a custom scheme to support native applications.
  Example:
  ```
  x-example-app:/result
  ```
