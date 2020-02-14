---
title: Testing your app
lead: >
  Once you’ve created your app and implemented an identity protocol, you can now register it in the test environment dashboard and start testing.
redirect_from:
  - /registering-your-sp/
  - /register/
---

## Using the dashboard

Login.gov provides an open sandbox environment to create and test integrations between login.gov and you applications. In the sandbox environment, we provide a dashboard where you can manage your test applications. While the dashboard is open to use, you must request access.

1. Request that accounts your emails get added to the dashboard application in the test sandbox environment. You can request [access here](https://share.hsforms.com/16DIoo--rTU2xbNW1MShkBg3ak9e). The login.gov team will create accounts for you and your team members. Once you have an account, head over to the dashboard at [dashboard.int.identitysandbox.gov](https://dashboard.int.identitysandbox.gov).
2. In the upper-right corner, click **Log in**. You'll be prompted to sign in or create an account with the test login.gov IdP in the agency integration environment (hosted at [idp.int.identitysandbox.gov](https://idp.int.identitysandbox.gov)). **Please note that if you already have a login.gov account that this is a test environment that is not linked to your production account.**
3. Once logged in, you'll be sent to the "My apps" page, which will list all the test applications you and your team have created.
4. Click **Create a new test app** and fill out the form to register a new application with the login.gov IdP in the test sandbox environment.
5. Start testing! If you need to trouble shoot, please send us an email and we can onboard you to our partner support slack channel and the login.gov team will help you along the way.
6. When you're ready to go to production, please contact our team at partners@login.gov and notify us. We'll manage your application's promotion to production.

## Testing IAL2

IAL2 testing requires a driver's license.  To override this behavior for testing purposes you can upload a text file with a .txt extension in place of front and back images with the following format:

```
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
