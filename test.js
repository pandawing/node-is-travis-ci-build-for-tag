'use strict';
var assert = require('power-assert');
var isTravisCiBuildForTag = require('./');

it('should ', function () {
  assert.strictEqual(isTravisCiBuildForTag('unicorns'), 'unicorns & rainbows');
});
it('should not ', function () {
  assert.strictEqual(isTravisCiBuildForTag('unicorns'), 'unicorns & wrong');
});
