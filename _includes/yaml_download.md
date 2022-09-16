{% comment %}
Include:
- data (captured YAML data)
- filename
{% endcomment %}

{% assign path = include.filename | prepend: 'yaml/' %}

{%- capture data -%}
{% include {{ path }} %}
{%- endcapture %}

```yaml
{{ data }}
```

<a href="{{ site.baseurl }}/assets/{{ path }}" class="usa-button usa-button--outline">
  Download .yml
</a>
