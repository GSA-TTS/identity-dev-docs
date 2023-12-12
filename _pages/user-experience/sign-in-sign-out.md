---
title: User Experience
lead: >
  Create a simple and consistent experience for your Login.gov users
sidenav:
  - text: Getting started
    href: "user-experience/getting-started/"
  - text: Sign-in and sign-out buttons
    href: "user-experience/sign-in-sign-out/"
  - text: Your agency logo
    href: "user-experience/agency-logo/"
  - text: Cancel URL
    href: "user-experience/cancel-url/"
  - text: Failure to proof URL
    href: "user-experience/failure-proof/"
  - text: Knowledge articles
    href: "user-experience/knowledge-articles/"
  - text: FAQ content 
    href: "user-experience/faq-content/"

---

## Design your application's sign-in and sign-out buttons

The sign-in button on your application initiates authentication with Login.gov, and takes users to the initial screen on Login.gov to sign in or create an account. 

### Requirements for all buttons

{% capture do_button_label %}
Do use “Sign in” or “Sign in with Login.gov” as the label for the sign-in button. This is consistent with calls-to-action across Login.gov and in our user support documentation. If most users of your application do not have Login.gov accounts, you may also use the label “Get started with Login.gov”.
{% endcapture %}
{% capture do_state_styling %}
Do ensure that all buttons have default, hover, active, and focus state styling and required color contrast. The [U.S. Web Design System](https://designsystem.digital.gov/components/button/) offers code examples of button state styling and accessibility guidelines.
{% endcapture %}
{% capture do_font_styling %}
Do use [sans serif](https://designsystem.digital.gov/utilities/font-size-and-family/) and neutral fonts for your sign in button.
{% endcapture %}
{% capture dont_external_link %}
Don't use the [external-link icon](https://fontawesome.com/icons/external-link?style=solid/) that might suggest a link to another website and confuse users, especially those using screen readers.
{% endcapture %}
{% capture dont_icon %}
Don't use an icon instead of a text label. Buttons may include the Login.gov logo or shield in addition to a text label; any logos or images require alt text (see [button and logo styling]({{site.baseurl}}/user-experience/sign-in-sign-out/#button-and-logo-styling)).
{% endcapture %}

<ul>
  <li class="usa-icon-list__item">
    {% include check_icon.html content=do_button_label style="text-green" %}       
  </li>
  <li class="usa-icon-list__item">
    {% include check_icon.html content=do_state_styling style="text-green" %}
  </li>
  <li class="usa-icon-list__item">
    {% include check_icon.html content=do_font_styling style="text-green" %}
  </li>
  <li class="usa-icon-list__item">
    {% include check_icon.html content=dont_external_link style="text-red" %}
  </li>
   <li class="usa-icon-list__item">
    {% include check_icon.html content=dont_icon style="text-red" %}
  </li>
</ul>


### Button and logo styling
{% capture do_button_height %}
Do use one of the two button heights provided.
{% endcapture %}
{% capture do_button_center %}
Do center the label and Login.gov logo within the button. Minimum left and right padding is 1.25 rem or 20 px.
{% endcapture %}
{% capture do_contrast %}
Do provide sufficient contrast between the button and your applications’ background color. Use the dark blue button on light backgrounds and the light blue button on dark backgrounds.
{% endcapture %}
{% capture do_button_white %}
Do use the white button with an outline on light backgrounds that don’t provide sufficient contrast to use the light blue button.
{% endcapture %}

<ul>
  <li class="usa-icon-list__item">
    {% include check_icon.html content=do_button_height style="text-green" %}       
  </li>
  <li class="usa-icon-list__item">
    {% include check_icon.html content=do_button_center style="text-green" %}
  </li>
  <li class="usa-icon-list__item">
    {% include check_icon.html content=do_contrast style="text-green" %}
  </li>
  <li class="usa-icon-list__item">
    {% include check_icon.html content=do_button_white style="text-green" %}
  </li>
</ul>