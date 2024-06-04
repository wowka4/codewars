/*Complete the method/function so that it converts dash/underscore delimited words into camel casing.
The first word within the output should be capitalized only if the original word was capitalized
(known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"*/
// Solution:
function toCamelCase(str) {
    const str1 = str.replace(/[_-]/gi, ' ');
    let result = '';
    let index = 0;
   while (index < str1.length) {
       if (str1[index] === ' ') {
          let char = str1[index + 1];
           result += char.toUpperCase();
           index += 2
       } else {
           result += str1[index];
           index++
       }
   }
    return result
}

console.log(toCamelCase("the_stealth-warrior")); // theStealthWarrior
