Utils-Belt.js
=========

A collection of util moduels which work both on the backend and in the broswer.

## Installation

  `npm install utils-belt-js --save`

## Usage

  var utilsBelt = require('sutils-belt-js'),;

  var html = '<h1>Hello World</h1>',
      escaped = escape(html),
      unescaped = unescape(escaped);

  console.log('html', html, 'escaped', escaped, 'unescaped', unescaped);

## Tests

  npm test

## Contributing

Add modules and functions for any common utility issues that come along.
Add unit tests for any new or changed functionality. Lint and test your code.
All modules should run on the browser.

## Release History

* 0.1.0 Initial release
* 0.1.1 Added StringUtils