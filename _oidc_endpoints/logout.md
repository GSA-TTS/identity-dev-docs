---
endpoint: /openid_connect/logout
order: 5

summary: Logs the user out of the IDP
---


Login.gov supports [RP-Initiated Logout](https://openid.net/specs/openid-connect-session-1_0.html#RPLogout), allowing clients to log users out of their current login.gov session and redirect them back to the Relying Party.

Login.gov does not support Single Logout (SLO). The logout action will terminate the user's session at login.gov but will not end any other potentially active sessions within service provider applications. For example, if a user signs in to applications A and B through login.gov, a logout request from A will end their login.gov session, but will not affect the session in application B.

To log out a user, send them to the `/openid_connect/logout` endpoint with the following parameters:

- **id_token_hint**
  An `id_token` value from the [token endpoint response](#token-response).

- **post_logout_redirect_uri**
  The URI login.gov will redirect to after logout.

- **state**
  A unique value at least 22 characters in length used for maintaining state between the request and the callback. This value will be returned to the client on a successful logout.

Here's an example logout request:

```bash
https://idp.int.identitysandbox.gov/openid_connect/logout?
  id_token_hint=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJiMmQyZDExNS0xZDdlLTQ1NzktYjlkNi1mOGU4NGY0ZjU2Y2EiLCJpc3MiOiJodHRwczovL2lkcC5pbnQubG9naW4uZ292IiwiYWNyIjoiaHR0cDovL2lkbWFuYWdlbWVudC5nb3YvbnMvYXNzdXJhbmNlL2xvYS8xIiwibm9uY2UiOiJhYWQwYWE5NjljMTU2YjJkZmE2ODVmODg1ZmFjNzA4MyIsImF1ZCI6InVybjpnb3Y6Z3NhOm9wZW5pZGNvbm5lY3Q6ZGV2ZWxvcG1lbnQiLCJqdGkiOiJqQzdOblU4ZE5OVjVsaXNRQm0xanRBIiwiYXRfaGFzaCI6InRsTmJpcXIxTHIyWWNOUkdqendsSWciLCJjX2hhc2giOiJoWGpxN2tPcnRRS196YV82dE9OeGN3IiwiZXhwIjoxNDg5Njk0MTk2LCJpYXQiOjE0ODk2OTQxOTgsIm5iZiI6MTQ4OTY5NDE5OH0.pVbPF-2LJSG1fE9thn27PwmDlNdlc3mEm7fFxb8ZADdRvYmDMnDPuZ3TGHl0ttK78H8NH7rBpH85LZzRNtCcWjS7QcycXHMn00Cuq_Bpbn7NRdf3ktxkBrpqyzIArLezVJJVXn2EeykXMvzlO-fJ7CaDUaJMqkDhKOK6caRYePBLbZJFl0Ri25bqXugguAYTyX9HACaxMNFtQOwmUCVVr6WYL1AMV5WmaswZtdE8POxYdhzwj777rkgSg555GoBDZy3MetapbT0csSWqVJ13skWTXBRrOiQQ70wzHAu_3ktBDXNoLx4kG1fr1BiMEbHjKsHs14X8LCBcIMdt49hIZg&
  post_logout_redirect_uri=${REDIRECT_URI}&
  state=abcdefghijklmnopabcdefghijklmnop
```

### Logout response

In a **successful logout**, login.gov will redirect to the provided `post_logout_redirect_uri` with the `state` parameter added to the URL.

Here's an example logout response:

```bash
https://agency.gov/response?
  state=abcdefghijklmnopabcdefghijklmnop
```
