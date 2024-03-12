---
title: Vectors of trust
lead: >
  Vectors of trust can be used to specify the authentication and proofing features that are engaged for your application.
sidenav:
  - text: Using vectors of trust
    href: "#using-vectors-of-trust"
  - text: Authentication components
    href: "#authentication-components"
---

## Using vectors of trust

Vectors of trust are a combination of individual components. Each component describes a feature or requirement for the user during the transaction. For example, a component may specify that identity-proofing or that a particular MFA method must be used.

Vector components are made up of a upper-case letter followed by a lower-case letter or a number. For example, `P1` or `Ca`. A vector of trust is made by combining these components and arranging them into a period-separated list. For example, `C1.C2.P1.Pb`.

In OIDC vectors of trust are specified using the `vtr` parameter in the authorization request. The `vtr` parameter is a JSON array of vectors. If multiple vectors are included Login.gov will use the first vector specified to determine the requirements for authenticating and identity proofing the user.

In SAML the vector of trust can be sent in an authentication context node.

## Authentication components

Authentication components specify the requirements for authenticating a user. These vector components begin with a `C`.

Login.gov supports the following authentication components:

### C1: Multi-factor authentication

Multi-factor authentication requires the user to sign in with multiple authenticatin factors. This component is used for every single authenticaiton.

### C2: Strong re-authentication

Strong re-authentication requires the user to re-authenticate with a separate second factor (i.e. not a remembered device).

### Ca: Phishing-resistant multi-factor methods

Phishing-resistant multi-factor methods require a user the be authenticated with a crytographically secure method, such as WebAuthn or using a PIV/CAC.

### Cb: PIV/CAC required

PIV/CAC required specifies that a user must be authenticated with an HSPD12 credential (PIV/CAC).

## Proofing components

Proofing components specify the requirements for identity-proofing a user. These vector components begin with a `P`.

If identity-proofing is not required then no proofing vector components should be included in the vector of trust.

Login.gov supports the following proofing components:

### P1: Identity-proofing

This vector requires the user to be identity-verified. If a user has undergone identity-proofing already they will not be required to complete it again.

If this vector is requested then the `C2` vector is also engaged. The strong re-authentication requirements must be met for users to share proofed data.

### Pb: Biometric comparison

This vector requires identity-proofing to be performed with a biometric comparison. The biometric comparison may be remote or in-person.

If this vector is requested the `P1` vector is also necessarily engaged.
