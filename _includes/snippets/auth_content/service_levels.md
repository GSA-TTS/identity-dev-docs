{% capture type_of_service %}
  A type of service level must be specified.
- **`urn:acr.login.gov:auth-only`**
    Requires basic identity assurance: email address, password, and at least one MFA method. No identity verification.
    
    Meets either NIST 800-63-3 AAL1 or AAL2 standard (depending on agency integration configuration)
- **`urn:acr.login.gov:verified`**
    Requires that the user has gone through basic identity verification without facial matching.
    
    Does not meet NIST 800-63-3 IAL2 standard.
- **`urn:acr.login.gov:verified-facial-match-required`**
    Requires identity verification with facial match for all users. Even if a user has been previously verified without facial matching, they will be required to go through verification with facial match.
    
    Meets NIST 800-63-3 IAL2 standard.
- **`urn:acr.login.gov:verified-facial-match-preferred`**
    Requires identity verification.  Users with no previous identity verification will be required to go through a facial match. Users with previous identity verification will use that data, even if it was done without facial match. 
    
    Authentications for users who verify with facial matching will meet NIST 800-63-3 IAL2 standard. Authentication for users who do not do facial matching will not meet NIST 800-63-3 IAL2 standard.
{% endcapture %}
<div markdown="1">
{{ type_of_service | markdownify }}
</div>
