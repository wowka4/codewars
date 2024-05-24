/*Your task is to add up letters to one letter.
The function will be given a variable amount of arguments, each one being a letter to add.
Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'*/
// Solution:

function addLetters(...letters) {
    if (letters.length === 0) return 'z';
   const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
   let sum = 0;
   const chars = letters.join('').toLowerCase();
   for (let i = 0; i < chars.length; i += 1) {
       sum += alphabet.indexOf(chars[i]) + 1;
   }
   if (sum > alphabet.length) {
       if (sum % alphabet.length !== 0) {
           return alphabet[sum % alphabet.length - 1];
       } else {
           return 'z';
       }
   }
   return alphabet[sum - 1];
}

console.log(addLetters("n", "j", "k", "r", "e", "t")); // z