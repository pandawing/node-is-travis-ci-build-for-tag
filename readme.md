# is-travis-ci-build-for-tag

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> Check if your code is running on [Travis-CI build for a tag](http://docs.travis-ci.com/user/environment-variables/#Default-Environment-Variables)

This is based on [is-travis](https://github.com/sindresorhus/is-travis).


## Install

```
$ npm install --save is-travis-ci-build-for-tag
```


## Usage

```js
var isTravisCiBuildForTag = require('is-travis-ci-build-for-tag');

// on your local computer
isTravisCiBuildForTag();
//=> false

// on Travis-CI build for a tag
isTravisCiBuildForTag();
//=> true
```



## CLI

```
$ npm install --global is-travis-ci-build-for-tag
```
```
$ is-travis-ci-build-for-tag --help
  Check if your code is running on Travis-CI build for a tag.

  Usage
    $ is-travis-ci-build-for-tag

  Examples
    // on your local computer
    $ is-travis-ci-build-for-tag
    This is not Travis-CI build for a tag. //=> exit code: 1

    // on Travis-CI build for a tag
    $ is-travis-ci-build-for-tag
    (no output) //=> exit code: 0
```



## API

### isTravisCiBuildForTag()


## Changelog

[changelog.md](./changelog.md).


## License

MIT © [sanemat](http://sane.jp)

### [is-travis](https://github.com/sindresorhus/is-travis)

MIT © [Sindre Sorhus](http://sindresorhus.com)


[travis-url]: https://travis-ci.org/pandawing/node-is-travis-ci-build-for-tag
[travis-image]: https://img.shields.io/travis/pandawing/node-is-travis-ci-build-for-tag/master.svg?style=flat-square&label=travis
[appveyor-url]: https://ci.appveyor.com/project/sanemat/node-is-travis-ci-build-for-tag/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/node-is-travis-ci-build-for-tag/master.svg?style=flat-square&label=appveyor
[npm-url]: https://npmjs.org/package/is-travis-ci-build-for-tag
[npm-image]: https://img.shields.io/npm/v/is-travis-ci-build-for-tag.svg?style=flat-square
[daviddm-url]: https://david-dm.org/pandawing/node-is-travis-ci-build-for-tag
[daviddm-image]: https://img.shields.io/david/pandawing/node-is-travis-ci-build-for-tag.svg?style=flat-square
