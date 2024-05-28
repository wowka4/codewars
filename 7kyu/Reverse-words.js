/*Complete the function that accepts a string parameter, and reverses each word in the string.
All spaces in the string should be retained.
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"*/

// Solution:
function reverseWords(str) {
    let arr = str.split(' ');
    const result = [];
    for (const item of arr) {
        result.push(item.split('').reverse().join(''));
    }
    return result.join(' ');
}


console.log(reverseWords("This is an example!")); // sihT si na !elpmaxe
