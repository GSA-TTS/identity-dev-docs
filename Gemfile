source 'https://rubygems.org'

ruby File.read('.ruby-version').strip

gem 'base64'
gem 'csv'
gem 'jekyll', '~> 4.4.1'
gem 'jekyll-sass-converter', '~> 3.0.0'
gem 'kramdown-parser-gfm', '~> 1.0'
gem 'jekyll-redirect-from'
gem 'jekyll-sitemap'
gem 'logger'

group :development, :test do
  gem 'pry-byebug'
end

group :test do
  gem 'html-proofer', '~> 4.4'
  gem 'nokogiri', '>= 1.10.5'
  gem 'rspec'
  gem 'rspec_junit_formatter', require: false
end
