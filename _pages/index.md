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
        Learn about the process the user will go through to access your application and what steps are involved in configuring your app on the <a href="{% link _pages/overview.md %}" class="usa-link">Integration</a> page. 
    </p>
  </li>


 <li class="usa-process-list__item padding-bottom-4">
    <p class="usa-process-list__heading font-sans-md margin-top-1 text-light">
        Determine your application needs, like the level of proofing, the <a href="{% link _pages/design-guidelines.md %}" class="usa-link">user experience</a> decisions your agency will make, and the <a href="{% link _pages/attributes.md %}" class="usa-link">user attributes</a> that will be requested.
    </p>
  </li>

 
<li class="usa-process-list__item padding-bottom-4">
    <p class="usa-process-list__heading font-sans-md margin-top-1 text-light">
        Select between <a href="{% link _pages/oidc.md %}" class="usa-link">Open ID Connect</a> (OIDC) or <a href="{% link _pages/saml.md %}" class="usa-link">SAML</a> implementation protocols. 
      </p>
    </li>


<li class="usa-process-list__item padding-bottom-4">
    <p class="usa-process-list__heading font-sans-md margin-top-1 text-light">
        Configure your app in the <a href=“https://dashboard.int.identitysandbox.gov/” class="usa-link">sandbox dashboard</a> and start <a href=“{ %link _pages/testing.md% }” class="usa-link">testing</a>! We also have <a href=“https://dashboard.int.identitysandbox.gov/” class="usa-link">example apps</a> to get you up and running quickly.
      </p>
    </li>


<li class="usa-process-list__item padding-bottom-4">
    <p class="usa-process-list__heading font-sans-md margin-top-1 text-light">
        When you are ready to go live our team will help you <a href=“{%link _pages/production.md%}” class="usa-link">promote the application to production</a>. We will check against our production checklist to ensure your application is ready for production from an administrative and technical standpoint.
      </p>
    </li>

<hr> 
<h2> Integration support for developers </h2>
If you are with a government agency partner, check our <a href=“{%link _pages/support.md%}” class="usa-link">FAQ</a> page for answers to the most common questions. If you need further technical assistance with an integration, submit a ticket to the <a href=“https://zendesk.login.gov” class="usa-link">Partner Support Help Desk</a>. 


For help signing in or verifying your identity with Login.gov, please visit the <a href=“https://login.gov/help/” class="usa-link">Login.gov Help Center</a> or <a href=“https://login.gov/contact/” class="usa-link">contact us</a>.

