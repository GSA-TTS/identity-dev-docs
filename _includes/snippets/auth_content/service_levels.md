{% capture type_of_service %}
  A type of service level<sup id="fnref:1:2" role="doc-noteref"><a href="#fn:1" class="footnote" rel="footnote">1</a></sup> must be specified.

- **`http://idmanagement.gov/ns/assurance/ial/1`**
    Basic identity assurance, does not require identity verification (this is the most common value).
- **`http://idmanagement.gov/ns/assurance/ial/2`**
    Requires that the user has gone through identity verification<sup id="fnref:1:3" role="doc-noteref"><a href="#fn:1" class="footnote" rel="footnote">1</a></sup>
{% endcapture %}
<div markdown="1">
{{ type_of_service | markdownify }}
</div>