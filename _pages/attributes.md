---
title: User attributes
lead: >
  login.gov user accounts are either proofed (IAL2) or self-asserted (IAL1), corresponding to <a href="http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63-3.pdf">NIST 800-63-3</a> Identity Assurance Level (IAL).
---

Here are the possible attributes that can be requested at a given IAL. This table contains the available user attributes, the IAL they are associated with, and how they can be accessed in OpenID Connect and SAML.

It is important to expect any number of characters in the `(string)` datatype unless directly followed by a number such as `(string36)`.

The following fields are stored together in a text datatype with a maximum length of 65,535 bytes:<br>
First name, Last name, Address, Phone, Date of birth, Social security number

<table>
  <thead>
    <th>Attribute</th>
    <th>IAL1</th>
    <th>IAL2</th>
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
`uuid`
</td>
    </tr>
    <tr>
<td markdown="1">
**Email**<br>The user's email address.
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
`email`
</td>
    </tr>
    <tr>
<td markdown="1">
**First name**<br>The user's first (given) name.
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
`first_name`
</td>
    </tr>
    <tr>
<td markdown="1">
**Last name**<br>The user's last (family) name.
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
`last_name`
</td>
    </tr>
    <tr>
<td markdown="1">
**Address**<br>The user's address, including street, city, state, and zip code.
</td>
<td></td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
`address` (object)

The [address claim](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim), containing `street_address`(string), `locality`(city, string), `region`(state, string), and `postal_code`(zip code, string5). Requires the `address` scope.
</td>
<td markdown="1">
`address1` <br />
`address2` <br />
`city` <br />
`state` <br />
`zipcode`
</td>
    </tr>
    <tr>
<td markdown="1">
**Phone**<br>The user's phone number formatted as [E.164](https://en.wikipedia.org/wiki/E.164), for example: `+18881112222`
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
`phone`
</td>
    </tr>
    <tr>
<td markdown="1">
**Date of birth**<br>Formatted as [ISO 8601:2004](https://en.wikipedia.org/wiki/ISO_8601), for example: `YYYY-MM-DD`
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
`dob`
</td>
    </tr>
    <tr>
<td markdown="1">
**Social security number**<br>
Example:<br>`111-11-1111`
</td>
<td></td>
<td markdown="1">
![checkmark][checkmark]
</td>
<td markdown="1">
`social_security_number`(string11)

Requires the `social_security_number` scope.
</td>
<td markdown="1">
`ssn`
</td>
    </tr>
    <tr>
<td markdown="1">
**Verification timestamp** <br />
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
`x509_subject` (string)
`x509_presented` (string)

Requires the `x509` scope
</td>
<td markdown="1">
n/a
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

Requires the `x509_presented` scope.
</td>
<td markdown="1">
`x509_presented`
</td>
    </tr>
  </tbody>
</table>

[checkmark]: {{ site.baseurl }}/assets/img/check.svg
