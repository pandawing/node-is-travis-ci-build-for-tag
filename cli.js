#!/usr/bin/env node
/*eslint no-console:0*/
'use strict';
var meow = require('meow');
var isTravisCiBuildForTag = require('./');

meow({
  help: [
    'Usage',
    '  $ is-travis-ci-build-for-tag',
    '',
    'Examples',
    '  // on your local computer',
    '  $ is-travis-ci-build-for-tag',
    '  This is not Travis-CI build for a tag. //=> exit code: 1',
    '',
    '  // on Travis-CI build for a tag',
    '  $ is-travis-ci-build-for-tag',
    '  (no output) //=> exit code: 0'
  ]
});

if (!isTravisCiBuildForTag()) {
  console.error('This is not Travis-CI build for a tag.');
  process.exit(1);
}
