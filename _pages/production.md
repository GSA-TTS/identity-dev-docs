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
    href: "#production-changes"
---


## Production endpoints

Our integration documentation includes endpoint urls for our sandbox environment [https://idp.int.identitysandbox.gov/](https://idp.int.identitysandbox.gov/). Our production environment is located at [https://secure.login.gov/](https://secure.login.gov/). The URL path to each endpoint remains the same. Only the domain will change. For example, the authorization endpoint will change as follows:
* OpenID Connect: <https://secure.login.gov/openid_connect/authorize>
* SAML: <https://secure.login.gov/api/saml/auth2020>

Please be aware that the IDP certificate (X509 Certificate) in the production environment is different from the IDP certificate in the sandbox environment. The production IDP certificates can be found here:
* OpenID Connect: <https://secure.login.gov/api/openid_connect/certs>
* SAML: <https://secure.login.gov/api/saml/metadata2020>

## Deployments

All changes to integrations between login.gov and your application must be reviewed and deployed. We ask for at least 1 week notice for new integrations and changes to existing integrations. Regular deployments occur every Thursday by the close of the business day. If the regular deployment occurs on a holiday, then it will be completed the following Monday.

## Confirm IAA

You must have a signed IAA (Inter Agency Agreement) in order to deploy to production. You will need to provide the IAA Number this application will be billed under. The IAA number format will include `GTC-Order-Mod` (e.g. `LGABCFY210001-0001-0000`), where GTC stands for General Terms & Conditions. You may also hear these referred to as forms 7600A and 7600B.

Please reach out to your agency IAA contact if you have any questions. If your agency does not already have an IAA, then ask your agency contact to reach out to [partners@login.gov](mailto:partners@login.gov) to begin the IAA process, which can take up to 6 weeks to complete.

## Staging environment

Many partners choose to create a separate staging app in our sandbox environment for testing their staging environment, because changes take effect immediately without waiting for review and deployment.

If you are testing an IAL2 integration, then we also offer an ATO-ed staging environment for limited testing. You must have a signed IAA in order to deploy to Staging. Our staging environment is approved for PII, which can be useful in certain test cases. However, any configuration changes in the staging environment must be reviewed and deployed.

If you wish to deploy an application to our staging environment, then create a “staging” configuration app like the “production” configuration app described in the next section.

## Production configuration

Before you can deploy your application to the production environment, you will need to create a separate app on our dashboard that contains your production certificate, urls and logo. Here are the steps to complete your production configuration app:
1. Create a new app on the dashboard <https://dashboard.int.identitysandbox.gov/>
2. Enter a Friendly Name with "Production" in the title
3. Enter the production urls and configuration into the app

**Please note**: The following items are required to promote your app to production:

* All production urls should have .gov .mil or a dedicated .com address and point to an ATO-ed environment.
* You must include a logo for your application. You can find the [logo guidelines here](https://developers.login.gov/design-guidelines/#agency-logo-guidelines).
* If this is a SAML integration (Not OpenID Connect), then please ensure that:
  * Assertion Consumer Logout Service URL is defined.
  * SAML Assertion Encryption is enabled.
    * If you are using a service which does not support SAML encryption, then please send a message to [partners@login.gov](mailto:partners@login.gov) for further guidance.

## Request deployment

Once you have:
1. [Received a signed IAA number](#confirm-iaa)
2. [Created a production configuration](#production-configuration)

Please submit the [login.gov production integration request form](https://share.hsforms.com/1UTxHGOu2Q0SVyz9ulknZGw3ak9e){:target='_blank'}.

## Changes to production applications

Please update your production configuration app in the dashboard and test the changes you wish to deploy. After you have confirmed the change, then please submit the [login.gov integration change request form](https://share.hsforms.com/1HF9Q6UNARaSUOg8pPHuauQ3ak9e){:target='_blank'}.

