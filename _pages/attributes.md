---
title: User attributes
lead: >
  login.gov user accounts are either proofed (LOA3) or not (LOA1), corresponding to <a href="http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63-2.pdf">NIST 800-63-2</a> levels of assurance (LOA).
---

Here are the possible attributes that can be requested at a given LOA. This table contains the available user attributes, the LOA they are associated with, and how they can be accessed in OpenID Connect and SAML.

| Attribute | LOA1 | LOA3 | OpenID Connect | SAML |
| --------- | ---- | ---- | -------------- | ---- |
| **UUID**<br>The user's [universally unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier). | <img src="{{ site.baseurl }}/assets/img/check.svg" alt="checkmark"> | <img src="{{ site.baseurl }}/assets/img/check.svg" alt="checkmark"> | `sub` (string) | `uuid` |
| **Email**<br>The user's email address. | <img src="{{ site.baseurl }}/assets/img/check.svg" alt="checkmark"> | <img src="{{ site.baseurl }}/assets/img/check.svg" alt="checkmark"> | `email` (string)<br><br>Requires the `email` scope. | `email` |
| **First name**<br>The user's first (given) name. | | <img src="{{ site.baseurl }}/assets/img/check.svg" alt="checkmark"> | `given_name` (string)<br><br>Requires `profile` or `profile:name` scopes. | `first_name` |
| **Last name**<br>The user's last (family) name. | | <img src="{{ site.baseurl }}/assets/img/check.svg" alt="checkmark"> | `family_name` (string)<br><br>Requires `profile` or `profile:name` scopes. | `last_name` |
| **Address**<br>The user's address, including street, city, state, and zip code. | | <img src="{{ site.baseurl }}/assets/img/check.svg" alt="checkmark"> | `address` (object)<br><br>The [address claim](https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim), containing `street_address`, `locality` (city), `region` (state), and `postal_code` (zip code). Requires the `address` scope. | `address1`<br>`address2`<br>`city`<br>`state`<br>`zipcode` |
| **Phone**<br>The user's phone number formatted as [E.164](https://en.wikipedia.org/wiki/E.164), for example: `+1 (555) 555-5555` | | <img src="{{ site.baseurl }}/assets/img/check.svg" alt="checkmark"> | `phone` (string)<br><br>Requires the `phone` scope. | `phone` |
| **Date of birth**<br>Formatted as [ISO 8601:2004](https://en.wikipedia.org/wiki/ISO_8601), for example: `YYYY-MM-DD` | | <img src="{{ site.baseurl }}/assets/img/check.svg" alt="checkmark"> | `birthdate` (string)<br><br>Requires `profile` or `profile:birthdate` scopes. | `dob` |
| **Social security number** | | <img src="{{ site.baseurl }}/assets/img/check.svg" alt="checkmark"> | `social_security_number` (string)<br><br>Requires the `social_security_number` scope. | `ssn` |
