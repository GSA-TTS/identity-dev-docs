---
title: Support
sidenav:
  - text: FAQ
    href: "#frequenty-asked-questions"
  - text: Troubleshooting
    href: "#troubleshooting"
    links:
      - text: Login.gov Errors
        href: "#logingov-errors"
      - text: Console Errors
        href: "#console-errors"
      - text: Other Application Issues
        href: "#other-application-issues"
      - text: Other Tips & Tools
        href: "#other-tips--tools"
---

<br/>

# Frequenty Asked Questions

<div class="usa-accordion usa-accordion--bordered" aria-multiselectable="true">

<h1 class="usa-accordion__heading">
<button class="usa-accordion__button" aria-controls="flow">
How does Login.gov work with my site?
</button>
</h1>
<div id="flow" class="usa-accordion__container">
<div class="usa-accordion__content" markdown="1"  aria-expanded="true">
We encourage you to create an account directly on [Login.gov](https://secure.login.gov/) or an agency partner like
[USAJobs](https://www.usajobs.gov/) to see Login.gov in action.
Generally a site will place a login button on their site. When the user clicks this button they redirect to Login.gov where they can sign in or create an account. The Login.gov site will be branded with the agency logo and can
include help text for migrating existing users.
After authenticating with Login.gov they are redirected back to the agency with a unique UUID or email address that
identifies the user.
</div>
<button class="usa-accordion__close-button">Close</button>
</div>


<h1 class="usa-accordion__heading">
<button class="usa-accordion__button" aria-controls="user-key">
What unique key can we use to track users?
</button>
</h1>
<div id="user-key" class="usa-accordion__container">
<div class="usa-accordion__content" markdown="1">
We offer email address and UUID. Since a user can change their email address we recommend tracking users by UUID.
</div>
<button class="usa-accordion__close-button">Close</button>
</div>


<h1 class="usa-accordion__heading">
<button class="usa-accordion__button" aria-controls="email">
Can a user change their email address?
</button>
</h1>
<div id="email" class="usa-accordion__container">
<div class="usa-accordion__content" markdown="1">
Yes. This is why we recommend using UUID as the primary key.
</div>
<button class="usa-accordion__close-button">Close</button>
</div>


<h1 class="usa-accordion__heading">
<button class="usa-accordion__button" aria-controls="uuid">
Does every user have a unique UUID?
</button>
</h1>
<div id="uuid" class="usa-accordion__container">
<div class="usa-accordion__content" markdown="1">
Every user has a unique UUID per agency for privacy reasons. This means that the same user can return a different UUID depending on which agency they are signing in to. These UUIDs are also globally unique. We do offer sharing of UUIDs between agencies with user consent on a case by case basis.
</div>
<button class="usa-accordion__close-button">Close</button>
</div>


<h1 class="usa-accordion__heading">
<button class="usa-accordion__button" aria-controls="sessions">
How does Login.gov manage sessions?
</button>
</h1>
<div id="sessions" class="usa-accordion__container">
<div class="usa-accordion__content" markdown="1">
Once a user is authenticated on Login.gov and passed back to the agency it is up to the agency to manage the user's session.
We do not remotely invalidate or expire a user's session.
</div>
<button class="usa-accordion__close-button">Close</button>
</div>



<h1 class="usa-accordion__heading">
<button class="usa-accordion__button" aria-controls="ip-address">
What are the Login.gov IP addresses?
</button>
</h1>
<div id="ip-address" class="usa-accordion__container">
<div class="usa-accordion__content" markdown="1">
Login.gov makes no guarantees on IP addresses or ranges. Please use the DNS when querying Login.gov for the latest IPs.
</div>
<button class="usa-accordion__close-button">Close</button>
</div>


<h1 class="usa-accordion__heading">
<button class="usa-accordion__button" aria-controls="4xx-error">
Why is my OIDC or SAML request returning a 4xx error?
</button>
</h1>
<div id="4xx-error" class="usa-accordion__container">
<div class="usa-accordion__content" markdown="1">
Check the error that was returned. Generally we return the specific errors in the HTML, JSON, or in the redirect url.
</div>
<button class="usa-accordion__close-button">Close</button>
</div>


<h1 class="usa-accordion__heading">
<button class="usa-accordion__button" aria-controls="request-error">
I do not see an error being returned for my request. Why is my request failing?
</button>
</h1>
<div id="request-error" class="usa-accordion__container">
<div class="usa-accordion__content" markdown="1">
Feel free to contact the engineers at Login.gov. They can help diagnose your problem further.
</div>
<button class="usa-accordion__close-button">Close</button>
</div>


<h1 class="usa-accordion__heading">
<button class="usa-accordion__button" aria-controls="2fa">
Can we turn off two factor authentication?
</button>
</h1>
<div id="2fa" class="usa-accordion__container">
<div class="usa-accordion__content" markdown="1">
No.
</div>
<button class="usa-accordion__close-button">Close</button>
</div>


<h1 class="usa-accordion__heading">
<button class="usa-accordion__button" aria-controls="embed">
Can I embed Login.gov on my site?
</button>
</h1>
<div id="embed" class="usa-accordion__container">
<div class="usa-accordion__content" markdown="1">
No. Login.gov only works via redirects to and from an agency site.
</div>
<button class="usa-accordion__close-button">Close</button>
</div>


<h1 class="usa-accordion__heading">
<button class="usa-accordion__button" aria-controls="authorization">
Does Login.gov handle authorization?
</button>
</h1>
<div id="authorization" class="usa-accordion__container">
<div class="usa-accordion__content" markdown="1">
No. Login.gov only handles authentication. Granting users specific access and permissions is handled on the agency side. For example, some agencies use active directory to store what applications a user can access.
</div>
<button class="usa-accordion__close-button">Close</button>
</div>


<h1 class="usa-accordion__heading">
<button class="usa-accordion__button" aria-controls="statuspage">
Where can I check the status of Login.gov?
</button>
</h1>
<div id="statuspage" class="usa-accordion__container">
<div class="usa-accordion__content" markdown="1">
Login.gov has a public status page available at <a href="https://status.login.gov/">https://status.login.gov/</a>
where you can subscribe to incident notifications via email, SMS, Slack, or RSS.
</div>
<button class="usa-accordion__close-button">Close</button>
</div>

</div>

<br/>

# Troubleshooting

## Login.gov Errors

<div class="usa-accordion usa-accordion--bordered" aria-multiselectable="true">

<h1 class="usa-accordion__heading">
<button class="usa-accordion__button" aria-controls="unauthorizedserviceprovider">
Unauthorized Service Provider
</button>
</h1>
<div id="unauthorizedserviceprovider" class="usa-accordion__container">
<div class="usa-accordion__content" markdown="1">
<b>Background:</b>

Login.gov recognizes incoming requests from Service Providers by validating the Issuer (for SAML) or ClientID (for OIDC) field sent in the request and checking it against Service Providers registered with Login.gov. The Issuer for each Service Provider is defined in the Issuer field on the Login.gov Dashboard.

<img src="{{ site.baseurl }}/assets/img/dashboard_issuer.png">

This error occurs when Login.gov receives a request from a Service Provider that contains an Issuer/ClientID field that is not registered with Login.gov. The Issuer/ClientID defined in the request must match EXACTLY the Issuer defined in the Dashboard. 

<b>Solution:</b>

Double check the SAML/OIDC request to Login.gov and confirm that the Issuer/ClientID field matches exactly what is defined in the Login.gov Dashboard. See [link to Decoding SAML Requests] for help with decoding SAML Requests. 

Note that certain Service Providers will not allow partners to set or change the Issuer value after the application is configured (e.g. MS Power Apps Portal). In this case, the best option would be to create the Login.gov Dashboard configuration after the Service Provider application has defined the Issuer and use that Issuer in the Dashboard. 

<b>SAML Request Example:</b>

```xml
​​<samlp:AuthnRequest AssertionConsumerServiceURL='https://sp.int.identitysandbox.gov/auth/saml/callback?utf8=%E2%9C%93&amp;loa=1'
                    Destination='https://idp.int.identitysandbox.gov/api/saml/auth'
                    ID='_6fca7b78-9ab7-49f5-bd62-18c48eac3c68'
                    IssueInstant='2017-02-23T20:36:17Z'
                    Version='2.0'
                    xmlns:saml='urn:oasis:names:tc:SAML:2.0:assertion'
                    xmlns:samlp='urn:oasis:names:tc:SAML:2.0:protocol'>
  <saml:Issuer>urn:gov:gsa:SAML:2.0.profiles:sp:sso:rails-int</saml:Issuer>
  <!-- ... -->
</samlp:AuthnRequest>

```

<b>OIDC Request Example:</b>

```bash
https://idp.int.identitysandbox.gov/openid_connect/authorize?
  acr_values=http%3A%2F%2Fidmanagement.gov%2Fns%2Fassurance%2Fial%2F1&
  client_id=${CLIENT_ID}&
  nonce=${NONCE}&
  prompt=select_account&
  redirect_uri=${REDIRECT_URI}&
  response_type=code&
  scope=openid+email&
  state=abcdefghijklmnopabcdefghijklmnop
```
</div>
<button class="usa-accordion__close-button">Close</button>
</div>

<h1 class="usa-accordion__heading">
<button class="usa-accordion__button" aria-controls="unauthorizedauthenticationcontext">
Unauthorized Authentication Context
</button>
</h1>
<div id="unauthorizedauthenticationcontext" class="usa-accordion__container">
<div class="usa-accordion__content" markdown="1">
<b>Background:</b>

For both SAML and OIDC, the Authentication Context Class Reference field can be used to define the Identity Assurance Level (IAL) and Authentication Assurance Level (AAL) on a per-request basis. It can also be used to define which user attributes should be returned from Login.gov upon successful authentication.

This error occurs when Login.gov receives a request containing an unrecognized or unauthorized Authentication Context Class Reference value.

<b>Solution:</b>

Refer to the Login.gov Developer’s Guide for a list of accepted Authentication Context Class Reference values and ensure one or more of these values (and no others) are being sent in all authentication requests:

<div><a target="_blank" href="https://developers.login.gov/oidc/#ial-values">OIDC IAL Values</a></div>
<div><a target="_blank" href="https://developers.login.gov/oidc/#aal-values">OIDC AAL Values</a></div>
<div><a target="_blank" href="https://developers.login.gov/oidc/#request-parameters">OIDC User Attributes</a> - see "scope"</div>
<div><a target="_blank" href="https://developers.login.gov/saml/#identity-assurance-level-ial">SAML IAL Values</a></div>
<div><a target="_blank" href="https://developers.login.gov/saml/#authentication-assurance-level-aal">SAML AAL Values</a></div>
<div><a target="_blank" href="https://developers.login.gov/saml/#attributes">SAML User Attributes</a></div>

<b>Important Note for SAML Service Providers:</b>

Login.gov requires AAL2 at minimum by default and so cannot accept AAL1 values for the Authentication Context Class Reference value unless the incoming requests allows Login.gov to increase the AAL to 2. For SAML requests, this means defining the optional Comparison field in the RequestedAuthContext SAML field as “minimum” or “better”. See below for a sample SAML request with an AAL of 1 and the optional Comparison field.

```xml
<samlp:AuthnRequest ...>
  <!-- ... -->
  <samlp:RequestedAuthnContext Comparison='minimum'>
    <saml:AuthnContextClassRef>http://idmanagement.gov/ns/assurance/ial/2</saml:AuthnContextClassRef>
<saml:AuthnContextClassRef>urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport</saml:AuthnContextClassRef>
    <saml:AuthnContextClassRef>http://idmanagement.gov/ns/requested_attributes?ReqAttr=email</saml:AuthnContextClassRef>
  </samlp:RequestedAuthnContext>
</samlp:AuthnRequest>
```

Service Providers that cannot accommodate either sending a specific Authentication Context Class Reference or sending the optional Comparison field cannot currently be integrated with Login.gov (e.g. MS Power Apps Portal). 

See Section 3.3.2.2.1 of the <a target="_blank" href="http://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf">SAML spec for more information.
</div>
<button class="usa-accordion__close-button">Close</button>
</div>

<h1 class="usa-accordion__heading">
<button class="usa-accordion__button" aria-controls="nameidformatunrecognized">
NameID Format Unrecognized
</button>
</h1>
<div id="nameidformatunrecognized" class="usa-accordion__container">
<div class="usa-accordion__content" markdown="1">
<b>Background:</b>

For SAML Identity Providers, NameID is the unique identifier used to identify users across multiple sessions. The NameID Format field specifies the format of the NameID field and is defined and/or restricted by the Identity Provider.

This error occurs when Login.gov receives a SAML request with a NameIDPolicy who’se Format field does not match the NameIDFormat specified by Login.gov. 

```xml
<samlp:NameIDPolicy AllowCreate='true'
                      Format='urn:oasis:names:tc:SAML:1.1:nameid-format:transient'/>

```

<b>Solution:</b>

Refer to the <a target="_blank" href="https://developers.login.gov/saml/#configuration">Login.gov Developers Guide</a> for the acceptable values for the NameIdFormat SAML field. Update the Login.gov Identity Provider configuration within your Service Provider to specify the correct NameIDFormat field.

For SAML Service Providers, see [Decoding SAML Requests]({{ site.baseurl }}/support/#decodingsamlrequests) for help with decoding SAML Requests.
</div>
<button class="usa-accordion__close-button">Close</button>
</div>

</div>

## Console Errors

<div class="usa-accordion usa-accordion--bordered" aria-multiselectable="true">

<h1 class="usa-accordion__heading">
<button class="usa-accordion__button" aria-controls="csp">
Content Security Policy (CSP) Directive Violations
</button>
</h1>
<div id="csp" class="usa-accordion__container">
<div class="usa-accordion__content" markdown="1"  aria-expanded="true">
<b>Background:</b>

Content Security Policy (CSP) is a modern web browser defense for Cross-Site Scripting (XSS) attacks. For more information about CSP and XSS attacks, refer to the <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP">MDN documentation</a> on CSP. 

The <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/form-action">CSP form-action</a> directive restricts which URLs can be used as the target of form submissions from a given context. Certain Chromium-based internet browsers (e.g. Google Chrome and Microsoft Edge) enforce the form-action directive through the entire redirect chain (if any). Other non-Chromium-based browsers only check the first redirect in the chain (e.g. Firefox). For Chromium-based browsers, upon form submission, any attempts to redirect to a url not explicitly listed as a form-action source will violate the CSP directive and cause a failure to load and a console error.

This error occurs when Service Providers attempt to redirect users to a url that is not registered in the Redirect URLs field in the <a target="_blank" href="https://dashboard.int.identitysandbox.gov/">Login.gov Dashboard</a> configuration. All urls that users could be redirected to, even as a passthrough, need to be included in the list of Redirect URLs.

<b>Solution:</b>

Use the Network tab of your web browser to identify which redirect (302) is hanging or failing. Add that uri to the list of Redirect URIs in your Login.gov Dashboard configuration.
</div>
<button class="usa-accordion__close-button">Close</button>
</div>

</div>

## Other Application Issues

<div class="usa-accordion usa-accordion--bordered" aria-multiselectable="true">

<h1 class="usa-accordion__heading">
<button class="usa-accordion__button" aria-controls="authtoken">
Login.gov Tokens
</button>
</h1>
<div id="authtoken" class="usa-accordion__container">
<div class="usa-accordion__content" markdown="1"  aria-expanded="true">
<b>Background:</b>

Any web application that authenticates its users must manage user sessions in order to avoid requiring their users to constantly re-authenticate. Often, this is done using a browser session token that gets passed back and forth between application resources. Session tokens can be valid for variable amounts of time and when they expire, users are required to re-authenticate. Login.gov does not provide a session token for Service Providers as Login.gov is an authentication service, not an authorization service. The authentication token returned from Login.gov is not a session token and should not be used as one.

<b>Solution:</b>

When Service Providers receive a successful authentication response from Login.gov, they should create their own session tokens within their application in order to track their users’ sessions.
</div>
<button class="usa-accordion__close-button">Close</button>
</div>

</div>

## Other Tips & Tools

<div class="usa-accordion usa-accordion--bordered" aria-multiselectable="true">

<h1 class="usa-accordion__heading">
<button class="usa-accordion__button" aria-controls="tipstools">
Decoding SAML Requests
</button>
</h1>
<div id="tipstools" class="usa-accordion__container">
<div class="usa-accordion__content" markdown="1"  aria-expanded="true">
SAML requests from browser consoles are URI encoded, base-64-encoded, and deflate-compressed. Here are steps to obtain a human-readable version of your SAML request.

<ol>
<li>Copy and paste the SAML request into a URI decoder (e.g. <a target="_blank" href="https://www.samltool.com/url.php">SAML Tool</a>). Note that you will need to remove any flags that are included in the url (flags are denoted by an &).</li>
<li>Take the returned value from the URI decoder and use a base-64-decode and inflate tool (eg. <a target="_blank" href="https://www.samltool.com/decode.php">SAML Tool</a>).</li>
</ol>
</div>
<button class="usa-accordion__close-button">Close</button>
</div>

</div>