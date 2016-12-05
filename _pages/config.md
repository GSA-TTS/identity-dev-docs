---
title: Application Configuration
---

# Application Configuration

## Prerequisite information

Integrating with login.gov is easy and just requires a few simple steps:

1. Talk to us to provide configuration options, or make a code change (in .yml file).
2. Give us a copy of your public cert and/or cert fingerprint. Ideally just give us the cert. 2048 bits is the preferred minimum length.
3. Make sure your application supports HTTPS.
4. Check out our [sample implementations]({{site.baseurl}}/saml_refs) for examples.

## Configuration Parameters

In order to integrate with login.gov, you'll need to provide key pieces of information which we will use to instruct the login.gov platform on how to interact with your application. Here is a sample configuration entry in our system for a given site:

```
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

## Generating a certificate

First, you will need to create an `openssl.conf` file. Here is an example:

```
[ req ]
default_bits           = 2048
distinguished_name     = req_distinguished_name
prompt                 = no

[ req_distinguished_name ]
commonName             = idp-sandbox.login.gov
organizationName       = GSA
organizationalUnitName = 18f
localityName           = Washington
stateOrProvinceName    = DC
countryName            = US
emailAddress           = 18f@gsa.gov
```

You'll need to replace `req_distinguished_name` with your agency's details.

Next, execute the following [OpenSSL](https://www.openssl.org) command:
`openssl req -x509 -sha256 -days 365 -newkey rsa:2048 -keyout keys/saml.key.enc.example -out certs/saml.crt.example -config openssl.conf`

Once complete, you'll want to send us your `saml.crt` file. It will look something like this:

```
-----BEGIN CERTIFICATE-----
MIIDjDCCAnQCCQDnXYBYvsXpXzANBgkqhkiG9w0BAQsFADCBhzEeMBwGA1UEAwwV
aWRwLXNhbmRib3gubG9naW4uZ292MQwwCgYDVQQKDANHU0ExDDAKBgNVBAsMAzE4
ZjETMBEGA1UEBwwKV2FzaGluZ3RvbjELMAkGA1UECAwCREMxCzAJBgNVBAYTAlVT
MRowGAYJKoZIhvcNAQkBFgsxOGZAZ3NhLmdvdjAeFw0xNjA2MDYwMTU5MDVaFw0x
NzA2MDYwMTU5MDVaMIGHMR4wHAYDVQQDDBVpZHAtc2FuZGJveC5sb2dpbi5nb3Yx
DDAKBgNVBAoMA0dTQTEMMAoGA1UECwwDMThmMRMwEQYDVQQHDApXYXNoaW5ndG9u
MQswCQYDVQQIDAJEQzELMAkGA1UEBhMCVVMxGjAYBgkqhkiG9w0BCQEWCzE4ZkBn
c2EuZ292MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5gG/kitp7qar
rggpjq5psf3/6NE7/F5nSpeyJMcQBZmaxOfKaGW87+ynEcuz9XhbnByYX/zHExPG
W77g92O5eY8f2Hl1N1vVomaaa359mR3Lljs7PXj0Og+nYnP8TVU31CEaqq0nSx6f
uKpVzOeUEE7f0IPGzDHNc3V+UFjcJcn1Hwqf4Rw6KT3yIYwEBWWFrtQgCJTv2Wjh
UBw5vJ38mG2GidiNleI7azHEI6bcYa8B1WitJbiLxSiO56bFcNpwdzNmWOc6KO3H
oZKVpVv9em6EDry7gVMy2/iBoa92nQr0cb/1F5tx7LJXoFOwyRNAaeeXhiC848Hs
OejHMxmMXwIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQCWDURUw+ujzp59Cbm+sTCw
fZldRp49nM3rS/zfNJUo+HNkr3EEtI3EYRfiedTcvl+kN6lli1xqQIYy8K2T/5iC
GVWHSwLPgACXJaH2/w0a+HLP+caI7XZk/NpngyoZfnKJ8AlzSPyYCvCGPkFawnp1
Gr110oP+s2JEvONEMrLHVDF8V5d/oU8x8Tf7e/aSDvjkjJJzuDwCzR5ehifPuuS+
7idgHDOzQXqcWItiXzDGKDZ+lwFdKfnzxYQOTU1kFFb5eolUjU6yL6VTZSypwKuN
QoA63AC0m/h75svOH1rAqHMQLXif1+QVl1B/E9HtcUy8ql1apkiaq2O91EpNr9JY
-----END CERTIFICATE-----
```
