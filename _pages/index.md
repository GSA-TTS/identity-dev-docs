---
title: Welcome to the Login.gov Developer Guide
lead: >
  This developer guide contains everything you’ll need to integrate and deploy your application with Login.gov.
permalink: /

sidenav:
  - text: How to integrate with Login.gov
    href: '#how-to-integrate-login'
  - text: Integration information checklist
    href: '#integration-info-checklist'
---

{% if site.temporary_alert %}
  <section class="usa-section" markdown="1">  
      {% include alert.html content=site.temporary_alert %}
  </section>
{% endif %}
<h2 id="how-to-integrate-login">How to integrate with Login.gov</h2>
<br/>
<ol class="usa-process-list usa-prose margin-bottom-4">
  <li class="usa-process-list__item">
    <h3>Register your application in our partner portal</h3>
    <p>
      First, create a team. Then, follow the steps to create an application in a sandbox environment where you can configure and test without affecting your live systems.
    </p>
  </li>
  <li class="usa-process-list__item">
    <h3>Configure your application in the portal and start testing</h3>
    <p>
      Utilize our <a href="#integration-checklist" class="usa-link">integration checklist</a> to verify you have all the necessary information for configuration. If you're not sure which options are right for your team, or if you're using a third-party application identity platform, please review our <a href="{% link _pages/overview.md %}" class="usa-link">integrations guide</a> for more information.
    </p>
  </li>
  <li class="usa-process-list__item">
    <h3>Create a new application that's ready for production and make a request for your application to go live</h3>
    <p>
      Create a <a href="{% link _pages/production.md %}#production-configuration-process" class="usa-link">new application and make a request</a> to go live in production. We'll check your application to ensure it meets all administrative and technical requirements. Applications can only go live if you've completed an <a href="{% link _pages/production.md %}#confirm-interagency-agreement-iaa" class="usa-link">Inter-Agency Agreement</a>.
    </p>
  </li>
</ol>
<hr class="text-primary-light border-solid measure-5 margin-x-0">
<h2 id="integration-info-checklist">Integration information checklist</h2>
<section class="usa-section usa-prose padding-top-5">
  <h2>Integration support for developers</h2>
  <p class="measure-5 margin-x-0" markdown="1">
    If you are with a government agency partner, check our [FAQ]({{ site.baseurl}}/support/#frequently-asked-questions) page for answers to the most common questions. If you need further technical assistance with an integration, you can [contact Partner Support]({{ site.baseurl}}/support/#contacting-partner-support).
  </p>
  <p class="measure-5 margin-x-0">
    For help signing in or verifying your identity with Login.gov, please visit the <a href="https://login.gov/help/" class="usa-link">Login.gov Help Center</a> or <a href="https://login.gov/contact/" class="usa-link">contact us</a>.
  </p>
</section>
