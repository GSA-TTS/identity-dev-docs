---
title: Glossary
---

# Glossary

There are many different definitions for terms in the Identity Management ecosystem; here are those terms and their definitions.

The goal of the glossary is to define common Identity terms so that all parties can communicate about Identity without confusion. Some terms are used differently in specific contexts or dialects; we will map where these terms are used incorrectly or interchangeably.

***

## -A-

**Attribute Aggregation**

**Aggregation Agent**

**Access Decision Point**

**Attribute-Based Access Control**

**(Single-Source) Attribute Providers**

**(Multi-Source) Attribute Providers**

**Attribute Exchange**

**Attribute Query**

**Authentication (AuthN)**

**(Mutual) Authentication**

**Authorization (AuthZ)**

## -B-

**(Double) Blind Privacy**
> A privacy architecture that allows the [IdP](#) and [RP](#) to collaborate with each other without the need for reading or modifying any User data traveling through the network with the intent there is zero disclosure of [PII](#).

**(Triple) Blind Privacy**
> A privacy architecture that includes the [Double Blind Privacy](#) model, with the addition of the [Hub](#) having zero disclosure  to User’s [PII](#).

> SOURCE [Privacy By Design](https://www.ipc.on.ca/images/Resources/operationalizing-pbd-guide.pdf) | [SecureKey](http://securekey.com/wp-content/uploads/2015/09/SK-UN117-Trust-Framework-SecureKey-Concierge-Canada.pdf)

## -C-

**Credential**

> An object or data structure that authoritatively binds an identity (and optionally, additional attributes) to a token possessed and controlled by a Subscriber.
> SOURCE: [SP 800-63](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63-2.pdf)

> Evidence attesting to one’s right to credit or authority.
> SOURCE: [FIPS 201](http://csrc.nist.gov/publications/fips/fips201-1/FIPS-201-1-chng1.pdf)

> Evidence or testimonials that support a claim of identity or assertion of an attribute and usually are intended to be used more than once.
> SOURCE: [CNSSI-4009](http://www.ncsc.gov/nittf/docs/CNSSI-4009_National_Information_Assurance.pdf) | [Searchable Source](http://www.fismapedia.org/index.php/Category:CNSSI_4009_Terms)

**Credential Service Provider (CSP)**
> A trusted entity that issues or registers Subscriber tokens and issues electronic credentials to Subscribers. The CSP may encompass [Registration Authorities (RAs)](#) and [Verifiers](#) that it operates. A CSP may be an independent third party, or may issue credentials for its own use.
> SOURCE: [SP 800-63](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63-2.pdf)

> A CSP is often also an [IdP](#).

## -D-

## -E-

**Encryption**

**(Public Key) Encryption**

**(Symmetric) Encryption**

**(Asymmetric) Encryption**

**Entitlement**
>Documents that indicate that the holder is eligible for a service or benefit, such as health care.

>A set of rules, defined by the IT resource owner, for managing access to a resource (asset, service, or entity) and for what purpose.  A User's level of access is conditioned not only by your identity but is also likely to be constrained by a number of further security considerations.

>SOURCE [Entities and Entitlement](http://blog.opengroup.org/2012/08/07/entities-and-entitlement-the-bigger-picture-of-identity-management/)

**Evidence Verifier**

**Evidence Verification**

**Evidence Verification Service**

## -F-

**Federation**

**Fraud Detection**

**Fraud Indicator**

**Fraud Signaling**

## -G-

## -H-

**Hash**

**Hashing Algorithm**

**Hub**
>Hub is the idea of an identity "traffic controller" that interacts with requesters and requestees during an identity authentication workflow. It "manages communications between Users, [RP](#) and [IdP](#). It makes sure that users can _assert_ their identities securely and safely, and that relying parties can be confident that users are who they say they are."

>On the basis of this _assertion_, the Hub can aid in making an access control decision - it can decide whether to perform some service for the connecting parties. _Will be revised as we make progress_

>SOURCE: [Wikipedia](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) | [UK Digital Services](https://www.gov.uk/service-manual/identity-assurance)

## -I-

**Identity Access Management (IAM)**

**Identity Attribute**
> A property of a Digital Subject that may have zero or more values. Generally known as an "attribute" (name, first name, shoe size, social security number, religion, marital status, etc.) in digital form (so it's attached to a Digital Subject). The attributes exist whether or not they have a value and whether or not they're part of a Claim.

**Identity Account Management**

**Identity Broker Service**

**Identity Proofing**
> The process by which a CSP and a RA collect and verify information about a person for the purpose of issuing credentials to that person.

**Identity Provider (IdP)**
> An Identity Provider, also known as Identity Assertion Provider, is responsible for (a) providing identifiers for users looking to interact with a system, and (b) asserting to such a system that such an identifier presented by a user is known to the provider, and (c) possibly providing other information about the user that is known to the provider.

> An Identity Provider can be described as a Service Provider for storing identity profiles and offering incentives to other SPs with the aim of federating user identities.

**(Null) Identity**

**Identity Resolution**
> The ability to distinguish a person from all others within the context of the total population of persons of interest.

**Identity Score**

**Identity Trust Framework**

**Identity Verification (IdV)**

## -J-

## -K-

**Key**

**(Public) Key**

**(Public) Key Infrastructure**

**(Symmetric) Key**

**(Asymmetric) Key**

## -L-

**Local ID**

**Local Matching Service**

**Local Matching Service Datastore**

**Level Of Assurance (LOA)**

## -M-

**Matching Service**

**Meaningless But Unique Number (MBUN)**

**Modeling for Authentication Solution**
> Two Party Model - User and Service Provider

> Three Party Model - User, Identity Provider and Service Provider

> Four Party model - User, Identity Provider, Attribute Provider and Service Provider

> SOURCE: [NISTIR 7817](http://nvlpubs.nist.gov/nistpubs/ir/2012/NIST.IR.7817.pdf)

**Multi-factor Authentication**
> describes two-factor and higher levels of authentication. Anything which requires more than just a username and password is considered MFA. (eg. passphrase + OTP via phone, passphrase + browser fingerprint + phone OTP). Note, however, that MFA is meant to describe combining different types of authentication factors: possession, knowledge and inherence.

## -N-

**Null Identity**
>  An identity record present in the database that is missing one or more of the attributes included in an analysis that causes a search error and renders that record invalid for the purpose of the analysis.

## -O-

## -P-

**Personally Identifiable Information (PII)**

**Privilege**

**Provider ID**

**Provisioning**

**(Just-In-Time) Provisioning**

**(De)provisioning**

## -Q-

## -R-

**Relying Party**
> An entity that relies upon the subscriber’s credentials, typically to process a transaction or grant access to information or a system.

> SOURCE: [CNSSI-4009](http://www.ncsc.gov/nittf/docs/CNSSI-4009_National_Information_Assurance.pdf) | [Searchable Source](http://www.fismapedia.org/index.php/Category:CNSSI_4009_Terms)

> An entity that relies upon the Subscriber's token and credentials or a Verifier's assertion of a Claimant’s identity, typically to process a transaction or grant access to information or a system. SOURCE: SP 800-63

**Registration Authority (RA)**
> A trusted entity that establishes and vouches for the identity or attributes of a Subscriber to a CSP. The RA may be an integral part of a CSP, or it may be independent of a CSP, but it has a relationship to the CSP(s).

**Risk**

**Risk Factor**

## -S-

**Service Provider (SP)**

## -T-

**Trust Framework Solutions**

## -U-

## -V-

**Verifier**
> An entity that verifies the Claimant’s identity by verifying the
Claimant’s possession and control of a token using an authentication
protocol. To do this, the Verifier may also need to validate
credentials that link the token and identity and check their status.
>SOURCE: SP 800-63

> An entity which is or represents the entity requiring an authenticated
identity. A verifier includes the functions necessary for engaging in
authentication exchanges.
>SOURCE: FIPS 196

## -W-

## -X-

## -Y-

## -Z-
