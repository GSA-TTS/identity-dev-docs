---
title: Frequently asked questions
---

<div class="usa-accordion usa-accordion-bordered" aria-multiselectable="true">

<h1 class="usa-accordion-heading">
<button class="usa-accordion-button" aria-controls="flow">
How does login.gov work with my site?
</button>
</h1>
<div id="flow" class="usa-accordion-container">
<div class="usa-accordion-content" markdown="1">
We encourage you to create an account directly on [login.gov](https://secure.login.gov/) or an agency partner like
[USAJobs](https://www.usajobs.gov/) to see login.gov in action.
Generally a site will place a login button on their site.  When the user clicks this button they redirect to login.gov
where they can sign in or create an account.  The login.gov site will be branded with the agency logo and can
include help text for migrating existing users.
After authenticating with login.gov they are redirected back to the agency with a unique UUID or email address that
identifies the user.
</div>
<button class="usa-accordion-close-button">Close</button>
</div>


<h1 class="usa-accordion-heading">
<button class="usa-accordion-button" aria-controls="programming">
How do I integrate with login.gov?
</button>
</h1>
<div id="programming" class="usa-accordion-container">
<div class="usa-accordion-content" markdown="1">
1. Choose a protocol: OpenID Connect or SAML.  We recommend OpenID Connect since it is a more modern and flexible
protocol and generally leads to a quicker integration.
2. Download a sample application in your preferred language.
3. Get added to the sandbox where you can begin testing your applications.
4. Customize the sample code to your needs.
5. Once the applications are working correctly you can request to be promoted to production.
We will add your production configuration to the next production release which occurs on two week release cycles.
</div>
<button class="usa-accordion-close-button">Close</button>
</div>


<h1 class="usa-accordion-heading">
<button class="usa-accordion-button" aria-controls="user-key">
What unique key can we use to track users?
</button>
</h1>
<div id="user-key" class="usa-accordion-container">
<div class="usa-accordion-content" markdown="1">
We offer email address and UUID.  Since a user can change their email address we recommend tracking users by UUID.
</div>
<button class="usa-accordion-close-button">Close</button>
</div>


<h1 class="usa-accordion-heading">
<button class="usa-accordion-button" aria-controls="email">
Can a user change their email address?
</button>
</h1>
<div id="email" class="usa-accordion-container">
<div class="usa-accordion-content" markdown="1">
Yes.  This is why we recommend using UUID as the primary key.
</div>
<button class="usa-accordion-close-button">Close</button>
</div>


<h1 class="usa-accordion-heading">
<button class="usa-accordion-button" aria-controls="uuid">
Does every user have a unique UUID?
</button>
</h1>
<div id="uuid" class="usa-accordion-container">
<div class="usa-accordion-content" markdown="1">
Every user has a unique UUID per agency for privacy reasons.  This means that the same user can return a different UUID depending on which agency they are signing in to.  These UUIDs are also globally unique.  We do offer sharing of UUIDs between agencies with user consent on a case by case basis.
</div>
<button class="usa-accordion-close-button">Close</button>
</div>


<h1 class="usa-accordion-heading">
<button class="usa-accordion-button" aria-controls="sessions">
How does login.gov manage sessions?
</button>
</h1>
<div id="sessions" class="usa-accordion-container">
<div class="usa-accordion-content" markdown="1">
Once a user is authenticated on login.gov and passed back to the agency it is up to the agency to manage the user's session.
We do not remotely invalidate or expire a user's session.
</div>
<button class="usa-accordion-close-button">Close</button>
</div>



<h1 class="usa-accordion-heading">
<button class="usa-accordion-button" aria-controls="ip-address">
What are the login.gov IP addresses?
</button>
</h1>
<div id="ip-address" class="usa-accordion-container">
<div class="usa-accordion-content" markdown="1">
Login.gov makes no guarantees on IP addresses or ranges.  Please use the DNS when querying login.gov for the latest IPs.
</div>
<button class="usa-accordion-close-button">Close</button>
</div>


<h1 class="usa-accordion-heading">
<button class="usa-accordion-button" aria-controls="4xx-error">
Why is my OIDC or SAML request returning a 4xx error?
</button>
</h1>
<div id="4xx-error" class="usa-accordion-container">
<div class="usa-accordion-content" markdown="1">
Check the error that was returned.  Generally we return the specific errors in the HTML, JSON, or in the redirect url.
</div>
<button class="usa-accordion-close-button">Close</button>
</div>


<h1 class="usa-accordion-heading">
<button class="usa-accordion-button" aria-controls="request-error">
I do not see an error being returned for my request. Why is my request failing?
</button>
</h1>
<div id="request-error" class="usa-accordion-container">
<div class="usa-accordion-content" markdown="1">
Feel free to contact the engineers at login.gov.  They can help diagnose your problem further.
</div>
<button class="usa-accordion-close-button">Close</button>
</div>


<h1 class="usa-accordion-heading">
<button class="usa-accordion-button" aria-controls="2fa">
Can we turn off two factor authentication?
</button>
</h1>
<div id="2fa" class="usa-accordion-container">
<div class="usa-accordion-content" markdown="1">
No.
</div>
<button class="usa-accordion-close-button">Close</button>
</div>


<h1 class="usa-accordion-heading">
<button class="usa-accordion-button" aria-controls="embed">
Can I embed login.gov on my site?
</button>
</h1>
<div id="embed" class="usa-accordion-container">
<div class="usa-accordion-content" markdown="1">
No.  Login.gov only works via redirects to and from an agency site.
</div>
<button class="usa-accordion-close-button">Close</button>
</div>


<h1 class="usa-accordion-heading">
<button class="usa-accordion-button" aria-controls="authorization">
Does login.gov handle authorization?
</button>
</h1>
<div id="authorization" class="usa-accordion-container">
<div class="usa-accordion-content" markdown="1">
No.  login.gov only handles authentication. Granting users specific access and permissions is handled on the agency side.  For example, some agencies use active directory to store what applications a user can access.
</div>
<button class="usa-accordion-close-button">Close</button>
</div>

</div>
