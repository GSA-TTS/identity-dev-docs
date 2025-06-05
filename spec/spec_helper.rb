require 'rspec'
require 'pathname'
require 'nokogiri'
require 'uri'

Dir['spec/support/**.rb'].each { |f| require File.expand_path(f) }

RSpec.configure(&:disable_monkey_patching!)
