CD: Capistrano
CI: CircleCI ( master branch will be deployed to server suing capistrano )

Configuration files:
    - '.env' - `cp ./.env.example ./.env` environment related file, set external port, environment variables.
    - 'deploy.sh' - `cp ./deploy.example.sh ./deploy.sh` command to build server files, and start node server using pm2.
    - 'database/config.ts' - `cp ./database/config.default.ts ./database/config.ts` database connection configuration.

## Server Setup
#Cap
deploy user needs access to npm 8.0.0+, ssh key added to CircleCI deployment keys, and to git repo.

- `gem install bundler`
- `gem install capistrano`
- `gem install capistrano-ext`
- `bundle install`
- `bundle exec cap install`

deploy using
- `bundle exec cap production deploy`