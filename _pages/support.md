---
title: Support
sidenav:
  - text: FAQ
    href: "#frequently-asked-questions"
  - text: Troubleshooting
    href: "#troubleshooting"
    links:
      - text: Login.gov Errors
        href: "#logingov-errors"
      - text: Browser Console Errors
        href: "#browser-console-errors"
      - text: Other Application Issues
        href: "#other-application-issues"
      - text: Other Tips & Tools
        href: "#other-tips--tools"
  - text: Contacting Partner Support
    href: "#contacting-partner-support"
---
## Login.gov support desk

If you have technical questions that are not covered by these FAQ's, submit a ticket to the <a
    class="usa-link usa-link--external"
    rel="noreferrer"
    target="_blank"
    href="https://zendesk.login.gov"
    >Partner Support Help Desk</a>.

## Frequently Asked Questions

<dl class="usa-accordion usa-accordion--bordered">

{% capture howitworks %}
  {% include support/faq_how_does_it_work.html %}
{% endcapture %}
{% include accordion.html id="how-does-it-work"
                          accordion_id="flow"
                          title="How does Login.gov work with my site?"
                          content=howitworks
%}

{% include accordion.html id="track"
                          accordion_id="user-key"
                          title="What unique key can we use to track users?"
                          content="<p>
      We offer email address and UUID. Since a user can change their email address we recommend tracking users by UUID.
    </p>"
%}

{% include accordion.html id="change-email"
                          accordion_id="email"
                          title="Can a user change their email address?"
                          content="<p>
      Yes. We recommend using UUID as the primary key to track users because the email address can change.
    </p>"
%}

{% include accordion.html id="unique-uuid"
                          accordion_id="uuid"
                          title="Does every user have a unique UUID?"
                          content="<p>
      Every user has a unique UUID per agency for privacy reasons. This means that the same user can return a different UUID depending on which agency they are signing in to. These UUIDs are also globally unique.
    </p>"
%}

{% include accordion.html id="manage-sessions"
                          accordion_id="sessions"
                          title="How does Login.gov manage sessions?"
                          content="<p>
      Once a user is authenticated on Login.gov and passed back to the agency it is up to the agency to manage the user's session.<br/>
      We do not remotely invalidate or expire a user's session.
    </p>"
%}

{% include accordion.html id="ip"
                          accordion_id="ip-address"
                          title="What are the Login.gov IP addresses?"
                          content="<p>
      Login.gov makes no guarantees on IP addresses or ranges. Please use the DNS when querying Login.gov for the latest IPs.
    </p>"
%}

{% include accordion.html id="error"
                          accordion_id="_4xx-error"
                          title="Why is my OIDC or SAML request returning a 4xx error?"
                          content="<p>
      Check the error that was returned. Generally we return the specific errors in the HTML, JSON, or in the redirect url.
    </p>"
%}

{% include accordion.html id="no-error"
                          accordion_id="request-error"
                          title="I do not see an error being returned for my request. Why is my request failing?"
                          content="<p>
      Please contact the engineers at Login.gov via <a href=\"https://zendesk.login.gov\" class=\"usa-link usa-link--external\" rel=\"noreferrer\" target=\"_blank\">Zendesk</a>. They can help diagnose your problem further.
    </p>"
%}

{% include accordion.html id="_2-fa_"
                          accordion_id="_2fa"
                          title="Can we turn off two factor authentication?"
                          content="No."
%}

{% include accordion.html id="cannot-embed"
                          accordion_id="embed"
                          title="Can I embed Login.gov on my site?"
                          content="No. Login.gov only works via redirects to and from an agency site."
%}

{% include accordion.html id="authorize"
                          accordion_id="authorization"
                          title="Does Login.gov handle authorization?"
                          content="<p>
      No. Login.gov only handles authentication. Granting users specific access and permissions is handled on the agency side. For example, some agencies use Active Directory to store what applications a user can access.
    </p>"
%}

{% include accordion.html id="nist-standards"
                          accordion_id="nist-800-63"
                          title="Does Login.gov meet the NIST 800-63 standards for Identity Assurance Levels (IAL) and Authenticator Assurance Levels (AAL)?"
                          content="<p>
      For our Login.gov basic authentication accounts (IAL1), we rely on the user having access to an email address, password, and a secure multi-factor authentication method (AAL2 or higher) such as a phone, authentication app or PIV/CAC where they can receive a secure code to use to sign in to their account.
      <br/><br/>
      For identity proofing, in addition to meeting the above requirements for IAL1/AAL2, we ask users to upload a photograph of their state-issued ID and share their address, phone number and other personal information which is then verified against authoritative sources. For enhanced identity verification (IAL2), users are also required to provide a photo of themselves. Login.gov uses proven facial matching technology that compares the photo exclusively with the user’s photo ID-and does not use the image for any other purpose.
    </p>"
%}

{% include accordion.html id="status"
                          accordion_id="statuspage"
                          title="Where can I check the status of Login.gov?"
                          content="<p>
      Login.gov has a public status page available at <a href=\"https://status.login.gov/\">https://status.login.gov/</a> where you can subscribe to incident notifications via email, SMS, Slack, or RSS.
    </p>"
%}

</dl>

## Troubleshooting

{% include support/oidc.html %}

### Login.gov Errors

<dl class="usa-accordion usa-accordion--bordered">

{% capture unauthedsp %}
  {% include support/faq_unauthorized_sp.html %}
{% endcapture %}
{% include accordion.html id="unauthorized"
                          accordion_id="unauthorizedserviceprovider"
                          title="Unauthorized Service Provider"
                          content=unauthedsp
%}

