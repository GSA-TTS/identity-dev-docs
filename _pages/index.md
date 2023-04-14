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

# Getting started with Login.gov

![li_ steps-num](https://user-images.githubusercontent.com/90725258/232106089-3d9e6fcc-2b2e-44bb-968e-6ec4e68cb516.svg)
 Your integration with Login.gov starts in the [sandbox dashboard](https://dashboard.int.identitysandbox.gov/) where you can register your app. 


## Understand how Login.gov works
The [Integration]({{ site.baseurl }}/overview/) page walks through the process the user will go through when they authenticate with Login.gov to access your application, and what steps are involved in the service provider configuration.

![rule](https://user-images.githubusercontent.com/90725258/232109818-e379b186-f486-43dc-a3fd-cd151d1ec804.svg)

- Determine your application needs, like the level of proofing and [user attributes]({{ site.baseurl }}/attributes/) that will be requested.
- Select between [OpenID Connect (OIDC)]({{ site.baseurl }}/oidc/) or [SAML protocol]({{ site.baseurl }}/saml/) implementation protocols. Please note that we recommend OIDC.
- Configure your app. We have [implementation guides]({{ site.baseurl }}/oidc/) and example apps to get you up and running quickly.
- [Register your app in the sandbox dashboard and start testing]({{ site.baseurl }}/testing/).
- Let us know when you are ready to go live and our team will help you [promote the application to production]({% link _pages/production.md %}). We will check you against our production checklist to ensure your application is good to go to production from an administrative and technical standpoint.
- Be sure to read the [FAQ]({{ site.baseurl }}/support/#frequently-asked-questions) for answers to the most common questions.

</section>
