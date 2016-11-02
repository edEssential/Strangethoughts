source "https://rubygems.org"
ruby '2.3.0'

gem 'rails', '4.2.5.2'
gem 'paperclip'
gem 'aws-sdk'
gem "auto_html"
gem 'devise'
gem 'smt_rails', git: 'git://github.com/railsware/smt_rails.git'
gem 'omniauth'
gem 'newrelic_rpm'
gem 'sprockets', '3.6.3'

group :assets do
  gem 'sass-rails'
  gem 'coffee-rails'
  gem 'uglifier'
  gem 'jquery-rails'
  gem 'jquery-ui-rails'
end

group :development, :test do
  gem 'sqlite3'
end

group :production do
  gem 'pg', '0.15.1'
  gem 'rails_12factor'
end