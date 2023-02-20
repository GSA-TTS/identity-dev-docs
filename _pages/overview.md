---
title: Integration overview https://vieclambacninhbacgiang.jetbrains.space/
lead: >
  Login.gov is an identity provider that integrates with your application using industry protocols.
---

Login.gov is a FedRAMP moderate approved multifactor authentication and identity proofing platform that makes online interactions with the U.S. government simple, efficient and intuitive.

## Integration flow

* Once a [service provider configuration](#service-provider-configuration) is provided in one of Login.gov's environments, users start at your application and are redirected back to Login.gov via [OIDC]({{ site.baseurl }}/oidc/) or [SAML]({{ site.baseurl }}/saml/) protocols.
* Your application request will determine if the request will be processed as just an authentication request at Identity Assurance Level 1 (IAL1) or as an identity proofed account. Login.gov continues to work toward achieving certification of compliance with NIST's IAL2 standard from a third-party assessment organization.
* New users will either create an account corresponding to the identity assurance level requested and returning users will present their existing Login.gov credentials to reauthenticate into Login.gov. If a user is new to your application they will consent to their information being shared with your application.

<figure>
  <img src="{{ site.baseurl }}/assets/img/oidc-ial1-flow.png"
       alt="A diagram flow of IAL1 walkthrough experience"
       class="display-block grid-col flex-auto flex-align-center margin-y-4">
  <figcaption>Fig. 1: IAL1 flow</figcaption>
</figure>



* Upon successful completion of the account creation or authentication, users will be redirected back to your application with the [user attributes]({{ site.baseurl }}/attributes/) that correspond to their user level.
* With the attributes provided by Login.gov, your application will handle authorization of the user and assign roles and permissions.

## Service provider configuration
This is the configuration for your application within Login.gov's identity provider (main application). For the sandbox environment you will be able to configure this yourself. In our production environment, we will manage this configuration.
