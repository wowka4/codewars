/*This time no story, no theory. The examples below show you how to write function accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// Solution:

function accum(s) {
   let resultStr = '';
   for (let i = 0; i < s.length; i++) {
       resultStr += s[i].toUpperCase();
       for (let j = 0; j < i; j++) {
           resultStr += s[i].toLowerCase();
       }
       resultStr += '-'
   }
   return resultStr.slice(0, -1);
}

console.log(accum("RqaEzty")); // R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy