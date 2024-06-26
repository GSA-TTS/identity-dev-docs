require 'rouge'

# Include tabindex for accessibility reasons
class Rouge::Formatters::HTMLPygmentsA11y < Rouge::Formatters::HTMLPygments
  def initialize(inner, css_class='codehilite')
    @inner = inner
    @css_class = css_class
  end

  def stream(tokens, &b)
    yield %(<div class="highlight"><pre class="#{@css_class}"><code tabindex="0">)
    @inner.stream(tokens, &b)
    yield "</code></pre></div>"
  end
end

class Rouge::Formatters::HTMLLegacyA11y < Rouge::Formatters::HTMLLegacy
  def initialize(opts={})
    @formatter = opts[:inline_theme] ? HTMLInline.new(opts[:inline_theme])
               : Rouge::Formatters::HTML.new


    @formatter = Rouge::Formatters::HTMLTable.new(@formatter, opts) if opts[:line_numbers]

    if opts.fetch(:wrap, true)
      @formatter = Rouge::Formatters::HTMLPygmentsA11y.new(@formatter, opts.fetch(:css_class, 'codehilite'))
    end
  end

  # @yield the html output.
  def stream(tokens, &b)
    @formatter.stream(tokens, &b)
  end
end
