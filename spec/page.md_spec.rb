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

      it 'includes analytics tags' do
        expect(doc.to_s).to include('https://dap.digitalgov.gov')
        expect(doc.to_s).to include('https://www.googletagmanager.com/gtag/js')
      end

      it 'does not include markdown markup in description meta tags', aggregate_failures: true do
        description = doc.at_css('meta[name=description]')
        expect(description[:content]).to_not(include('](')) if description

        og_description = doc.at_css('meta[property="og:description"]')
        expect(og_description[:content]).to_not(include('](')) if og_description
      end
    end
  end
end
