/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n;
    return function() {
        return count++;
    };
};

/**
 * Example usage:
 * const counter = createCounter(10);
 * console.log(counter()); // 10
 * console.log(counter()); // 11
 * console.log(counter()); // 12
 * 
 * const counter2 = createCounter(-2);
 * console.log(counter2()); // -2
 * console.log(counter2()); // -1
 * console.log(counter2()); // 0
 * console.log(counter2()); // 1
 * console.log(counter2()); // 2
 */







