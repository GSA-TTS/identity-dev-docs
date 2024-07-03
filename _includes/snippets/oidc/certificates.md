{% capture ssl %}
```
openssl req -nodes -x509 -days 365 -newkey rsa:2048 -keyout private.pem -out public.crt
```
{% endcapture %}
<div markdown="1" data-example="ssl" class="markdown">
{{ ssl | markdownify }}
</div>
