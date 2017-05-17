require 'spec_helper'

RSpec.describe 'index.md' do
  let(:doc) { Nokogiri::HTML(file_at('/')) }

  it 'escapes html correctly' do
    expect(doc).to properly_escape_html
  end

  it 'links to valid headings' do
    expect(doc).to link_to_valid_headers
  end

  it 'links to valid internal pages' do
    expect(doc).to link_to_valid_internal_pages
  end
end
