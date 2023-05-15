---
title: Integration overview and user flow
---

Login.gov is a FedRAMP moderate approved multifactor authentication and identity proofing platform that makes online interactions with the U.S. government simple, efficient and intuitive.

## User flow

<figure>
  <img src="{{ site.baseurl }}/assets/img/oidc-ial1-flow.png"
       alt="A diagram flow of IAL1 walkthrough experience"
       class="display-block grid-col flex-auto flex-align-center margin-y-4">
  <figcaption>Fig. 1: IAL1 flow</figcaption>
</figure>

* Once you have successfully integrated your application with the Login.gov environment, users start at your application and are redirected back to Login.gov via [OIDC]({{ site.baseurl }}/oidc/) or [SAML]({{ site.baseurl }}/saml/) protocols.
* The attributes you pass into your application request will determine if the request will be processed at Identity Assurance Level 1 (IAL1) or as an identity proofed account. Identity proofed accounts require the user to complete additional steps to verify their identity in addition to the Multifactor Authentication (MFA). Login.gov continues to work toward achieving certification of compliance with [NIST’s IAL2](https://pages.nist.gov/800-63-3-Implementation-Resources/63A/ial2remote/) standard from a third-party assessment organization.
* New users will create an account corresponding to the identity assurance level requested. Returning users will present their existing Login.gov credentials to authenticate with Login.gov. A new user to your application will consent to their information being shared with your application upon creating an account.
* Upon successful completion of the account creation and authentication, users will be redirected back to your application with the [user attributes]({{ site.baseurl }}/attributes/) that correspond to their user level.
*   With the attributes provided by Login.gov, your application will handle authorization of the user and assign roles and permissions.

## Service provider configuration

This is the configuration for your application within Login.gov’s identity provider. In the sandbox environment, you will be able to determine the configuration yourself and decide what is the best fit for your needs. In the Login.gov production environment, we will manage the final configuration.
To configure a test application in the sandbox environment:
* Create an account in the [Login.gov sandbox dashboard](https://idp.int.identitysandbox.gov/). From here you will be able to test various configurations and determine what is right for your agency.
* Select between [OpenID Connect]({{ site.baseurl }}/oidc/) (OIDC) or [SAML]({{ site.baseurl }}/saml/) protocol implementation protocols and understand which user attributes are required.
* If you have questions when testing your app, read through our [FAQs]({{ site.baseurl }}/support/) or submit a ticket to our [technical support help desk](http://zendesk.login.gov).
* **Before submitting a request to move your app to production**, review the [User experience page]({{ site.baseurl }}/design-guidelines/) and the [Production]({{ site.baseurl }}/production/) page. Additional requirements, like a [signed Interagency agreement]({{ site.baseurl }}/production/#confirm-interagency-agreement-iaa) (IAA) and [agency logo]({{ site.baseurl }}/design-guidelines/#agency-logo-guidelines), are described in these pages.     

