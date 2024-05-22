/*DESCRIPTION:
Write a function, which tells us if a given character is a letter or not.*/
// Solution:

function isItLetter(character) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return alphabet.includes(character.toLowerCase());
}

console.log(isItLetter('[')); // false
console.log(isItLetter('Z')); // true

// Regexp

const isItLetter1 = char => /[a-z]/i.test(char);

console.log(isItLetter1('>')); // false
console.log(isItLetter1('F')); // true