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


<ul class="usa-icon-list padding-top-2">
  <li class="usa-icon-list__item">
    {% include icon_list.html icon_name="check_circle" content=do_button_label style="text-success" %}
  </li>
  <li class="usa-icon-list__item">
    {% include icon_list.html icon_name="check_circle" content=do_state_styling style="text-success" %}
  </li>
  <li class="usa-icon-list__item">
    {% include icon_list.html icon_name="check_circle" content=do_font_styling style="text-success" %}
  </li>
  <li class="usa-icon-list__item">
    {% include icon_list.html icon_name="cancel" content=dont_external_link style="text-error" %}
  </li>
   <li class="usa-icon-list__item">
    {% include icon_list.html icon_name="cancel" content=dont_icon style="text-error" %}
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

<ul class="usa-icon-list padding-top-2">
  <li class="usa-icon-list__item">
    {% include icon_list.html icon_name="check_circle" content=do_button_height style="text-success" %}
  </li>
  <li class="usa-icon-list__item">
    {% include icon_list.html icon_name="check_circle" content=do_button_center style="text-success" %}
  </li>
  <li class="usa-icon-list__item">
    {% include icon_list.html icon_name="check_circle" content=do_contrast style="text-success" %}
  </li>
  <li class="usa-icon-list__item">
    {% include icon_list.html icon_name="check_circle" content=do_button_white style="text-success" %}
  </li>
</ul>

<div class="lookbook-embed-container margin-top-4">
<iframe class="lookbook-embed" src="https://idp.dev.identitysandbox.gov/components/embed/login_button/workbench?_options=%257B%2522scenarios%2522%253A%255B%2522workbench%2522%255D%252C%2522panels%2522%253A%255B%2522params%2522%252C%2522output%2522%255D%257D"></iframe>
</div>

### Login.gov logos

<div class="grid-row grid-gap-3 padding-top-3">
<img src="{{ site.baseurl }}/assets/img/logo.svg"
       alt="dark blue logo"
       class="display-block desktop:grid-col-4 mobile:grid-col-auto maxw-mobile-lg" />
<img src="{{ site.baseurl }}/assets/img/logo-white.svg"
       alt="dark blue logo"
       class="display-block desktop:grid-col-4 bg-base-lighter mobile:grid-col-auto maxw-mobile-lg" />
</div>
<div class="grid-row margin-top-2">
<a href="{{ site.baseurl }}/assets/img/logo.svg" class="usa-link" download>Download dark blue logo</a><span class="margin-left-1 margin-right-1">|</span>
<a href="{{ site.baseurl }}/assets/img/logo-white.svg" class="usa-link" download>Download white logo</a>
</div>

### Global sign in button

When using Login.gov to authenticate your users, we recommend implementing one official button using “Sign in” as the call-to-action. Users are familiar with the sign-in button placed on the top right of website headers. Placing your sign-in button in this location takes advantage of this common pattern and can be carried throughout the entire application. We also recommend placing the global sign-in button at the top on mobile devices, either within or next to the mobile menu.

{% capture top_right %}
<span markdown="1">
  <span class="image-example__do-dont">DO</span>: Place a sign-in button at the top right of website headers.
</span>
{% endcapture %}

{% capture global_nav %}
<span markdown="1">
  <span class="image-example__do-dont">DO</span>: Use your own site’s global navigation styling if “Sign in” appears within a list of menu options in the header.
</span>
{% endcapture %}

<div class="grid-row margin-bottom-2">
  <div class="usa-image-example--correct">
    <figure class="usa-image-example__figure">
      <img class="usa-image-example__image" src="{{ site.baseurl }}/assets/img/sign-in-button.svg"
      alt='An example agency website header with the button "Sign in with Login.gov" at top right'/>
      <figcaption class="usa-image-example__figcaption">
        <ul class="usa-icon-list usa-icon-list--size-xs">
          <li class="usa-icon-list__item">
            {% include icon_list.html icon_name="check_circle" style="text-success" content=top_right %}
          </li>
        </ul>
      </figcaption>
    </figure>
  </div>
</div>

<div class="grid-row">
  <div class="usa-image-example usa-image-example--correct">
    <figure class="usa-image-example__figure">
      <img class="usa-image-example__image usa-image-example__image--bordered" src="{{ site.baseurl }}/assets/img/sign-in-menu.svg"
        alt='An example agency website header with two buttons labeled "Menu options" and "Sign in" at top right"'/>
      <figcaption class="usa-image-example__figcaption">
        <ul class="usa-icon-list usa-icon-list--size-xs">
          <li class="usa-icon-list__item">
            {% include icon_list.html icon_name="check_circle" style="text-success" content=global_nav %}
          </li>
        </ul>
      </figcaption>
    </figure>
  </div>
