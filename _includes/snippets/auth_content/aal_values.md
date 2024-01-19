{% capture aal_values %}
  We default to requiring a user to be authenticated with a second factor:
- **`urn:gov:gsa:ac:classes:sp:PasswordProtectedTransport:duo`**
    This specifies that a user has been authenticated with a second factor. This value will be returned in the user attributes by default. We do not allow strict AAL1, because it implies that a user did not authenticate with a second factor. This setting requires users to reauthenticate with a separate second factor (i.e. not a remembered device) once every 30 days at a minimum.

Stricter behavior can be specified by adding one of:

  - **`http://idmanagement.gov/ns/assurance/aal/2`**
      This is the same as the default behavior except users must reauthenticate with a separate second factor (i.e. not a remembered device) once every 12 hours.
  - **`http://idmanagement.gov/ns/assurance/aal/2?phishing_resistant=true`**
      This specifies that a user has been authenticated with a crytographically secure method, such as WebAuthn or using a PIV/CAC. Users must _always_ authenticate with a second factor.
  - **`http://idmanagement.gov/ns/assurance/aal/2?hspd12=true`**
      This specifies that a user has been authenticated with an HSPD12 credential (requires PIV/CAC). Users must _always_ authenticate with a second factor.
{% endcapture %}
<div markdown="1">
{{ aal_values | markdownify }}
</div>
