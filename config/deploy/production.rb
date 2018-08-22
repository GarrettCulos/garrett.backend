# app/config/deploy/production.rb
set :source, ""
server '', user: fetch(:user), roles: %w{web app}, primary: true
