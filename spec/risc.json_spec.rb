require 'spec_helper'
require 'json'

RSpec.describe '_site/data/risc.json' do
  let(:json) { JSON.parse(File.read('_site/data/risc.json')) }

  it 'is is an array of supported_events' do
    expect(json).to be
    expect(json['supported_events']).to be_a(Array)
  end
end