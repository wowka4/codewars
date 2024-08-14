/**Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P' */

function findMissingLetter(array)
{
    let flag = false;
    if (array[0] === array[0].toUpperCase()) {
        flag = true;
    }
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    if (flag) {
        for (let i = 0; i < alphabet.length; i++) {
            const temp = alphabet[i].toUpperCase();
            alphabet[i] = temp;
        }
    }
    
    let start = alphabet.indexOf(array[0]);
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== alphabet[start]) {
            return alphabet[start];
        }
        start++;
    }
    return '';
}

console.log(findMissingLetter(['O','Q','R','S']));