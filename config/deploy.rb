# the name of your website - should also be the name of the directory
set :application, "garrett.backend"
set :user, "mtgdeploy"
set :source, "23.253.52.209"
set :deploy_to, "/var/www/garrett.backend/#{fetch(:application)}"

# linked files & dirs
set :linked_dirs, ["log", "node_modules"]

set :linked_files, [".env", "deploy.sh", "pm2.json", "src/database/config.ts"]


# roles
role :web, fetch(:source)
role :app, fetch(:source)
role :db,  fetch(:source), :primary => true

# git
set :scm, :git
set :repo_url, "ssh://#{fetch(:user)}@github.com/GarrettCulos/garrett.backend.git"
set :branch, "master"
# fetches from local git repo on the server rather then clone repo on each deploy
set :deploy_via, :remote_cache

# the name of the deployment user-account on the server
set :keep_releases, 3
set :use_sudo, false

# ssh connection
# use your private keys to authenticate to server and github
set :ssh_options, { :forward_agent => true }

# tasks
namespace :deploy do
  after :finished, :npm_install_build do
    on roles(:all) do
      execute "nvm install 9.6.0"
      execute "cd #{fetch :deploy_to}/current/ && npm install"
      execute "cd #{fetch :deploy_to}/current/ && npm run build"
    end
  end
  after :finished, :pm2_restart_server do
    on roles(:all) do
      execute "cd #{fetch :deploy_to}/current/ && nvm install 9.6.0 && pm2 restart pm2.json"
    end
  end
end
