function validateEmail(value) {
    let reg;

    reg = new RegExp('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$');

    if (value && !reg.test(value)) {
        return 'wrong email';
    }
}

module.exports = validateEmail;