---
title: Production deployment
lead: >
  Once you’ve tested your integration in our sandbox environment, you can request deployment to the Login.gov production environment.
redirect_from:
  - /production-deployment/
sidenav:
  - text: Production endpoints
    href: "#production-endpoints"
  - text: Deployments
    href: "#deployments"
  - text: Confirm IAA
    href: "#confirm-iaa"
  - text: Staging environment
    href: "#staging-environment"
  - text: Production configuration
    href: "#production-configuration"
  - text: Request deployment
    href: "#request-deployment"
  - text: Changes to production applications
    href: "#changes-to-production-applications"
saml_year: 2022
---

## Production endpoints

Our integration documentation includes endpoint urls for our sandbox environment <https://idp.int.identitysandbox.gov/>. Our production environment is located at <https://secure.login.gov/>. The URL path to each endpoint remains the same. Only the domain will change. For example, the authorization endpoint will change as follows:
* OpenID Connect: <https://secure.login.gov/openid_connect/authorize>
* SAML: <https://secure.login.gov/api/saml/auth{{ page.saml_year }}>

Please be aware that the IDP certificate (X509 Certificate) in the production environment is different from the IDP certificate in the sandbox environment. The production IDP certificates can be found here:
* OpenID Connect: <https://secure.login.gov/api/openid_connect/certs>
* SAML: <https://secure.login.gov/api/saml/auth{{ page.saml_year }}>

## Deployments

All changes to integrations between Login.gov and your application must be reviewed and deployed. We ask for at least 2 weeks notice for new integrations and changes to existing integrations. Push Notification URLs may require 3 weeks notice in order to allow the domain for outbound communication. Regular deployments occur every Thursday by the close of the business day. If the regular deployment occurs on a holiday, then it will be completed the following Monday.

## Confirm IAA

You must have a signed IAA (Inter-Agency Agreement) with Login.gov **with your integration explicitly listed in it** in order to deploy to production. You will need to provide the IAA number this application will be billed under. The IAA number format will include `GTC-Order-Mod` (e.g. `LGABCFY210001-0001-0000`), where GTC stands for General Terms & Conditions. You may also hear these referred to as forms 7600A and 7600B.

Please reach out to your agency IAA contact if you have any questions. If your agency does not already have an IAA, then ask your agency contact to [submit our partner interest form](https://share.hsforms.com/16DIoo--rTU2xbNW1MShkBg3ak9e) to begin the IAA process, which can take up to 6 weeks to complete.

## Staging environment

Many partners choose to create a separate staging app in our sandbox environment for testing their staging environment, because changes take effect immediately without waiting for review and deployment.

If you are testing an integration with identity proofed accounts, then we also offer an ATO-ed staging environment for limited testing. You must have a signed IAA in order to deploy to Staging. Our staging environment is approved for PII, which can be useful in certain test cases. However, any configuration changes in the staging environment must be reviewed and deployed.

If you wish to deploy an application to our staging environment, then create a “staging” configuration app like the “production” configuration app described in the next section.

## Production configuration

Before you can deploy your application to the production environment, you will need to create a separate app on our dashboard that contains your production certificate, urls and logo. Here are the steps to complete your production configuration app:
1. Create a new app on the dashboard <https://dashboard.int.identitysandbox.gov/>
2. Indicate that the app configuration is for a Production application 
3. Enter the name of the application **as it appears in your IAA** in the "App Name" field - Do **NOT** use environment names such as "Prod" or "Production"
4. Enter the name of the application **as you want it to appear to users** in the "Friendly Name" field
5. Enter the production URLs and configuration into the app

**Please note**: The following items are required to promote your app to production:

* All production urls should have .gov .mil or a dedicated .com address and point to an ATO-ed environment.
* You must include a logo for your application. You can find the [logo guidelines here](https://developers.login.gov/design-guidelines/#agency-logo-guidelines).
* If this is a SAML integration (Not OpenID Connect), then please ensure that:
  * Assertion Consumer Logout Service URL is defined.
  * SAML Assertion Encryption is enabled.
    * If you are using a service which does not support SAML encryption, then please [submit a support request](https://logingov.zendesk.com/) for further guidance.
* If this is an integration requesting identity proofed attributes, you **must** include a Failure to Proof URL. This is the URL users will be sent to if they fail to complete the identity verification process so you can communicate alternative methods of accessing your application.

## Request deployment

Once you have:
1. [Confirmed that this integration is listed in a signed IAA](#confirm-iaa). **Do not request deployment if you are not certain that your application is listed in a _signed_ IAA.**
2. [Created a production configuration](#production-configuration)

Please submit a launch request at our [support portal](https://logingov.zendesk.com){:target='_blank'}.

## Changes to production applications

Please update your production configuration app in the dashboard and test the changes you wish to deploy. After you have confirmed the change, then please submit a change request at our [support portal](https://logingov.zendesk.com){:target='_blank'}.
