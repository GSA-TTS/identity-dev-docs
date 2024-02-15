---
title: OpenID Connect
lead: >
    [OpenID Connect](https://openid.net){:class="usa-link--external"} (OIDC) is a simple identity layer built on top of the OAuth 2.0 protocol. Login.gov supports [version 1.0](https://openid.net/specs/openid-connect-core-1_0.html){:class="usa-link--external"} of the specification and conforms to the [iGov Profile](https://openid.net/wg/igov){:class="usa-link--external"}.
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

---

{% capture content %}
## Certificates

Login.gov's public key, used to verify signed JWTs (such as the `id_token`), is available in [JWK](https://tools.ietf.org/html/rfc7517){:class="usa-link--external"} format at the `/api/openid_connect/certs` endpoint.

This public key is rotated periodically (on at least an annual basis). It is important to assume the `/api/openid_connect/certs` endpoint could contain multiple JWKs when rotating application signing keys. Be sure to use the JWK endpoint dynamically through [auto-discovery](/oidc/getting-started/#auto-discovery) rather than hardcoding the public key. This ensures that your application will not require manual intervention when the Login.gov public key is rotated.
{% endcapture %}

<div class="grid-row grid-gap">
  <div class="desktop:grid-col-8 mobile:grid-col-full">
    {{ content | markdownify }}
     <a href="{{ '/oidc/logout/' | prepend: site.baseurl }}" class="usa-link margin-top-4 mobile:display-none desktop:display-block">Next step: Logout</a>
  </div>
    <div class="usa-layout-docs__main code-snippet-column desktop:grid-col-4">
      <section id="pkce" class="code-snippet-section">
        <span class="code-button code-button__selected margin-left-2">OpenSSL Command</span>
          {% include snippets/oidc/certificates.md %}
      </section>
    </div>
      <a href="{{ '/oidc/logout/' | prepend: site.baseurl }}" class="usa-link mobile:display-block desktop:display-none margin-top-2">Next step: Logout</a>
</div>
