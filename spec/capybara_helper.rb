require 'spec_helper'
require 'capybara/rspec'
require 'rack/jekyll'
require 'selenium-webdriver'
require 'yaml'

Capybara.javascript_driver = :selenium_chrome_headless
Capybara.app = Rack::Jekyll.new(force_build: true)
Capybara.server = :webrick
