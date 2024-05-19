/*
* Description:
* You'll be given a string of characters as an input.
* Complete the function that returns a list of strings: (a) in the reverse order of the original string, and (b) with
*  each successive string starting one character further in from the end of the original string.
*
* Examples:
* '123'   ==>  ['321', '21', '1']
* 'abcde' ==>  ['edcba', 'dcba', 'cba', 'ba', 'a']
*
* Solution:
* */

function solution(str) {
    const newStr = str.split('').reverse().join('');
    const result = [];
    for (let i = 0; i < newStr.length; i++) {
        result.push(newStr.slice(i));
    }

    return result;
}

console.log(solution('abcde')); // [ 'edcba', 'dcba', 'cba', 'ba', 'a' ]
console.log(solution('123')); // [ '321', '21', '1' ]


