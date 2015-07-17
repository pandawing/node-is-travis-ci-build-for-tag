'use strict';

var assert = require('power-assert');
var isTravisCiBuildForTag = require('./');

it('should not travis-ci build for tag', function () {
  delete process.env.TRAVIS_TAG;
  delete process.env.TRAVIS;
  delete process.env.CI;
  assert.equal(isTravisCiBuildForTag(), false);
});

it('treat empty value as false', function () {
  process.env.TRAVIS_TAG = '';
  process.env.TRAVIS = 1;
  process.env.CI = 1;
  assert.equal(isTravisCiBuildForTag(), false);
});

it('treat falsy value as false', function () {
  process.env.TRAVIS_TAG = 'false';
  process.env.TRAVIS = 1;
  process.env.CI = 1;
  assert.equal(isTravisCiBuildForTag(), false);
});

it('should travis-ci build for tag', function () {
  process.env.TRAVIS_TAG = 1;
  process.env.TRAVIS = 1;
  process.env.CI = 1;
  assert.equal(isTravisCiBuildForTag(), true);
});
