# frozen_string_literal: true

source 'https://rubygems.org'

ruby File.read('.ruby-version').strip

gem 'jekyll', '~> 4.3.0'
gem 'jekyll-redirect-from'
gem 'jekyll-sass-converter', '~> 3.0.0'
gem 'jekyll-sitemap'
gem 'kramdown-parser-gfm', '~> 1.0'

group :development, :test do
  gem 'pry-byebug'
  gem 'rubocop', require: false
  gem 'rubocop-capybara', require: false
  gem 'rubocop-rspec', require: false
end

group :test do
  gem 'capybara'
  gem 'html-proofer', '~> 4.0'
  gem 'nokogiri', '>= 1.10.5'
  gem 'rack-jekyll'
  gem 'rackup' # required for `Capybara.server = :webrick`
  gem 'rspec'
  gem 'rspec_junit_formatter', require: false
  gem 'selenium-webdriver'
end
