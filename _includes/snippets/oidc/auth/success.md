{% capture success_response %}
```bash
https://agency.gov/response?
  code=12345&
  state=abcdefghijklmnopabcdefghijklmnop
```
{% endcapture %}

<div markdown="1" data-example="success_response" class="markdown">
{{ success_response | markdownify }}
</div>