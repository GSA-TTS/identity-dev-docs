---
title: Integration overview and user flow
sidenav:
  - text: User flow
    href: "#user-flow"
  - text: Service provider configuration
    href: "#service-provider-configuration"
---

Login.gov is a FedRAMP moderate approved multifactor authentication and identity proofing platform that makes online interactions with the U.S. government simple, efficient and intuitive.

## User flow

<figure class="margin-0 text-center measure-3">
  <img src="{{ site.baseurl }}/assets/img/oidc-auth-flow.png"
       alt="A diagram flow of IAL1 walkthrough experience"
       class="display-block grid-col flex-auto flex-align-center margin-top-4 margin-bottom-1">
  <figcaption class="font-sans-2xs">Fig. 1: Authentication flow</figcaption>
</figure>

* Once you have successfully integrated your application with the Login.gov environment, users start at your application and are redirected back to Login.gov via [OpenID Connect (OIDC)]({{ site.baseurl }}/oidc/) or [SAML]({{ site.baseurl }}/saml/) protocols.
* The service level you specify via the authentication request sent by your application will determine the type of verification required for the user’s account. Identity proofed accounts require the user to complete additional steps to verify their identity in addition to the Multifactor Authentication (MFA). 
* New users will create an account corresponding to the identity assurance level requested. Returning users will present their existing Login.gov credentials to authenticate with Login.gov. A new user to your application will consent to their information being shared with your application upon creating an account.
* Upon successful completion of the account creation and authentication, users will be redirected back to your application with the [user attributes]({{ '/attributes/' | prepend: site.baseurl }}) that correspond to their user level.
*   With the attributes provided by Login.gov, your application will handle authorization of the user and assign roles and permissions.

## Service provider configuration

This is the configuration for your application within Login.gov’s identity provider. In the sandbox environment, you will be able to determine the configuration yourself and decide what is the best fit for your needs. In the Login.gov production environment, we will manage the final configuration.
To configure a test application in the sandbox environment:
* Create an account in the [Partner Portal](https://portal.int.identitysandbox.gov). From here you will be able to test various configurations and determine what is right for your agency.
* Select between [OIDC]({{ site.baseurl }}/oidc/) or [SAML]({{ site.baseurl }}/saml/) protocol implementation protocols and understand which user attributes are required.
* If you have questions when testing your integration, read through our [FAQs]({{ site.baseurl }}/support/) or submit a ticket to our [technical support help desk]({{ site.baseurl}}/support/#contacting-partner-support).
* Before submitting a request to move your application's configuration to production, review the [User experience]({{ site.baseurl }}/design-guidelines/) page and the [Production]({{ site.baseurl }}/production/) page. Additional requirements, like a [signed Interagency agreement]({{ site.baseurl }}/production/#confirm-interagency-agreement-iaa) (IAA) and [agency logo]({{ site.baseurl }}/user-experience/agency-logo/), are described in these pages.
