---
title: OpenID Connect
lead: >
    [OpenID Connect](http://openid.net){:class="usa-link--external"} (OIDC) is a simple identity layer built on top of the OAuth 2.0 protocol. Login.gov supports [version 1.0](http://openid.net/specs/openid-connect-core-1_0.html){:class="usa-link--external"} of the specification and conforms to the [iGov Profile](https://openid.net/wg/igov){:class="usa-link--external"}.
sidenav:
  - text: Getting started
    href: "oidc/getting-started/"
  - text: Authorization
    href: "oidc/authorization/"
  - text: Token
    href: "oidc/token/"
  - text: User info
    href: "oidc/user-info/"
  - text: Certificates
    href: "oidc/certificates/"
  - text: Logout
    href: "oidc/logout/"
    links:
        - text: Logout request
          href: "#logout-request"
        - text: Logout response
          href: "#logout-response"

---

<div class="grid-row grid-gap">
    <div class="desktop:grid-col-8 mobile:grid-col-full" markdown="1">

## Logout

Login.gov supports [RP-Initiated Logout](https://openid.net/specs/openid-connect-session-1_0.html#RPLogout){:class="usa-link--external"}, allowing clients to log users out of their current Login.gov session and redirect them back to the Relying Party.

Login.gov does not support Single Logout (SLO). The logout action will terminate the user’s session at Login.gov but will not end any other potentially active sessions within service provider applications. For example, if a user signs in to applications A and B through Login.gov, a logout request from A will end their Login.gov session, but will not affect the session in application B.

**User experience impact:**

As per the OIDC spec, Login.gov will display a Logout confirmation screen to users on logout. Users will need to click a button to complete the logout process. This protects against forged logout request attacks.

If the user does not click the button, they will **not** be redirected back to your application.

### Logout request

To log out a user, send them to the `/openid_connect/logout` endpoint with the following parameters:

<div class="dev-doc-row">
    <div class="grid-row">
    <div class="grid-col-5">
        <h4 class="parameters clearfix">client_id</h4>
    </div>
    <div class="grid-col-7 padding-bottom-2">
        The unique identifier for the client. This will be registered with the Login.gov IdP in advance.
    </div>
    </div>
</div>
<div class="dev-doc-row">
    <div class="grid-row">
    <div class="grid-col-5">
        <h4 class="parameters clearfix">post_logout_redirect_uri</h4>
    </div>
    <div class="grid-col-7 padding-bottom-2">
        The URI Login.gov will redirect to after logout. <strong>This must also be registered with the Login.gov IdP in advance.</strong>
    </div>
    </div>
</div>
<div class="dev-doc-row">
    <div class="grid-row">
    <div class="grid-col-5">
        <h4 class="parameters clearfix">state <span class="text-normal">(optional)</span></h4>
    </div>
    <div class="grid-col-7 padding-bottom-2">
        A unique value at least 22 characters in length used for maintaining state between the request and the callback. This value will be returned to the client on a successful logout as a parameter of <code class="language-plaintext highlighter-rouge">state</code> added to the redirect back to the <code class="language-plaintext highlighter-rouge">post_logout_redirect_uri</code>.
    </div>
    </div>
</div>

### Logout response

In a **successful logout**, i.e. the request is valid and the user confirms that they want to log out, Login.gov will redirect the user to the provided `post_logout_redirect_uri` with the `state` parameter added to the URL. If the request is invalid, the user will be shown an error page. If the user declines to click the button on the confirmation page, they will not be redirected to the `post_logout_redirect_uri` and there will be no response to your application.


</div>
<div class="usa-layout-docs__main code-snippet-column desktop:grid-col-4">
    <div class="margin-top-2 code-snippet-section position-relative z-index-1">
      <button id="oidc_logout_tab1_button" data-selector="oidc_logout" class="code-button code-button__selected margin-left-2">Request</button>
      <button id="oidc_logout_tab2_button" data-selector="oidc_logout" class="code-button margin-left-2">Response</button>
      <section id="oidc_logout_tab1">
        {% include snippets/oidc/logout/request.md %}
      </section>
      <section id="oidc_logout_tab2" hidden>
        {% include snippets/oidc/logout/response.md %}
      </section>
    </div>
  </div>
</div>
