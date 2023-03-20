---
title: Production deployment
lead: >
  Once you’ve tested your integration in [our sandbox environment](https://dashboard.int.identitysandbox.gov/), you can request deployment to the Login.gov production environment.
  
redirect_from:
  - /production-deployment/
sidenav:
  - text: Before deployment
    href: "#before-deployment"
  - text: Confirm Interagency Agreement (IAA)
    href: "#confirm-interagency-agreement-iaa"
  - text: Production configuration process
    href: "#production-configuration-process"
  - text: Production endpoints
    href: "#production-endpoints"
  - text: Request deployment
    href: "#request-deployment"
  - text: Staging environment
    href: "#staging-environment"
  - text: Changes to production applications
    href: "#changes-to-production-applications"
  - text: Certificate Rotation Process
    href: "#certificate-rotation-process"
saml_year: 2023
---
<div class="usa-alert usa-alert--warning">
<div class="usa-alert__body">
<p class="usa-alert__text"><b> Please note: The deployment process will take 1 to 2 weeks to complete </b></p>
</div>
</div>

Before deployment
-----------------

Make sure you have the following items ready before you start the deployment process:

-   [Signed Interagency Agreement (IAA) listing this integration ](https://developers.login.gov/production/#confirm-iaa)

-   A new dedicated [production app configuration within the Dashboard](https://docs.google.com/document/d/1Lf5FnUBbfal_ha_H310_pLUl14DT9mXcekx5_hDgss8/edit#heading=h.y8sjd6rqdqsi) 
    * All production urls should have .gov, .mil, or a dedicated .com address and point to an Authority to Operate (ATO) approved environment.

-   A user account in the [Login.gov production environment](https://secure.login.gov)

-   You must include an agency logo for your application. [Learn more about our logo guidelines.](https://developers.login.gov/design-guidelines/#agency-logo-guidelines)

Depending on your agency’s integration additional items may be needed:

- If this is a SAML integration (not OpenID Connect), then please ensure that:

  -   **Assertion Consumer Logout Service URL** is defined.

  -   **SAML Assertion Encryption** is enabled.

        -   If you are using a service which does not support SAML encryption, then please submit a technical support ticket through the [Partner Support Help Desk](https://zendesk.login.gov) for further guidance.

- If this is an integration requesting identity proofed attributes, you must include a Failure to Proof URL. Users will be redirected to this URL if they fail to complete the identity verification process. This page should communicate your agency and/or departments alternate methods of accessing your application.

If you have questions after reviewing this page, submit a technical support ticket through the [Partner Support Help Desk](https://zendesk.login.gov). You will need a [Login.gov production account](https://secure.login.gov) to submit technical support tickets. Your Login.gov production account and Login.gov sandbox (test environment) accounts are separate.

-   If this is a SAML integration (Not OpenID Connect), then please ensure that:

    -   Assertion Consumer Logout Service URL is defined.

    -   SAML Assertion Encryption is enabled.


Confirm Interagency Agreement (IAA)
-----------------------------------


You must have a signed IAA with Login.gov with your integration explicitly listed in it in order to deploy to production. You will need to provide the IAA number this application will be billed under. The IAA number format will include GTC-Order-Mod (e.g. LGABCFY210001-0001-0000), where GTC stands for General Terms & Conditions. You may also hear these referred to as forms 7600A and 7600B.

-   If this is an integration requesting identity proofed attributes, you must include a Failure to Proof URL. Users will be redirected to this URL if they fail to complete the identity verification process. This page should communicate your agency and/or departments alternate methods of accessing your application.


Please reach out to your agency IAA contact if you have any questions. If your agency does not already have an IAA, then ask your agency contact to [submit a partner interest form](https://www.login.gov/partners/business-inquiries/) to begin the IAA process, which can take up to 6 weeks to complete. [Learn more about the IAA process.](https://login.gov/partners/get-started/#interagency-agreement-iaa-process) 

Production configuration process
--------------------------------

Before you can request deployment, you need to create a new and separate application on our dashboard. This new app will include your production certificate, urls, and logo. When starting this process you need the following items ready to go:

-   Signed IAA listing this integration 

-   ATO approved environment

-   [Approved agency logo]({{site.baseurl}}/design-guidelines/#agency-logo-guidelines) for your app

**When you have the components required, follow these steps to create your production configuration app:**

1.  [Create a new app on the](https://dashboard.int.identitysandbox.gov/) Login.gov Partner Dashboard. Select “Apps” from the top right menu, then select the “Create a new test app” button.


2.  Select "YES" for production configuration - this configuration is for a production app.

3.  Enter the name of the app **as it appears in your IAA** in the "App Name" field - Do **NOT** use environment names such as "Prod" or "Production".

4.  Enter the name of the app **as it should appear to users** in the "Friendly Name" field. **This is the app name a user will see when logging in.** 

5.  Next, choose an agency team for the app from the drop down menu

6.  Select the authentication protocol that will be used by the service provider. 

7.  Choose the level of service and default **Authentication Assurance Level (AAL)** from the drop down menus and select the correct attribute bundle. 

8.  Enter the issuer, a unique string to identify the app in the **Identity Provider (IdP).** 

9.  Upload your logo and public certificate file using the "Choose a file" buttons. Note: the public certificate file may not be required if you are using the OIDC PKCE flow.

10. Enter the push notification URL and redirect URIs, if applicable. You can enter additional redirect URIs by selecting the “Add another URI” button.

11. Specify the sign-in, sign-up, and forgot password help text users will encounter in your app. This step is optional but encouraged to ensure better usability. Take a look at the [Partner Support Help Desk](https://zendesk.login.gov) for a good example of help text.    

12. Once all fields are complete select the "Create test app" button. 

If you encounter errors or have questions after completing these steps, please submit a technical support ticket through the [Partner Support Help Desk.](https://zendesk.login.gov)

Production endpoints
--------------------

You will need to configure your application to point to the following endpoint: 

-   **OpenID Connect:** `https://secure.login.gov/openid_connect/authorize`

-   **SAML:** `https://secure.login.gov/api/saml/auth{{ page.saml_year }}`

Our integration documentation includes endpoint urls for our sandbox environment `https://idp.int.identitysandbox.gov/`. Our production environment is located at `https://secure.login.gov/`. The URL path to each endpoint remains the same. Only the domain will change.  

Please be aware that the IdP certificate (X509 Certificate) in the production environment is different from the IdP certificate in the sandbox environment. The production IdP certificates can be found here:

-   **OpenID Connect:** `https://secure.login.gov/api/openid_connect/certs`

-   **SAML:** `https://secure.login.gov/api/saml/metadata{{ page.saml_year }}`

Request deployment
------------------

Once you have:

1.  [Confirmed that this integration is listed in a signed IAA](https://login.gov/partners/get-started/#interagency-agreement-iaa-process). **Do not request deployment if you are not certain that your application is listed in a signed IAA.**

2.  [Created a production configuration app](https://developers.login.gov/production/#production-configuration-process) 

You are ready to submit a launch request through the [Partner Support Help Desk.](https://zendesk.login.gov). 

All changes to integrations between Login.gov and your application must be reviewed and deployed. **We ask for at least 2 weeks notice for new integrations and changes to existing integrations. Push Notification URLs may require 3 weeks notice in order to allow the domain for outbound communication.** Regular deployments occur every Monday and Thursday by the close of the business day. If the regular deployment is scheduled for a holiday, then it will be completed on an alternate day.

Staging environment
-------------------

We recommend using the sandbox environment to test your new app before requesting deployment. Many partners choose to create a separate staging app in our sandbox environment for testing because changes in the sandbox environment take effect immediately without waiting for review and deployment. You can determine and implement changes quickly and without submitting a support ticket.  

**If you are testing an integration with identity proofed accounts, then we also offer an ATO-ed staging environment for limited testing.** You must have a signed [IAA](https://developers.login.gov/production/#confirm-interagency-agreement-iaa) in order to deploy to staging. Our staging environment is approved for PII, which can be useful in certain test cases. However, any configuration changes in the staging environment must be reviewed and deployed.

If you wish to deploy an application to our staging environment, then create a "staging" configuration app like the "production" configuration app described in the [Production configuration process](https://developers.login.gov/production/#production-configuration-process) section.

Changes to production applications
----------------------------------

If you need to make any changes to your deployed integration, please update your production configuration app in the sandbox and test the changes you wish to deploy. **Changes to the production app are not automatic**. After you have confirmed the change, you must submit a change request through the [Partner Support Help Desk](https://zendesk.login.gov) to ensure the change takes effect in production

Certificate Rotation Process
----------------------------

If you are rotating your application’s public/private keypair, or want to add an additional public certificate, please follow the instructions below to add the new certificate to your application’s Login.gov configuration. **Please note that from the time you notify Login.gov of your intent to rotate certificates, it can take up to 2 weeks for the new certificate to be available in production.**

  **Follow this process to initiate certificate rotation:**

  **For OIDC integrations or SAML integrations sending signed requests:**

  1.  Add the new certificate to the application dashboard configuration.
    
  2.  Contact Login.gov technical support and request certificate addition.
      
  3.  Once certificate deployment is confirmed, rotate the key pair at your convenience.
      
  4.  Once the new key pair is in use, please submit a request to remove the old certificate.
    

  **For SAML integrations not sending signed requests:**

  1.  The final certificate rotation must be coordinated with Login.gov technical support.
      
  2.  Add the new certificate to the application dashboard configuration.
      
  3.  Request coordination of the certificate rotation from Login.gov technical support.
    

  

<div class="usa-alert usa-alert--warning">
<div class="usa-alert__body">
<p class="usa-alert__text"><b> Note: Login.gov takes no action based on the expiration date of the certificate, and integrations with expired certificates continue to function. </b></p>
</div>
</div>
