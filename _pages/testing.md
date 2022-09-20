---
title: Testing your app
lead: >
  Once you’ve created your app and implemented an identity protocol, you can now register it in the test environment dashboard and start testing.
redirect_from:
  - /registering-your-sp/
  - /register/
---

## About the Login.gov sandbox

Login.gov provides an open sandbox environment to create and test integrations between Login.gov and your applications. **Note that the Login.gov Sandbox environment is a free service with an availability target of M-F, 8a-5p ET.** While the environment may be available outside of those windows, it is not guaranteed and may become unavailable with no advance notice.

In the sandbox environment, our (Dashboard)[https://dashboard.int.identitysandbox.gov] is where you can manage your test applications.

## How to get started

Anybody with an email address ending in .gov or .mil can create an account in the sandbox environment. If you are a government contractor, ask your agency partner to help you gain access.

1. Visit the dashboard at [https://dashboard.int.identitysandbox.gov](https://dashboard.int.identitysandbox.gov). In the upper-right corner, click **Sign in**. You'll be prompted to sign in or create an account with the test Login.gov IdP in the agency integration environment (hosted at [idp.int.identitysandbox.gov](https://idp.int.identitysandbox.gov)). **Please note that this is a sandbox environment that is not linked to your production Login.gov account.**
2. Once you are logged into your sandbox account, you'll be asked to create a team and add users to that team.
3. After creating your team, go to the Apps tab. This page is where you will find all of the test applications you and your team will create.
4. Click **Create a new test app** and fill out the form to register a new application with the Login.gov IdP in the test sandbox environment.
5. Start testing! If you need to troubleshoot, please [submit a support request](https://logingov.zendesk.com) and we can onboard you to our partner support Slack channel and the Login.gov team will help you along the way.
6. When you're ready to go to production, please [follow our production deployment instructions]({% link _pages/production.md %}). We'll manage your application's promotion to production.

### Creating a public certificate

You can use the following OpenSSL command to generate a 2048-bit PEM-encoded public certificate for your application (with a 1-year validity period):

```
openssl req -nodes -x509 -days 365 -newkey rsa:2048 -keyout private.pem -out public.crt
```

Make sure you're using the corresponding private key in your application to sign and/or validate requests and responses to/from Login.gov.

## Automated/Load Testing

Our sandbox environment is smaller than our production environment and it is shared by many of our partners. For this reason, we ask you to [submit a support request](https://logingov.zendesk.com) before performing automated tests that will exceed 1000 requests/minute. We are happy to discuss options to meet your needs.

## Testing identity proofing

The Login.gov sandbox test environment is configured to pass most information that is entered during the proofing flow. This allows the proofing flow to be tested without the need to enter personally identifiable information (PII). There are special values that can be entered to simulate error states while testing in the Login.gov sandbox environment.

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

The list of currently handled alert names for `failed_alerts` and `passed_alerts` are:
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

**NOTE:** Even if you put all passing information into the test yaml file it will still produce an error. There are configurations of the above yaml file that can't happen in real vendor responses. It is possible there will be unexpected outcomes in those cases.

### Personal information verification

Login.gov collects and verifies personal information during the proofing process. Login.gov only accepts social security numbers starting with “900” as being valid in the sandbox environment to prevent users from accidentally entering real personal information. This prefix is used because it is not valid according to the [Social Security Administration](https://secure.ssa.gov/poms.nsf/lnx/0110201035).

To simulate a failure, enter a social security number that does not start with “900”, such as “123-45-6789”.

**Beginning December 20th, 2021, Login.gov plans to start also accepting social security numbers starting with “666” as being valid in the sandbox environment. To simulate a failure following December 20th, enter a social security number that does not start with “900” or “666”, such as “123-45-6789”.**

### Phone number verification

Login.gov collects a phone number during the proofing process. In a live production environment, Login.gov checks that this phone number is associated with the applicant. You can use any phone number for testing purposes in the sandbox environment other than the following:

* `703-555-5555` - simulates a phone number that couldn't be verified as belonging to the user
* `703-555-5888` - simulates a timeout during verification
* `703-555-5999` - simulates a phone number that couldn't be contacted
