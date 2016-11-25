function validateRequired(value) {
    value = value.replace(/\s/g, '');
    if (!value) {
        return 'required field';
    }
}

module.exports = validateRequired;