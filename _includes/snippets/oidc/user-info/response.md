{% capture code %}
```json
{
  "address": {
    "formatted": "123 Main St Apt 123\nWashington, DC 20001",
    "street_address": "123 Main St Apt 123",
    "locality": "Washington",
    "region": "DC",
    "postal_code": "20001"
  },
  "birthdate": "1970-01-01",
  "email": "test@example.com",
  "email_verified": true,
  "all_emails": ["test@example.com", "test2@example.com"],
  "family_name": "Smith",
  "given_name": "John",
  "iss": "https://idp.int.identitysandbox.gov",
  "phone": "+18881112222",
  "phone_verified": true,
  "social_security_number": "111223333",
  "sub": "b2d2d115-1d7e-4579-b9d6-f8e84f4f56ca",
  "verified_at": 1577854800
}
```
{% endcapture %}
<div markdown="1" data-example="response" class="markdown">
{{ code | markdownify }}
</div>