---
title: Assurance Level Values
lead: >
sidenav:
  - text: Identity Assurance Levels
    href: "#identity-assurance-levels"
  - text: Authentication Assurance Levels
    href: "#authentication-assurance-levels"
  - text: Deprecated Service Values
    href: "#deprecated-service-values"
---
{% capture type_of_service %}
  {% include snippets/auth_content/service_levels.md %}
{% endcapture %}
{% capture aal_values %}
  {% include snippets/auth_content/aal_values.md %}
{% endcapture %}
{% capture deprecated_values %}
  {% include snippets/auth_content/deprecated_values.md %}
{% endcapture %}

# Identity Assurance Levels
Identity Assurance Level determines what information is used to confirm a user's identity.  
{{ type_of_service }}

# Authentication Assurance Levels
Authentication Assurance Level determines what second factors are allowed for user sign-in.  
{{ aal_values }}

# Deprecated Service Values
{{ deprecated_values }}
