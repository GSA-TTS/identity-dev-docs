# frozen_string_literal: true

require 'json'

module LoginGov
  module PrettyJsonify
    def pretty_jsonify(input)
      json = JSON.parse(input) if input.is_a?(String)

      JSON.pretty_generate(json)
    end
  end
end

Liquid::Template.register_filter(LoginGov::PrettyJsonify)
