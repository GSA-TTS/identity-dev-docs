---
title: Welcome to the Login.gov developer guide
lead: >
  This developer guide contains everything you’ll need to integrate and deploy your application with Login.gov.
permalink: /
layout: home
---

<section class="usa-section usa-section--dark">
  <div class="grid-container">
    <div class="usa-display">{{ page.title }}</div>
    <div class="usa-intro">{{ page.lead | markdownify }}</div>
  </div>
</section>

<section class="usa-section grid-container usa-prose" markdown="1">

  {% if site.temporary_alert %}
    {% include alert.html content=site.temporary_alert %}
  {% endif %}

### *Option 1*
# How to integrate with Login.gov

![li_ steps-num](https://user-images.githubusercontent.com/90725258/232106089-3d9e6fcc-2b2e-44bb-968e-6ec4e68cb516.svg)
 Your integration with Login.gov starts in the [sandbox dashboard](https://dashboard.int.identitysandbox.gov/) where you can register your app. 


![li_ steps-num (1)](https://user-images.githubusercontent.com/90725258/233141022-f9c77712-ddfa-4806-920b-4c8f95af260d.svg)
 Determine your application needs, like the level of proofing and [user attributes]({{site.baseurl }}/attributes/) that will be requested.
 
 
![li_ steps-num (2)](https://user-images.githubusercontent.com/90725258/233142069-7855e0f2-4854-4c41-b80e-2b33a3dd2235.svg)
Select between [OpenID Connect (OIDC)]({{site.baseurl }}/OIDC/) or [SAML]({{site.baseurl }}/saml/) implementation protocols. Please note that we recommend OIDC.


![li_ steps-num (3)](https://user-images.githubusercontent.com/90725258/233142689-c0a1bd2c-e27b-49af-b357-3992d4282eb4.svg)
Configure your app in the sandbox and start [testing]({{site.baseurl }}/testing/)! We have implementation guides and example apps to get you up and running quickly.


![li_ steps-num (4)](https://user-images.githubusercontent.com/90725258/233143103-818d4ef2-6265-4d70-9521-e3d2671e502c.svg)
When you are ready to go live our team will help you [promote the application to production]({{site.baseurl }}/production/). 
We will check against our production checklist to ensure your application is ready for production from an administrative and technical standpoint.

![rule](https://user-images.githubusercontent.com/90725258/232109818-e379b186-f486-43dc-a3fd-cd151d1ec804.svg)

## Integration support for developers
If you are with a government agency partner, check our FAQ page for answers to the most common questions. If you need further technical assistance with an integration, submit a ticket to the Partner Support Help Desk. 

For help signing in or verifying your identity with Login.gov, please visit the Login.gov Help Center or contact us.

![rule](https://user-images.githubusercontent.com/90725258/232109818-e379b186-f486-43dc-a3fd-cd151d1ec804.svg)
</section>
<section class="usa-section grid-container usa-prose" markdown="1">


### *Option 2*

## Understand how Login.gov works
The [Integration]({{ site.baseurl }}/overview/) page walks through the process the user will go through when they authenticate with Login.gov to access your application, and what steps are involved in the service provider configuration.

![rule](https://user-images.githubusercontent.com/90725258/232109818-e379b186-f486-43dc-a3fd-cd151d1ec804.svg)

## Make decisions about the user experience
The [User experience]({{ site.baseurl }}/design-guidelines/) page provides recommendations for the design and content that you set up, like example sign-in buttons, icon guidance, and suggested language.

![rule](https://user-images.githubusercontent.com/90725258/232109818-e379b186-f486-43dc-a3fd-cd151d1ec804.svg)

## Register your app in the sandbox dashboard
The Testing page provides more information about the sandbox environment and how to set up your account. You will also find downloadable YAML files on this page. 

![rule](https://user-images.githubusercontent.com/90725258/232109818-e379b186-f486-43dc-a3fd-cd151d1ec804.svg)

## Use the guide to set up a test application
The OpenID Connect and SAML pages provides detailed information about setting up an integration in the dashboard, as well as two example apps. 

The Attributes page provides a comprehensive list of identity attributes that can be requested and how OpenID Connect and SAML access those attributes. 

The Security page describes how we use the RISC Profile using Security Event Token (SET) to receive security-related event notifications in real-time.

![rule](https://user-images.githubusercontent.com/90725258/232109818-e379b186-f486-43dc-a3fd-cd151d1ec804.svg)

## Test your application
The Testing page walks through starting a test app in our sandbox dashboard and is where you will find downloadable YAML files. 

![rule](https://user-images.githubusercontent.com/90725258/232109818-e379b186-f486-43dc-a3fd-cd151d1ec804.svg)

## Move your application to production
The Production page lays out the steps required before a test application can be deployed to the production environment.

![rule](https://user-images.githubusercontent.com/90725258/232109818-e379b186-f486-43dc-a3fd-cd151d1ec804.svg)

## Get support anytime
Check the FAQ page for answers to the most common questions. If you need additional support, submit a ticket to the Partner Support Help Desk. 

![rule](https://user-images.githubusercontent.com/90725258/232109818-e379b186-f486-43dc-a3fd-cd151d1ec804.svg)

</section>
