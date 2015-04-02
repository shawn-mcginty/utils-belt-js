Utils-Belt.js
=========

A collection of util moduels which work both on the backend and in the broswer.

## Installation

  `npm install utils-belt-js --save`

## Usage
```
  var utilsBelt = require('utils-belt-js'),
      stringUtils = utilsBelt.StringUtils;

  var blankString = '     ';

  if(stringUtils.isBlank(blankString)){
    // Will return true
  }

  // methods also can use callback with results in them

  stringUtils.isBlank(blankString, function(isBlank){
    if(isBlank){
      // Will return true
    }
  });

  // methods are also null and undefined safe
  if(stringUtils.isBlank(undefinedString)){
    // Will return true
  }
```
## Tests

  `npm test`

## Contributing

Add modules and functions for any common utility issues that come along.
Add unit tests for any new or changed functionality. Lint and test your code.
All modules should run on the browser.

## Release History

* 0.1.0 Initial release
* 0.1.1 Added StringUtils
* 0.1.2 Added ArrayUtils.shuffle()