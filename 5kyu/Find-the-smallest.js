/*You have a positive number n consisting of digits. You can do at most one operation:
Choosing the index of a digit in the number, remove this digit at that index and insert it back to another or at
the same place in the number in order to find the smallest number you can get.
Task:
Return an array or a tuple or a string depending on the language (see "Sample Tests") with

the smallest number you got
the index i of the digit d you took, i as small as possible
the index j (as small as possible) where you insert this digit d to have the smallest number.
Examples:
smallest(261235) --> [126235, 2, 0] or (126235, 2, 0) or "126235, 2, 0"*/

// Solution:

function smallest(n) {
    const arr = String(n).split('').map((n) => Number(n));
    const smallest = Math.min(...arr);
    const index = arr.indexOf(smallest);
    arr.splice(index, 1);
    arr.unshift(smallest);
    const num = Number(arr.join(''));
    return [num, index, 0];
}

console.log(smallest(209917));

function smallest1(n) {
    const arr = String(n).split('').map((n) => Number(n));
    let index;
    let value = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < value) {
            index = i;
            value = arr[i];
        }
    }
    const newArr = [];
    newArr.push(value);
    for (let i = 0; i < arr.length; i++) {
        if (i !== index) {
            newArr.push(arr[i]);
        }
    }

    const str = newArr.join('');
    const result = Number(str);

    return [result, index, 0];
}

console.log(!!5);
let a = 5;
let b = Array.of(a);
const array = [12,34,43];
console.log(array[-1]);