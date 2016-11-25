const requiredValidator = require('../required');

it('should check wrong field', () => {
    const error = requiredValidator('');

    expect(error).toBe('required field');
});

it('should check correct field', () => {
    const error = requiredValidator('test');

    expect(error).toBeUndefined();
});