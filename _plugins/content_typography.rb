# frozen_string_literal: true

module Kramdown
  module Parser
    class Kramdown
      # rubocop:disable Naming/MethodParameterName
      prepend(Module.new do
        def add_link(el, *args)
          add_link_class!(el) if el.type == :a
          super
        end

        def parse_autolink
          *children, el = super
          add_link_class!(el)
          [*children, el]
        end

        def add_link_class!(el)
          el.attr['class'] = [*el.attr['class'], 'usa-link'].join(' ')
        end
      end)
      # rubocop:enable Naming/MethodParameterName
    end
  end
end
