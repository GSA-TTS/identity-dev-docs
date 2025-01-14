junautogroup:patch-1---
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
    links:
      - text: OIDC Redirect URI
        href: "#oidc-redirect-uri"
      - text: SAML Return to SP URL
        href: "#saml-return-to-sp-url"
  - text: Failure to proof URL
    href: "user-experience/failure-proof/"
  - text: Knowledge articles
    href: "user-experience/knowledge-articles/"
  - text: FAQ content
    href: "user-experience/faq-content/"

---

## Determine your application’s return to service provider URL

When a user does not authenticate successfully, they should be returned to the service provider application to restart the authentication process. It is important that the user returns to a familiar site and that they have a clear path back to the authentication workflow.

Depending on the type of integration (OIDC or SAML) you will need to set the `redirect_uri` or the `return_to_sp_url`.

### OIDC Redirect URI:

Your integration should include a redirect URI for successful authentication attempts and canceled authentication attempts. Ideally, the user will be returned to the app site or the Login.gov form and can restart the authentication process. The URIs can be public, internal, or localhost, or a custom scheme to support native applications, for example: `gov.agency.app://result`.

### SAML Return to SP URL:

This URL will be used if a user chooses to cancel out of the authentication workflow or return to the app site. For example, users would be returned to: `https://app.agency.gov`.

[Next step: For Identity Verification permitted applications, determine your application’s failure to proof URL]({{ site.baseurl }}/user-experience/failure-proof/)
