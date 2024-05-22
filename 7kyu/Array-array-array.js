/*Description: You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number.
If neither is a number, return 'Void!'.
Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of
sub arrays should be equal to the score.
For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].*/

function explode(x) {
    let count = 0;
    for (const current of x) {
        if (typeof current === 'number') count++;
    }
    let sum;
    if (count === 2) sum = x[0] + x[1];
    if (count === 0) return 'Void!';
    if (count === 1) {
        if (typeof x[0] === 'number') {
            sum = x[0];
        } else {
            sum = x[1];
        }
    }
    const result = [];
    for (let i = 1; i <= sum; i++) {
        result.push(x);
    }
    return result;
}

console.log(explode([0, '1'])); // []
console.log(explode([1, 2])); // [ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]
