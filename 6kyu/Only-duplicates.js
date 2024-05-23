/*Given a string, remove any characters that are unique from the string.
Example:
input: "abccdefee"
output: "cceee"*/

// Slower solution:

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

console.log(onlyDuplicates("abccdefee"));

// Faster solution:
const str = 'cccdfrggga';
console.log(str.split('').filter(e => str.indexOf(e) !== str.lastIndexOf(e)).join(''));
