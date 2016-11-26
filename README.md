# validate-data

[![Build Status](https://travis-ci.org/borovin/validate-data.svg?branch=master)](https://travis-ci.org/borovin/validate-data)
[![codecov](https://codecov.io/gh/borovin/validate-data/branch/master/graph/badge.svg)](https://codecov.io/gh/borovin/validate-data)
[![bitHound Overall Score](https://www.bithound.io/github/borovin/validate-data/badges/score.svg)](https://www.bithound.io/github/borovin/validate-data)

Simple function for validating plain js objects. Accepts 2 arguments: `sourceObject` and `validatorList` and returns
error list. For each key in source object corresponding validator will be executed. If some of validation functions
return string or array with error messages it will be added to error list.

Validator could be array of functions. All functions in array will be executed.


## Install

`npm install @basket/validate-data --save`

## Usage

```
const validateData = require('../index');

const data = {a: false};

const errors = validateData(data, {
    a: function(value) {
        if (!value) {
            return 'a value could not be falsy';
        }
    }
});

// => {a: ['a value could not be falsy']}
```

```
const validateData = require('../index');

const data = {a: -1};

const negativeValidator = function(value){
    if (value < 0) {
        return 'a should be positive number';
    }
};

const rangeValidator = function(value){
    if (value < 0 || value > 10) {
        return 'a should be in range from 0 to 10';
    }
};

const errors = validateData(data, {
    a: [negativeValidator, rangeValidator]
});

// => {a: ['a should be positive number', 'a should be in range from 0 to 10']}
```

