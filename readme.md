# is-travis-ci-build-for-tag

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> My spectacular module


## Install

```
$ npm install --save is-travis-ci-build-for-tag
```


## Usage

```js
var isTravisCiBuildForTag = require('is-travis-ci-build-for-tag');

isTravisCiBuildForTag('unicorns');
//=> unicorns & rainbows
```



## CLI

```
$ npm install --global is-travis-ci-build-for-tag
```
```
$ is-travis-ci-build-for-tag --help

  Usage
    is-travis-ci-build-for-tag [input]

  Example
    is-travis-ci-build-for-tag
    unicorns & rainbows

    is-travis-ci-build-for-tag ponies
    ponies & rainbows

  Options
    --foo  Lorem ipsum. Default: false
```



## API

### isTravisCiBuildForTag(input, [options])

#### input

*Required*  
Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## Changelog

[changelog.md](./changelog.md).


## License

MIT © [sanemat](http://sane.jp)


[travis-url]: https://travis-ci.org/sanemat/is-travis-ci-build-for-tag
[travis-image]: https://img.shields.io/travis/sanemat/is-travis-ci-build-for-tag/master.svg?style=flat-square&label=travis
[appveyor-url]: https://ci.appveyor.com/project/sanemat/is-travis-ci-build-for-tag/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/is-travis-ci-build-for-tag/master.svg?style=flat-square&label=appveyor
[npm-url]: https://npmjs.org/package/is-travis-ci-build-for-tag
[npm-image]: https://img.shields.io/npm/v/is-travis-ci-build-for-tag.svg?style=flat-square
[daviddm-url]: https://david-dm.org/sanemat/is-travis-ci-build-for-tag
[daviddm-image]: https://img.shields.io/david/sanemat/is-travis-ci-build-for-tag.svg?style=flat-square
