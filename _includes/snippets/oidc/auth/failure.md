{% capture fail_response %}
```bash
https://agency.gov/response?
  error=access_denied&
  state=abcdefghijklmnopabcdefghijklmnop
```
{% endcapture %}

<div markdown="1" data-example="fail_response" class="markdown">
{{ fail_response | markdownify }}
</div>