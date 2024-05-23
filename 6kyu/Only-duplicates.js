/*Given a string, remove any characters that are unique from the string.
Example:
input: "abccdefee"
output: "cceee"*/

// Slower solution, working time: 0.042417049407958984

function onlyDuplicates(str) {
    let result = '';
    const arr = str.split('');
    let index = 0;
    while (index < arr.length) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (j !== index) {
                if (arr[index] === arr[j]) count++;
            }
        }
        if (count !== 0) result += arr[index];
        index++;
    }
    return result;
}
const str = 'cccdfrggga';

console.log(onlyDuplicates(str));

// Faster solution, working time: 0.027541160583496094
function a(str) {
    return str.split('').filter(e => str.indexOf(e) !== str.lastIndexOf(e)).join('');
}
console.log(a(str));
