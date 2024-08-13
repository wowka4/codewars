/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items 
without any elements with the same value next to each other and preserving the original order of elements.
For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

function uniqueInOrder(str) {
    const array = [];
    if (str.length === 0) return array;
    let l = 1;
    let r = 0;
    array.push(str[0]);
    while (l < str.length) {
        if (str[l] !== str[r]) {
            array.push(str[l]);
            r = l;
        }
        ++l;
    }
    return array;
}

console.log(uniqueInOrder('AAAABBBBCCDDD'));