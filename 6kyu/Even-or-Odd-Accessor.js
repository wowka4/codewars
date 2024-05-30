/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
The function should also return "Even" or "Odd" when accessing a value at an integer index.
For example:
evenOrOdd(2); //'Even'
evenOrOdd[2]; //'Even'
evenOrOdd(7); //'Odd'
evenOrOdd[7]; //'Odd'*/

function evenOrOdd(n) {
    if (typeof n === 'object') return n[0] % 2 === 0 ? 'Even' : 'Odd';
    return n % 2 === 0 ? 'Even' : 'Odd';
}

console.log(evenOrOdd(4));