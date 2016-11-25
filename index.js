const forEach = require('lodash/forEach');
const isEmpty = require('lodash/isEmpty');

function validate(data, dataValidators) {
    const errors = {};

    forEach(data, (fieldValue, fieldName) => {
        const fieldValidators = [].concat(dataValidators[fieldName] || []);

        forEach(fieldValidators, validator => {
            const error = validator(fieldValue);

            if (error) {
                errors[fieldName] = (errors[fieldName] || []).concat(error);
            }
        });
    });

    return isEmpty(errors) ? null : errors;
}

module.exports = validate;