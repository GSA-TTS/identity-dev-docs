{% comment %}
Include:
- data (captured YAML data)
- filename
{% endcomment %}

```yaml
{{ include.data }}
```

{% assign escaped_data = include.data | uri_escape | replace: '#', '%23' %}
{% assign href = 'data:application/x-yaml,' | append: escaped_data %}

<a href="{{ href }}"
   download="{{ include.filename }}"
   class="usa-button usa-button--outline">
  Download .yml
</a>
