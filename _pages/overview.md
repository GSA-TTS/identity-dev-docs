---
title: Integration overview
lead: >
  Login.gov is an identity provider that integrates with your application using industry protocols.
---

Login.gov is a FedRAMP moderate approved multifactor authentication and identity proofing platform that makes online interactions with the U.S. government simple, efficient and intuitive.

## Integration flow

* Once a [service provider configuration](#service-provider-configuration) is provided in one of login.gov's environments, users start at your application and are redirected back to login.gov via [OIDC]({{ site.baseurl }}/oidc/) or [SAML]({{ site.baseurl }}/saml/) protocols.
* Your application request will determine if the request will be processed as just an authentication request at NIST Identity Assurance Level 1 (IAL1) or as an identity proofed event at NIST Identity Assurance Level 2 (IAL2).
* New users will either create an account corresponding to the identity assurance level requested (IAL1/IAL2) and returning users will present their existing login.gov credentials to reauthenticate into login.gov. If a user is new to your application they will consent to their information being shared with your application.

<figure>
  <img src="{{ site.baseurl }}/assets/img/oidc-ial1-flow.png"
       alt="A diagram flow of IAL1 walkthrough experience"
       class="display-block grid-col flex-auto flex-align-center margin-y-4">
  <figcaption>Fig. 1: IAL1 flow</figcaption>
</figure>

<figure>
  <img src="{{ site.baseurl }}/assets/img/oidc-ial2-flow.png"
       alt="A diagram flow of IAL2 walkthrough experience"
       class="display-block grid-col flex-auto flex-align-center margin-y-4">
  <figcaption>Fig. 2: IAL2 flow</figcaption>
</figure>


* Upon successful completion of the account creation or authentication, users will be redirected back to your application with the [user attributes]({{ site.baseurl }}/attributes/) that correspond to their user level.
* With the attributes provided by login.gov, your application will handle authorization of the user and assign roles and permissions.

## Service provider configuration
This is the configuration for your application within login.gov's identity provider (main application). For the sandbox environment you will be able to configure this yourself. In our production environment, we will manage this configuration.


