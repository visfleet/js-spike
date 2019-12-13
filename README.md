# This project is a spike for vWork's new JavaScript infrastructure.

## Running environment

* rbenv
* nvm (with `.nvmrc` support)
* yarn
* sqlite3

## Install dependencies

```
cd ./vwork_rails && bundle install
cd ./vwork_react_app && yarn
```

## Populate database

```
cd ./vwork_rails && bundle exec rake db:prepare
```

## Run servers

* Rails: `cd ./vwork_rails && bundle exec rails c`
* ReactApp: `cd ./vwork_react_app && yarn start`
