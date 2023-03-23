module Kramdown
  module Parser
    class Kramdown
      prepend(Module.new do
        def add_link(el, *args)
          el.attr['class'] = [*el.attr['class'], 'usa-link'].join(' ') if el.type == :a
          super(el, *args)
        end
      end)
    end
  end
end
