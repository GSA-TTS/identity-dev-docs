require 'rouge'
# Include tabindex for accessibility reasons
class HTMLPygmentsA11y < Rouge::Formatters::HTML
  def stream(tokens, &b)
    yield %(<div class="highlight"><pre class="#{@css_class}"><code tabindex="0">)
    @inner.stream(tokens, &b)
    yield "</code></pre></div"
  end
end
