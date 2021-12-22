---
title: Welcome to the Login.gov developer guide
lead: >
  This contains everything you’ll need as a federal government agency to integrate and deploy your application with <a href="https://login.gov">Login.gov</a>.
permalink: /
layout: home
---

<section class="usa-section usa-section--dark">
  <div class="grid-container">
    <div class="usa-display text-accent-cool">{{ page.title }}</div>
    <div class="usa-intro">{{ page.lead }}</div>
  </div>
</section>

<section class="usa-section grid-container usa-prose" markdown="1">

# Get started...

- [Understand our flow]({{ site.baseurl }}/overview/).
- Determine your application needs, like the level of proofing and [user attributes]({{ site.baseurl }}/attributes/) that will be requested.
- Select between [OpenID Connect (OIDC)]({{ site.baseurl }}/oidc/) or [SAML protocol]({{ site.baseurl }}/saml/) implementation protocols. Please note that we recommend OIDC.
- Configure your app. We have [implementation guides]({{ site.baseurl }}/oidc/) and example apps to get you up and running quickly.
- [Register your app in the sandbox dashboard and start testing]({{ site.baseurl }}/testing/).
- Let us know when you are ready to go live and our team will help you [promote the application to production]({% link _pages/production.md %}). We will check you against our production checklist to ensure your application is good to go to production from an administrative and technical standpoint.
- Be sure to read the [FAQ]({{ site.baseurl }}/faq/) for answers to the most common questions.

</section>
