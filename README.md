# egg-vue-webpack

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-vue-webpack.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-vue-webpack
[travis-image]: https://img.shields.io/travis/eggjs/egg-vue-webpack.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-vue-webpack
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-vue-webpack.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-vue-webpack?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-vue-webpack.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-vue-webpack
[snyk-image]: https://snyk.io/test/npm/egg-vue-webpack/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-vue-webpack
[download-image]: https://img.shields.io/npm/dm/egg-vue-webpack.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-vue-webpack

<!--
Description here.
-->

## Install

```bash
$ npm i egg-vue-webpack --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.webpackVue = {
  enable: true,
  package: 'egg-vue-webpack',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.webpackVue = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
