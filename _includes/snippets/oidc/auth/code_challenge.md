 {% capture code_challenge %}
```ruby
code_verifier = SecureRandom.hex
=> "5787d673fb784c90f0e309883241803d"
code_challenge = Digest::SHA256.digest(code_verifier) # binary data
url_safe_code_challenge = Base64.urlsafe_encode64(code_challenge)
# RFC 4648 URL-safe Base64 encoding replaces "+" with "-" and "/" with "_" and trims trailing "="
=> "1BUpxy37SoIPmKw96wbd6MDcvayOYm3ptT-zbe6L_zM"
Base64.encode64(code_challenge) # wrong and URL-unsafe encoding
=> "1BUpxy37SoIPmKw96wbd6MDcvayOYm3ptT+zbe6L/zM=" # wrong and URL-unsafe encoding
```
{% endcapture %}
        
<div markdown="1" class="markdown">
    {{ code_challenge | markdownify }}
</div>