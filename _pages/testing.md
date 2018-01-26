---
title: Testing your app
redirect_from:
  - /registering-your-sp/
  - /register/
---

# Testing your app

Once you've created your app and implemented an identity protocol, such as OpenID Connect (recommended) or SAML, you can now register your app in our dashboard and start testing.

{% include basic-auth-warn.html %}

## Using the dashboard to register your app

The login.gov dashboard is the place you'll manage your team and test applications.
1. First, go to the dashboard at [dashboard.int.login.gov](https://dashboard.int.login.gov)
2. Then, in the upper-right corner, click **Log in** to create an account in the login.gov IdP in the agency integration environment (at [idp.int.login.gov](https://idp.int.login.gov)).
3. After successfully logging in, you'll see some new links in the dashboard navigation. Click **My service providers**, then **Create a new service provider** and fill out the following information in the form:
  - **User group**<br>The agency group you would like this client to be assigned to.
  - **Friendly name**<br>The name of your app that will get displayed to users when logging in.
  - **Description**<br>A description of the app.
  - **Issuer**<br>A unique string to identify the app in the IdP. Fill in the **Issuer department** (your agency) and **Issuer app** (app name) to generate the issuer.
  - **Agency**<br>The [federal agency](https://www.usa.gov/federal-agencies) this app belongs to.
  - **Logo**<br>The name of the [logo image file](https://github.com/18F/identity-idp/tree/master/app/assets/images/sp-logos) in the IdP.
  - **Block Encryption**<br>This is set to [AES256](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)–[CBC](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Cipher_Block_Chaining_(CBC)), which is the only mode supported at this time.
  - **SAML Client Cert (PEM encoded)**<br>The public certificate used to sign requests, used for OpenID Connect with `private_key_jwt` and SAML. This must be PEM encoded, for example in the form:
  ```
  -----BEGIN CERTIFICATE-----
  MIIDXTCCAkWgAwIBAgIJAJC1HiIAZAiIMA0GCSqGSIb3Df
  BAYTAkFVMRMwEQYDVQQIDApTb21lLVN0YXRlMSEwHwYDVx
  B7xxt8BVc69rHV15A0qyx77CLSj3tCx2IUXVqRs5mlvA==
  -----END CERTIFICATE-----
  ```
  - **Identity Protocol**<br>The protocol you will be using for this app, either OpenID Connect or SAML.
  - **Redirect URIs** — *OpenID Connect only*<br>One or more URI login.gov will redirect to after authentication. These can be web URLs (public, internal, or localhost) or a custom scheme to support native applications, for example: `x-example-app:/result`
  - **Assertion Consumer Service URL** — *SAML only*<br>Your application endpoint which receives authentication assertions, for example: `https://app.agency.gov/auth/saml/sso`
  - **Assertion Consumer Logout Service URL** — *SAML only*<br>The endpoint which receives logout requests and responses, for example: `https://app.agency.gov/auth/saml/logout`
  - **SP Initiated Login URL** — *SAML only*<br>The endpoint which initializes authentication with login.gov. This is used to trigger a new authentication request and response at the SP for better usability. For example: `https://app.agency.gov/users/auth/saml/login`
  - **Return to SP URL** — *SAML only*<br>The URL of the SP which login.gov provides to users when they wish to go directly to the SP site or cancel out of authentication. For example `https://app.agency.gov`
  - **Attribute bundle**<br>The possible [user attributes]({{ site.baseurl }}/attributes) to be requested by your app. Note for LOA1, only the UUID and `email` can be requested.
  - **Active**<br>Used to activate or deactivate the client.
4. One all application details have been filled out, click the **Create** button to register the client with the login.gov IdP in the agency integration environment.
5. Start testing! The login.gov team will work with you along the way to resolve any issues.
