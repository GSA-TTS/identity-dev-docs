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

<h2>How to integrate with Login.gov</h2>


<ol class="usa-process-list">
  <li class="usa-process-list__item padding-bottom-4">
    <p class="usa-process-list__heading font-sans-md margin-top-1 text-light">
        Learn about the process the user will go through to access your application and what steps are involved in configuring your app on the [Integration]({%link _pages/overview.md%}) page. 
    </p>
  </li>


 <li class="usa-process-list__item padding-bottom-4">
    <p class="usa-process-list__heading font-sans-md margin-top-1 text-light">
        Determine your application needs, like the level of proofing, the [user experience]({%link _pages/design-guidelines.md%}) decisions your agency will make, and [user attributes]({%link _pages/attributes.md%}) that will be requested.
    </p>
  </li>

 
<li class="usa-process-list__item padding-bottom-4">
    <p class="usa-process-list__heading font-sans-md margin-top-1 text-light">
        Select between [OpenID Connect]({%link _pages/oidc.md%})(OIDC) or [SAML]({%link _pages/saml.md%}) implementation protocols. 
      </p>
    </li>


<li class="usa-process-list__item padding-bottom-4">
    <p class="usa-process-list__heading font-sans-md margin-top-1 text-light">
        Configure your app in the [sandbox dashboard](https://dashboard.int.identitysandbox.gov/) and start [testing]({%link _pages/testing.md%})! We also have [example apps](https://dashboard.int.identitysandbox.gov/) to get you up and running quickly.
      </p>
    </li>


<li class="usa-process-list__item padding-bottom-4">
    <p class="usa-process-list__heading font-sans-md margin-top-1 text-light">
        When you are ready to go live our team will help you [promote the application to production]({%link _pages/production.md%}). 
We will check against our production checklist to ensure your application is ready for production from an administrative and technical standpoint.
      </p>
    </li>

<hr> 
<h2> Integration support for developers </h2>
If you are with a government agency partner, check our [FAQ]( {{site.baseurl }}/support/) page for answers to the most common questions. If you need further technical assistance with an integration, submit a ticket to the [Partner Support Help Desk](https://zendesk.login.gov). 

For help signing in or verifying your identity with Login.gov, please visit the [Login.gov Help Center](https://login.gov/help/) or [contact us](https://login.gov/contact/).
</hr>
