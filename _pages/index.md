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
<section class="margin-bottom-4">
  <h2 id="how-to-integrate-login" class="padding-bottom-3 margin-top-0">How to integrate with Login.gov</h2>
  <ol class="usa-process-list margin-bottom-4">
    <li class="usa-process-list__item">
      <h3>Register your application in our partner portal</h3>
      <p>
        First, create a team. Then, follow the steps to create an application in a sandbox environment where you can configure and test without affecting your live systems.
      </p>
    </li>
    <li class="usa-process-list__item">
      <h3>Configure your application in the portal and start testing</h3>
      <p>
        Utilize our <a class="usa-link" href="#integration-info-checklist" aria-label="anchor">integration checklist</a> to verify you have all the necessary information for configuration. If you're not sure which options are right for your team, or if you're using a third-party application identity platform, please review our <a class="usa-link" href="{% link _pages/overview.md %}">integrations guide</a> for more information.
      </p>
    </li>
    <li class="usa-process-list__item">
      <h3>Create a new application that's ready for production and make a request for your application to go live</h3>
      <p>
        Create a <a class="usa-link" href="{% link _pages/production.md %}#production-configuration-process">new application and make a request</a> to go live in production. We'll check your application to ensure it meets all administrative and technical requirements. Applications can only go live if you've completed an <a class="usa-link" href="{% link _pages/production.md %}#confirm-interagency-agreement-iaa">Inter-Agency Agreement</a>.
      </p>
    </li>
  </ol>
</section>
<hr class="text-primary-light border-solid measure-5 margin-x-0">
<section class="margin-top-3 margin-bottom-4">
  <h2 id="integration-info-checklist">Integration information checklist</h2>
  <dl class="usa-accordion usa-accordion--bordered maxw-tablet">
    <dt id="integration-checklist-accordion" class="usa-accordion__heading margin-bottom-3">
      <button class="usa-accordion__button" aria-expanded="false" aria-controls="home-register-checklist">
        Information you need to register your application
        <a href="#integration-checklist-accordion" class="accordion-link" aria-label="anchor" aria-describedby="#integration-checklist-accordion">#</a>
      </button>
    </dt>
    <dd id="home-register-checklist" class="usa-accordion__content" hidden>
      <ul class="usa-list list-style-checkbox">
        <li>Inter-agency agreement application name</li>
        <li>Public-face, friendly application name</li>
        <li>Implementation protocols (SAML or Open ID Connect)</li>
        <li>Service level as either Authentication only or Identity Verification</li>
        <li>Data you need to keep and collect and other <a class="usa-link" href="{% link _pages/attributes.md %}">user attributes</a></li>
        <li><a class="usa-link" href="{% link _pages/oidc/authorization.md %}#aal_values">Authentication assurance</a> levels</li>
        <li>Agency logo file</li>
        <li>A public/private key pair and the <a class="usa-link" href="{% link _pages/testing.md %}#creating-a-public-certificate">public certificate</a> to validate your website and application’s authenticity</li>
        <li>Content for the “sign up”, “sign in”, and “forgot password” language if you do not want to use the pre-selected options. Custom “Help” text is optional.</li>
      </ul>
    </dd>
  </dl>
</section>
<p class="measure-5 margin-x-0">
  This website is for agency partners or developers. If you need technical support please contact <a class="usa-link" href="{% link _pages/support.md %}#contacting-partner-support">Partner Support</a> or view our <a class="usa-link" href="{% link _pages/support.md %}#frequently-asked-questions">FAQ</a> page. If you are not an agency partner or developer, please visit the <a class="usa-link" href="https://login.gov/help/">Login.gov Help Center</a> or <a class="usa-link" href="https://login.gov/contact/">contact us</a> for help signing in to your account or verifying your identity.
</p>
