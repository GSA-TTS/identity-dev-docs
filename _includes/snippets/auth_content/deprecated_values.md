{% capture deprecated_values %}
  These are not recommended, and only for legacy compatibility.
  - **`http://idmanagement.gov/ns/assurance/ial/1`**
      Basic identity assurance, does not require identity verification. Equivalent to `urn:acr.login.gov:auth-only`.
  - **`http://idmanagement.gov/ns/assurance/ial/2`**
      Requires that the user has gone through basic identity verification. Equivalent to `urn:acr.login.gov:verified`.
      
      Does not meet NIST 800-63-3 IAL2 standard.
  - **`http://idmanagement.gov/ns/assurance/loa/1`**
       Equivalent to `urn:acr.login.gov:auth-only`.

  - **`http://idmanagement.gov/ns/assurance/loa/3`**
      Equivalent to `urn:acr.login.gov:verified`.
{% endcapture %}
<div markdown="1">
{{ deprecated_values | markdownify }}
</div>