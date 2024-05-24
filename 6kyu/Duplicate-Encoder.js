/*The goal of this exercise is to convert a string to a new string where each character in the new string is
 "(" if that character appears only once in the original string, or ")"
  if that character appears more than once in the original string.
  Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" */

function duplicateEncode(word){
    const lowerCaseWord = word.toLowerCase();
    let result = '';
    for (const e of lowerCaseWord) {
        if (lowerCaseWord.indexOf(e) === lowerCaseWord.lastIndexOf(e)) result += '(';
        if (lowerCaseWord.indexOf(e) !== lowerCaseWord.lastIndexOf(e)) result += ')';
    }
    return result;
}



console.log(duplicateEncode('recede')); // ()()()
console.log(duplicateEncode("Supralapsarian")); // ")()))()))))()("
