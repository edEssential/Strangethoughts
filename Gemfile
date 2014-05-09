source "https://rubygems.org"
ruby "1.9.3"

gem 'rails', '3.2.13'
gem 'paperclip'
gem 'aws-sdk'
gem "auto_html"
gem 'devise'
gem 'smt_rails', git: 'git://github.com/railsware/smt_rails.git'
gem 'omniauth'
gem 'newrelic_rpm'

group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'
  gem 'uglifier', '>= 1.0.3'
  gem 'jquery-rails', '~> 3.0.3'
  gem 'jquery-ui-rails'
end

group :development, :test do
  gem 'sqlite3'
end

group :production do
  gem 'pg', '0.15.1'
  gem 'rails_12factor', '0.0.2'
end