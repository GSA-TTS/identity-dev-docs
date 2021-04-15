require 'json'

module LoginGov
  module PrettyJsonify
    def pretty_jsonify(input)
      json = if input.kind_of?(String)
        JSON.parse(input)
      else
        json
      end

      JSON.pretty_generate(json)
    end
  end
end

Liquid::Template.register_filter(LoginGov::PrettyJsonify)
