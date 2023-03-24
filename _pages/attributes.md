---
title: User attributes
lead: >
  Login.gov user accounts are either identity proofed or self-asserted. Login.gov continues to work toward achieving certification of compliance with NIST's IAL2 standard from a third-party assessment organization.
---

Here are the possible attributes that can be requested at a given IAL. This table contains the available user attributes, the IAL they are associated with, and how they can be accessed in OpenID Connect and SAML.

It is important to expect any number of characters in the `(string)` datatype unless directly followed by a number such as `(string36)`. Strings are encrypted and stored in a text datatype with a maximum length of 65,535 bytes.

<table>
  <thead>
    <th>Attribute</th>
    <th>IAL1</th>
    <th>ID Proofed</th>
    <th>OpenID Connect</th>
    <th>SAML</th>
  </thead>
  <tbody>
    <tr>
<td markdown="1">
**UUID**<br /> The user's [universally unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier).
</td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
`sub` (string36)
</td>
<td markdown="1">
`uuid` (string36)
</td>
    </tr>
    <tr>
<td markdown="1">
**Email**<br />The user's email address.
</td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
`email` (string)

Requires the `email` scope.
</td>
<td markdown="1">
`email` (string)
</td>
    </tr>
    <tr>
<td markdown="1">
**All emails**<br />All of the email addresses on the user's account
</td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
`all_emails` (array of strings)
</td>
<td markdown="1">
`all_emails` (array of strings)
</td>
    </tr>
    <tr>
<td markdown="1">
**IAL**<br />Identity Assurance Level [NIST 800-63-3](https://pages.nist.gov/800-63-3/).
</td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
`ial` (url, urn)

See [OpenID Connect IAL values](https://developers.login.gov/oidc/#ial-values)
</td>
<td markdown="1">
`ial` (url, urn)

See [SAML IAL values](https://developers.login.gov/saml/#identity-assurance-level-ial)
</td>
    </tr>
    <tr>
<td markdown="1">
**AAL**<br />Authenticator Assurance Level [NIST 800-63-3](https://pages.nist.gov/800-63-3/).
</td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
`aal` (url, urn)

See [OpenID Connect AAL values](https://developers.login.gov/oidc/#aal-values)
</td>
<td markdown="1">
`aal` (url, urn)

See [SAML AAL values](https://developers.login.gov/saml/#authentication-assurance-level-aal)
</td>
    </tr>
    <tr>
<td markdown="1">
**First name**<br />The user's first (given) name.
</td>
<td></td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
`given_name` (string)

Requires `profile` or `profile:name` scopes.
</td>
<td markdown="1">
`first_name` (string)
</td>
    </tr>
    <tr>
<td markdown="1">
**Last name**<br />The user's last (family) name.
</td>
<td></td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
`family_name` (string)

Requires `profile` or `profile:name` scopes.
</td>
<td markdown="1">
`last_name` (string)
</td>
    </tr>
    <tr>
<td markdown="1">
**Address**<br />The user's address, including street, city, state, and zip code.
</td>
<td></td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1" class="text-no-wrap">
`address` (object)

The [address claim](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim), containing: <br />
`street_address` (string) <br />
`locality` (city, string) <br />
`region` (state, string) <br />
`postal_code` (zip code, string5)
<br /><br />
Requires the `address` scope.
</td>
<td markdown="1">
`address1` (string) <br />
`address2` (string) <br />
`city` (string) <br />
`state` (string) <br />
`zipcode` (string5)
</td>
    </tr>
    <tr>
<td markdown="1">
  **Phone<sup>*</sup>**<br />The user's phone number formatted as [E.164](https://en.wikipedia.org/wiki/E.164), for example: `+18881112222`
</td>
<td></td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
`phone` (string, null)

Requires the `phone` scope.
</td>
<td markdown="1">
`phone` (string, null)
</td>
    </tr>
    <tr>
<td markdown="1">
**Date of birth**<br />Formatted as [ISO 8601:2004](https://en.wikipedia.org/wiki/ISO_8601), for example: `YYYY-MM-DD`
</td>
<td></td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
`birthdate` (string10)

Requires `profile` or `profile:birthdate` scopes.
</td>
<td markdown="1">
`dob` (string10)
</td>
    </tr>
    <tr>
<td markdown="1">
**Social security number**<br />
Example:<br />`111-11-1111`
</td>
<td></td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
`social_security_number` (string11)

Requires the `social_security_number` scope.
</td>
<td markdown="1">
`ssn` (string11)
</td>
    </tr>
    <tr>
<td markdown="1">
  **Verification timestamp<sup>*</sup>** <br />
When the user's identity was last verified (or empty if it has never been verified)
</td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
`verified_at` (number, null)

Seconds since the Unix Epoc

Requires the `profile:verified_at` scope.
</td>
<td markdown="1">
`verified_at` (string, ISO8601 format)
</td>
    </tr>
    <tr>
<td markdown="1">
**x509** <br />
</td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
`x509_issuer` (string)
`x509_presented` (string)
`x509_subject` (string)

Requires the `x509` scope
</td>
<td markdown="1">
n/a
</td>
    </tr>
    <tr>
<td markdown="1">
**x509 Issuer** <br />
</td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
`x509_issuer` (string)

Requires the `x509:issuer` scope.
</td>
<td markdown="1">
`x509_issuer`
</td>
    </tr>
    <tr>
<td markdown="1">
**x509 Subject** <br />
</td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
`x509_subject` (string)

Requires the `x509:subject` scope
</td>
<td markdown="1">
`x509_subject`
</td>
    </tr>
    <tr>
<td markdown="1">
**x509 Presented** <br />
</td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
`x509_presented` (string)

Requires the `x509:presented` scope.
</td>
<td markdown="1">
`x509_presented`
</td>
    </tr>
  </tbody>
</table>
<sup>*</sup> Please note that only `phone` and `verified_at` idV user attributes may be returned as null.

[checkmark]: {{ site.baseurl }}/assets/img/check.svg
