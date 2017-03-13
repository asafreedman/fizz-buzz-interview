const Promise = require('bluebird');

/*
Perform the modulo operation.  Though, it probably doesn't need to be it's own function.
Just feels more concise to make it one.
 */
const modulo = (number, divisor) => number % divisor == 0;
// Some timeout between 1 and 5
const randomTimeout = () => (Math.floor(Math.random() * 5) + 1) * 1000;

/**
 * Calculates the modulo of the number passed with respect to three and five.
 * The function will call the callback with argument 1 being not null in the
 * case of an error.
 * @param number
 * @param callback
 */
const moduloThreeAndFive = (number, callback) => {
    number = parseInt(number);

    if (isNaN(number) || typeof number !== 'number') {
        callback(`a number was not passed in, ${number} given instead`, null);
        return;
    }

    const timeout = randomTimeout();

    setTimeout(() => {
        callback(null, {
            three: modulo(number, 3),
            five: modulo(number, 5)
        });
    }, timeout);
};


module.exports = {
    moduloThreeAndFive: Promise.promisify(moduloThreeAndFive)
};