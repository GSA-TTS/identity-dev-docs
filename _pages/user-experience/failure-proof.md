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
    links:
      - text: What is a Failure to Proof URL?
        href: "user-experience/failure-proof/#what-is-a-failure-to-proof-url"
      - text: Where should the Failure to Proof URL take users?
        href: "user-experience/failure-proof/#where-should-the-failure-to-proof-url-take-users"
  - text: Knowledge articles
    href: "user-experience/knowledge-articles/"
  - text: FAQ content
    href: "user-experience/faq-content/"

---

## Identity Verification: Create a Failure to Proof URL
Applications with Login.gov identity verification need to provide an alternative proofing path to support users who are unable to complete Login.gov’s process.

### What is a Failure to Proof URL?
Login.gov’s agency partners provide a link that their users are directed to if they are unable to verify their identity with Login.gov. This is called the Failure to Proof URL (e.g. `failure_to_proof_url`). This link routes users to a designated page on the agency partner’s site which is configured as part of the agency's integration.

The Failure to Proof URL is shown to users throughout the identity proofing process. Some examples of when a user might encounter this are:

- Users might navigate to this page if they don’t have a valid state-issued ID or Social Security number.
- The Failure to Proof URL is available for users who are not able  to capture or upload photos of their ID.
- Users see the Failure to Proof URL when they encounter errors verifying their ID, personal information, or phone number. Examples of this include:
- Users who enter valid information, but are not able to pass Login.gov’s proofing process because we cannot verify their information.
- Users who have run out of attempts to verify their information.

<figure>
  <img src="{{ site.baseurl }}/assets/img/missing-docs.png"
       alt='A section of a Login.gov page with the heading "Are you missing one of these items?" and three links: "See a list of accepted state-issued IDs", "Learn more about verifying by phone or mail", and "Get help at Partner Agency"."'
       class="display-block grid-col flex-auto flex-align-center margin-y-4">
  <figcaption>An example of what users see when they do not meet the requirements to complete identity verification with Login.gov. The term “Partner Agency” will be replaced by what the agency configures for this portion of their integration.</figcaption>
</figure>

### Where should the Failure to Proof URL take users?

The purpose of the Failure to Proof URL is to provide an actionable next step for users who do not have the required information to complete remote identity verification or otherwise cannot pass the process through Login.gov. The agency’s designated destination page should include instructions for users on what to do to access the agency partner’s services.

Want to discuss options for your Failure to Proof URL? <a
  class="usa-link usa-link--external"
  rel="noreferrer"
  target="_blank"
  href="https://zendesk.login.gov">
  Contact us
</a>

[Next step: Check out our knowledge articles]({{ site.baseurl }}/user-experience/knowledge-articles/)
