require 'capybara_helper'
require 'pry-byebug'

RSpec.describe 'accordions on /oidc/authorization/', :js, type: :feature do
  it 'loads the page' do
    visit '/oidc/authorization/'
    first_summary = find_all('summary').first
    expect(first_summary.text).to eq 'Type of Service Level'
  end
end