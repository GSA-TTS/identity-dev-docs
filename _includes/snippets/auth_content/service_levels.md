{% capture type_of_service %}
A type of service level must be specified.
- **`urn:acr.login.gov:auth-only`**
  Requires basic identity assurance.
- **`urn:acr.login.gov:verified`**
  Requires basic identity verification. This option is not compliant with NIST’s IAL2 standard.
- **`urn:acr.login.gov:verified-facial-match-required`**
  Requires identity verification with facial match.
- **`urn:acr.login.gov:verified-facial-match-preferred`**
  Requires identity verification. If a user has *already* had their identity verified, only basic identity verification is required. However, if the user has *not yet* had their identity verified, facial matching identity verification is required.
{% endcapture %}
<div markdown="1">
{{ type_of_service | markdownify }}
</div>
