---
title: Configuration parameters
---

# Configuration parameters

In order to integrate with login.gov, you'll need to provide key pieces of information which we will use to instruct the login.gov platform on how to interact with your application. Here is a sample configuration entry in our system for a given site:

```yaml
superb.legit.domain.gov:
  valid_hosts:
    'urn:govheroku:serviceprovider':
      acs_url: 'https://vets.gov/users/auth/saml/callback'
      assertion_consumer_logout_service_url: 'https://vets.gov/api/saml/logout'
      cert: 'saml_test_sp'
      agency: 'test_agency'
      attribute_bundle: ['email', 'mobile']
```

**acs_url:** ACS stands for "assertion consumer service." This is the callback URL on your site where login.gov will pass the SAML attribute bundle once a user has successfully logged in to their account.

**assertion_consumer_logout_service_url:** This is the webhook URL on your site where login.gov will notify of a user logout through login.gov.

**cert:** The certificate is an X.509 public key, with a minimum key length of 2048 bits.

**attribute_bundle:** The attribute bundle is an array of fields which login.gov will pass back to your application via the acs_url callback once a user successfully logs in to their account.
