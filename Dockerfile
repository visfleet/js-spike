FROM ruby:2.5.3

RUN gem update --system
RUN gem install bundler -v "~>2.0"
ENV NODE_VERSION 12.13.1
RUN curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz" \
    && tar -xJf "node-v$NODE_VERSION-linux-x64.tar.xz" -C /usr/local --strip-components=1 \
    && rm "node-v$NODE_VERSION-linux-x64.tar.xz" \
    && ln -s /usr/local/bin/node /usr/local/bin/nodejs
RUN npm i -g yarn

RUN mkdir /vwork_rails
RUN mkdir /vwork_react_app

WORKDIR /vwork_rails

ADD vwork_rails/Gemfile .
ADD vwork_rails/Gemfile.lock .
RUN bundle install --frozen --without development test
ADD vwork_rails/ .

ENV SECRET_KEY_BASE=temporary_secret_key_base
ENV RAILS_ENV=production
ENV RAILS_SERVE_STATIC_FILES=yes
ENV RAILS_LOG_TO_STDOUT=yes
RUN bundle exec rake assets:precompile

WORKDIR /vwork_react_app
ADD vwork_react_app/package.json .
ADD vwork_react_app/yarn.lock .
RUN yarn install --frozen-lockfile --production
ADD vwork_react_app/ .
RUN yarn build

RUN cp -rf /vwork_react_app/build/* /vwork_rails/public/

WORKDIR /vwork_rails
