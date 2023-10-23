---
title: Testing your app
lead: >
  Once you’ve created your app and implemented an identity protocol, you can now register it in the test environment dashboard and start testing.
redirect_from:
  - /registering-your-sp/
  - /register/
---

## About the Login.gov sandbox

Login.gov provides an open sandbox environment to create and test integrations between Login.gov and your applications. **Note that the Login.gov Sandbox environment is a free service with an availability target of M-F, 8a-5p ET.** While the environment may be available outside of those windows, it is not guaranteed and may become unavailable with no advance notice. You may reach out to the [Partner Support Help Desk](https://zendesk.login.gov) for additional information about these outages.

In the sandbox environment, our [Dashboard](https://dashboard.int.identitysandbox.gov) is where you can manage your test applications. ***It is important to note that your Login.gov production account and your Login.gov sandbox account are two separate accounts.***

## Getting access to the Login.gov sandbox

Login.gov does not manage user accounts in the sandbox.

**If you are an agency partner with a .gov or .mil account:**
You can create an account in the sandbox environment on your own.

**If you are a government contractor:**
Ask your agency partner to help you gain access. Login.gov will not create an account or add you to a team; your partner must do this for you.

**If you are with a government entity that is not a federal agency (a state or municipality) and do not have an email ending in .gov or .mil**
Please submit a support ticket through the [Partner Support Help Desk](https://zendesk.login.gov) to get access to the Dashboard.

## Using the sandbox

1. Visit the Partner Dashboard at [https://dashboard.int.identitysandbox.gov](https://dashboard.int.identitysandbox.gov).
1. Select the “Sign in” button in the upper-right corner to sign in or create a new account with the test Login.gov IdP in the sandbox environment hosted at [idp.int.identitysandbox.gov](https://idp.int.identitysandbox.gov). **Please note that this is separate from your Login.gov production account.**
1. Once you are logged into your sandbox account, create a new team by selecting the “Continue” button under “Create your first team." (If you have previously created a team you will select the “Create a new team” button.)
1. If necessary, add users to that team by clicking the "Add users" button. **This is the opportunity to add contractors or anyone without a .gov or a .mil**
1. After creating your team, select the Apps tab. This page is where you will find all of the test applications you and your team create.
1. Select the “Create a new test app” button and fill out the form to register a new application with the Login.gov IdP in the test sandbox environment.
1. Start testing! If you need to troubleshoot an issue that is not covered in the [developer documentation]({% link _pages/index.md %}), please submit a support ticket through the [Partner Support Help Desk](https://zendesk.login.gov). We can also add you to our partner support Slack channel and the Login.gov team will help you along the way.
1. When you're ready to go to production, please [follow our production deployment instructions]({% link _pages/production.md %}). We'll manage your application's promotion to production. The move to production may take up to two weeks.

### Creating a public certificate

You can use the following OpenSSL command to generate a 2048-bit PEM-encoded public certificate for your application (with a 1-year validity period):

```
openssl req -nodes -x509 -days 365 -newkey rsa:2048 -keyout private.pem -out public.crt
```

Make sure you're using the corresponding private key in your application to sign and/or validate requests and responses to/from Login.gov.

## Load Testing

Our sandbox environment is smaller than our production environment and it is shared by many of our partners. It has not been configured for load testing. **For these reasons, our recommendation is to mock out the Login.gov portion of your load tests.** We thoroughly load test our infrastructure and can provide data on our capabilities upon request.

## Automated Testing

**Login.gov cannot provide specific recommendations for automated testing.** This is especially true for applications using identity verification, because we are frequently making updates to the code and the flow is likely to change and could unexpectedly break your tests.

If you are looking for recommendations for automated testing, we do not have any specific advice. There are many different frameworks and automated testing suites available to choose from, and our partners usually pick based on their own unique needs. **Regardless of which suite you choose, it should be noted that you cannot bypass the MFA portion of the flow.** It is intentionally designed this way for security purposes and another reason why we recommend stubbing out our flow.

While Login.gov partner support channels have provided some support for automated testing in the past, as of 09/20/2023, will no longer be able to provide assistance in this area.

## Testing identity proofing

The Login.gov [sandbox test environment](https://idp.int.identitysandbox.gov/) is configured to pass most information that is entered during the proofing flow. This allows the proofing flow to be tested without the need to enter personally identifiable information (PII). There are [special values](https://developers.login.gov/testing/#personal-information-verification) that can be entered to simulate error states while testing in the Login.gov sandbox environment. **Never enter PII in the sandbox environment.**

### Document upload

Login.gov prompts users to upload the front and back of their documents during proofing through a few different methods. In the sandbox environment, any image file that is uploaded will pass.

#### Data testing

A YAML file can be uploaded instead of a State ID image to trigger different behaviors. You will upload this text file for the front and back for the State ID. The YAML file can be used to simulate the reading of certain attributes from the State ID. Here is an example YAML file that does that:

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

**NOTE:** Even if you put all passing information into the test yaml file it will still produce an error. There are configurations of the above yaml file that cannot happen in real vendor responses. It is possible there will be unexpected outcomes in those cases.

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

To simulate failure to verify a zipcode, enter “00000” for the user's zipcode.

Sample YAML file:
{% include yaml_download.md filename="proofing_vendor_error.yml" %}

### Issuing source verification for ID documents

Login.gov collects the document number of a drivers license or state ID card automatically during the proofing process. This document is checked against issuing source data, along with user information, such as address.

To simulate a verification failure, submit `00000000` as the `state_id_number` for [any jurisdiction](https://github.com/18F/identity-idp/blob/2022-07-21T171117/config/application.yml.default#L21) where issuing source verification is enabled.

### Phone number verification

Login.gov collects a phone number during the proofing process. In the production environment, Login.gov checks that this phone number is associated with the applicant. The following phone numbers simulate specific events:

* `703-555-5555` - simulates a phone number that couldn't be verified as belonging to the user
* `703-555-5888` - simulates a timeout during verification
* `703-555-5999` - simulates a phone number that couldn't be contacted

Use any other phone number for typical testing purposes.
