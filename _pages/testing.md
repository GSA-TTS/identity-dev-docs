---
title: Testing your app
lead: >
  Once you’ve created your app and implemented an identity protocol, you can register it in the Partner Portal and start testing in our sandbox environment.<br /><br />
  Login.gov has a dedicated onboarding team to support you through the testing and launch. Reach out at the <a href="https://zendesk.login.gov/">Partner Support Help Desk</a>.
redirect_from:
  - /registering-your-sp/
  - /register/
sidenav:
  - text: About the Login.gov sandbox
    href: "#about-the-logingov-sandbox"
  - text: Getting access to the Login.gov sandbox
    href: "#getting-access-to-the-logingov-sandbox"
  - text: Using the sandbox
    href: "#using-the-sandbox"
  - text: If you lost access to a sandbox team
    href: "#if-you-lost-access-to-a-sandbox-team"
  - text: Load Testing
    href: "#load-testing"
  - text: Automated Testing
    href: "#automated-testing"
  - text: Testing identity proofing
    href: "#testing-identity-proofing"

---

## About the Login.gov sandbox

The Login.gov sandbox is an open environment to create and test integrations between Login.gov and your applications. 

 **The Login.gov sandbox environment is supported M-F, 8a-5p ET.** The sandbox is typically available during these hours, though outages may occur.

