/*An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.
Example: (Input --> Output
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

function isIsogram(str){
   let strArray = str.toLowerCase().split('');
   return strArray.filter(char => strArray.indexOf(char) === strArray.lastIndexOf(char)).length === str.length;
}

console.log(isIsogram('DermatoOoglyphics')); // false
console.log(isIsogram('Dermatoglyphics')); // true
