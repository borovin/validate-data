const emailValidator = require('../email');

it('should check wrong email', () => {
    const error = emailValidator('wq');

    expect(error).toBe('wrong email');
});

it('should check correct email', () => {
    const error = emailValidator('a@borovin.com');

    expect(error).toBeUndefined();
});