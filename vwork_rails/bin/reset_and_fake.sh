#!/usr/bin/env bash
set -e

bundle exec rake db:reset
bundle exec rake fake:createjobsd
