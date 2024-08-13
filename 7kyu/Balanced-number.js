/*A balanced number is a number where the sum of digits to the left of the middle digit(s) and
the sum of digits to the right of the middle digit(s) are equal.
If the number has an odd number of digits, then there is only one middle digit.
(For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits.
(For example, the middle digits of 1301 are 3 and 0.)
The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023
 is a balanced number because the left sum and right sum are both 5.
 Examples:
 7 ==> return "Balanced"
 295591 ==> return "Not Balanced"
*/

// Solution

function solution(number) {
    const str = number.toString();
    const len = str.length;
    if (len === 1) return "Balanced";
    const middle = Math.floor(len / 2);
    if (len % 2 === 0) {
        let left = 0;
        for (let i = 0; i < middle - 1; i++) {
            left += Number(str[i]);
        }
        let right = 0;
        for (let i = middle + 1; i < len; i++) {
            right += Number(str[i]);
        }
        if (left === right) return "Balanced";
    } else {
        let left = 0;
        for (let i = 0; i < middle; i++) {
            left += Number(str[i]);
        }
        let right = 0;
        for (let i = middle + 1; i < len; i++) {
            right += Number(str[i]);
        }
        if (left === right) return "Balanced";
    }
    return "Not Balanced"
}
const i = 2463242;
 console.log(solution(i));

