---
title: Push Notifications
lead: >
  login.gov supports push notifications of user account related events using the Web Push protocol.  Initially it will be limited to account delete events.  Here we document how a service provider can receive push notifications from login.gov.
sidenav:
  - text: Setup Url
    href: "#setup-url"
  - text: Receive Request
    href: "#receive-request"
  - text: Decode Headers
    href: "#decode-headers"
  - text: Fetch Public Key
    href: "#fetch-public-key"
  - text: Verify Signature
    href: "#verify-signature"
---

# Setup Url

Setup your push_notification_url for your app in the [partner dashboard](https://dashboard.int.identitysandbox.gov/). For production this will be an application setting that you supply to login.gov

# Receive Request

When a user associated with your application deletes their account login.gov will make a post request to the endpoint URL you specified in the previous step. The body of the request will be an empty JSON document.  The headers of the request will contain the relevant information.

# Decode Headers

Decode the headers to extract the relevant information.

## Format of headers:


`Topic: account_delete`

This is the type of push notification.  Initially it will only be for 'account_delete'

`Content-Type: application/json`

This is the type of the packet.  The payload is supplied in the headers so body is generally a blank json document.

`Authorization: WebPush <JWT Info>.<JWT Data>.<Signature>`

This is the format specified by the [Web Push Protocol](https://developers.google.com/web/fundamentals/push-notifications/web-push-protocol)

An example would be:

`Authorization: WebPush eyJ0iJ9.eyJhdWnVrIn0.8M3h-USjDhTqQ`


The subfields are as follows:

**JWT Info**

The first subfield is the following JSON data base64 encoded:

`{ "typ": "JWT", "alg": "RS256"}`

A [JSON web token](https://jwt.io/) is a way of sending a message to a third party such that the receiver can validate who sent it.

When a third party receives a message, they need to get the senders public key and use it to validate the signature of the JWT. If the signature is valid then the JWT must have been signed with the matching private key so must be from the expected sender.

**JWT Data**

The second subfield contains the relevant information base64 encoded. Base64 decode the string. It contains the push notification url, the expiration time that the packet is valid for in seconds, the payload for the event which in this case will simply be the user's UUID, and login.gov contact information.

{

    "aud": push_notification_url,

    "exp": <expiration time in seconds>,

    "payload": { "uuid": <uuid of the user that was deleted> },

    "sub": "mailto:partners@login.gov"

}

**Signature**

The third string, the signature, is the result of taking the first two strings (the JWT Info and JWT Data), joining them with a dot character, which we'll call the "unsigned token", and signing it.

# Fetch Public Key

login.gov's public key, used to verify signed JWTs, is available in [JWK](https://tools.ietf.org/html/rfc7517) format at the `/api/openid_connect/certs` endpoint. For example, the URL in the agency integration environment is at [https://idp.int.identitysandbox.gov/api/openid_connect/certs](https://idp.int.identitysandbox.gov/api/openid_connect/certs)

This public key is rotated periodically (on at least an annual basis), so be sure to use the JWK endpoint dynamically through [auto-discovery](#auto-discovery) rather than hardcoding the public key. This ensures that your application will not require manual intervention when the login.gov public key is rotated.

# Verify Signature

Use the public key obtained previously to sign the first and second tokens with a dot in the middle <JWT Info>.<JWT Data>  This signature should match the signature sent in the packet.

There are a host of libraries on [https://jwt.io/](https://jwt.io/) that can perform the signing for you.


<script type="text/javascript">
  function showExamples(type) {
    Array.prototype.slice.call(document.querySelectorAll('button[data-example]')).forEach(function(button) {
      var show = button.getAttribute('data-example') == type;
      button.className = show ? 'usa-button' : 'usa-button usa-button-secondary';
    });

    Array.prototype.slice.call(document.querySelectorAll('div[data-example]')).forEach(function(example) {
      var show = example.getAttribute('data-example') == type;
      if (show) {
        example.removeAttribute('hidden');
      } else {
        example.setAttribute('hidden', 'true');
      }
    });
  }

  Array.prototype.slice.call(document.querySelectorAll('button[data-example]')).forEach(function(button) {
    button.onclick = function() {
      showExamples(this.getAttribute('data-example'));
    };
  });

  showExamples('private_key_jwt');
</script>
