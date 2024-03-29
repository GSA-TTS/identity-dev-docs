require 'rspec'
require 'pathname'
require 'nokogiri'
require 'set'
require 'uri'

Dir['spec/support/**.rb'].each { |f| require File.expand_path(f) }

RSpec.configure do |config|
  config.disable_monkey_patching!
end
