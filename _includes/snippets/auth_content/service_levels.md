{% capture type_of_service %}
  A type of service level<sup role="doc-noteref"><a href="#fn:1" class="footnote" rel="footnote">&#42;</a></sup> must be specified.

- **`http://idmanagement.gov/ns/assurance/ial/1`**
    Basic identity assurance, does not require identity verification (this is the most common value).
- **`http://idmanagement.gov/ns/assurance/ial/2`**
    Requires that the user has gone through identity verification<sup role="doc-noteref"><a href="#fn:1" class="footnote" rel="footnote">&#42;</a></sup>
{% endcapture %}
<div markdown="1">
{{ type_of_service | markdownify }}
</div>