</div>

After a user signs in, a sign-out button labeled “Sign out” replaces the sign-in button on the website header.

### Optional: Sign-in options on a page

Some agency partners decide to implement a sign-in page on their application prior to redirecting their users to Login.gov, especially to present multiple sign-in options.

{% capture signin_page %}
<span markdown="1">
  <span class="image-example__do-dont">DO</span>: Design sign-in options that are equal in size. Stacked, solid-colored buttons work best because the stacking supports responsive layouts and mobile views.
</span>
{% endcapture %}

<div class="usa-image-example--correct">
  <figure class="usa-image-example__figure">
    <img class="usa-image-example__image" src="{{ site.baseurl }}/assets/img/global-sign-in.png"
      alt='An example agency website page with the heading "Sign in" and three full width buttons labeled "Sign in with Login.gov" and "Sign in with [alternate provider]"'/>
    <figcaption class="usa-image-example__figcaption">
      <ul class="usa-icon-list usa-icon-list--size-xs">
        <li class="usa-icon-list__item">
          {% include icon_list.html icon_name="check_circle" style="text-success" content=signin_page %}
        </li>
      </ul>
    </figcaption>
  </figure>
</div>

{% capture do_button_styling %}
Do use Login.gov’s preferred button style or primary button styling, since signing in is the main action and helps your users know that it is the next step in the process.
{% endcapture %}
{% capture do_sign_in_label %}
Do use the label “Sign in with Login.gov” to differentiate from other sign-in options you may have on your application.
{% endcapture %}
{% capture do_equal_size %}
Do design sign-in options that are uniform in width and height.  Consistency and uniform sizes helps users easily scan information.
{% endcapture %}
{% capture do_list_style %}
Do style each button in a list with a different background color and center-justify the text in the buttons. 
{% endcapture %}
{% capture dont_extra_text %}
Don’t add too much text or imagery above the sign-in button that might push your users’ primary action out of view, especially on mobile devices.
{% endcapture %}

<ul class="usa-icon-list padding-top-4">
  <li class="usa-icon-list__item">
    {% include icon_list.html icon_name="check_circle" content=do_button_styling style="text-success" %}
  </li>
  <li class="usa-icon-list__item">
    {% include icon_list.html icon_name="check_circle" content=do_sign_in_label style="text-success" %}
  </li>
  <li class="usa-icon-list__item">
    {% include icon_list.html icon_name="check_circle" content=do_equal_size style="text-success" %}
  </li>
  <li class="usa-icon-list__item">
    {% include icon_list.html icon_name="check_circle" content=do_list_style style="text-success" %}
  </li>
   <li class="usa-icon-list__item">
    {% include icon_list.html icon_name="cancel" content=dont_extra_text style="text-error" %}
  </li>
</ul>

### Sign out

Users need a clearly marked button to sign out after a user has signed in to your application. This button replaces the Sign-in button on the interface, preferably in the same location. The Sign-out button style should match the Sign-in button.

{% capture match_buttons %}
<span markdown="1">
  <span class="image-example__do-dont">DO</span>: The Sign-out button style should match the Sign-in button.
</span>
{% endcapture %}

<div class="grid-row">
  <div class="usa-image-example usa-image-example--correct">
    <figure class="usa-image-example__figure">
      <img class="usa-image-example__image usa-image-example__image--bordered" src="{{ site.baseurl }}/assets/img/sign-out-button.png"
        alt='An example agency website header with the button "Sign out" at top right' />
    </figure>
  </div>
</div>
<div class="grid-row">
  <div class="usa-image-example usa-image-example--correct">
    <figure class="usa-image-example__figure">
      <img class="usa-image-example__image usa-image-example__image--bordered" src="{{ site.baseurl }}/assets/img/sign-out-menu.png"
       alt='An example agency website header with two buttons labeled "Menu options" and "Sign out" at top right'
       class="display-block grid-col-auto green-bottom-border" />
      <figcaption class="usa-image-example__figcaption">
        <ul class="usa-icon-list usa-icon-list--size-xs">
          <li class="usa-icon-list__item">
            {% include icon_list.html icon_name="check_circle" style="text-success" content=match_buttons %}
          </li>
        </ul>
      </figcaption>
    </figure>
  </div>
</div>

[Next step: Help text guidance]({{ site.baseurl }}/user-experience/help-text/)
