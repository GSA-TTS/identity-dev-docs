---
title: Design assets
lead: >
  Integrate with login.gov in a user-friendly manner.
---

##  Overview
In order to create a user-friendly login.gov integration experience, we have some suggested integration user-experience (UX) patterns that you may use on your site. These patterns follow the [U.S. Web Design System](https://designsystem.digital.gov/).

## Buttons
The Sign-in button in should use your primary or important button color. This will help your users know that this is the next step in the process. 

From the [U.S. Web Design System](https://designsystem.digital.gov/components/button/) button usability guidance:
**Give an important action a distinctive style.** Style the button most users should click in a way that distinguishes it from other buttons on the page. Try using the `usa-button--big` variant or the most visually distinct color variant.

**Make sure buttons look clickable.** Use color variations to distinguish static, hover, and active states.

### Sample buttons

<button class="usa-button usa-button--big">Sign in</button>

<button class="usa-button ">Sign in</button>

<button class="usa-button usa-button--secondary">Sign in</button>

<h1 class="usa-accordion-heading">
<button class="usa-accordion-button" aria-controls="email">
Component Code
</button>
</h1>
<div id="email" class="usa-accordion-container">
<div class="usa-accordion-content" markdown="1">
```
<button class="usa-button--big ">Sign in</button>

<button class="usa-button">Sign in</button>

<button class="usa-button usa-button--secondary">Sign in</button>
```
</div>
<button class="usa-accordion-close-button">Close</button>
</div>


## Text introduction guidelines
When you first integrate with login.gov you may want to indicate to your users that your application uses login.gov for authenication or proofing. If you decide to do so, please use the following language:

### What is login.gov?
login.gov is a service that offers secure and private online access to government programs, such as federal benefits, services and applications. With a login.gov account, you can sign into multiple government websites with the same email address and password.

### Why is "YOUR APPICATION" using login.gov?
login.gov uses two-factor authentication, and stronger passwords, that meet new National Institute of Standards of Technology requirements for secure validation and verification. By using login.gov, you’ll get an extra layer of security to help protect your account against password compromises.

