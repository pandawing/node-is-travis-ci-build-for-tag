#!/usr/bin/env node
/*eslint no-console:0*/
'use strict';
var meow = require('meow');
var isTravisCiBuildForTag = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ is-travis-ci-build-for-tag [input]',
    '',
    'Examples',
    '  $ is-travis-ci-build-for-tag',
    '  unicorns & rainbows',
    '',
    '  $ is-travis-ci-build-for-tag ponies',
    '  ponies & rainbows',
    '',
    'Options',
    '  --foo  Lorem ipsum. Default: false'
  ]
});

console.log(isTravisCiBuildForTag(cli.input[0] || 'unicorns'));
