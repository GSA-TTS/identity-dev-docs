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

# How to integrate with Login.gov

<ol class="usa-process-list">
  <li class="usa-process-list__item padding-bottom-4">
    <p class="usa-process-list__heading font-sans-lg margin-top-1 text-light">
      Learn about the process the user will go through to access your application and what steps are involved in configuring your app on the [Integration]({%link _pages/overview.md%}) page. 
    </p>
  </li>


 <li class="usa-process-list__item padding-bottom-4">
    <p class="usa-process-list__heading font-sans-xl line-height-sans-1">
      Determine your application needs, like the level of proofing, the [user experience]({{ site.baseurl }}/design-guidelines/) decisions your agency will make, and [user attributes]({{site.baseurl }}/attributes/) that will be requested.
    </p>
  </li>

 
<li class="usa-process-list__item padding-bottom-4">
    <p class="usa-process-list__heading font-sans-xl line-height-sans-1">
      Select between [OpenID Connect]({{site.baseurl }}/oidc/)(OIDC) or [SAML]({{site.baseurl }}/saml/) implementation protocols. 
      </p>
    </li>


<li class="usa-process-list__item padding-bottom-4">
    <p class="usa-process-list__heading font-sans-xl line-height-sans-1">
      Configure your app in the [sandbox dashboard](https://dashboard.int.identitysandbox.gov/) and start [testing]({{site.baseurl }}/testing/)! We also have [example apps](https://dashboard.int.identitysandbox.gov/) to get you up and running quickly.
      </p>
    </li>


<li class="usa-process-list__item padding-bottom-4">
    <p class="usa-process-list__heading font-sans-xl line-height-sans-1">
      When you are ready to go live our team will help you [promote the application to production]({{site.baseurl }}/production/). 
We will check against our production checklist to ensure your application is ready for production from an administrative and technical standpoint.
      </p>
    </li>

<hr>
</hr>

## Integration support for developers
If you are with a government agency partner, check our [FAQ]( {{site.baseurl }}/support/) page for answers to the most common questions. If you need further technical assistance with an integration, submit a ticket to the [Partner Support Help Desk](https://zendesk.login.gov). 

For help signing in or verifying your identity with Login.gov, please visit the [Login.gov Help Center](https://login.gov/help/) or [contact us](https://login.gov/contact/).

<hr>
</hr>
</section>
