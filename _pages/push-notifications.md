---
title: Push Notifications
lead: >
  login.gov uses the Web Push Protocol in conjunction with OpenID RISC Profile and Security Event Token (SET) to send security-related event notifications in real-time.
sidenav:
  - text: How it works
    href: "#how-it-works"
  - text: Configuration
    href: "#configuration"
  - text: Usage
    href: "#usage"
  - text: Supported Event Types
    href: "#supported-event-types"
---

## How it works

When a user associated with your application deletes their account, login.gov will make a post request to the endpoint URL that you specified in setup. The body of the request will be an empty JSON document. The headers of the request will contain the relevant information.

## Configuration

### Set up the url
Set up your `push_notification_url` for your app in the partner dashboard. For production, this will be a configuration you supply to login.gov.

## Usage

### Decode the headers

```yaml
Topic: account_delete
```

This is the type of push notification.  Initially it will only be for 'account_delete'.

```yaml
Content-Type: application/json
```

This is the type of the packet. The payload is supplied in the headers, so the body is generally a blank json document.

```yaml
Authorization: WebPush <JWT Info>.<JWT Data>.<Signature>
```

This is the format specified by the [Web Push Protocol](https://developers.google.com/web/fundamentals/push-notifications/web-push-protocol).

An example would be the following:

```yaml
Authorization: WebPush eyJ0iJ9.eyJhdWnVrIn0.8M3h-USjDhTqQ
```

The subfields are as follows:

#### JWT info

The first subfield is the following JSON data base64 encoded:

```json
{ "typ": "JWT", "alg": "RS256"}
```

A [JSON web token](https://jwt.io/) is a way of sending a message to a third party so that the receiver can validate who sent it.

When a third party receives a message, they need to get the sender’s public key and use it to validate the signature of the JWT. If the signature is valid, then the JWT must have been signed with the matching private key so it must be from the expected sender.

#### JWT data

The second subfield contains the relevant information base64 encoded. The data is formatted per the [OpenID RISC Event Types](https://openid.net/specs/openid-risc-event-types-1_0-ID1.html) and base64 encoded. Base64 decode the string to find that it contains the following data:
* **iss**: the base URL of the login.gov system issuing the event
* **iat**: the time (seconds since epoch) when the event was issued
* **exp**: the time (seconds since epoch) when the event expires
* **jit**: the JWT identifier
* **aud**: the push notification url
* **events**: the event(s) delivered in this JWT. See [Supported Event Types](#supported-event-types) for details.

Sample data format:
```json
{
    "iss": "<login.gov root_url>",
    "iat": "<issued at time in seconds since epoch>",
    "exp": "<expiration time in seconds>",
    "jti": "<JWT identifier>",
    "aud": "<push_notification_url>",
    "events": {
        "<event type url>": {
          "<event data key>": "<event data value>"
        }
    }
}
```

#### Signature

The third string, the signature, is the result of taking the first two strings (the JWT Info and JWT Data), joining them with a dot character (which we’ll call the “unsigned token”), and signing it.

### Fetch public key

login.gov’s public key, which is used to verify signed JWTs, is available in [JWK](https://tools.ietf.org/html/rfc7517) format at the `/api/openid_connect/certs` endpoint. For example, the URL in the agency integration environment is at [https://idp.int.identitysandbox.gov/api/openid_connect/certs](https://idp.int.identitysandbox.gov/api/openid_connect/certs)

This public key is rotated periodically (on at least an annual basis), so be sure to use the JWK endpoint dynamically rather than hardcoding the public key. This ensures that your application will not require manual intervention when the login.gov public key is rotated.

### Verify signature

Use the public key obtained previously to sign the first and second tokens with a dot in the middle. This signature should match the signature sent in the packet.

There are a host of libraries on [https://jwt.io/](https://jwt.io/) that can perform the signing for you.

## Supported Event Types

| Event Type     | Description                                        |
|----------------|----------------------------------------------------|
| Account Purged | Sent when a user's account is deleted on login.gov |

### Account Purged

When a user account is deleted on login.gov, the following event notification is sent out with the user's uuid in the `sub` field:

```json
{
    "iss": "<login.gov root_url>",
    "iat": "<issued at time in seconds since epoch>",
    "exp": "<expiration time in seconds>",
    "jti": "<JWT identifier>",
    "aud": "<push_notification_url>",
    "events": {
        "https://schemas.openid.net/secevent/risc/event-type/account-purged": {
            "subject": {
              "subject-type": "iss-sub",
              "iss": "<your issuer>",
              "sub": "<uuid of the user that was deleted>"
            }
        }
    }
}
```

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
