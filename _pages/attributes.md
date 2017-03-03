---
title: User attributes
permalink: /attributes/
---

# User attributes

login.gov accounts can be at one of two levels of verification, corresponding to [NIST 800-63-3](https://pages.nist.gov/800-63-3/) levels of assurance (LOA).

Along with the user's UUID, here are the attributes that can be requested via either SAML or OpenID Connect.

| Attribute              | SAML          | OpenID Connect           | LOA1 | LOA3 |
| ---------------------- | ------------  | ------------------------ | ----- | ----- |
| UUID                   | `uuid`        | `sub`                    | <img src="{{ site.baseurl}}/assets/img/check.svg" alt="checkmark"> | <img src="{{ site.baseurl}}/assets/img/check.svg" alt="checkmark"> |
| Email                  | `email`       | `email`                  | <img src="{{ site.baseurl}}/assets/img/check.svg" alt="checkmark"> | <img src="{{ site.baseurl}}/assets/img/check.svg" alt="checkmark"> |
| First name             | `first_name`  | `given_name`             |       | <img src="{{ site.baseurl}}/assets/img/check.svg" alt="checkmark"> |
| Middle name            | `middle_name` |                          |       | <img src="{{ site.baseurl}}/assets/img/check.svg" alt="checkmark"> |
| Last name              | `last_name`   | `family_name`            |       | <img src="{{ site.baseurl}}/assets/img/check.svg" alt="checkmark"> |
| Address line 1         | `address1`    | `address.street_address` |       | <img src="{{ site.baseurl}}/assets/img/check.svg" alt="checkmark"> |
| Address line 2         | `address2`    | `address.street_address` |       | <img src="{{ site.baseurl}}/assets/img/check.svg" alt="checkmark"> |
| City                   | `city`        | `address.locality`       |       | <img src="{{ site.baseurl}}/assets/img/check.svg" alt="checkmark"> |
| State                  | `state`       | `address.region`         |       | <img src="{{ site.baseurl}}/assets/img/check.svg" alt="checkmark"> |
| Zip code               | `zipcode`     | `address.postal_code`    |       | <img src="{{ site.baseurl}}/assets/img/check.svg" alt="checkmark"> |
| Date of birth          | `dob`         | `birthdate`              |       | <img src="{{ site.baseurl}}/assets/img/check.svg" alt="checkmark"> |
| Social security number | `ssn`         | `social_security_number` |       | <img src="{{ site.baseurl}}/assets/img/check.svg" alt="checkmark"> |
| Phone                  | `phone`       | `phone`                  |       | <img src="{{ site.baseurl}}/assets/img/check.svg" alt="checkmark"> |
