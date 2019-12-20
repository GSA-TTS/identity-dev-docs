---
title: Design assets
lead: >
  Integrate with login.gov in a user-friendly manner.
sidenav:
  - text: Overview
    href: "#overview"
  - text: Buttons
    href: "#buttons"
  - text: Copy guidelines
    href: "#copy-guidelines"
  - text: Agency logos
    href: "#agency-logos-guidelines"
  - text: Use of login.gov logo
    href: "#login-logo"

---

##  Overview
In order to create a user-friendly login.gov integration experience, we have some suggested integration user-experience (UX) patterns that you may use on your site. These patterns follow the [U.S. Web Design System](https://designsystem.digital.gov/).

## Buttons
The Sign-in button in should use your primary or important button color. This will help your users know that this is the next step in the process. 

From the [U.S. Web Design System](https://designsystem.digital.gov/components/button/) button usability guidance:
**Give an important action a distinctive style.** Style the button most users should click in a way that distinguishes it from other buttons on the page. Try using the `usa-button--big` variant or the most visually distinct color variant.

**Make sure buttons look clickable.** Use color variations to distinguish static, hover, and active states.

### Sample buttons

<button class="usa-button usa-button--big">Sign in</button> <button class="usa-button ">Sign in</button> <button class="usa-button usa-button--secondary">Sign in</button>

<h1 class="usa-accordion-heading">
<button class="usa-accordion-button" aria-controls="email">
Component Code
</button>
</h1>
    <div class="usa-accordion-container">
        <div class="usa-accordion-content" markdown="1">
            ```<button class="usa-button usa-button--big">Sign in</button><button class="usa-button ">Sign in</button> <button class="usa-button usa-button--secondary">Sign in</button>```
        </div>
        <button class="usa-accordion-close-button">Close</button>
    </div>


## Copy guidelines
When you first integrate with login.gov you may want to indicate to your users that your application uses login.gov for authenication or proofing. If you decide to do so, please use the following language:

### What is login.gov?
login.gov is a service that offers secure and private online access to government programs, such as federal benefits, services and applications. With a login.gov account, you can sign into multiple government websites with the same email address and password.

### Why is `YOUR APPICATION` using login.gov?
login.gov uses two-factor authentication, and stronger passwords, that meet new National Institute of Standards of Technology requirements for secure validation and verification. By using login.gov, you’ll get an extra layer of security to help protect your account against password compromises.

## Agency logo guidelines

<div class="grid-container">
  <div class="grid-row">
    <div class="tablet:grid-col"><img src="{{ site.baseurl }}/assets/img/logo-guidelines.png" alt="Agency logo guidelines to be displayed on login.gov- 171px x 40px" class="display-block grid-col flex-auto flex-align-center"></div>
    </div>
    <div class="tablet:grid-col">We will publish a logo on login.gov to help users understand that partnership between the services. Please follow these guidelines when submitting a logo:</div>
  </div>
</div>


### Contrast and background
**Logos should be high contrast on a transparent background**

<img src="{{ site.baseurl }}/assets/img/agency-logo-contrast.png" alt="Agency logo guidelines to be displayed on login.gov- 171px x 40px" class="display-block grid-col flex-auto flex-align-center">


### File formats accepted
You will be able to use a `.png` or `.svg` logo.
#### png
Provide both a 1x and 2x resolution png
<table class="usa-table">
  <caption>File formats</caption>
  <thead>
    <tr>
      <th scope="col">Resolution</th>
      <th scope="col">Max width</th>
      <th scope="col">Max height</th>
      <th scope="col">Dots per square inch (dpi)</th>
      <th scope="col">File name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><strong>1x</strong></th>
      <td>171px</td>
      <td>40px</td>
      <td>@72dpi</td>
      <td>my-agency-logo-@1x.png</td>
    </tr>
    <tr>
      <th scope="row"><strong>2x</strong></th>
      <td>342px</td>
      <td>80px</td>
      <td>@72dpi</td>
      <td>my-agency-logo-@2x.png</td>
    </tr>
  </tbody>
</table>

### svg
**Export .svg files**
set **Styling** using **Presentations Attributes**

## Login logo
<img src="{{ site.baseurl }}/assets/img/login-gov-logo.svg" class="usa-logo-img" alt="login.gov logo">
We have a number of additional guidelines pertaining to the use of the login.gov brand and logo. Please use our guidelines so that we can provide a consistent visual experience across all government platforms.

[View the login.gov brand guidelines](https://design.login.gov/brand/)


