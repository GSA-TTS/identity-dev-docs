---
title: User Experience
lead: >
  Create a simple and consistent experience for your Login.gov users
sidenav:
  - text: Getting started
    href: "user-experience/getting-started/"
  - text: Sign-in and sign-out buttons
    href: "user-experience/sign-in-sign-out/"
  - text: Help text guidance
    href: "user-experience/help-text/"
  - text: Your agency logo
    href: "user-experience/agency-logo/"
    links:
      - text: Agency logo specifications
        href: "user-experience/agency-logo/#agency-logo-specifications"
  - text: Cancel URL
    href: "user-experience/cancel-url/"
  - text: Failure to proof URL
    href: "user-experience/failure-proof/"
  - text: Knowledge articles
    href: "user-experience/knowledge-articles/"
  - text: FAQ content
    href: "user-experience/faq-content/"

---

## Add your agency logo

All applications are required to add a logo, which is uploaded in the Partner Dashboard.

Your agency logo will appear to the right of the Login.gov logo in your integration. This helps to ensure users understand the partnership between Login.gov and your integration with our service.

{% capture do_content %}
<span markdown="1">
  <span class="image-example__do-dont">DO: </span> Add a logo that is high contrast on a transparent background.
</span>
{% endcapture %}

{% capture dont_content %}
<span markdown="1">
  <span class="image-example__do-dont">DON'T: </span>Add a background color behind your logo.
</span>
{% endcapture %}

<div class="grid-row grid-gap">
  <div class="usa-image-example usa-image-example--correct">
    <figure class="usa-image-example__figure">
      <img class="usa-image-example__image" alt="An example agency logo in black on a white background" src="{{ site.baseurl }}/assets/img/do_logo.svg" />
      <figcaption class="usa-image-example__figcaption">
        <ul class="usa-icon-list usa-icon-list--size-xs">
          <li class="usa-icon-list__item">
            {% include icon_list.html icon_name="check_circle" style="text-success" content=do_content %}
          </li>
        </ul>
      </figcaption>
    </figure>
  </div>
  <div class="usa-image-example usa-image-example--incorrect">
    <figure class="usa-image-example__figure">
      <img class="usa-image-example__image" src="{{ site.baseurl }}/assets/img/dont_logo.svg" alt="An example agency logo in grey on a light grey background" />
      <figcaption class="usa-image-example__figcaption">
        <ul class="usa-icon-list usa-icon-list--size-xs">
          <li class="usa-icon-list__item">
            {% include icon_list.html icon_name="cancel" style="text-error" content=dont_content %}
          </li>
        </ul>
      </figcaption>
    </figure>
  </div>
</div>

### Agency logo specifications

<ul class="usa-icon-list padding-top-2 padding-bottom-2">
  <li class="usa-icon-list__item">
    {% include icon_list.html icon_name="check_circle" content="Upload a logo that is high contrast on a transparent background" style="text-success" %}
  </li>
  <li class="usa-icon-list__item">
    {% include icon_list.html icon_name="check_circle" content="Only .svg files are accepted" style="text-success" %}
  </li>
</ul>

[Next step: Determine your application’s Cancel URL]({{ site.baseurl }}/user-experience/cancel-url/)
