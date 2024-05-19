/*
DESCRIPTION:
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.

Examples:
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

function solution (pin) {
    const nums = [1,2,3,4,5,6,7,8,9,0];
    for (const num of pin) {
        if (!nums.includes(Number(num))) return false;
        if (num === '\n') return false;
    }
    return pin.length === 4 || pin.length === 6;
}

console.log(solution('1234')); // true
console.log(solution('123\n')); // false
console.log(solution('12345')); // false
console.log(solution('123456')); // true
console.log(solution('f234')); // false
console.log(solution('-4564')); // false
console.log(solution('.5432')); // false