{% capture authcontext %}
  {% include support/faq_unauthorized_ac.html %}
{% endcapture %}
{% include accordion.html id="unauthorized_auth_context"
                          accordion_id="unauthorizedauthenticationcontext"
                          title="Unauthorized Authentication Context"
                          content=authcontext
%}

{% capture nameidformat %}
  {% include support/faq_unrecognized_nameidformat.html %}
{% endcapture %}
{% include accordion.html id="nameidformat_unrecognized"
                          accordion_id="nameidformatunrecognized"
                          title="NameID Format Unrecognized"
                          content=nameidformat
%}

</dl>

### Browser Console Errors

<dl class="usa-accordion usa-accordion--bordered">

{% capture csp %}
  {% include support/faq_csp_violation.html %}
{% endcapture %}
{% include accordion.html id="redirects"
                          accordion_id="csp"
                          title="Content Security Policy (CSP) Directive Violations"
                          content=csp
%}

{% include accordion.html id="supported-browsers"
                          accordion_id="supportedbrowsers"
                          title="Supported browsers"
                          content="<p>
      Login.gov uses the <a class=\"usa-link\" href=\"https://designsystem.digital.gov/\">US Web Design System (USWDS) </a> components on our websites. The current version (USWDS 3) supports the newest versions of Chrome, Firefox, and Safari. Internet Explorer 11 (IE11) is no longer officially supported and therefore is not recommended for use with Login.gov. If you experience issues connecting with Login.gov, try using one of the recommended browsers before contacting technical support.
    </p>"
%}

</dl>

### Other Application Issues

<dl class="usa-accordion usa-accordion--bordered">

{% include accordion.html id="auth-tokens"
                          accordion_id="authtoken"
                          title="Login.gov Tokens"
                          content="<div>
    <h5>Background:</h5>
    <p>
      Any web application that authenticates its users must manage user sessions in order to avoid requiring their users to constantly re-authenticate. Often, this is done using a browser session token that gets passed back and forth between application resources. Session tokens can be valid for variable amounts of time and when they expire, users are required to re-authenticate. Login.gov does not provide a session token for Service Providers as Login.gov is an authentication service, not an authorization service. The authentication token returned from Login.gov is not a session token and should not be used as one.
    </p>
    <h5>Solution:</h5>
    <p>
      When Service Providers receive a successful authentication response from Login.gov, they should create their own session tokens within their application in order to track their users’ sessions.
    </p>
</div>"
%}

</dl>

### Other Tips & Tools

<dl class="usa-accordion usa-accordion--bordered">

{% include accordion.html id="decoding"
                          accordion_id="tipstools"
                          title="Decoding SAML Requests"
                          content="<div>
    <p>
      SAML requests from browser consoles are URI encoded, base-64-encoded, and deflate-compressed. Here are steps to obtain a human-readable version of your SAML request.
    </p>
    <ol>
    <li>Copy and paste the SAML request into a URI decoder (e.g. <a target=\"_blank\" href=\"https://www.samltool.com/url.php\">SAML Tool</a>). Note that you will need to remove any flags that are included in the url (flags are denoted by an &).</li>
    <li>Take the returned value from the URI decoder and use a base-64-decode and inflate tool (eg. <a target=\"_blank\" href=\"https://www.samltool.com/decode.php\">SAML Tool</a>).</li>
    </ol>
  </div>"
%}

{% capture faq_saml_signature %}
  {% include support/faq_saml_signature.html %}
{% endcapture %}
{% include accordion.html id="saml-signature"
                          accordion_id="samlsignaturetroubleshooting"
                          title="SAML Signature Troubleshooting"
                          content=faq_saml_signature
%}

</dl>

## Contacting Partner Support

**The best way to reach out to the integration experience team is [via our Zendesk portal](https://zendesk.login.gov/)**. We understand email may be more convenient, but it is important that attachments and other information about your issue stay together.  Attachments and email threads can become confusing when forwarded in a Zendesk ticket. For these reasons, we encourage partners to use our [Zendesk portal](https://zendesk.login.gov/) rather than other methods whenever possible. 

If you prefer using Slack, we have a slack channel for partners, **#login-partner-support**. You can request access to this channel by opening a Zendesk ticket. This channel includes other partners and Login.gov engineers that occasionally chime in. It should not be used as a substitute to Zendesk.

<dl class="usa-accordion usa-accordion--bordered">

{% capture faq_zendesk %}
  {% include support/faq_zendesk_guidelines.md %}
{% endcapture %}
{% include accordion.html id="zendesk_guidelines"
                          accordion_id="zendesk-guidelines"
                          title="Zendesk Guidelines"
                          content=faq_zendesk
%}

{% capture faq_issues_help %}
  {% include support/faq_issues_we_can_help.md %}
{% endcapture %}
{% include accordion.html id="issues_we_can_help_with"
                          accordion_id="issues-we-can-help-with"
                          title="Issues We Can Help With"
                          content=faq_issues_help
%}

{% capture faq_issues_no_help %}
  {% include support/faq_issues_we_cant_help.md %}
{% endcapture %}
{% include accordion.html id="issues_we_cannot_help_with"
                          accordion_id="issues-we-cannot-help-with"
                          title="Issues We Cannot Help With"
                          content=faq_issues_no_help
%}

{% capture faq_user_support %}
  {% include support/faq_direct_to_user_support.md %}
{% endcapture %}
{% include accordion.html id="user_support"
                          accordion_id="user-support"
                          title="Issues To Direct To User Support"
                          content=faq_user_support
%}

</dl>

