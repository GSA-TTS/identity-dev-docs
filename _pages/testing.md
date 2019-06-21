---
title: Testing your app
lead: >
  Once you’ve created your app and implemented an identity protocol, you can now register it in our dashboard and start testing.
redirect_from:
  - /registering-your-sp/
  - /register/
---

# Using the dashboard

The login.gov dashboard is the place you'll manage your team's test applications.

1. First, the login.gov team will create accounts for you and your team members. Once you have an account, head over to the dashboard at [dashboard.int.identitysandbox.gov](https://dashboard.int.identitysandbox.gov)
2. In the upper-right corner, click **Log in**. You'll be prompted to sign in or create an account with the login.gov IdP in the agency integration environment (hosted at [idp.int.identitysandbox.gov](https://idp.int.identitysandbox.gov)).
3. Once logged in, you'll be sent to the "My apps" page, which will list all the test applications you and your team have created.
4. Click **Create a new test app** and fill out the form to register a new application with the login.gov IdP in the agency integration environment.
5. Start testing! The login.gov team will help you along the way.

# Testing IAL2

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
