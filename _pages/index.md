---
title: Welcome to the Login.gov developer guide
lead: >
  This developer guide contains everything you’ll need to integrate and deploy your application with Login.gov.
permalink: /
layout: home
---
<section class="usa-section usa-section--dark">
  <div class="grid-container">
    <div class="grid-row grid-gap">
      <div class="desktop:grid-col-8 desktop:grid-offset-2 mobile:grid-col-auto">
        <h1 class="usa-display mobile:margin-2">{{ page.title }}</h1>
        <div class="usa-intro mobile:margin-2">{{ page.lead | markdownify }}</div>
      </div>
    </div>
  </div>
</section>
<div class="grid-container">
  <div class="desktop:grid-col-9 desktop:grid-offset-2 mobile:grid-col-auto mobile:padding-2">
  {% if site.temporary_alert %}
  <section class="usa-section" markdown="1">  
      {% include alert.html content=site.temporary_alert %}
  </section>
  {% endif %}
  <h2 class='margin-top-4'>How to integrate with Login.gov</h2>

  <ol class="usa-process-list usa-prose margin-bottom-4">
    <li class="usa-process-list__item">
      <p>
        Your integration with Login.gov starts in the <a href="https://dashboard.int.identitysandbox.gov/" class="usa-link">dashboard</a> where you can reigster your app.
      </p>
    </li>
    <li class="usa-process-list__item">
      <p>
        Determine your application needs, like the level of proofing and <a href="{% link _pages/attributes.md %}" class="usa-link">user attributes</a> that will be requested.
      </p>
    </li>
    <li class="usa-process-list__item">
      <p>
        Select between <a href="{% link _pages/oidc/getting-started.md %}" class="usa-link">Open ID Connect</a> (OIDC) or <a href="{% link _pages/saml/getting-started.md %}" class="usa-link">SAML</a> implementation protocols.
      </p>
    </li>
    <li class="usa-process-list__item">
      <p>
        Configure your app in the sandbox and start <a href="{% link _pages/testing.md %}" class="usa-link">testing</a>! We have implementation guides and example apps to get you up and running quickly.
      </p>
    </li>
    <li class="usa-process-list__item">
      <p>
        When you are ready to go live our team will help you <a href="{% link _pages/production.md %}" class="usa-link">promote the application to production</a>. We will check against our production checklist to ensure your application is ready for production from an administrative and technical standpoint.
      </p>
    </li>
  </ol>

  <hr class="text-primary-light border-solid measure-5 margin-x-0">
  <section class="usa-section usa-prose padding-top-5">
    <h2>Integration support for developers</h2>
    <p class="measure-5 margin-x-0">
      If you are with a government agency partner, check our <a href="{% link _pages/support.md %}" class="usa-link">FAQ</a> page for answers to the most common questions. If you need further technical assistance with an integration, you can <a href="{{site.baseurl}}/support#contacting-partner-support/">contact Partner Support</a>.
    </p>
    <p class="measure-5 margin-x-0">
      For help signing in or verifying your identity with Login.gov, please visit the <a href="https://login.gov/help/" class="usa-link">Login.gov Help Center</a> or <a href="https://login.gov/contact/" class="usa-link">contact us</a>.
    </p>
  </section>
  </div>
</div>
