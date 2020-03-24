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
    href: "#agency-logo-guidelines"
  - text: Use of login.gov logo
    href: "#login-logo"

---

##  Overview
In order to create a user-friendly login.gov integration experience, we have some suggested integration user-experience (UX) patterns that you may use on your site. These patterns follow the [U.S. Web Design System](https://designsystem.digital.gov/).

## Buttons
The Sign-in button should use your primary or important button color. This will help your users know that this is the next step in the process. 

From the [U.S. Web Design System](https://designsystem.digital.gov/components/button/) button usability guidance:
**Give an important action a distinctive style.** Style the button most users should click in a way that distinguishes it from other buttons on the page. Try using the `usa-button--big` variant or the most visually distinct color variant.

**Make sure buttons look clickable.** Use color variations to distinguish static, hover, and active states.

### Sample buttons

<button class="usa-button usa-button--big">Sign in</button> <button class="usa-button margin-y-2">Sign in</button> <button class="usa-button usa-button--outline">Sign in</button>


```
<button class="usa-button usa-button--big">Sign in</button>
<button class="usa-button">Sign in</button>
<button class="usa-button usa-button--outline">Sign in</button>
```


## Copy guidelines
When you first integrate with login.gov you may want to indicate to your users that your application uses login.gov for authentication or proofing. If you decide to do so, please use the following language:

### What is login.gov?
login.gov is a service that offers secure and private online access to government programs, such as federal benefits, services and applications. With a login.gov account, you can sign into multiple government websites with the same email address and password.

### Why is `YOUR APPLICATION` using login.gov?
login.gov uses two-factor authentication, and stronger passwords, that meet new National Institute of Standards of Technology requirements for secure validation and verification. By using login.gov, you’ll get an extra layer of security to help protect your account against password compromises.

## Agency logo guidelines
We will publish your agency logo on login.gov to help users understand that partnership between the services. Please follow these guidelines when submitting a logo:

<img src="{{ site.baseurl }}/assets/img/logo-guidelines.png" alt="Agency logo guidelines to be displayed on login.gov- 171px x 40px" class="display-block grid-col flex-auto flex-align-center">


### Contrast and background
**Logos should be high contrast on a transparent background**

<img src="{{ site.baseurl }}/assets/img/agency-logo-contrast.png" alt="Agency logo guidelines should have high contrast" class="display-block grid-col flex-auto flex-align-center">


### File formats accepted
You will be able to use a `.png` or `.svg` logo.
#### png
Provide a file that meets these requirements
<table class="usa-table">
  <caption>PNG file requirements</caption>
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
      <th scope="row"><strong>2x</strong></th>
      <td>171px</td>
      <td>40px</td>
      <td>@144dpi</td>
      <td>my-agency-logo.png</td>
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


