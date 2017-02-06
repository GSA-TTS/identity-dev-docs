---
title: Registering your Service Provider
---

# Registering your Service Provider

Once you have a working SAML implementation and have configured your SP, the next step is to provide us with the following details about your application. A "`*`" denotes an attribute not found in the SAML WebSSO profile.

- **Friendly name** * (optional) — The name for your SP that will be displayed to users.

- **Issuer** — The SP entity ID. This is a unique string used to identify your SP with login.gov. For example:

  ```
  urn:gov:gsa:SAML:2.0.profiles:sp:sso:DEPT-AGENCY:APP-ENV
  ```

- **Agency** * — The department and agency your SP belongs to. See the list of all [U.S. Government Departments and Agencies](https://www.usa.gov/federal-agencies).

- **Assertion consumer service URL** — Your application endpoint which receives authentication assertions.

  ```
  https://app.agency.gov/auth/saml/sso
  ```

- **Assertion consumer logout service URL** — The endpoint which receives logout requests and responses.

  ```
  https://app.agency.gov/auth/saml/logout
  ```

- **SP initiated login URL** * — The endpoint which initializes authentication with login.gov. This is used to trigger a new authentication request and response at the SP for better usability.

  ```
  https://app.agency.gov/users/auth/saml/login
  ```

- **Return to SP URL** * — The URL of the SP which Login.gov provides to users when they wish to go directly to the SP site or cancel out of authentication.

  ```
  https://app.agency.gov
  ```

- **Attribute bundle** * (optional) — The preset bundle of attributes your SP requires. login.gov allows you to either pre-define what attributes your SP receives or request them at run time. [See the list of available attributes.]({{site.baseurl}}/attributes/)

- **Block encryption** — Defines the type of encryption your SP supports. Currently, only `aes256-cbc` is supported.

- **Public certificate** — The public certificate, PEM encoded, allowing login.gov to verify the authenticity of authentication and logout requests. Learn how to [generate a self-signed certificate]({{site.baseurl}}/certs/).
