#!/bin/sh -ex

(cd vwork_react_app && yarn install --frozen-lockfile)
(cd vwork_react_app && yarn run lint)
(cd vwork_react_app && yarn run test --coverage)
(cd vwork_react_app && yarn run codecov --flags vwork_react_app)
