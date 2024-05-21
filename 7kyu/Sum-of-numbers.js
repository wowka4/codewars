/*DESCRIPTION:
Given two integers a and b, which can be positive or negative, find the sum of all the integers
 between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
Examples:
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
*/
// Solution:

function getSum(a, b) {
    //Good luck!
    let arr = [a, b];
    arr = arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = arr[0]; i <= arr[1]; i++) {
        sum += i;
    }
    return sum;
}

console.log(getSum(-1, 2));