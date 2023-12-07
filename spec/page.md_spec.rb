require 'spec_helper'

def redirect_page?(path)
  File.read(path).include?('<meta http-equiv="refresh"')
end

RSpec.describe 'all pages' do
  files = Dir.glob('_site/**/*.html')
  files.reject! {|path| redirect_page?(path) }
  files.each do |page|
    describe page do
      let(:doc) { Nokogiri::HTML(File.new(page.to_s)) }

      it 'does not have broken Markdown links' do
        expect(doc.to_s).to_not include(')]')
      end

      it 'links to valid headings' do
        expect(doc).to link_to_valid_headers
      end

      it 'links to valid internal pages' do
        expect(doc).to link_to_valid_internal_pages
      end

      it 'includes analytics tags' do
        expect(doc.to_s).to include('https://www.google-analytics.com/analytics.js')
        expect(doc.to_s).to include('https://dap.digitalgov.gov')
        expect(doc.to_s).to include('https://www.googletagmanager.com/gtag/js')
      end
    end
  end
end
