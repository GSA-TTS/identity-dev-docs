---
title: Sample Metadata
---

# Sample Metadata

## IdP metadata - https://upaya-idp-dev.18f.gov/api/saml/metadata

```
<?xml version="1.0"?>
<EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion" ID="_b0e454a0-2ffb-0132-36d4-6c40088ec1f6" entityID="https://upaya-idp-dev.18f.gov/api/saml">
  <Signature xmlns="http://www.w3.org/2000/09/xmldsig#">
<SignedInfo>
<CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
<SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"/>
<Reference URI="#_b0e454a0-2ffb-0132-36d4-6c40088ec1f6">
<Transforms>
<Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
<Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
</Transforms>
<DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/>
<DigestValue>WpIgMMI9OVtflD/ONRkILzQpi3qchdKuvwxtg2d9TSc=</DigestValue>
</Reference>
</SignedInfo>
<SignatureValue>MldZECzUm6yKY4kLuhpk1E0Q1lujMDeltAkC0V20t2OikkTrGJEE4E2WZuL5f4Dt
20t4ss7ibliFs6JbTnZ5zAM5eozX+yHIHQYsymlagB2o5GQ5teFddH9W4fy2lsz5
DNvVJxYNw7AvNG9tBkPmX+7XzeN/mhDHopNH0VvrVW/rqZWdM70GMEEVeWMY526I
f0GaCbv0BZyYqZJHe4Ur9s2VYPGjCiln84Mjl2ZkojUkVHTyqw5HlTA4x3JoeXZ2
VHNUDXEfXd8wQiLZU6kufc8AXrYJDapPfjVZhRkPlKl6gY8KZAM0Qb6OisA0zKhP
0N8RGh3CSED4K4YaY7KCLQ==</SignatureValue>
<KeyInfo>
<X509Data>
<X509Certificate>
  ...
</X509Certificate>
</X509Data>
</KeyInfo>
</Signature><IDPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
    <KeyDescriptor use="signing">
      <KeyInfo xmlns="http://www.w3.org/2000/09/xmldsig#">
        <X509Data>
          <X509Certificate>
  ...
</X509Certificate>
        </X509Data>
      </KeyInfo>
    </KeyDescriptor>
    <SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://upaya-idp-dev.18f.gov/api/saml/logout"/>
    <NameIDFormat>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent</NameIDFormat>
    <NameIDFormat>urn:oasis:names:tc:SAML:2.0:nameid-format:emailAddress</NameIDFormat>
    <SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://upaya-idp-dev.18f.gov/api/saml/auth"/>
    <saml:Attribute NameFormat="urn:oasis:names:tc:SAML:2.0:nameid-format:persistent" Name="" FriendlyName="uuid"/>
    <saml:Attribute NameFormat="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress" Name="" FriendlyName="email"/>
    <saml:Attribute NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri" Name="" FriendlyName="mobile"/>
  </IDPSSODescriptor>
  <AttributeAuthorityDescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
    <KeyDescriptor use="signing">
      <KeyInfo xmlns="http://www.w3.org/2000/09/xmldsig#">
        <X509Data>
          <X509Certificate>
  ...
</X509Certificate>
        </X509Data>
      </KeyInfo>
    </KeyDescriptor>
    <Organization>
      <OrganizationName xml:lang="en">18F</OrganizationName>
      <OrganizationDisplayName xml:lang="en">18F</OrganizationDisplayName>
      <OrganizationURL xml:lang="en">http://18f.gsa.gov</OrganizationURL>
    </Organization>
    <ContactPerson contactType="technical"/>
    <AttributeService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://upaya-idp-dev.18f.gov/api/saml/attributes"/>
    <NameIDFormat>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent</NameIDFormat>
    <NameIDFormat>urn:oasis:names:tc:SAML:2.0:nameid-format:emailAddress</NameIDFormat>
    <saml:Attribute NameFormat="urn:oasis:names:tc:SAML:2.0:nameid-format:persistent" Name="" FriendlyName="uuid"/>
    <saml:Attribute NameFormat="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress" Name="" FriendlyName="email"/>
    <saml:Attribute NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri" Name="" FriendlyName="mobile"/>
  </AttributeAuthorityDescriptor>
  <Organization>
    <OrganizationName xml:lang="en">18F</OrganizationName>
    <OrganizationDisplayName xml:lang="en">18F</OrganizationDisplayName>
    <OrganizationURL xml:lang="en">http://18f.gsa.gov</OrganizationURL>
  </Organization>
  <ContactPerson contactType="technical"/>
</EntityDescriptor>

```

## SP metadata - https://upaya-idp-dev.18f.gov/users/auth/saml/metadata

```
<?xml version='1.0' encoding='UTF-8'?>
<md:EntityDescriptor xmlns:md='urn:oasis:names:tc:SAML:2.0:metadata' entityID='https://upaya-idp-dev.18f.gov/users/auth/saml'>
 <md:SPSSODescriptor protocolSupportEnumeration='urn:oasis:names:tc:SAML:2.0:protocol' AuthnRequestsSigned='true' WantAssertionsSigned='true'>
  <md:NameIDFormat>
   urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress
  </md:NameIDFormat>
  <md:AssertionConsumerService Binding='urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST' Location='https://upaya-idp-dev.18f.gov/users/auth/saml/callback' isDefault='true' index='0'/>
  <md:KeyDescriptor use='signing'>
   <ds:KeyInfo xmlns:ds='http://www.w3.org/2000/09/xmldsig#'>
    <ds:X509Data>
     <ds:X509Certificate>
      ...
     </ds:X509Certificate>
    </ds:X509Data>
   </ds:KeyInfo>
  </md:KeyDescriptor>
 </md:SPSSODescriptor>
</md:EntityDescriptor>
```
