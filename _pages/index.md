![IMG_0965](https://user-images.githubusercontent.com/127743006/232771911-1e9fb1bc-2a42-49fc-a1ee-8381fc8d0928.png)
---
title: Welcome to the Login.gov developer guide
lead: >
  This contains everything you’ll need as a federal government agency to integrate and deploy your application with Login.gov.
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

# Get started...

- [Understand our flow]({{ site.baseurl }}/overview/).
- Determine your application needs, like the level of proofing and [user attributes]({{ site.baseurl }}/attributes/) that will be requested.
- Select between [OpenID Connect (OIDC)]({{ site.baseurl }}/oidc/) or [SAML protocol]({{ site.baseurl }}/saml/) implementation protocols. Please note that we recommend OIDC.
- Configure your app. We have [implementation guides]({{ site.baseurl }}/oidc/) and example apps to get you up and running quickly.
- [Register your app in the sandbox dashboard and start testing]({{ site.baseurl }}/testing/).
- Let us know when you are ready to go live and our team will help you [promote the application to production]({% link _pages/production.md %}). We will check you against our production checklist to ensure your application is good to go to production from an administrative and technical standpoint.
- Be sure to read the [FAQ]({{ site.baseurl }}/support/#frequently-asked-questions) for answers to the most common questions.

</section>
