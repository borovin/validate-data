const validate = require('../index');

const data = {
    nullProp: null,
    falseProp: false,
    trueProp: true,
    stringProp: 'string',
    numberProp: 1.1,
    arrayProp: [1, 2, 3],
    objectProp: {a: 1}
};

it('should validate any type of data', () => {
    const nullValidator = jest.fn();
    const falseValidator = jest.fn();
    const trueValidator = jest.fn();
    const stringValidator = jest.fn();
    const numberValidator = jest.fn();
    const arrayValidator = jest.fn();
    const objectValidator = jest.fn();

    validate(data, {
        nullProp: nullValidator,
        falseProp: falseValidator,
        trueProp: trueValidator,
        stringProp: stringValidator,
        numberProp: numberValidator,
        arrayProp: arrayValidator,
        objectProp: objectValidator
    });

    expect(nullValidator).toHaveBeenCalledWith(null);
    expect(falseValidator).toHaveBeenCalledWith(false);
    expect(trueValidator).toHaveBeenCalledWith(true);
    expect(stringValidator).toHaveBeenCalledWith('string');
    expect(numberValidator).toHaveBeenCalledWith(1.1);
    expect(arrayValidator).toHaveBeenCalledWith([1, 2, 3]);
    expect(objectValidator).toHaveBeenCalledWith({a: 1});
});

it('should return error messages', () => {
    const nullValidator = function(value) {
        if (value === null) {
            return 'value could not be null';
        }
    };

    const falsyValidator = function(value) {
        if (!value) {
            return 'value could not be falsy';
        }
    };

    const errors = validate(data, {
        nullProp: [nullValidator, falsyValidator]
    });

    expect(errors.nullProp).toEqual(['value could not be null', 'value could not be falsy']);
});