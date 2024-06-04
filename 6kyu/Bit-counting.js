/*Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary
representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/
// Solution:
const countBits = (num) => {
    const binary = num.toString(2);
    let acc = 0;
    for (const char of binary) {
        if (char === '1') acc++;
    }
    return acc;
}

const countBits1 = (num) => num.toString(2).split('0').join('').length;

console.log(countBits1(1234)); // 5