---
title: Testing your app
lead: >
  Once you’ve created your app and implemented an identity protocol, you can now register it in the test environment dashboard and start testing.
redirect_from:
  - /registering-your-sp/
  - /register/
---

## Using the dashboard

Login.gov provides an open sandbox environment to create and test integrations between login.gov and your applications. In the sandbox environment, we provide a dashboard where you can manage your test applications.

## How to get started

Anybody with an email address ending in .gov or .mil can create an account in the sandbox environment. If you are a government contractor, ask your agency partner to help you gain access.

1. Visit the dashboard at [https://dashboard.int.identitysandbox.gov](https://dashboard.int.identitysandbox.gov). In the upper-right corner, click **Log in**. You'll be prompted to sign in or create an account with the test login.gov IdP in the agency integration environment (hosted at [idp.int.identitysandbox.gov](https://idp.int.identitysandbox.gov)). **Please note that if you already have a login.gov account that this is a test environment that is not linked to your production account.**
2. Once you are logged into your sandbox account, you'll be asked to create a team and add users to that team.
3. After creating your team, go to the Apps tab. This page is where you will find all of the test applications you and your team will create.
4. Click **Create a new test app** and fill out the form to register a new application with the login.gov IdP in the test sandbox environment.
5. Start testing! If you need to troubleshoot, please [send us an email](mailto:partners@login.gov) and we can onboard you to our partner support Slack channel and the login.gov team will help you along the way.
6. When you're ready to go to production, please contact our team at [partners@login.gov](mailto:partners@login.gov) and notify us. We'll manage your application's promotion to production.

## Automated/Load Testing

Our sandbox environment is smaller than our production environment and it is shared by many of our partners. For this reason, we ask you to reach out to us at partners@login.gov before performing automated tests that will exceed 1000 requests/minute. We are happy to discuss options to meet your needs.

## Testing IAL2

The login.gov sandbox test environment is configured to pass most information that is entered during the IAL2 flow. This allows the proofing flow to be tested without the need to enter personally identifiable information (PII). There are special values that can be entered to simulate error states while testing in the login.gov sandbox environment.

### Document upload

Login.gov prompts users to upload the front and back of their documents during proofing through a few different methods. In the sandbox environment, any image file that is uploaded will pass.

#### Data testing

A YAML file can be uploaded instead of an image to trigger different behaviors. The YAML file can be used to simulate the reading of certain attributes from the test document. Here is an example YAML file that does that:

```yaml
document:
  type: license
  first_name: Susan
  last_name: Smith
  middle_name: Q
  address1: 1 Microsoft Way
  address2: Apt 3
  city: Bayside
  state: NY
  zipcode: '11364'
  dob: 10/06/1938
  phone: +1 314-555-1212
```

A YAML file can also be used to simulate an error reading or validating the document. Here is an example YAML file that does that:

```yaml
friendly_error: |
  We couldn't read the barcode on the back of your ID. Try taking a new picture.
  Make sure the entire barcode is visible, clean, and doesn't have glares.
  (Error code: 200)
```

### Personal information verification

Login.gov collects and verifies personal information during the IAL2 proofing process. It is configured to consider almost all personal information valid in the sandbox. There is one social security number that can be entered to simulate a failure to validate personal information: “666-66-6666”.

### Phone number verification

Login.gov collects a phone number during the IAL2 proofing process. In a live production environment, login.gov checks that this phone number is associated with the applicant. You can use any phone number for testing purposes in the sandbox environment. However, the phone number ‘7035555555’ can be entered to simulate an error associating an applicant to a phone number.
