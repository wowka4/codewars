/*Complete the solution so that it splits the string into pairs of two characters.
 If the string contains an odd number of characters then it should replace the missing 
 second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
 */

function solution(str) {
    if (str.length === 0) return []
    const arr = []
    for (let i = 0; i < str.length; i += 2) {
        arr.push(str.slice(i, i + 2))
    }
    if (arr[arr.length - 1].length === 1) arr[arr.length - 1] += '_'
    return arr
}

function solution1(s) {
  return (s + "_").match(/.{2}/g) || [];
}

console.log(solution1("abcde"));