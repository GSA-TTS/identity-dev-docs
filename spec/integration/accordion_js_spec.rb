# frozen_string_literal: true

require 'capybara_helper'
require 'pry-byebug'

RSpec.describe 'accordions on /oidc/authorization/', :js, type: :feature do
  it 'is not expanded by default' do
    visit '/oidc/authorization'
    expect(page).to have_element('dt')
    expect(page).to have_no_element('dd')
    accordion_button = find('#service_level button')
    expect(accordion_button.native.attribute('aria-expanded')).to eq('false')
  end

  it 'is expanded with an anchor in the URL' do
    visit '/oidc/authorization#service_level'
    expect(page).to have_element('dt')
    expect(page).to have_element('dd')
    definition = find('#service_level ~ dd').text
    expect(definition).to include('acr.login.gov:verified')
    accordion_button = find('#service_level > button')
    expect(accordion_button.native.attribute('aria-expanded')).to eq('true')

    visit '/oidc/authorization#aal_values'
    next_definition = find('#aal_values ~ dd').text
    expect(next_definition).to include('http://idmanagement.gov/ns/assurance/aal/2')
  end
end
