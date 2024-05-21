/*DESCRIPTION:
Create a function that returns the CSV representation of a two-dimensional numeric array.
Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]]

output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.*/
// Solution:
function toCsvText(arr) {
    // good luck
    let result = '';
    for (let i = 0; i < arr.length ; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j === arr[i].length - 1) {
                result = `${result}${arr[i][j]}\n`;
            } else {
                result = `${result}${arr[i][j]},`
            }
        }
    }
    return result.slice(0, -1);
}

const arr = [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]];

console.log(toCsvText(arr));