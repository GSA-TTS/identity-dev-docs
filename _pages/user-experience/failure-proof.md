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
    links:
      - text: What is a Failure to Proof URL?
        href: "user-experience/failure-proof/#what-is-a-failure-to-proof-url"
      - text: What should the Failure to Proof page contain?
        href: "user-experience/failure-proof/#what-should-the-failure-to-proof-page-contain"
      - text: How does a user end up on the Failure to Proof page?
        href: "user-experience/failure-proof/#how-does-a-user-end-up-on-the-failure-to-proof-page"
  - text: Knowledge articles
    href: "user-experience/knowledge-articles/"
  - text: FAQ content
    href: "user-experience/faq-content/"

---

## Identity Verification: Create a Failure to Proof URL
Applications using Login.gov's identity verification services are required to provide an alternative method of accessing agency services to support users who are unable to complete Login.gov’s identity verification process. This is based on existing [OMB M-23-22 policy](https://bidenwhitehouse.archives.gov/wp-content/uploads/2023/09/M-23-22-Delivering-a-Digital-First-Public-Experience.pdf) that requires agencies to offer these alternative channels for access to services.

Our Alternative IdV Playbook, which is provided to you during onboarding, explains this in detail. This page serves as a high-level overview.

### What is a Failure to Proof URL?
The Failure to Proof URL is a webpage created and maintained by you where users will be redirected if they are unable to successfully complete the Login.gov identity verification process. Any integration that uses our identity verification services is required to register a Failure to Proof URL in our Partner Portal before we can deploy your integration to our production environment.

### What should the Failure to Proof page contain?

Below are the main points the Failure to Proof page should address:

- Explain that the user ended up on that page because they were not able to verify their identity with Login.gov

- Link to Login.gov's [identity verification help articles](https://www.login.gov/help/verify-your-identity/overview/) and [Contact](https://www.login.gov/contact/) page to see if Login.gov is able to help the user with their verification issues.

- If there’s nothing more Login.gov can do, provide a way to contact your agency to get help accessing services, and/or a link to the alternative method for accessing services

You can find examples of Failure to Proof pages that meet our guidelines in our Alternative IdV Playbook.

### How does a user end up on the Failure to Proof page?

A user will only end up on your Failure to Proof page if they manually choose to exit out of the Login.gov identity verification process. Throughout the process, there is a "Cancel" link the user can click, which will take them to a screen with three options:

1) Continue the verification process
2) Start over from the beginning
3) Exit Login.gov

If the user chooses to exit Login.gov, we will send them to the Failure to Proof URL that you configured in the Partner Portal.

The two most common reasons a user would choose to exit the verification process are:

1. They went through the whole process, or as much as possible, but
were not successful, and chose to cancel and exit Login.gov
2. They canceled out of the identity verification process before attempting to complete it

Want to discuss options for your Failure to Proof URL? <a
  class="usa-link usa-link--external"
  rel="noreferrer"
  target="_blank"
  href="https://zendesk.login.gov">
  Contact us
</a>

[Next step: Create knowledge articles for Login.gov customer support]({{ site.baseurl }}/user-experience/knowledge-articles/)
