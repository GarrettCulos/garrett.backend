# app/config/deploy/production.rb
set :source, "23.253.52.209"
server '23.253.52.209', user: fetch(:user), roles: %w{web app}, primary: true