In the sandbox environment, our [Partner Portal](https://portal.int.identitysandbox.gov/) is where you can manage your test applications. ***It is important to note that your Login.gov production account and your Login.gov sandbox account are two separate accounts.***

## Getting access to the Login.gov sandbox

Login.gov does not manage user accounts in the sandbox.

**If you are an agency partner with a .gov or .mil account:**
You can create an account in the sandbox environment on your own.

**If you are a government contractor:**
Ask your agency partner to help you gain access. Login.gov will not create an account or add you to a team; your partner must do this for you.

**If you are with a government entity that is not a federal agency (a state or municipality) and do not have an email ending in .gov or .mil**
Please submit a support ticket through the [Partner Support Help Desk](https://zendesk.login.gov) to get access to the portal.

## Using the sandbox

1. Visit the Partner Portal at [https://portal.int.identitysandbox.gov/](https://portal.int.identitysandbox.gov/).
1. Click on "Sign in with Login.gov"
1. Click on "I agree" on the "System use notification" page
1. If you already have a Login.gov **sandbox** account, proceed to sign in. Otherwise, click on the "Create an account" option. This will create an account in our sandbox environment, which is separate from any Login.gov production accounts you might have. Due to spam issues, we do not allow creating **sandbox** accounts with the following email domains: aol.com, bellsouth.net, outlook.com, and yahoo.com. This limitation does not apply to our production environment.
1. Once you sign in or complete the account creation process, you should be signed into our Partner Portal, and you can proceed to set things up.
1. If you're not already part of a Team in the Partner Portal, and you are creating an integration for the first time, then the first step is to create a Team. Note that only users with .gov or .mil emails can create Teams. You can access the Teams page by clicking "Teams" in the top right navigation. Alternatively, under the
"Welcome to the Login.gov Partner Portal" section, you can click the "My teams" link, or the "View teams" button. The direct URL is [https://portal.int.identitysandbox.gov/teams](https://portal.int.identitysandbox.gov/teams).
1. Create a new team by selecting the “Continue” button next to “Create your first team.” If you have previously created a team you can move on to the next step.
1. If necessary, add users to that team by clicking the “Add user” button. This is the opportunity to add contractors or anyone without a .gov or a .mil email address.
1. After creating your team, select the Apps tab. This page is where you will find all of the integration configurations you and your team create.
1. Select the “Create a new app” button and follow the steps to register a new application with the Login.gov IdP in the test sandbox environment. You can only have one app creation in progress at a time. There are links to additional information throughout the form. We recommend reading through the descriptions carefully.
1. To troubleshoot specific errors, please visit our error dictionary in the [troubleshooting section of our developer documentation]({% link _pages/support.md %}). If the guidance there does not resolve the error, please submit a support ticket through the [Partner Support Help Desk](https://zendesk.login.gov/).
1. Start testing!
1. When you're ready to go to production, please [follow our production deployment instructions]({% link _pages/production.md %}). We'll manage your configuration's promotion to production. **The move to production may take up to two weeks.**

## If you lost access to a sandbox team

Login.gov does not manage user accounts. If you have lost access to a team:
* Request someone on your team who still has access to re-add you.
* If there is no one left with access, contact the partner agency's Login.gov Point of Contact and request that they re-add you to the team.
* If they are unable to re-add you, request that they open up a ticket through the [Partner Support Help Desk](https://zendesk.login.gov) explaining the situation and confirming that you need access. They must include either the issuer or the link to the integration configuration.

### Creating a public certificate

You can use the following OpenSSL command to generate a self-signed 2048-bit PEM-encoded public certificate for your testing/sandbox application (with a 1-year validity period). Self-signed certificates should be for testing/sandbox purposes only. We recommend using Certificate Authority (CA) issued certificates for your production integration.

```
openssl req -nodes -x509 -days 365 -newkey rsa:2048 -keyout private.pem -out public.crt
```

The public certificate contains the public key, and the OpenSSL command also generates the private key. Together these are referred to as the public/private keypair. Make sure you're using the corresponding private key in your application to sign and/or validate requests and responses to/from Login.gov.

The public/private keypair process is a crucial step in generating secure authentications. Please note the following:

- The private key should be one of the most securely protected pieces of data in your Login.gov integration. If the private key is compromised, your integration will no longer be secure.
- Only share the public key with Login.gov. Do not share the private key.
- It is best practice to rotate your keypairs on a regular basis regardless of known compromise.
- At minimum for OIDC, you must ensure that your authentication request is signed with the private key.
- For SAML integrations, use the private key generated with your certificate for decryption or you will be unable to decrypt the response.


## Load Testing

Our sandbox environment is smaller than our production environment and it is shared by many of our partners. It has not been configured for load testing. **For these reasons, our recommendation is to mock out the Login.gov portion of your load tests.** We thoroughly load test our infrastructure and can provide data on our capabilities upon request.

## Automated Testing

**Login.gov cannot provide specific recommendations for automated testing.** This is especially true for applications using identity verification, because we are frequently making updates to the code and the flow is likely to change and could unexpectedly break your tests.

If you are looking for recommendations for automated testing, we do not have any specific advice. There are many different frameworks and automated testing suites available to choose from, and our partners usually pick based on their own unique needs. **Regardless of which suite you choose, it should be noted that you cannot bypass the MFA portion of the flow.** It is intentionally designed this way for security purposes and another reason why we recommend stubbing out our flow.

While Login.gov partner support channels have provided some support for automated testing in the past, as of 09/20/2023, will no longer be able to provide assistance in this area.

## Testing identity proofing

The Login.gov [sandbox test environment](https://idp.int.identitysandbox.gov/) is configured to pass most information that is entered during the proofing flow. This allows the proofing flow to be tested without the need to enter personally identifiable information (PII). There are [special values](https://developers.login.gov/testing/#personal-information-verification) that can be entered to simulate error states while testing in the Login.gov sandbox environment. **Never enter PII in the sandbox environment.**

### Testing the IAL2-compliant process (online facial matching or in-person proofing)

If you are testing the IAL2-compliant flow and want to specifically test the online facial matching process, when you are prompted to take a photo of your ID with your phone, you can take a photo of anything that has the same shape as a US driver's license (metro card, loyalty card, arcade card, etc). You can use the front of the card for both the front and back photos. For the selfie, it's specifically looking for a face, so you need to use your real face. The photos are not sent to any external vendors.

If your main goal is to end up with an IAL2-compliant account to test with, and you're not specifically testing the online facial matching process, then you can choose the in-person proofing option, and enter fake information. After the phone verification step, you will be presented with your USPS barcode, but you will not need to go to any post office. In the sandbox, you will automatically be verified at this point, and you should receive an email letting you know you were verified.

### Testing document upload for the Basic IdV Service (without facial matching)

Login.gov prompts users to upload the front and back of their documents during proofing through a few different methods. In the sandbox environment, any image file that is uploaded will pass.

#### Data testing

⚠️ Only the YAML file in the `back` upload box is used on submission. For that reason, it's good practice to upload the same yaml file in all three upload boxes to avoid confusion when testing.

A YAML file can be uploaded instead of a State ID image to trigger different behaviors. You will upload the same YAML file for the front and back of the State ID, and also the selfie (if that field appears). Different YAML files can be used to simulate the reading of certain attributes from the State ID or selfie. Here is an example YAML file that does that:

{% include yaml_download.md filename="proofing.yml" %}

A YAML file can also be used to simulate an error reading or validating the document. Here are a couple of simple example YAML files:

{% include yaml_download.md filename="image_resolution_error.yml" %}

{% include yaml_download.md filename="document_classification_error.yml" %}

Here is an example YAML file that contains the full structure with annotations for expected values:

{% include yaml_download.md filename="sample_full_error.yml" %}

There are not any required values from the above example file, you only need to include the values you are changing. The only exception is that alerts must be passed with both a `name` and a `result` as seen above. Anything not included will be given reasonable defaults for testing purposes.

Alert names with attention or failed values show under `failed_alerts`. Only passed values show under `passed_alerts`. The list of currently handled alert names for `failed_alerts` and `passed_alerts` are:

```yaml
      - name: 1D Control Number Valid
      - name: 2D Barcode Content
      - name: 2D Barcode Read
      - name: Birth Date Crosscheck
      - name: Birth Date Valid
      - name: Control Number Crosscheck
      - name: Document Classification
      - name: Document Crosscheck Aggregation
      - name: Document Expired
      - name: Document Number Crosscheck
      - name: Expiration Date Crosscheck
      - name: Expiration Date Valid
      - name: Full Name Crosscheck
      - name: Issue Date Crosscheck
      - name: Issue Date Valid
      - name: Layout Valid
      - name: Near-Infrared Response
      - name: Physical Document Presence
      - name: Sex Crosscheck
      - name: Visible Color Response
      - name: Visible Pattern
      - name: Visible Photo Characteristics
```

**NOTES:**

- There are configurations of the above yaml file that cannot happen in real vendor responses. It is possible there will be unexpected outcomes in those cases.

### Personal information verification

Login.gov collects and verifies personal information during the proofing process. The Login.gov sandbox environment only accepts social security numbers starting with “900” and “666” as valid to prevent users from accidentally entering real personal information. These prefixes are used because they are not valid according to the [Social Security Administration](https://secure.ssa.gov/poms.nsf/lnx/0110201035).

To simulate a failure, enter a social security number that does not start with “900” or “666”, such as “123-45-6789”.

You can simulate failure to contact a proofing vendor by entering a social security number of “000-00-0000”. See ["proofing vendor errors"](#proofing-vendor-errors) for more ways to simulate vendor errors.

### Proofing vendor errors

To simulate issues with proofing vendor responses, create a YAML file that includes a specific `first_name` field, as specified below. Save the example YAML file below and edit the `first_name` field to give the result you want.

|first_name| Result|
|--------|--------|
| Bad | unverified user |
| Fail | failed to contact vendor |
| Parse | parse error in vendor response |
| Time | vendor timeout |

To simulate failure to verify a zipcode, enter `00000` for the user's zipcode.

See also: [Individual state MVA errors](#individual-state-mva-errors)

Sample YAML file:
{% include yaml_download.md filename="proofing_vendor_error.yml" %}

### Issuing source verification for ID documents

Login.gov collects the document number of a drivers license or state ID card automatically during the proofing process. This document is checked against issuing source data, along with user information, such as address.

To simulate a verification failure, submit `00000000` as the `state_id_number` and [any jurisdiction](https://github.com/18F/identity-idp/blob/2022-07-21T171117/config/application.yml.default#L21) where issuing source verification is enabled for `state_id_jurisdiction`.

### Individual state MVA errors

To simulate an individual state yielding an error when asked to verify a drivers license, use `mvatimeout` for `state_id_number` and `WA` for `state_id_jurisdiction`. You can use [any jurisdiction](https://github.com/18F/identity-idp/blob/2022-07-21T171117/config/application.yml.default#L21) where issuing source verification is enabled for `state_id_jurisdiction`, for example `WA`.

Sample YAML file:
{% include yaml_download.md filename="individual_state_error.yml" %}
### Phone number verification

Login.gov collects a phone number during the proofing process. In the production environment, Login.gov checks that this phone number is associated with the applicant. The following phone numbers simulate specific events:

* `703-555-5555` - simulates a phone number that couldn't be verified as belonging to the user
* `703-555-5888` - simulates a timeout during verification
* `703-555-5999` - simulates a phone number that couldn't be contacted

Use any other phone number for typical testing purposes
