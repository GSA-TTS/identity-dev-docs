---
title: User Experience
lead: >
  Create a simple and consistent experience for your Login.gov users
redirect_from:
  - /user-experience/
sidenav:
  - text: Getting started
    href: "/user-experience/getting-started"
  - text: Sign-in and sign-out buttons
    href: "/user-experience/sign-in-sign-out"
  - text: Your agency logo
    href: "/user-experience/agency-logo"
  - text: Cancel URL
    href: "/user-experience/cancel-url"
  - text: Failure to proof URL
    href: "/user-experience/failure-proof"
  - text: Knowledge articles
    href: "/user-experience/knowledge-articles"
  - text: FAQ content 
    href: "/user-experience/faq-content"

---

##  Getting started
There are several decisions during the integration process that affect how your users experience Login.gov. In this User Experience guide, we will outline what options you have available to your application, and the configurations in Login.gov [dashboard](https://idp.int.identitysandbox.gov/) that impact users.

{% capture item_1 %}
[Design your application's sign-in and sign-out buttons]({{site.baseurl}}/user-experience/sign-in-sign-out/). This will include a [global sign-in button]({{site.baseurl}}/user-experience/sign-in-sign-out/), and optionally, [a sign-in page]({{site.baseurl}}/user-experience/sign-in-sign-out/) before the user is directed to Login.gov.
{% endcapture %}

{% capture item_2 %}
All partners with identity verification will [create a Failure to Proof URL]({{site.baseurl}}/user-experience/failure-proof/) for users who cannot pass identity proofing with Login.gov. This URL is configured in the sandbox dashboard, but may require designing a new page or process on your agency's website or application.
{% endcapture %}

{% capture item_3 %}
[Optional: Add FAQ content to inform users about Login.gov]({{site.baseurl}}/user-experience/faq-content/)
{% endcapture %}

{% capture item_4 %}
[Add your agency logo]({{site.baseurl}}/user-experience/agency-logo/) to help users understand the partnership between Login.gov and your agency.
{% endcapture %}

{% capture item_5 %}
[Determine your application’s Cancel URL]({{site.baseurl}}/user-experience/cancel-url/)
{% endcapture %}

{% capture item_6 %}
[Identity Verification: Create a Failure to Proof URL]({{site.baseurl}}/user-experience/failure-proof/)
{% endcapture %}


### Add to your agency's application or website

<ul>
    <li class="usa-icon-list__item">
        {% include green_icon.html content=item_1 %}       
  </li>
  <li class="usa-icon-list__item">
        {% include green_icon.html content=item_2 %}
  </li>
  <li class="usa-icon-list__item">
        {% include green_icon.html content=item_3 %}
  </li>
</ul>

### Configure in the [dashboard](https://idp.int.identitysandbox.gov/)

<ul class="padding-bottom-4">
 <li class="usa-icon-list__item">
    {% include green_icon.html content=item_4 %}
 </li>
 <li class="usa-icon-list__item">
    {% include green_icon.html content=item_5 %}
 </li>
 <li class="usa-icon-list__item">
    {% include green_icon.html content=item_6 %}
 </li>
</ul>

[Next step: Design your application's sign-in and sign-out buttons]({{site.baseurl}}/user-experience/sign-in-sign-out/)

