---
title: Configuring your Service Provider
---

# Configuring your Service Provider

Once you have a SAML implementation, you'll need to configure your SP to work with login.gov. View our [SAML metadata](https://github.com/18F/identity-idp/wiki/SAML-Metadata) for all of the pertinent information. For an example, see our [demo SP application's configuration](https://github.com/18F/identity-sp-rails/blob/master/config/initializers/omniauth.rb). All authentication and logout requests must be signed. We require RSA SHA-256 signatures embedded with the authentication and logout requests. Here's some of the key information you'll need to configure on your side:

- **NameID Format** — The NameID is the unique identifier used to identify a user across multiple sessions. The format is the standard v4 random UUID (Universally Unique IDentifier) in compliance with [RFC 4122](https://tools.ietf.org/html/rfc4122). For example:

  ```xml
  <NameIDFormat>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent</NameIDFormat>
  ```

- **Login service URL and Binding** — This is the endpoint where authentication requests are sent to login.gov (aka Single Sign-on Service). For example:

  ```xml
  <SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://idp.int.login.gov/api/saml/auth" />
  ```

- **Logout service URL and Binding** — The single logout service URL is used to contact the Single logout profile (aka Single Logout Service). For example:

  ```xml
  <SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://idp.int.login.gov/api/saml/logout" />
  ```

- **x509 Public Certificate** — The public certificate is used to validate the authenticity of SAML requests received from login.gov, a minimum of 2048 bits.
