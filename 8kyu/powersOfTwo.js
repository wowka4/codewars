// Description:
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2
// with the exponent ranging from 0 to n ( inclusive ).

// Examples: n = 0  ==> [1]
// n = 1  ==> [1, 2]
// n = 2  ==> [1, 2, 4]

// Solution:

function powersOfTwo(n){
    let power = 0;
    const result = [];
    while (power <= n) {
        result.push(2 ** power++);

    }
    return result;
}

console.log(powersOfTwo(2)); // [1, 2, 4]