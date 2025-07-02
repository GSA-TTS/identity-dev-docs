require 'rouge'

# Include tabindex for accessibility reasons
# See: https://github.com/rouge-ruby/rouge?tab=readme-ov-file#formatters
module Rouge
  module Formatters
    class HTMLPygmentsA11y < Rouge::Formatters::HTMLPygments
      def stream(tokens, &)
        yield %(<div class="highlight"><pre class="#{@css_class}" tabindex="0"><code>)
        @inner.stream(tokens, &)
        yield '</code></pre></div>'
      end
    end
  end
end

module Rouge
  module Formatters
    class HTMLLegacyA11y < Rouge::Formatters::HTMLLegacy
      def initialize(opts = {}) # rubocop:disable Lint/MissingSuper
        @formatter = if opts[:inline_theme]
                       Rouge::Formatters::HTMLInline.new(opts[:inline_theme])
                     else
                       Rouge::Formatters::HTML.new
                     end

        @formatter = Rouge::Formatters::HTMLTable.new(@formatter, opts) if opts[:line_numbers]

        return unless opts.fetch(:wrap, true)

        @formatter = Rouge::Formatters::HTMLPygmentsA11y.new(@formatter, opts.fetch(:css_class, 'codehilite'))
      end
    end
  end
end
