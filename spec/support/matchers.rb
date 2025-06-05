# frozen_string_literal: true

RSpec::Matchers.define :open_external_links_in_new_window do
  missing_target_blank = []

  match do |actual|
    doc = actual

    doc.css('a[href^=http]').each do |a|
      next unless a.ancestors('nav').empty?

      missing_target_blank << a[:href] if a[:target] != '_blank'
    end

    expect(missing_target_blank).to be_empty
  end

  failure_message do |actual|
    "expected that #{actual.url} would have target=_blank on links:\n#{missing_target_blank.join("\n")}"
  end
end

RSpec::Matchers.define :link_to_valid_headers do
  missing_headers = []

  match do |actual|
    doc = actual

    doc.css('a[href^="#"]').each do |a|
      target = a[:href]

      next if a[:id] == 'js-mobile-nav-toggle'
      next if a.to_s.include?('Return to top')
      next if a.to_s.include?('/assets/img/material-icons/expand_less.svg')

      if target == '#'
        missing_headers << a.to_s
      elsif target.match?(/:/)
        anchor = doc.css("[@id='#{target.gsub('#', '')}']")
        missing_headers << target if anchor.nil?
      else
        anchor = doc.at(target)
        missing_headers << target if anchor.nil?
      end
    end

    expect(missing_headers).to be_empty
  end

  failure_message do |actual|
    "expected that #{actual.url} would link to valid headers:\n#{missing_headers.join("\n")}"
  end
end

RSpec::Matchers.define :have_unique_ids do
  duplicate_ids = Set.new

  match do |actual|
    doc = actual

    ids = Set.new

    doc.css('[id]').each do |tag|
      duplicate_ids << tag[:id] if ids.include?(tag[:id])

      ids << tag[:id]
    end

    expect(duplicate_ids).to be_empty
  end

  failure_message do |actual|
    "expected that #{actual.url} would not duplicate ids, but found:\n#{duplicate_ids.to_a.join("\n")}"
  end
end
