/*You are given an array. Complete the function that returns the number of ALL elements within an array,
 any nested arrays.
Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7*/
// Solution:
function deepCount(a){
    return a.reduce((s, e)=> s + (Array.isArray(e) ? deepCount(e) : 0) ,a.length);
}
console.log(deepCount([[[[[]],27,29]],[[[[]],2,6]],[[21,21,[[]]]]])) // 18

